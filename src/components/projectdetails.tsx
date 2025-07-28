'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import "../styles/projectdetails.css";

function CreateDiv({data}:any) {
  console.log(data)
  if (!data) return
  return (
    <div>
      <div className="middle">
        <div id="title">
          {data.title}
        </div>
        <div id="project-image">
          <img src={data.imagePath} alt="test image" />
        </div>
      </div>
        <div id="project-summary">
          {data.summary}
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
          <Suspense fallback={<div> Loading... </div>}>
            {project}
          </Suspense>
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
