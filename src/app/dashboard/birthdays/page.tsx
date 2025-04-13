import { UpcomingBirthdays } from "@/components/upcoming-birthdays"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BirthdaysPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Birthdays</h2>
      </div>
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="all">All Birthdays</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Birthdays</CardTitle>
              <CardDescription>Birthdays in the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingBirthdays />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Birthdays</CardTitle>
              <CardDescription>All birthdays sorted by month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <div key={month} className="space-y-4">
                    <h3 className="text-lg font-semibold">{month}</h3>
                    <div className="divide-y">
                      {month === "April" && (
                        <>
                          <div className="py-3 flex justify-between items-center">
                            <div>
                              <p className="font-medium">Sarah Johnson</p>
                              <p className="text-sm text-muted-foreground">April 15</p>
                            </div>
                            <div className="text-sm">Turning 32</div>
                          </div>
                        </>
                      )}
                      {month === "May" && (
                        <>
                          <div className="py-3 flex justify-between items-center">
                            <div>
                              <p className="font-medium">Michael Smith</p>
                              <p className="text-sm text-muted-foreground">May 3</p>
                            </div>
                            <div className="text-sm">Turning 28</div>
                          </div>
                          <div className="py-3 flex justify-between items-center">
                            <div>
                              <p className="font-medium">Emma Davis</p>
                              <p className="text-sm text-muted-foreground">May 22</p>
                            </div>
                            <div className="text-sm">Turning 35</div>
                          </div>
                        </>
                      )}
                      {month === "July" && (
                        <>
                          <div className="py-3 flex justify-between items-center">
                            <div>
                              <p className="font-medium">David Wilson</p>
                              <p className="text-sm text-muted-foreground">July 10</p>
                            </div>
                            <div className="text-sm">Turning 40</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
              <CardDescription>View birthdays in a calendar format</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12 text-muted-foreground">Calendar view coming soon</div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
