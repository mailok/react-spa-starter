import { BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Link } from "react-router";

export function ClientsBreadcrumb() {
  return (
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink asChild>
        <Link to="/clients">Clients</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}