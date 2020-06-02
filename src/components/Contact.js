import React, { useState } from 'react';

export default function Contact() {
  const [fields, setFields] = useState({
    email: '',
    subject: '',
    message: '',
  })
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleFieldChange = ({ target }) => setFields(s => ({ ...s, [target.name]: target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    const endpoint = 'https://dywmtver6a.execute-api.us-west-2.amazonaws.com/default/ContactFormLambda';
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(fields)
    })
      .then(() => {
        setSuccess(true);
        setFields({
          email: '',
          subject: '',
          message: '',
        })
      })
      .catch(err => {
        console.log(err);
        setError(true)
      })
  }

  return (

    <form onSubmit={handleSubmit}>
      <div className="row uniform 50%">
        <div className="6u 12u$(xsmall)">
          <input
            type="text"
            value={fields.subject}
            onChange={handleFieldChange}
            name="subject"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <div className="6u 12u$(xsmall)">
          <input
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="12u">
          <textarea
            name="message"
            id="message"
            value={fields.message}
            onChange={handleFieldChange}
            placeholder="Message"
            rows="4"
          ></textarea>
        </div>
      </div>
      <ul className="actions" style={{ marginTop: 30 }}>
        <li>
          <input type="submit" value="Send Message" />
        </li>
        {success ? <li style={{ color: '#49bf9d' }}>Success!</li> : null}
        {error ? <li style={{ color: 'red' }}>Message send failed, please try again.</li> : null}
      </ul>
    </form>
  )
}