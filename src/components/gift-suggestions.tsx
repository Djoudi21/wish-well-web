import Image from "next/image"
import { ExternalLink, Heart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function GiftSuggestions() {
    const giftIdeas = [
        {
            id: 1,
            title: "Wireless Noise-Cancelling Headphones",
            description: "Perfect for Michael who loves technology and music.",
            price: "$199.99",
            rating: 4.5,
            image: "/placeholder.svg?height=200&width=200",
            contact: "Michael Smith",
            contactId: 2,
            color: "bg-blue-500",
            textColor: "text-blue-500",
            borderColor: "border-blue-light/30",
        },
        {
            id: 2,
            title: "Gourmet Cooking Class Subscription",
            description: "Emma would love this cooking experience to expand her culinary skills.",
            price: "$89.99",
            rating: 4.8,
            image: "/placeholder.svg?height=200&width=200",
            contact: "Emma Davis",
            contactId: 3,
            color: "bg-pink",
            textColor: "text-pink",
            borderColor: "border-pink-light/30",
        },
        {
            id: 3,
            title: "Fitness Smartwatch",
            description: "Track workouts and health metrics - perfect for David's active lifestyle.",
            price: "$149.99",
            rating: 4.3,
            image: "/placeholder.svg?height=200&width=200",
            contact: "David Wilson",
            contactId: 4,
            color: "bg-teal",
            textColor: "text-teal",
            borderColor: "border-teal-light/30",
        },
    ]

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {giftIdeas.map((gift) => (
                <Card key={gift.id} className={`overflow-hidden card-hover ${gift.borderColor}`}>
                    <div className="aspect-square relative">
                        <div className={`absolute top-0 right-0 ${gift.color} text-white px-3 py-1 rounded-bl-lg z-10`}>
                            For {gift.contact}
                        </div>
                        <Image src={gift.image || "/placeholder.svg"} alt={gift.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="p-4">
                        <CardTitle className={`text-lg ${gift.textColor}`}>{gift.title}</CardTitle>
                        <CardDescription>{gift.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <div className="mt-2 flex items-center justify-between">
                            <p className="font-bold text-lg">{gift.price}</p>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < Math.floor(gift.rating) ? `fill-${gift.color.split("-")[1]} ${gift.textColor}` : "text-gray-300"}`}
                                    />
                                ))}
                                <span className="ml-1 text-sm">{gift.rating}</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between">
                        <Button
                            variant="outline"
                            size="sm"
                            className={`border-${gift.color.split("-")[1]} ${gift.textColor} hover:bg-${gift.color.split("-")[1]}-light/20`}
                        >
                            <Heart className="mr-2 h-4 w-4" />
                            Save
                        </Button>
                        <Button
                            size="sm"
                            className={`${gift.color} hover:${gift.color.replace("bg-", "bg-")}-dark transition-colors`}
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
