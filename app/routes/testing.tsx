import type { Route } from "./+types/testing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Testing Page" },
    { name: "description", content: "Welcome to the testing page!" },
  ];
}

export default function Testing() {
  return (
    <>
      You found this page! This is just for testing. :)
    </>
  )
}
