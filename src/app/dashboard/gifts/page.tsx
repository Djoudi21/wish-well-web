import { GiftSuggestions } from "@/components/gift-suggestions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GiftsPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gift Ideas</h2>
      </div>
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Birthdays</TabsTrigger>
          <TabsTrigger value="saved">Saved Ideas</TabsTrigger>
          <TabsTrigger value="browse">Browse Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Gift Ideas for Upcoming Birthdays</CardTitle>
              <CardDescription>Personalized suggestions based on interests</CardDescription>
            </CardHeader>
            <CardContent>
              <GiftSuggestions />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="saved">
          <Card>
            <CardHeader>
              <CardTitle>Saved Gift Ideas</CardTitle>
              <CardDescription>Ideas you've saved for later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12 text-muted-foreground">You haven't saved any gift ideas yet</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="browse">
          <Card>
            <CardHeader>
              <CardTitle>Browse Gift Categories</CardTitle>
              <CardDescription>Explore gift ideas by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Tech & Gadgets",
                  "Books & Literature",
                  "Home & Kitchen",
                  "Fashion & Accessories",
                  "Sports & Outdoors",
                  "Art & Crafts",
                ].map((category) => (
                  <Card key={category} className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">{category}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
