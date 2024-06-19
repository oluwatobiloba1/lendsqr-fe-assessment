import { createFileRoute } from "@tanstack/react-router";
import UserDetails from "../../../../../modules/users/views/UserDetails";

export const Route = createFileRoute(
  "/_layout/users/_layout/$userId/documents"
)({
  component: () => (
    <>
      <UserDetails />
    </>
  ),
});
