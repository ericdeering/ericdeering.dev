import type { Route } from "./+types/home";
import { NavBar } from "../assets/navbar";
import { ProjectPreview } from "../assets/projectpreview";
import { AboutMeBanner } from "../assets/aboutmebanner";
import "../styles/home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ericdeering.dev" },
    { name: "description", content: "Welcome to ericdeering.dev!" },
  ];
}

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
