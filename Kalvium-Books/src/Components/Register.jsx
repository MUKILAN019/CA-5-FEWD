import { useState } from "react";
import "../index.css"

export default function Register() {
  const [input, setInput] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handle(e) {
    e.preventDefault();
    setFormErrors(validate(input));
    setIsSubmit(true);
  }

  function validate(value) {
    let errors = {};

    if (!value.UserName || value.UserName.length > 30 || value.UserName.length < 4) {
      errors.UserName = "User Name should be between 4 and 30 characters long";
    }
    if (!value.UserEmail || !validateEmail(value.UserEmail)) {
      errors.UserEmail = "Please enter a valid email address";
    }
    if (!value.UserPass || !validatePassword(value.UserPass)) {
      errors.UserPass = "Password should be least 8 characters and at least one special character";
    }
    if (value.UserRepPass !== value.UserPass) {
      errors.UserRepPass = "Passwords do not match";
    }
    else{
        console.log(input)
    }

    return errors;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePassword(password) {
    return password.length >= 10 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }

  function myValue(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div>
      <div className="reg1">
        <div className="reg">
          <h1>Create Account</h1>
          <form onSubmit={handle}>
            <label>
              <input type="text" placeholder="Your Name" name="UserName" onChange={myValue} />
              <br/>
              {isSubmit && formErrors.UserName && <span className="error">{formErrors.UserName}</span>}
            </label>
            <label>
              <input type="email" placeholder="Your Email" name="UserEmail" onChange={myValue} />
              <br/>
              {isSubmit && formErrors.UserEmail && <span className="error">{formErrors.UserEmail}</span>}
            </label>
            <label>
              <input type="password" placeholder="Password" name="UserPass" onChange={myValue} />
              <br/>
              {isSubmit && formErrors.UserPass && <span className="error">{formErrors.UserPass}</span>}
            </label>
            <label>
              <input type="password" placeholder="Repeat your password" name="UserRepPass" onChange={myValue} />
              <br/>
              {isSubmit && formErrors.UserRepPass && <span className="error">{formErrors.UserRepPass}</span>}
            </label>
            <div className="bt">
              <button className="btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
