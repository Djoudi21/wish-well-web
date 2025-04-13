import { Bell, Calendar, Gift } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function NotificationsPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Configure how you want to be notified</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Notification Methods</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="browser-notifications">Browser Notifications</Label>
                </div>
                <Switch id="browser-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                </div>
                <Switch id="sms-notifications" />
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="font-medium">Notification Timing</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="one-week-before">One week before</Label>
                </div>
                <Switch id="one-week-before" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="three-days-before">Three days before</Label>
                </div>
                <Switch id="three-days-before" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="on-the-day">On the day</Label>
                </div>
                <Switch id="on-the-day" defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Your latest notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Upcoming Birthday: Michael Smith</p>
                  <p className="text-xs text-muted-foreground">May 3 (in 2 days)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Gift className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">New Gift Ideas Available</p>
                  <p className="text-xs text-muted-foreground">We've found 3 new gift ideas for Emma Davis</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Reminder: Add Sarah's Interests</p>
                  <p className="text-xs text-muted-foreground">
                    Complete Sarah Johnson's profile to get better gift suggestions
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
