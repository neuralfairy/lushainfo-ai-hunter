"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, ArrowRight, Globe, Shield, Heart } from "lucide-react"

export default function AboutPage() {
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

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to solve complex B2B sales challenges.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security and compliance with industry standards.",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our mission. We provide dedicated support and guidance.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Empowering sales teams worldwide to achieve unprecedented growth.",
    },
  ]

  const stats = [
    { value: "10M+", label: "Contacts Discovered" },
    { value: "500+", label: "Companies Served" },
    { value: "95%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Fortune 500 company with 15+ years in B2B sales technology.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "AI/ML expert with PhD in Computer Science and experience at leading tech companies.",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      bio: "Product strategist with deep expertise in SaaS platforms and user experience design.",
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
                About <span className="gradient-text">Lush AI Info</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Creators of AI Hunter - Pioneering the future of AI-powered B2B lead generation and sales intelligence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Lush AI Info, we believe that every business deserves access to intelligent, efficient lead generation
              tools. Our flagship product, AI Hunter, democratizes AI-powered sales technology, making it accessible to
              companies of all sizes while maintaining the highest standards of data quality and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="scroll-reveal glass-effect border-white/20 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="scroll-reveal glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Our <span className="gradient-text">AI Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Built on cutting-edge artificial intelligence and machine learning technologies
            </p>
          </div>

          <div className="scroll-reveal max-w-4xl mx-auto">
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Machine Learning Models</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Natural Language Processing (NLP)</li>
                      <li>• Predictive Analytics</li>
                      <li>• Pattern Recognition</li>
                      <li>• Deep Learning Networks</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Data Infrastructure</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Real-time Data Processing</li>
                      <li>• Cloud-native Architecture</li>
                      <li>• Advanced Security Protocols</li>
                      <li>• Scalable API Framework</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Leadership <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Meet the visionaries behind AI Hunter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="scroll-reveal glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="scroll-reveal text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-400 text-black bg-white hover:bg-purple-50 px-8 py-4 text-lg"
            >
              <Link href="https://salescentri.com/company/about-us/leadership-team">
                Meet Our Full Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal max-w-4xl mx-auto">
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-orbitron font-bold mb-6 text-white">
                      Based in <span className="gradient-text">Austin, TX</span>
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Located in the heart of Texas's tech hub, we're at the center of innovation and entrepreneurship.
                      Our Austin headquarters serves as the foundation for our global operations.
                    </p>
                    <div className="space-y-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold mr-4"
                      >
                        <Link href="https://salescentri.com/company/careers">Join Our Team</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-purple-400 text-black bg-white hover:bg-purple-50"
                      >
                        <Link href="https://salescentri.com/company/team-advisors/career-openings">
                          View Open Positions
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full mx-auto flex items-center justify-center">
                      <Globe className="h-24 w-24 text-purple-400" />
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
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
              Ready to Experience AI Hunter?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the revolution in AI-powered lead generation and transform your sales process today
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
