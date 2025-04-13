"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Gift, MoreHorizontal, Pencil, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ContactList() {
    const [searchQuery, setSearchQuery] = useState("")

    const contacts = [
        {
            id: 1,
            name: "Sarah Johnson",
            email: "sarah@example.com",
            relationship: "Family",
            birthdate: "April 15",
            interests: "Reading, Hiking, Photography",
            image: "/placeholder.svg?height=40&width=40",
            color: "bg-purple",
        },
        {
            id: 2,
            name: "Michael Smith",
            email: "michael@example.com",
            relationship: "Friend",
            birthdate: "May 3",
            interests: "Gaming, Technology, Movies",
            image: "/placeholder.svg?height=40&width=40",
            color: "bg-blue-500",
        },
        {
            id: 3,
            name: "Emma Davis",
            email: "emma@example.com",
            relationship: "Colleague",
            birthdate: "May 22",
            interests: "Cooking, Travel, Music",
            image: "/placeholder.svg?height=40&width=40",
            color: "bg-pink",
        },
        {
            id: 4,
            name: "David Wilson",
            email: "david@example.com",
            relationship: "Family",
            birthdate: "July 10",
            interests: "Sports, Fitness, Outdoors",
            image: "/placeholder.svg?height=40&width=40",
            color: "bg-teal",
        },
    ]

    const filteredContacts = contacts.filter(
        (contact) =>
            contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.interests.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Input
                    placeholder="Search contacts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm border-purple-light/30 focus-visible:ring-purple"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredContacts.map((contact) => (
                    <Card key={contact.id} className="p-4 card-hover border-purple-light/30">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-3">
                                <div className={`rounded-full p-0.5 ${contact.color}`}>
                                    <Image
                                        src={contact.image || "/placeholder.svg"}
                                        alt={contact.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full bg-white"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">{contact.name}</h3>
                                    <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                                </div>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-purple hover:bg-purple-light/20">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">More options</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Pencil className="mr-2 h-4 w-4" />
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center text-sm">
                                <Calendar className="mr-2 h-4 w-4 text-pink" />
                                <span>{contact.birthdate}</span>
                            </div>
                            <p className="text-sm">
                                <span className="font-medium">Interests:</span> {contact.interests}
                            </p>
                            <div className="flex justify-between mt-4">
                                <Link href={`/dashboard/contacts/${contact.id}`}>
                                    <Button variant="outline" size="sm" className="border-purple text-purple hover:bg-purple-light/20">
                                        View Details
                                    </Button>
                                </Link>
                                <Link href={`/dashboard/gifts?contact=${contact.id}`}>
                                    <Button size="sm" className="bg-pink hover:bg-pink-dark transition-colors">
                                        <Gift className="mr-2 h-4 w-4" />
                                        Gift Ideas
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
