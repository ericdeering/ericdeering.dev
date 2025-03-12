import '../styles/projectpreview.css';
import testImage from '../images/project-images/test.jpeg'

export function ProjectPreview() {
  return (
    <div className="project-preview">
      <div className="preview-title">
        <div className="preview-title-text">
		      <div className="project-title">Some Title Very Long Title That will go off the page</div>
		      <div className="project-date">xx/xx/xxxx</div>
        </div>
        <div className="preview-image">
          <img src={testImage} alt="test image" />
        </div>
      </div>
      <div className="preview-summary">
	      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
  );
}
