import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./root";
import { DashboardPage } from "./dashboard/dashboard.page";
import { About } from "./about/about.page";
import Login from "./auth/login/login.page";
import AuthLayout from "./auth/layout";
import { DashboardBreadcrumb } from "./dashboard/breadcrum";
import EmployeesPage from "./employees/employees.page";
import { EmployeesBreadcrumb } from "./employees/breadcrum";
import { ClientsBreadcrumb } from "./clients/breadcrum";
import ClientsPage from "./clients/clients.page";
import BillingPage from "./billing/billing.page";
import { BillingBreadcrumb } from "./billing/breadcrum";
import SchedulePage from "./schedule/schedule.page";
import CalendarPage from "./schedule/calendar/calendar.page";
import { CalendarBreadcrumb } from "./schedule/calendar/breadcrum";
import { ScheduleBreadcrumb } from "./schedule/breadcrum";
import NotFound from "./not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        handle: {
          crumb: <DashboardBreadcrumb />,
        },
      },
      {
        path: "employees",
        element: <EmployeesPage />,
        handle: {
          crumb: <EmployeesBreadcrumb />,
        },
      },
      {
        path: "clients",
        element: <ClientsPage />,
        handle: {
          crumb: <ClientsBreadcrumb />,
        },
      },
      {
        path: "billing",
        element: <BillingPage />,
        handle: {
          crumb: <BillingBreadcrumb />,
        },
      },
      {
        path: "schedule",
        element: <SchedulePage />,
        handle: {
          crumb: <ScheduleBreadcrumb />,
        },
        children: [
          {
            index: true,
            element: <Navigate to="calendar" replace />,
          },
          {
            path: "calendar",
            element: <CalendarPage />,
            handle: {
              crumb: <CalendarBreadcrumb />,
            },
          },
        ],
      },
    ],
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
