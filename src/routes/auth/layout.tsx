import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 w-full">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;