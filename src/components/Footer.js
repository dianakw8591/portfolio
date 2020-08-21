import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://github.com/dianakw8591" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-github" title="Diana's Github Profile"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/diana-wendt/" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-linkedin" title="Diana's LinkedIn Profile"></i>
          </a>
        </li>
        <li>
          <a href="https://dev.to/dianakw8591" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-dev" title="Diana's DEV Profile"></i>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>Design from &copy; Gatsby Starter Strata <a href="http://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a></li>
        <li>
        Favicon by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
