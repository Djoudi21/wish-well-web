import Link from "next/link"
import { Calendar, Gift, Plus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UpcomingBirthdays } from "@/components/upcoming-birthdays"

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">Welcome back!</h2>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/contacts/new">
            <Button className="bg-purple hover:bg-purple-dark transition-colors">
              <Plus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="card-hover border-purple-light-30">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
            <Users className="w-4 h-4 text-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple">24</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/contacts" className="text-xs text-purple hover:underline">
              View all contacts
            </Link>
          </CardFooter>
        </Card>
        <Card className="card-hover border-pink-light-30">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Upcoming Birthdays</CardTitle>
            <Calendar className="w-4 h-4 text-pink" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink">3</div>
            <p className="text-xs text-muted-foreground">in the next 30 days</p>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/birthdays" className="text-xs text-pink hover:underline">
              View all birthdays
            </Link>
          </CardFooter>
        </Card>
        <Card className="card-hover border-teal-light-30">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Gift Ideas</CardTitle>
            <Gift className="w-4 h-4 text-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-teal">12</div>
            <p className="text-xs text-muted-foreground">personalized suggestions</p>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/gifts" className="text-xs text-teal hover:underline">
              View all gift ideas
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1 card-hover border-purple-light-30">
          <CardHeader>
            <CardTitle className="text-purple">Upcoming Birthdays</CardTitle>
            <CardDescription>Don't forget these important dates!</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingBirthdays />
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/birthdays">
              <Button variant="outline" className="border-purple text-purple hover:bg-purple-light/20">
                View All
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="col-span-1 card-hover border-pink-light-30">
          <CardHeader>
            <CardTitle className="text-pink">Recent Activity</CardTitle>
            <CardDescription>Your latest actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <p className="text-sm font-medium">Added new contact: Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm font-medium">Updated interests for: Michael Smith</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple"></div>
                <div>
                  <p className="text-sm font-medium">Saved gift idea for: Emma Davis</p>
                  <p className="text-xs text-muted-foreground">5 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
