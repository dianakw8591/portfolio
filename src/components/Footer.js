import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        {/* <li>
          <a href="#" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li> */}
        <li>
          <a href="https://github.com/dianakw8591" target="_blank" rel="noopener noreferrer" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/diana-wendt/" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://dev.to/dianakw8591" target="_blank" rel="noopener noreferrer" className="icon fa-pencil-square">
            <span className="label">Email</span>
          </a>
        </li>
        {/* <li>
        <i class="fab fa-dev"></i>
        </li> */}
      </ul>
      {/* <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul> */}
    </div>
  </div>
)

export default Footer
