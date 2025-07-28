import { NavBar } from "../../components/navbar";
import { ProjectDetails } from "../../components/projectdetails";
import { Suspense } from 'react';
import "../../styles/general.css";

function Project() {
    return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="projectDetails">
        <Suspense fallback={<div> Loading... </div>}>
          <ProjectDetails />
        </Suspense>
      </div>
    </>
  );
}

export default Project

