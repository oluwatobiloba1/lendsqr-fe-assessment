import { createFileRoute, Outlet } from "@tanstack/react-router";
import UserDetailsLayout from "../../../modules/users/components/UserDetailsLayout";

let params: any;
export const Route = createFileRoute("/_layout/users/_layout")({
  beforeLoad: (ctx) => {
    params = ctx.params;
  },
  component: () => (
    <UserDetailsLayout params={params}>
      <Outlet />
    </UserDetailsLayout>
  ),
});
