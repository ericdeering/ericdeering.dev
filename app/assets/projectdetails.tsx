import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router'
import "../styles/projectdetails.css";

function CreateDiv({data}:any) {
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
  const [ searchParams, setSearchParams ] = useSearchParams()
  var projectId = searchParams.get("project")

  function ProjectSummary() {
    const [ project, setProject ]:any = useState([])

    useEffect(() => {
      var url = "http://localhost:8000/api/projects/" + projectId
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
