import { NavBar } from "../../components/navbar";
import { ProjectDetails } from "../../components/projectdetails";
import "../../styles/general.css";

function Project() {
    return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="projectDetails">
        <ProjectDetails />
      </div>
    </>
  );
}

export default Project

