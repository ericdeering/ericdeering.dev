import type { Route } from "./+types/tictactoe";
import Default from "../playground/tictactoe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tic-Tac-Toe" },
    { name: "description", content: "A tic-tac-toe tutorial I followed" },
  ];
}

export default function tictactoe() {
  return <Default />;
}
