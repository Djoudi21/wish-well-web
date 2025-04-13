import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Gift, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-16 flex items-center border-b w-screen mx-auto">
          <Link href="/" className="flex items-center justify-center">
            <span className="font-bold text-2xl gradient-text">GiftSense</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-purple-dark transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-purple-dark transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-purple-dark transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="ml-4">
            <Link href="/dashboard">
              <Button className="bg-purple-400 hover:bg-purple-dark transition-colors">Dashboard</Button>
            </Link>
          </div>
        </header>
        <main className="flex-1 w-screen mx-auto">
          {/* New Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-light-20 blur-3xl"></div>
              <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-pink-light-20 blur-3xl"></div>
              <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-teal-light-20 blur-3xl"></div>
            </div>

            <div className="container px-4 md:px-6 relative">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-block rounded-full bg-purple-light-30 px-3 py-1 text-sm font-medium text-purple-dark mb-2 w-fit">
                    Never miss a special day
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Remember Every <span className="gradient-text">Birthday</span> With Perfect{" "}
                    <span className="gradient-text">Gifts</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    GiftSense helps you track important dates and suggests personalized gifts based on your contacts'
                    interests.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link href="/dashboard">
                      <Button className="px-8 bg-purple hover:bg-purple-dark transition-colors">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#how-it-works">
                      <Button variant="outline" className="px-8 border-purple text-purple hover:bg-purple-light-20">
                        How It Works
                      </Button>
                    </Link>
                  </div>

                  {/* Trust indicators */}
                  <div className="flex items-center gap-4 pt-6">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                            <Image
                                src={`/placeholder.svg?height=32&width=32&text=${i}`}
                                alt={`User ${i}`}
                                width={32}
                                height={32}
                            />
                          </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium text-gray-900">1,000+</span> happy users
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hero image/illustration */}
                <div className="relative lg:ml-auto">
                  <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-lg shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-light/80 to-pink-light/80 mix-blend-multiply"></div>
                    <Image
                        src="/placeholder.svg?height=600&width=600&text=App+Screenshot"
                        alt="GiftSense App"
                        fill
                        className="object-cover"
                    />

                    {/* Floating UI elements */}
                    <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-4 w-48 animate-[bounce_6s_ease-in-out_infinite]">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-8 w-8 text-purple" />
                        <div>
                          <p className="text-sm font-medium">Emma's Birthday</p>
                          <p className="text-xs text-gray-500">In 3 days</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 w-48 animate-[bounce_6s_ease-in-out_infinite_1s]">
                      <div className="flex items-center gap-3">
                        <Gift className="h-8 w-8 text-pink" />
                        <div>
                          <p className="text-sm font-medium">Gift Ideas</p>
                          <p className="text-xs text-gray-500">5 suggestions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="w-full flex py-12 md:py-24 lg:py-32 bg-purple-light-20">
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-purple-light px-3 py-1 text-sm font-medium text-purple-dark">
                    Amazing Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Features</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Everything you need to keep track of important dates and find the perfect gifts.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="card-hover rounded-xl bg-white p-6 shadow-lg border border-purple-light-30">
                  <div className="mb-4 rounded-full bg-purple-light-30 p-3 w-12 h-12 flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-purple">Contact Management</h3>
                  <p className="text-gray-500 mt-2">
                    Easily add and organize your contacts with their birthdays, relationships, and interests.
                  </p>
                </div>
                <div className="card-hover rounded-xl bg-white p-6 shadow-lg border border-pink-light-30">
                  <div className="mb-4 rounded-full bg-pink-light-30 p-3 w-12 h-12 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-pink" />
                  </div>
                  <h3 className="text-xl font-bold text-pink">Birthday Reminders</h3>
                  <p className="text-gray-500 mt-2">
                    Get timely notifications for upcoming birthdays so you never miss an important date.
                  </p>
                </div>
                <div className="card-hover rounded-xl bg-white p-6 shadow-lg border border-teal-light-30">
                  <div className="mb-4 rounded-full bg-teal-light-30 p-3 w-12 h-12 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-teal">Gift Suggestions</h3>
                  <p className="text-gray-500 mt-2">
                    Receive personalized gift ideas based on your contacts' interests and preferences.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="how-it-works" className="w-full flex py-12 md:py-24 lg:py-32">
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-blue-light px-3 py-1 text-sm font-medium text-blue-dark">
                    Simple Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">How It Works</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    GiftSense makes it easy to remember important dates and find the perfect gifts.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple text-white mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Add Contacts</h3>
                  <p className="text-gray-500 mt-2">
                    Enter your contacts' details including their birthdays, relationships, and interests.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink text-white mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Get Reminders</h3>
                  <p className="text-gray-500 mt-2">
                    Receive notifications for upcoming birthdays so you can plan ahead.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Find Perfect Gifts</h3>
                  <p className="text-gray-500 mt-2">
                    Browse personalized gift suggestions based on your contacts' interests.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="pricing" className="w-full flex py-12 md:py-24 lg:py-32 bg-orange-light-20">
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-orange-light px-3 py-1 text-sm font-medium text-orange-dark">
                    Affordable Plans
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Pricing</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose the plan that's right for you.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="card-hover rounded-xl bg-white p-6 shadow-lg border border-purple-light-30">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-purple">Free</h3>
                    <p className="text-gray-500">Basic features for personal use.</p>
                    <div className="text-3xl font-bold">$0</div>
                    <ul className="grid gap-2 py-4">
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-purple" />
                        <span>Up to 10 contacts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-purple" />
                        <span>Basic gift suggestions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-purple" />
                        <span>Email reminders</span>
                      </li>
                    </ul>
                    <Link href="/dashboard">
                      <Button className="w-full bg-purple hover:bg-purple-dark transition-colors">Get Started</Button>
                    </Link>
                  </div>
                </div>
                <div className="card-hover rounded-xl bg-white p-6 shadow-lg border-2 border-pink relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-pink">Pro</h3>
                    <p className="text-gray-500">Advanced features for power users.</p>
                    <div className="text-3xl font-bold">$9.99</div>
                    <ul className="grid gap-2 py-4">
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-pink" />
                        <span>Unlimited contacts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-pink" />
                        <span>Advanced gift suggestions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-pink" />
                        <span>SMS & email reminders</span>
                      </li>
                    </ul>
                    <Link href="/dashboard">
                      <Button className="w-full bg-pink hover:bg-pink-dark transition-colors">Get Started</Button>
                    </Link>
                  </div>
                </div>
                <div className="card-hover rounded-xl bg-white p-6 shadow-lg border border-teal-light-30">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-teal">Enterprise</h3>
                    <p className="text-gray-500">Custom solutions for teams.</p>
                    <div className="text-3xl font-bold">Contact Us</div>
                    <ul className="grid gap-2 py-4">
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-teal" />
                        <span>Custom integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-teal" />
                        <span>Dedicated support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-teal" />
                        <span>Advanced analytics</span>
                      </li>
                    </ul>
                    <Link href="/contact">
                      <Button className="w-full bg-teal hover:bg-teal-dark transition-colors">Contact Sales</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex py-16 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-purple-light/5 z-0"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-light-20 to-transparent z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-pink-light-20 to-transparent z-0"></div>

            {/* Decorative shapes */}
            <div className="absolute top-12 left-12 w-24 h-24 rounded-full bg-purple-light-30 blur-xl z-0"></div>
            <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-pink-light-30 blur-xl z-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-teal-light-20 blur-3xl z-0"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
              <div className="mx-auto max-w-4xl">
                <div className="grid gap-6 lg:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <div className="inline-block rounded-full bg-purple px-3 py-1 text-sm font-medium text-white">
                      Limited Time Offer
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Start Your <span className="gradient-text">Gift-Giving</span> Journey Today
                    </h2>
                    <p className="text-gray-600 md:text-xl">
                      Join thousands of users who never miss an important date again. The first 100 sign-ups get premium
                      features free for 3 months!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Link href="/dashboard">
                        <Button className="px-8 bg-purple hover:bg-purple-dark transition-colors">
                          Start for Free <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="#pricing">
                        <Button variant="outline" className="px-8 border-purple text-purple hover:bg-purple-light-20">
                          View Pricing
                        </Button>
                      </Link>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-6 p-4 bg-white rounded-lg shadow-lg border border-purple-light-30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                          <Image src="/placeholder.svg?height=40&width=40" alt="User" width={40} height={40} />
                        </div>
                        <div>
                          <p className="font-medium">Sarah Johnson</p>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 italic text-sm">
                        "GiftSense has completely transformed how I remember birthdays. The gift suggestions are spot-on,
                        and I've never missed an important date since signing up!"
                      </p>
                    </div>
                  </div>

                  {/* Form card */}
                  <div className="bg-white p-6 rounded-xl shadow-xl border border-purple-light-30 card-hover">
                    <h3 className="text-xl font-bold mb-4 text-purple">Get Started in Seconds</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </Label>
                        <Input
                            id="name"
                            placeholder="Enter your name"
                            className="mt-1 border-purple-light-30 focus-visible:ring-purple"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="mt-1 border-purple-light-30 focus-visible:ring-purple"
                        />
                      </div>
                      <Button className="w-full bg-purple hover:bg-purple-dark transition-colors">
                        Create Free Account
                      </Button>
                      <p className="text-xs text-center text-gray-500">
                        By signing up, you agree to our{" "}
                        <Link href="#" className="text-purple hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-purple hover:underline">
                          Privacy Policy
                        </Link>
                      </p>

                      {/* Feature list */}
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm font-medium mb-2">Every account includes:</p>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm">
                            <div className="mr-2 h-4 w-4 rounded-full bg-green-100 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            </div>
                            <span>10 free contacts</span>
                          </li>
                          <li className="flex items-center text-sm">
                            <div className="mr-2 h-4 w-4 rounded-full bg-green-100 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            </div>
                            <span>Birthday reminders</span>
                          </li>
                          <li className="flex items-center text-sm">
                            <div className="mr-2 h-4 w-4 rounded-full bg-green-100 flex items-center justify-center">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            </div>
                            <span>Basic gift suggestions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="relative overflow-hidden">
          {/* Top curved section - very subtle */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-8 md:h-10" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
            </svg>
          </div>

          {/* Main footer content - subtle colors */}
          <div className="pt-16 pb-12 bg-white border-t border-gray-100 text-gray-600">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {/* GiftSense Section */}
                <div>
                  <div className="mb-2">
                    <span className="font-bold text-xl text-gray-800">GiftSense</span>
                  </div>
                  <p className="text-gray-500 mb-6">
                    Never forget a birthday again.
                  </p>
                </div>

                {/* Product Section */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#features" className="text-gray-500 hover:text-purple transition-colors">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="#pricing" className="text-gray-500 hover:text-purple transition-colors">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="#faq" className="text-gray-500 hover:text-purple transition-colors">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Company Section */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#about" className="text-gray-500 hover:text-purple transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#blog" className="text-gray-500 hover:text-purple transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="#careers" className="text-gray-500 hover:text-purple transition-colors">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal Section */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#terms" className="text-gray-500 hover:text-purple transition-colors">
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link href="#privacy" className="text-gray-500 hover:text-purple transition-colors">
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link href="#cookies" className="text-gray-500 hover:text-purple transition-colors">
                        Cookies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4 md:mb-0">
                  © 2025 GiftSense. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-purple transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}
