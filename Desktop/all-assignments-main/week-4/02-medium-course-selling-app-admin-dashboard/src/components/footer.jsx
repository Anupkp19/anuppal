import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
    <footer>
    <ul>
      <li>
              <a href="mailto:<EMAIL>">Contact</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/michael-m-barton/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com">GitHub</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCU-999999-9999-9999-9999-999999999999">Youtube</a>
            </li>
    </ul>
    <span className="copy"> For any queries please message at </span>
    <br></br>
    <h4 className="copy">xyz@gmail.com</h4>
    <br></br>
      <p className="copy">Copyright ⓒ {year}</p>
    </footer>
    </div>
  );
}

export default Footer;
