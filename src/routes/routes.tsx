import { createBrowserRouter, Navigate } from 'react-router';
import { Root } from './root';
import { DashboardPage } from './dashboard/dashboard.page';
import { About } from './about/about.page';
import { AuthLayout } from './auth/layout';
import { DashboardBreadcrumb } from './dashboard/breadcrum';
import { EmployeesPage } from './employees/employees.page';
import { EmployeesBreadcrumb } from './employees/breadcrum';
import { ClientsBreadcrumb } from './clients/breadcrum';
import { ClientsPage } from './clients/clients.page';
import { BillingPage } from './billing/billing.page';
import { BillingBreadcrumb } from './billing/breadcrum';
import { SchedulePage } from './schedule/schedule.page';
import { CalendarPage } from './schedule/calendar/calendar.page';
import { CalendarBreadcrumb } from './schedule/calendar/breadcrum';
import { ScheduleBreadcrumb } from './schedule/breadcrum';
import { NotFound } from './not-found';
import { SignupPage } from './auth/signup/signup.page';
import { LoginPage } from './auth/login/login.page';
import { TasksBreadcrumb } from './tasks/breadcrum';
import { TasksPage } from './tasks/tasks.page';
import { ClientDetailLayout } from './clients/[clientId]/layout';
import { ClientDetailBreadcrumb } from './clients/[clientId]/breadcrum';
import { PersonalInformationPage } from './clients/[clientId]/personal-information/personal-information.page';
import { PersonalInformationBreadcrumb } from './clients/[clientId]/personal-information/breadcrum';
import { MedicalInformationPage } from './clients/[clientId]/medical-information/medical-information.page';
import { MedicalInformationBreadcrumb } from './clients/[clientId]/medical-information/breadcrum';
import { BenefitsPage } from './clients/[clientId]/benefits/benefits.page';
import { BenefitsBreadcrumb } from './clients/[clientId]/benefits/breadcrum';
import { ClientRouteNotFound } from './clients/[clientId]/route-not-found';
import { ClientsLayout } from './clients/layout';

export const router = createBrowserRouter([
  {
    path: '/',
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
        path: 'employees',
        element: <EmployeesPage />,
        handle: {
          crumb: <EmployeesBreadcrumb />,
        },
      },
      {
        path: 'clients',
        element: <ClientsLayout />,
        handle: {
          crumb: <ClientsBreadcrumb />,
        },
        children: [
          {
            index: true,
            element: <ClientsPage />,
          },
          {
            path: ':clientId',
            element: <ClientDetailLayout />,
            handle: {
              crumb: <ClientDetailBreadcrumb />,
            },
            children: [
              {
                index: true,
                element: <Navigate to="personal-information" replace />,
              },
              {
                path: 'personal-information',
                element: <PersonalInformationPage />,
                handle: {
                  crumb: <PersonalInformationBreadcrumb />,
                },
              },
              {
                path: 'medical-information',
                element: <MedicalInformationPage />,
                handle: {
                  crumb: <MedicalInformationBreadcrumb />,
                },
              },
              {
                path: 'benefits',
                element: <BenefitsPage />,
                handle: {
                  crumb: <BenefitsBreadcrumb />,
                },
              },
              {
                path: '*',
                element: <ClientRouteNotFound />,
              },
            ],
          },
        ],
      },
      {
        path: 'tasks',
        element: <TasksPage />,
        handle: {
          crumb: <TasksBreadcrumb />,
        },
      },
      {
        path: 'billing',
        element: <BillingPage />,
        handle: {
          crumb: <BillingBreadcrumb />,
        },
      },
      {
        path: 'schedule',
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
            path: 'calendar',
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
    path: 'about',
    element: <About />,
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
