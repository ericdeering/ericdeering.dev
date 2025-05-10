import '../styles/projectpreview.css';
import { useState, useEffect } from 'react';

function Preview({data}:any) {
  if (!data) return
  return (
    <>
      <div className="preview-padding" />
        <div className="project-preview">
          <div className="preview-title">
            <div className="preview-title-text">
		          <div className="project-title">{data.title}</div>
		          <div className="project-date">{data.date}</div>
            </div>
            <div className="preview-image">
              <img src={data.imagePath} alt="test image" />
            </div>
          </div>
          <div className="preview-summary">
            {data.summary}
          </div>
        </div>
      <div className="preview-padding" />
    </>
  )
}

export function ProjectPreview() {

  const [size, setSize]:any = useState(0)

  function Previews() {
    const [previews, setPreviews]:any = useState([])

    useEffect(() => {
      fetch(
        'http://localhost:8000/api/projects/', {
          method: 'GET',
        }
      )
        .then((res) => res.json())
        .then((data) => {
          let proto = []
          for (let r of data) {
            proto.push(<Preview key={r._id} data={r} />)
          }
          setSize[proto.length]
          setPreviews(proto)
      })
    }, [])

    return (
      <>
        <div>
          {previews}
        </div>
      </>
    )
  }

  return (
    <>
    <div className="scrollable-container">  
      <div className="left-preview-area" style={{height: size * 200}} />
      <div className="right-preview-area" />
      <div className="center-preview-area">
        <Previews />
      </div>
    </div>
    </>
  );
}
