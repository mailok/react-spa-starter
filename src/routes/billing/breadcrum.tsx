import { BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Link } from 'react-router';

export function BillingBreadcrumb() {
  return (
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink asChild>
        <Link to="/billing">Billing & Invoicing</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}
