import type { Route } from "./+types/testing";
import { ProjectPreview } from "../playground/projectpreview"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Testing Page" },
    { name: "description", content: "Welcome to the testing page!" },
  ];
}

export default function Testing() {
  return <ProjectPreview />;
}
