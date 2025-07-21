import { NavBar } from "../../components/navbar";
import "../../styles/resume.css";
import "../../styles/general.css";

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
