import { profile } from "../data.js";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <p className="hero-role">{profile.role}</p>
        <h1 className="hero-name">
          Hi, I'm
          <br />
          {profile.name}.
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View my projects</a>
          <a href="#contact" className="btn btn-outline">Contact me</a>
        </div>
      </div>
    </section>
  );
}
