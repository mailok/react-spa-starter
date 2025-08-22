import { Card, CardContent } from '@/components/ui/card';
import { Users, UserCheck, UserX, Clock } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { clientQuieries } from '../queries';

const summaryItems = [
  {
    key: 'total' as const,
    label: 'Total Clients',
    icon: Users,
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-100',
  },
  {
    key: 'active' as const,
    label: 'Active',
    icon: UserCheck,
    colorClass: 'text-green-600',
    bgClass: 'bg-green-100',
  },
  {
    key: 'pending' as const,
    label: 'Pending',
    icon: Clock,
    colorClass: 'text-orange-600',
    bgClass: 'bg-orange-100',
  },
  {
    key: 'inactive' as const,
    label: 'Inactive',
    icon: UserX,
    colorClass: 'text-red-600',
    bgClass: 'bg-red-100',
  },
];

export function Insights() {
  const { data: summary, isLoading } = useQuery(clientQuieries.insights());

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryItems.map((item) => (
          <Card key={item.key} className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-6 w-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!summary) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {summaryItems.map((item) => {
        const Icon = item.icon;
        const value = summary[item.key];

        return (
          <Card key={item.key} className="card-elevated status-indicator">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.bgClass}`}
                >
                  <Icon className={`h-6 w-6 ${item.colorClass}`} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    {item.label}
                  </p>
                  <p className="text-foreground text-2xl font-bold">{value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
