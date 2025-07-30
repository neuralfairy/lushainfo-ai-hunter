"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  Phone,
  MessageSquare,
  Database,
  Users,
  Target,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function FeaturesPage() {
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

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Email Discovery",
      description:
        "Advanced machine learning algorithms scan millions of data points to find verified contact emails with 95% accuracy rate.",
      benefits: [
        "Real-time email verification",
        "GDPR compliant data sourcing",
        "Bulk email discovery",
        "API integration available",
      ],
      link: "https://salescentri.com/platforms/lead-management/lead-generation",
      cta: "Explore Lead Generation",
    },
    {
      icon: Phone,
      title: "Voice AI Agent",
      description:
        "Intelligent voice outreach system that conducts natural conversations and qualifies leads automatically.",
      benefits: [
        "Natural language processing",
        "Multi-language support",
        "Call scheduling automation",
        "Conversation analytics",
      ],
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
      cta: "Try Voice AI",
    },
    {
      icon: MessageSquare,
      title: "Chatbot & WhatsApp Integration",
      description: "Multi-channel engagement platform with intelligent chatbots for website and WhatsApp automation.",
      benefits: [
        "Website chat integration",
        "WhatsApp Business API",
        "Lead qualification flows",
        "24/7 automated responses",
      ],
      link: "https://salescentri.com/platforms/lead-management/chat-bot",
      cta: "Setup Chatbot",
    },
    {
      icon: Database,
      title: "Data Enrichment",
      description: "Comprehensive contact and company data enrichment to build complete prospect profiles.",
      benefits: ["Company information lookup", "Social media profiles", "Technographic data", "Firmographic insights"],
      link: "https://salescentri.com/services/data-enrichment",
      cta: "Enrich Data",
    },
  ]

  const additionalFeatures = [
    {
      icon: Users,
      title: "SDR Team Optimization",
      description: "Specialized tools and workflows designed for Sales Development Representatives.",
      link: "https://salescentri.com/solutions/by-use-case/sdr-teams",
    },
    {
      icon: Target,
      title: "CRM Integration",
      description: "Seamless integration with popular CRM platforms for streamlined workflows.",
      link: "https://salescentri.com/solutions/psa-suite/integrations",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2 certification and GDPR compliance.",
      link: "https://salescentri.com/trust/compliance-certifications",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboard with performance metrics and insights.",
      link: "https://salescentri.com/solutions/use-case-navigator/recommendations",
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
                <span className="gradient-text">AI Hunter</span> Features
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Discover the powerful capabilities that make AI Hunter the ultimate B2B lead generation platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`scroll-reveal flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                <div className="flex-1">
                  <Card className="glass-effect border-white/20 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 mr-4">
                          <feature.icon className="h-8 w-8 text-purple-400" />
                        </div>
                        <h2 className="text-3xl font-orbitron font-bold text-black">{feature.title}</h2>
                      </div>
                      <p className="text-lg text-black mb-6">{feature.description}</p>
                      <ul className="space-y-3 mb-8">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-black">
                            <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold"
                      >
                        <Link href={feature.link}>
                          {feature.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-32 w-32 text-purple-400 opacity-50" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="gradient-text">More Powerful Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Additional capabilities to enhance your sales process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="scroll-reveal glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 w-fit mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black mb-4">{feature.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-white hover:bg-purple-500/20 p-0"
                  >
                    <Link href={feature.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Seamless <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect AI Hunter with your existing sales stack for maximum efficiency
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold px-8 py-4 text-lg"
            >
              <Link href="https://salescentri.com/solutions/psa-suite/integrations">
                View All Integrations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Start your free trial today and see how AI Hunter can transform your lead generation process
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
