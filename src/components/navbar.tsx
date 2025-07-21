import '../styles/navbar.css'
import '../styles/general.css'

export function NavBar() {
  return (
    <div className="navbar">
      <a href="https://www.ericdeering.dev">Home</a>
      <a href="https://www.ericdeering.dev/resume">Resume</a>
      <a href="https://www.linkedin.com/in/eric-deering-69102918b/">LinkedIn</a>
      <a href="https://github.com/ericdeering">GitHub</a>
      {/* 
      <a href="https://www.ericdeering.dev/projects">Projects</a>
      <a href="https://www.ericdeering.dev/downloads">Downloads</a>
      */}
    </div>
  );
}
