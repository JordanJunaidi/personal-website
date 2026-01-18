import React, { useState } from "react";
import FadeInSection from "./FadeInSection";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "379cabf9-8c2d-4b7c-b388-4d35bc78eebe", // Replace with your Web3Forms key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-intro">
            I'm currently open to internship and full-time opportunities. 
            Feel free to reach out!
          </p>
        </FadeInSection>

        <div className="contact-content">
          <FadeInSection>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:jordanrjunaidi@gmail.com" className="contact-value">
                  jordanrjunaidi@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:916-385-8235" className="contact-value">
                  (916) 385-8235
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/jordan-junaidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  linkedin.com/in/jordan-junaidi
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">GitHub</span>
                <a
                  href="https://github.com/JordanJunaidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  github.com/JordanJunaidi
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="form-status success">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="form-status error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
