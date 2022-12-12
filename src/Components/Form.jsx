import React, { useEffect, useState } from "react";
import Footter from "./Footter";
import Header from "./Header/Header";
import "../asset/css/Form.css";

export default function ProductPages() {
  const initialValues = { username: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (!values.username.length >= 3) {
      errors.username = "Username must be at least 3 characters";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!Number(values.phone.length >= 6)) {
      errors.phone = "Phone must be at least 6 characters";
    }
    return errors;
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="f-container">
        <div className="wrapper">
          <h3>Get In Touch</h3>
          <span>
            We collaborate with ambitious brands and people; we'd love to build
            something great together.
          </span>
          <p>
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <div className="form">
                <label>Name *</label> <br></br>
                <input
                  type="text"
                  name="username"
                  maxLength={20}
                  id="form-text"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <p>{formErrors.username}</p>
              </div>

              <div className="form">
                <label>Email *</label>
                <br></br>
                <input
                  type="email"
                  name="email"
                  id="form-text"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p>{formErrors.email}</p>
              </div>

              <div className="form">
                <label>Phone Number</label>
                <br></br>
                <input
                  type="number"
                  name="phone"
                  id="form-text"
                  placeholder="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
                <p>{formErrors.phone}</p>
              </div>
            </div>
            <div className="form-subject">
              <label>Subject *</label>
              <br></br>
              <input type="text" id="form-text" />
            </div>
            <div className="form-message">
              <label>Message *</label>
              <br></br>
              <textarea></textarea>
            </div>
            <button className="btn-submit"> Submit</button>
          </form>
        </div>
      </div>

      <div>
        <Footter />
      </div>
    </>
  );
}
