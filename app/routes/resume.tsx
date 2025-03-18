import type { Route } from "./+types/home";
import { NavBar } from "../assets/navbar";
import "../styles/resume.css";
import "../styles/general.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eric's Resume" },
    { name: "description", content: "Eric's Resume" },
  ];
}

export default function Resume() {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <img className="resume" src="../images/resumeImage.png" alt="Eric's Resume" />
      <div className="spacer" />
      <div className="download">
		    <a href="../downloads/Eric Deering Resume.pdf" download="../downloads/Eric Deering Resume.pdf">
          <button>Download</button>
        </a>
      </div>
    </>
  );
}
