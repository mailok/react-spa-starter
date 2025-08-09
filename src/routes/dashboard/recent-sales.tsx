import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar01 from "@/assets/avatars/01.png";
import avatar02 from "@/assets/avatars/02.png";
import avatar03 from "@/assets/avatars/03.png";
import avatar04 from "@/assets/avatars/04.png";
import avatar05 from "@/assets/avatars/05.png";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatar01} alt="Olivia Martin" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none font-medium">Olivia Martin</p>
          <p className="text-muted-foreground text-sm">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src={avatar02} alt="Jackson Lee" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none font-medium">Jackson Lee</p>
          <p className="text-muted-foreground text-sm">jackson.lee@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatar03} alt="Isabella Nguyen" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none font-medium">Isabella Nguyen</p>
          <p className="text-muted-foreground text-sm">
            isabella.nguyen@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatar04} alt="William Kim" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none font-medium">William Kim</p>
          <p className="text-muted-foreground text-sm">will@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatar05} alt="Sofia Davis" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none font-medium">Sofia Davis</p>
          <p className="text-muted-foreground text-sm">sofia.davis@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
    </div>
  );
}
