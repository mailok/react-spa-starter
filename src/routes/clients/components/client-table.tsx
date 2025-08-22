import type { Client } from '../queries';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface ClientTableProps {
  clients: Client[];
  onClientClick?: (client: Client) => void;
}

const getStatusColor = (status: Client['status']) => {
  switch (status) {
    case 'active':
      return 'bg-success-muted text-status-active border-status-active/20';
    case 'inactive':
      return 'bg-destructive-muted text-status-inactive border-status-inactive/20';
    case 'pending':
      return 'bg-warning-muted text-status-pending border-status-pending/20';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getStatusLabel = (status: Client['status']) => {
  switch (status) {
    case 'active':
      return 'Activo';
    case 'inactive':
      return 'Inactivo';
    case 'pending':
      return 'Pendiente';
    default:
      return status;
  }
};

const getGenderLabel = (gender: Client['gender']) => {
  switch (gender) {
    case 'male':
      return 'Male';
    case 'female':
      return 'Female';
    default:
      return 'Other';
  }
};

export function ClientTable({ clients, onClientClick }: ClientTableProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="bg-card rounded-lg border shadow">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-16"></TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Fecha Nacimiento</TableHead>
            <TableHead>Edad</TableHead>
            <TableHead>Género</TableHead>
            <TableHead>Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.id}
              className={cn(
                'cursor-pointer transition-colors',
                onClientClick && 'hover:bg-card-hover'
              )}
              onClick={() => onClientClick?.(client)}
            >
              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={client.photo} alt={client.name} />
                  <AvatarFallback className="bg-primary-muted text-primary text-xs">
                    {getInitials(client.name)}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{client.name}</TableCell>
              <TableCell className="text-muted-foreground">
                {client.email}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {client.phone}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {new Date(client.birthDate).toLocaleDateString('es-ES')}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {client.age}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {getGenderLabel(client.gender)}
              </TableCell>
              <TableCell>
                <Badge className={cn('text-xs', getStatusColor(client.status))}>
                  {getStatusLabel(client.status)}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
