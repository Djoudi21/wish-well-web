"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Calendar, Gift, Home, LogOut, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {cn} from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Choose one of these subtle background options:
  const sidebarBackground = "bg-slate-100 border-r border-slate-200" // Light subtle option
  // const sidebarBackground = "bg-zinc-100 border-r border-zinc-200" // Light neutral option
  // const sidebarBackground = "bg-gray-50 border-r border-purple-100" // Very light with purple accent
  // const sidebarBackground = "bg-white border-r border-purple-200" // White with purple border
  // const sidebarBackground = "bg-gradient-to-b from-gray-50 to-slate-100 border-r border-slate-200" // Subtle gradient
  // const sidebarBackground = "bg-purple-50 border-r border-purple-100" // Very light purple
  // const sidebarBackground = "bg-indigo-50 border-r border-indigo-100" // Very light indigo
  // const sidebarBackground = "bg-slate-800 text-white" // Dark subtle option (requires text color change)

  // Text color class based on background darkness
  const textColorClass = sidebarBackground.includes("slate-800")
      ? "text-white hover:bg-white/10 data-[active=true]:bg-white/20"
      : "text-slate-700 hover:bg-slate-200/50 data-[active=true]:bg-purple-100"

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className={sidebarBackground}>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-4">
              <span className="font-bold text-xl gradient-text">GiftSense</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard"}
                  className={textColorClass}
                >
                  <Link href="/dashboard">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/contacts"}
                  className={textColorClass}
                >
                  <Link href="/dashboard/contacts">
                    <Users className="h-4 w-4" />
                    <span>Contacts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/birthdays"}
                  className={textColorClass}
                >
                  <Link href="/dashboard/birthdays">
                    <Calendar className="h-4 w-4" />
                    <span>Birthdays</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/gifts"}
                  className={textColorClass}
                >
                  <Link href="/dashboard/gifts">
                    <Gift className="h-4 w-4" />
                    <span>Gift Ideas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/notifications"}
                  className={textColorClass}
                >
                  <Link href="/dashboard/notifications">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={textColorClass}>
                  <Link href="/dashboard/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={textColorClass}>
                  <Link href="/">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6">
            <SidebarTrigger className="text-purple" />
            <div className="w-full flex justify-between">
              <h1 className="text-xl font-semibold gradient-text">Dashboard</h1>
              <Button variant="outline" size="sm" className="border-purple text-purple hover:bg-purple-light-20">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </header>
          <main className="flex-1 p-6 bg-gray-50 h-full">{children}</main>
        </main>
      </div>
    </SidebarProvider>
  )
}
