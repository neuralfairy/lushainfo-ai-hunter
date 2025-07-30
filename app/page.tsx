"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Brain, Shield, TrendingUp, ArrowRight, Sparkles, Database, MessageSquare, Phone } from "lucide-react"

export default function HomePage() {
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

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Discovery",
      description: "Advanced AI algorithms find verified contact emails with 95% accuracy",
      link: "https://salescentri.com/platforms/lead-management/lead-generation",
    },
    {
      icon: Phone,
      title: "Voice AI Agent",
      description: "Automated voice outreach with natural conversation capabilities",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Engagement",
      description: "Chatbot and WhatsApp integration for seamless communication",
      link: "https://salescentri.com/platforms/lead-management/chat-bot",
    },
    {
      icon: Database,
      title: "Data Enrichment",
      description: "Comprehensive contact and company data enrichment services",
      link: "https://salescentri.com/services/data-enrichment",
    },
  ]

  const clients = ["TechCorp", "SalesForce Pro", "LeadGen Masters", "B2B Solutions", "Growth Hackers"]

  const stats = [
    { value: "10M+", label: "Contacts Discovered" },
    { value: "95%", label: "Email Accuracy" },
    { value: "300%", label: "ROI Increase" },
    { value: "24/7", label: "AI Support" },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="scroll-reveal">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
                <span className="gradient-text">AI Hunter</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-400 font-normal">Powered by Lush AI Info</span>
                <br />
                Lead Discovery
                <br />
                <span className="gradient-text">at Scale</span>
              </h1>
            </div>

            <div className="scroll-reveal">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find verified contact emails and auto-enrich with our AI Hunter. Transform your B2B sales process with
                intelligent lead generation.
              </p>
            </div>

            <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Link href="https://salescentri.com/get-started/free-trial">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-400 text-black bg-white hover:bg-purple-50 px-8 py-4 text-lg transition-all duration-300"
              >
                <Link href="https://salescentri.com/get-started/book-demo">
                  Book Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="scroll-reveal grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-300 mb-8">Trusted by leading B2B companies worldwide</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {clients.map((client, index) => (
                <div key={index} className="text-xl font-semibold text-gray-400">
                  {client}
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal flex justify-center items-center space-x-8 mt-8">
            <Link
              href="https://salescentri.com/trust/compliance-certifications"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Shield className="h-6 w-6" />
              <span>SOC 2 Certified</span>
            </Link>
            <Link
              href="https://salescentri.com/trust/compliance-certifications"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Shield className="h-6 w-6" />
              <span>GDPR Compliant</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="gradient-text">Intelligent Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powered by advanced AI technology to revolutionize your lead generation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="scroll-reveal glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <feature.icon className="h-8 w-8 text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-white hover:bg-purple-500/20"
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

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              See AI Hunter in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of AI-driven lead discovery with our interactive demo
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Link href="https://salescentri.com/solutions/use-case-navigator/demo">
                <Target className="mr-2 h-5 w-5" />
                Explore Interactive Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="scroll-reveal glass-effect border-white/20 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <TrendingUp className="h-16 w-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                Calculate Your <span className="gradient-text">ROI</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover how much revenue AI Hunter can generate for your sales team
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold px-8 py-4 text-lg"
              >
                <Link href="https://salescentri.com/solutions/use-case-navigator/recommendations">
                  Calculate ROI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of sales teams already using AI Hunter to supercharge their lead generation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg transition-all duration-300"
              >
                <Link href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
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
