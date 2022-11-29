import githubIcon from "../assets/github_icon.png";
import gmailIcon from "../assets/gmail_icon.jpg";
import linkedinIcon from "../assets/linkedin_icon.png";
import phoneIcon from "../assets/phone_icon.png";

const PHONE_ID = "phone-number";
const EMAIL_ID = "email-address";

function Name() {
  return (
    <div id='header-name'>
      Alexander F. Sung
    </div>
  );
}

function InfoBar() {
  function editPhoneNumber(e) {
    e.preventDefault();
    var phoneNumber = prompt("Enter phone number:");
    if (phoneNumber) {
      document.getElementById(PHONE_ID).textContent = phoneNumber;
    }
  }

  function editEmailAddress(e) {
    e.preventDefault();
    var emailAddress = prompt("Enter email address:");
    if (emailAddress) {
      document.getElementById(EMAIL_ID).textContent = emailAddress;
    }
  }

  return (
    <div id='info-bar'>
      <span>
        <img
          className="info-icon"
          onClick={editPhoneNumber}
          src={phoneIcon}
          alt="phone icon"
        />
        <span>&nbsp;</span>
        <span id={PHONE_ID}>
          xxx-xxx-xxxx
        </span>
      </span>

      <span>&nbsp;|&nbsp;</span>

      <span>
        <img
          className="info-icon"
          onClick={editEmailAddress}
          src={gmailIcon}
          alt="Gmail icon"
        />
        <span>&nbsp;</span>
        <span id={EMAIL_ID}>
          xxxxxxxxxx@gmail.com
        </span>
      </span>

      <span>&nbsp;|&nbsp;</span>

      <span>
        <a href="https://www.linkedin.com/in/sungalexander">
          <img
            className="info-icon"
            src={linkedinIcon}
            alt="Attribution: Created by riajulislam at https://www.flaticon.com/free-icons/linkedin"
            style={{width: "0.90em", height: "auto"}}
          />
        </a>
        <span>&nbsp;</span>
        <a href="https://www.linkedin.com/in/sungalexander"
          className="no-style-link"
        >
          linkedin.com/in/sungalexander
        </a>
      </span>

      <span>&nbsp;|&nbsp;</span>

      <span>
        <a href="https://www.github.com/asungy">
          <img
            className="info-icon"
            src={githubIcon}
            alt="Attribution: Created by Dave Gandy at https://www.flaticon.com/free-icons/github-sign"
            style={{width: "0.90em", height: "auto"}}
          />
        </a>
        <span>&nbsp;</span>
        <a href="https://www.github.com/asungy"
          className="no-style-link"
        >
          github.com/asungy
        </a>
      </span>

    </div>
  );
}

function Header() {
  return (
    <div className='header'>
      <Name />
      <InfoBar />
    </div>
  );
}

export default Header;
