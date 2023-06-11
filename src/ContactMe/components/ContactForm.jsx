import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send(
      "service_onpbx5g",
      "template_30jjxgo",
      {
        from_name: formValues.name,
        to_name: "Mostafa Reda",
        message: formValues.message,
        reply_to: formValues.email
      },
      "iXhIRtN6Ukp2A8Huv"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setFormValues({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        value={formValues.message}
        onChange={handleChange}
        required
      ></textarea>

        <button id='form-button'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Send
        </button>
    </form>
  );
};

export default ContactForm;
