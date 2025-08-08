import { BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Link } from "react-router";

export function EmployeesBreadcrumb() {
  return (
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink asChild>
        <Link to="/employees">Employees</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}