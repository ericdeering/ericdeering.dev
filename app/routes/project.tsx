import type { Route } from "./+types/project";
import { NavBar } from "../assets/navbar";
import { ProjectDetails } from "../assets/projectdetails";
import "../styles/general.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project Page" },
    { name: "description", content: "Project Page" },
  ];
}

function Project() {
    return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="middle">
        <ProjectDetails />
      </div>
    </>
  );
}

export default Project
