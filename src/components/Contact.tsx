import React, { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "379cabf9-8c2d-4b7c-b388-4d35bc78eebe"; // <- paste yours

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg(null);

    try {
      // basic bot trap
      if (formData.website) {
        setStatus("ok");
        setLoading(false);
        return;
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Form Submission - ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Jordan's Website",
          from_email: "jorsan.jordan@gmail.com",
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to send");
      }

      setStatus("ok");
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out if you'd like to collaborate or just say
              hello.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> jordanrjunaidi@gmail.com
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/JordanJunaidi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jordan-junaidi/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "ok" && (
              <p style={{ marginTop: 12 }}>Thanks! Your message was sent.</p>
            )}
            {status === "error" && (
              <p style={{ marginTop: 12, color: "crimson" }}>
                Sorry, something went wrong. {errorMsg ? `(${errorMsg})` : ""}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
