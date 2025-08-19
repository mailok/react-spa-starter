import { BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Link } from 'react-router';

export function TasksBreadcrumb() {
  return (
    <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink asChild>
        <Link to="/tasks">Tasks</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}
