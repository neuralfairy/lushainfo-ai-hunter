"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, MessageSquare, Calendar, ArrowRight, Clock, FileText } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant support from our team",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat",
    },
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a personalized demo",
      action: "Schedule Now",
      link: "https://salescentri.com/get-started/calendly",
    },
    {
      icon: FileText,
      title: "Submit Ticket",
      description: "Create a detailed support request",
      action: "Submit Ticket",
      link: "https://salescentri.com/contact/support-request/submit-ticket",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      link: "tel:+1-512-555-0123",
    },
  ]

  const supportOptions = [
    {
      title: "General Inquiries",
      description: "Questions about AI Hunter features and capabilities",
      link: "https://salescentri.com/get-started/contact",
    },
    {
      title: "Technical Support",
      description: "Help with implementation and troubleshooting",
      link: "https://salescentri.com/contact/support-request",
    },
    {
      title: "Sales Questions",
      description: "Pricing, plans, and custom solutions",
      link: "https://salescentri.com/get-started/book-demo",
    },
    {
      title: "Partnership Opportunities",
      description: "Explore partnership and integration possibilities",
      link: "https://salescentri.com/get-started/contact",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="scroll-reveal">
              <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Ready to transform your lead generation? We're here to help you get started with AI Hunter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="gradient-text">Multiple Ways</span> to Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="scroll-reveal glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <method.icon className="h-8 w-8 text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{method.title}</h3>
                  <p className="text-gray-400 mb-4">{method.description}</p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold w-full"
                  >
                    <Link href={method.link}>{method.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-xl text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <Card className="scroll-reveal glass-effect border-white/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <Textarea
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold w-full"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="gradient-text">Support</span> Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Get specialized help for your specific needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => (
              <Card
                key={index}
                className="scroll-reveal glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{option.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-white hover:bg-purple-500/20 p-0"
                  >
                    <Link href={option.link}>
                      Get Help
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal max-w-4xl mx-auto">
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-orbitron font-bold mb-6 text-white">
                      <span className="gradient-text">Austin</span> Headquarters
                    </h2>
                    <div className="space-y-4 text-gray-300">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <p>Lush AI Info Solutions</p>
                          <p>AI Hunter Division</p>
                          <p>123 Tech Boulevard</p>
                          <p>Austin, TX 78701</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <p>hello@lushainfo.com</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <p>+1 (512) 555-0123</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Support Hours</h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Monday - Friday</p>
                          <p className="text-sm text-gray-400">8:00 AM - 8:00 PM CST</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Saturday</p>
                          <p className="text-sm text-gray-400">10:00 AM - 4:00 PM CST</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Live Chat</p>
                          <p className="text-sm text-gray-400">24/7 Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Don't wait - start transforming your lead generation process today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg transition-all duration-300"
              >
                <Link href="https://salescentri.com/get-started/free-trial">Start Free Trial</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-black bg-white hover:bg-white/90 px-8 py-4 text-lg transition-all duration-300"
              >
                <Link href="https://salescentri.com/get-started/book-demo">
                  Book Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
