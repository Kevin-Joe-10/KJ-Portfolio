import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React.</p>
      </div>
    </footer>
  );
}
