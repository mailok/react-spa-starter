import { ChevronRight, Calendar, Clock } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";

export function NavSchedule() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Schedule</SidebarGroupLabel>
      <SidebarMenu>
        {/* Planning Section */}
        <Collapsible asChild defaultOpen={true} className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip="Planning">
                <Calendar />
                <span>Planning</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <NavLink to="/schedule/calendar">
                    {({ isActive }) => (
                      <SidebarMenuButton isActive={isActive} asChild>
                        <span>Calendar</span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <NavLink to="/schedule/availability">
                    {({ isActive }) => (
                      <SidebarMenuButton isActive={isActive} asChild>
                        <span>Availability</span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <NavLink to="/schedule/pto-requests">
                    {({ isActive }) => (
                      <SidebarMenuButton isActive={isActive} asChild>
                        <span>
                          PTO Requests
                          <SidebarMenuBadge className="bg-secondary text-secondary-foreground">
                            24
                          </SidebarMenuBadge>
                        </span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>

        {/* Timesheet Section */}
        <Collapsible asChild defaultOpen={false} className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip="Timesheet">
                <Clock />
                <span>Timesheet</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="#">
                      <span>Employee Attendance</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="#">
                      <span>Missed Punches</span>
                      <SidebarMenuBadge className="bg-secondary text-secondary-foreground">
                        5
                      </SidebarMenuBadge>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <a href="#">
                      <span>Reimbursements</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
