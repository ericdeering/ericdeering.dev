import { AboutMeBanner } from "../components/aboutmebanner";
import { NavBar } from "../components/navbar";
import { ProjectPreview } from "../components/projectpreview";

import "../styles/home.css"
import "../styles/general.css"




export default function Home() {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="middle">
        <div className="about-me">
          <AboutMeBanner />
        </div>
        <div className="project-previews">
          <ProjectPreview />
        </div>
      </div>
    </>
  );
}
