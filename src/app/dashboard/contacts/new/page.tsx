"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function NewContactPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      relationship: formData.get("relationship"),
      birthdate: date,
      interests: formData.get("interests"),
      notes: formData.get("notes"),
    }

    try {
      // This would connect to your backend API
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      })

      if (response.ok) {
        router.push("/dashboard/contacts")
      } else {
        // Handle error
        console.error("Failed to create contact")
      }
    } catch (error) {
      console.error("Error creating contact:", error)
    }
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight gradient-text">Add New Contact</h2>
      </div>
      <Card className="card-hover border-purple-light/30">
        <form onSubmit={handleSubmit}>
          <CardHeader className="bg-purple-light/10 border-b border-purple-light/30">
            <CardTitle className="text-purple">Contact Information</CardTitle>
            <CardDescription>Add a new contact to your network.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-purple">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="border-purple-light/30 focus-visible:ring-purple"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="border-purple-light/30 focus-visible:ring-purple"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="relationship" className="text-purple">
                  Relationship
                </Label>
                <Select name="relationship">
                  <SelectTrigger className="border-purple-light/30 focus-visible:ring-purple">
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="colleague">Colleague</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthdate" className="text-purple">
                  Birthdate
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-purple-light/30 focus-visible:ring-purple",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-purple" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="rounded-md border border-purple-light/30"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="interests" className="text-purple">
                Interests
              </Label>
              <Textarea
                id="interests"
                name="interests"
                placeholder="Reading, hiking, cooking, etc."
                className="border-purple-light/30 focus-visible:ring-purple"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-purple">
                Notes
              </Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Any additional information about this contact"
                className="border-purple-light/30 focus-visible:ring-purple"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-6 bg-purple-light/5 border-t border-purple-light/30">
            <Button
              variant="outline"
              type="button"
              onClick={() => router.back()}
              className="border-purple text-purple hover:bg-purple-light/20"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-purple hover:bg-purple-dark transition-colors">
              Save Contact
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
