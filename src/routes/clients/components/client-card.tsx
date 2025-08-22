import type { Client } from '../queries';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Phone, Calendar, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ClientCardProps {
  client: Client;
  onClick?: (client: Client) => void;
}

const getStatusLabel = (status: Client['status']) => {
  switch (status) {
    case 'active':
      return 'Active';
    case 'inactive':
      return 'Inactive';
    case 'pending':
      return 'Pending';
    default:
      return status;
  }
};

export function ClientCard({ client, onClick }: ClientCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Card
      className={cn(
        'card-elevated cursor-pointer transition-all duration-200',
        onClick && 'hover:scale-[1.02]'
      )}
      onClick={() => onClick?.(client)}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <Avatar className="ring-border h-16 w-16 ring-2">
            <AvatarImage src={client.photo} alt={client.name} />
            <AvatarFallback className="bg-primary-muted text-primary font-semibold">
              {getInitials(client.name)}
            </AvatarFallback>
          </Avatar>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex items-start justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground truncate text-base font-semibold">
                  {client.name}
                </h3>
                <Badge className="mt-1" data-status={client.status}>
                  {getStatusLabel(client.status)}
                </Badge>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">{client.email}</span>
              </div>
              <div className="text-muted-foreground flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>{client.phone}</span>
              </div>
            </div>

            {/* Separator */}
            <div className="border-border my-4 border-t"></div>

            {/* Additional Info */}
            <div className="space-y-2">
              <div className="text-muted-foreground flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>
                  {new Date(client.birthDate).toLocaleDateString('en-US')} (
                  {client.age} years)
                </span>
              </div>
              <div className="text-muted-foreground flex items-center text-sm">
                <User className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="capitalize">
                  {client.gender === 'male'
                    ? 'Male'
                    : client.gender === 'female'
                      ? 'Female'
                      : 'Other'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
