import { createFileRoute } from "@tanstack/react-router";
import UsersList from "../../../modules/users/views/UsersList";

export const Route = createFileRoute("/_layout/users/")({
  component: UsersList,
});
