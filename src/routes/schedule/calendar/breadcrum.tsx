import { BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Link } from "react-router";

export function CalendarBreadcrumb() {
  return (
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink asChild>
        <Link to="/schedule/calendar">Calendar</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}