import Database from '../../lib/database'

export async function GET(request: Request) {
  var projectData = await Database.getProjects();
  return Response.json(projectData)
}
