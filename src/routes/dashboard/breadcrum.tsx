import { BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Link } from "react-router";

export function DashboardBreadcrumb() {
  return (
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink asChild>
        <Link to="/">Dashboard</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}