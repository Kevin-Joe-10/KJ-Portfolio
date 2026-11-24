import { profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <h2>About me</h2>
        <p className="about-text">{profile.about}</p>
      </div>
    </section>
  );
}
