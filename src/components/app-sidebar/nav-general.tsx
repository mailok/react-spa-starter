import { LayoutDashboard, PersonStanding, ListTodo, Users } from 'lucide-react';
import { NavLink } from 'react-router';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '../ui/sidebar';

export function NavGeneral() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem key="dashboard">
          <NavLink to="/">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <LayoutDashboard />
                  Dashboard
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
        <SidebarMenuItem key="clients">
          <NavLink to="/clients">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <PersonStanding />
                  Clients
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
        <SidebarMenuItem key="employees">
          <NavLink to="/employees">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <Users />
                  Employees
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
        <SidebarMenuItem key="tasks">
          <NavLink to="/tasks">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <ListTodo />
                  Tasks
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
