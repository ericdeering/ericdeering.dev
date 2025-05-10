import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("testing", "./routes/testing.tsx"),
  route("tictactoe", "./routes/tictactoe.tsx"),
  route("resume", "./routes/resume.tsx"),
  route("project", "./routes/project.tsx"),
] satisfies RouteConfig;
