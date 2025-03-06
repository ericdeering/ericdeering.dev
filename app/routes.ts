import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("testing", "./routes/testing.tsx"),
  route("tictactoe", "./routes/tictactoe.tsx"),
] satisfies RouteConfig;
