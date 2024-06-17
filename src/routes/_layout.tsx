import { createFileRoute } from "@tanstack/react-router";
import DashBoardLayout from "../modules/dashboard/components/DashBoardLayout";
import { Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/_layout")({
  component: () => (
    <>
      <DashBoardLayout>
        <Outlet />
      </DashBoardLayout>
    </>
  ),
});
