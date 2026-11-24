import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.group} className="skill-group">
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
