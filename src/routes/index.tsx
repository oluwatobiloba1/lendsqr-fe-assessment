import { createFileRoute } from "@tanstack/react-router";
import LoginView from "../modules/auth/view/Login";

export const Route = createFileRoute("/")({
  component: LoginView,
});
