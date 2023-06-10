import React from 'react';

function ContactBox() {

    return(
        <div className="contact-box">
        <h2>Get in touch</h2>
        <form>
          <div className="user-box">
            <input type="text" name required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name required />
            <label>Password</label>
          </div>
          {/* <a>
            <span />
            <span />
            <span />
            <span />
            Submit
          </a> */}
        </form>
      </div>
    );


}

export default ContactBox;