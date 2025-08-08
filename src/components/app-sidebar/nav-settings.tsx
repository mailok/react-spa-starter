import { User, Bell, Settings } from 'lucide-react';
import { NavLink } from 'react-router';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
} from '../ui/sidebar';

export function NavSettings() {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Settings</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem key="account">
          <NavLink to="/settings/account">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <User />
                  Account
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
        <SidebarMenuItem key="notifications">
          <NavLink to="/settings/notifications">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <Bell />
                  Notifications
                  <SidebarMenuBadge className="bg-primary text-primary-foreground">
                    2
                  </SidebarMenuBadge>
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
        <SidebarMenuItem key="preferences">
          <NavLink to="/settings/preferences">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} asChild>
                <span>
                  <Settings />
                  Preferences
                </span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
