import { DatabaseHandler } from '../../lib/database'

export async function GET(request: Request) {
  var projectData = await DatabaseHandler.getProjects();
  return Response.json(projectData)
}
