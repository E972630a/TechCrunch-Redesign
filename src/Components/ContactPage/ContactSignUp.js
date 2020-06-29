import React from 'react';
import Modal from "../Modal/Modal";
import ContactSection from "../ContactSection"
import '../ContactPage/contact.css'

class ContactSignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowing: false,
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };
  render() {
    return (
      <div className="background">
        <div className="contact__forms">
        <form className="signup">
          <h1 className="log-in">Log In</h1>
          <label>
            UserName/Email:
                  <input type="text" name="name" />
          </label>
          <label>
            Password:
                  <input type="text" name="email" />
          </label>

          <input type="submit" value="Log In" />

        </form>
        </div>
        {this.state.isShowing ? (
          <div onClick={this.closeModalHandler} className="back-drop"></div>
        ) : null}

        <button className="open-modal-btn" onClick={this.openModalHandler}>
          Create Account
                          </button>
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
        >
          PLEASE FILL OUT ALL NECESSARY INFORMATION TO CREATE AN ACCOUNT
                <label>
            Full Name:
                  <input type="text" name="name" />
          </label>
          <label>
            Email:
                  <input type="email" name="name" />
          </label>
          <label>
            UserName:
                  <input type="text" name="name" />
          </label>
          <label>
            Password:
                  <input type="text" name="text" />
          </label>
        </Modal>
        <ContactSection />
      </div>
    );

  }
}

export default ContactSignUp;