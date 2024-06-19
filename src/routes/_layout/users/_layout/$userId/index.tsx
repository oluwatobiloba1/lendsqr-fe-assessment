import { createFileRoute } from "@tanstack/react-router";
import UserDetails from "../../../../../modules/users/views/UserDetails";

let params: string;
export const Route = createFileRoute("/_layout/users/_layout/$userId/")({
  notFoundComponent: () => (
    <>
      <div>
        <h1>Not Found at all!</h1>
      </div>
    </>
  ),
  beforeLoad: (ctx) => {
    params = ctx.params.userId;
  },
  component: () => (
    <>
      <UserDetails params={{ userId: params }} />
    </>
  ),
});
