import React, { useState } from "react";
import "./contact.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [wasclicked, setwasclicked] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error messages
    setErrors({});

    // Validate form inputs
    const validationErrors = {};
    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    }
    if (message.trim() === "") {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://cooking-site.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );
      if (response.ok) {
        setSuccessMessage("sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const responseData = await response.json();
        setErrors({ server: responseData.message });
      }
    } catch (error) {
      console.error(error);
      setErrors({ server: "An error occurred while sending the email" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container section-lg "
      id="contact-form"
    >
      <div className="form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        {errors.server && (
          <span className="error">
            {errors.server} if this presist direct email me my
            email:hardikmetaliya6121@gmail.com{" "}
          </span>
        )}
        {successMessage && <div className="success">{successMessage}</div>}
        <button
          type="submit"
          onClick={() => setwasclicked(true)}
          className={wasclicked ? "clicked" : "none"}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
