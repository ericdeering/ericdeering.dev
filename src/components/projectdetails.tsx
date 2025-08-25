'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import "../styles/projectdetails.css";

function GenerateImage(ImagePath: any): any {
  if (ImagePath.ImagePath == undefined) {
    return
  }
  return (
    <div>
      <img src={ImagePath.ImagePath} alt="test" className="supporting-image" />
    </div>
  )
}

function MakeProjectBody(body: any) {
  let data = body.summary
  const regexLink = /\[\[([^\]\]]*)\]\]/g
  const regexTitle = /.*\/(.*)/g
  const paths = [...data.matchAll(regexLink)]
  let images: any[] = []
  paths.forEach(path => {
    data = data.replace(path[0], ", ")
    images.push(path[1])
  });
  let text = data.split(",")
  let counter = 0
  let bodyDict = []

  while (counter < images.length || counter < text.length) {
    let entry: any = {}
    entry['id'] = counter
    if (text.length - 1 >= counter) {
      entry['text'] = text[counter]
    }
    if (images.length - 1 >= counter) {
      let imageTitle = [...String(images[counter]).matchAll(regexTitle)][0][1]
      entry['image'] = images[counter]    
      entry['imageTitle'] = imageTitle
    }
    bodyDict.push(entry)
    counter += 1
  }

  const returnBody = bodyDict.map(paragraph => 
    <div key={paragraph.id}>
      {paragraph.text}
      <GenerateImage ImagePath={paragraph.image} />
    </div>
  )
  return (
    <div>
      {returnBody}
    </div>
  )
}

function CreateDiv({data}:any) {
  if (!data) return
  return (
    <div>
      <div id="title">
        {data.title}
      </div>
      <div id="date">
        {data.date}
      </div>
      <div className="middle">
        <div id="project-image">
          <img src={data.imagePath} alt="test image" />
        </div>
      </div>
        <div id="project-summary">
          <MakeProjectBody summary={data.summary} />
        </div>
    </div>
  )
}

export function ProjectDetails() {
  const searchParams = useSearchParams()
  var projectId = searchParams.get('project')

  function ProjectSummary() {
    const [ project, setProject ]:any = useState([])

    useEffect(() => {
      var url = "/api/projects/" + projectId
      fetch(
      url, {
          method: 'GET',
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setProject(<CreateDiv data={data} />)
      })
    }, [])

    return (
      <div>
        <div>
          {project}
        </div>
      </div>
    )
  }

  return (
    <div>
      <ProjectSummary />
    </div>
  );
}
