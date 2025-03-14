import '../styles/aboutmebanner.css'


export function AboutMeBanner() {
  return (
    <div className="about-me-banner">
      <div id="myPicture">
      <img src={"./images/project-images/me.png"} alt="Picture of Eric Deering" />
      </div>
      <div id="myName">Eric Deering</div>
      <div id="interests"> Software Developer | Tech Enthusiast | HomeLab | Problem Solver | C++ | Java | Python </div>
    </div>
  );
}
