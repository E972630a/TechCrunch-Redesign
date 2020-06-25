import React from 'react';

class ContactSignUp extends React.Component {
    render() {
        return (
            <div>
            <div className = "signup">
                    <h1>Login</h1>
                    <label>UserName/Email:<input type="text" name="name" /></label>
                    <label>Password:<input type="text" name="email" /></label>

                    <input type="submit" value="Log In" />
                    <input type="submit" value="Create Account" />

                </div>
            <form>
                <div className = "form">

                <h1>Contact US</h1>
                <label>Name:<input type="text" name="name" /></label>
                <label>Email:<input type="email" name="email" /></label>
                <textarea value="" />
                
                <input type="submit" value="Submit" />
                </div>
            </form>
            </div>
        )
    }
}

export default ContactSignUp;