import { DatabaseHandler } from '../../../../lib/database'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  var data = await DatabaseHandler.getProject(id);
  console.log(id)
  return Response.json(data);
}
