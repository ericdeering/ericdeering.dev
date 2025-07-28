import { DatabaseHandler } from '../../../../lib/database'
import { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  var data = await DatabaseHandler.getProject(id);
  return Response.json(data);
}
