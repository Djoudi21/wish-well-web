import Image from "next/image"
import Link from "next/link"
import { Gift } from "lucide-react"

import { Button } from "@/components/ui/button"

export function UpcomingBirthdays() {
    const upcomingBirthdays = [
        {
            id: 1,
            name: "Michael Smith",
            date: "May 3",
            daysLeft: 2,
            image: "/placeholder.svg?height=40&width=40",
            relationship: "Friend",
            color: "bg-blue-500",
        },
        {
            id: 2,
            name: "Emma Davis",
            date: "May 22",
            daysLeft: 21,
            image: "/placeholder.svg?height=40&width=40",
            relationship: "Colleague",
            color: "bg-pink",
        },
        {
            id: 3,
            name: "David Wilson",
            date: "July 10",
            daysLeft: 70,
            image: "/placeholder.svg?height=40&width=40",
            relationship: "Family",
            color: "bg-teal",
        },
    ]

    return (
        <div className="space-y-4">
            {upcomingBirthdays.map((birthday) => (
                <div key={birthday.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                        <div className={`rounded-full p-0.5 ${birthday.color}`}>
                            <Image
                                src={birthday.image || "/placeholder.svg"}
                                alt={birthday.name}
                                width={40}
                                height={40}
                                className="rounded-full bg-white"
                            />
                        </div>
                        <div>
                            <p className="font-medium">{birthday.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {birthday.date} ({birthday.daysLeft} days left)
                            </p>
                        </div>
                    </div>
                    <Link href={`/dashboard/gifts?contact=${birthday.id}`}>
                        <Button variant="outline" size="sm" className="border-purple text-purple hover:bg-purple-light/20">
                            <Gift className="mr-2 h-4 w-4" />
                            Gift Ideas
                        </Button>
                    </Link>
                </div>
            ))}
        </div>
    )
}
