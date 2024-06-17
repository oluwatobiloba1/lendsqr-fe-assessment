import { createFileRoute } from "@tanstack/react-router";

let params: string;
export const Route = createFileRoute("/_layout/users/$userId")({
  beforeLoad: (ctx) => {
    params = ctx.params.userId;
  },
  component: () => <div>Hello /_layout/users/{params}</div>,
});
