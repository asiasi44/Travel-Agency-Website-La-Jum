"use client";
import { ArrowLeft, Bus, Flag, LocateIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Countries",
    url: "/admin/countries",
    icon: Flag,
  },
  {
    title: "Location",
    url: "/admin/locations",
    icon: LocateIcon,
  },
  {
    title: "Transfer",
    url: "/admin/transfers",
    icon: Bus,
  },
];
export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="flex justify-center items-center">
        <Link className="flex font-extrabold text-[24px]" href={"/admin"}>
          <div>La</div>
          <div className="text-sky-500">Jum</div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CRUDS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive =
                  pathname === item.url || pathname.startsWith(`${item.url}/`);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        isActive && "bg-accent text-accent-foreground",
                      )}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 underline mb-4"
        >
          <ArrowLeft />
          <div className="text-sky-500 text-lg font-bold">Back to Home</div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
