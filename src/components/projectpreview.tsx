'use client'

import '../styles/projectpreview.css';
import React, { useState, useEffect } from 'react';

function Preview({data}:any) {
  if (!data) return
  var projectUrl = "/project?project=" + data._id
  var iPath = data.imagePath
  var imageName = iPath.substring(iPath.lastIndexOf("/") + 1)
  return (
    <>
      <div className="preview-padding" />
        <div className="project-preview">
          <div className="preview-title">
            <div className="preview-title-text">
		          <div className="project-title">
                <a href={projectUrl}>{data.title}</a>
              </div>
		          <div className="project-date">{data.date}</div>
            </div>
            <div className="preview-image">
              <img src={data.imagePath} alt={imageName} />
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
        '/api', {
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
          proto = proto.slice().reverse()
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
