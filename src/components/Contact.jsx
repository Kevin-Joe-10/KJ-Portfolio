import { useState } from "react";
import { profile } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the user's email app with the message filled in (no backend needed)
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", message: "" });
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <div>
          <h2>Contact</h2>
          <p>Have a project or an opportunity in mind? Send me a message.</p>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            {"  |  "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {"  |  "}
            <a href={profile.vercel} target="_blank" rel="noreferrer">Vercel</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />

          <button type="submit" className="btn btn-primary">Send message</button>
          {sent && <p className="sent">Opening your email app to send the message.</p>}
        </form>
      </div>
    </section>
  );
}
