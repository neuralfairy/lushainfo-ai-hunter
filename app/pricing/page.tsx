"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Crown, Building, Star } from "lucide-react"

export default function PricingPage() {
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

  const pricingPlans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$49",
      period: "/month",
      description: "Perfect for small teams getting started with AI-powered lead generation",
      features: [
        "1,000 email discoveries/month",
        "Basic data enrichment",
        "Email verification",
        "CRM integration",
        "Standard support",
        "API access",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: false,
    },
    {
      name: "Professional",
      icon: Crown,
      price: "$149",
      period: "/month",
      description: "Advanced features for growing sales teams and agencies",
      features: [
        "5,000 email discoveries/month",
        "Advanced data enrichment",
        "Voice AI agent (100 calls)",
        "Chatbot & WhatsApp integration",
        "Priority support",
        "Advanced analytics",
        "Team collaboration tools",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Building,
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with custom requirements",
      features: [
        "Unlimited email discoveries",
        "Full data enrichment suite",
        "Unlimited Voice AI calls",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/pricing/enterprise-custom",
      popular: false,
    },
  ]

  const additionalServices = [
    {
      title: "Data Enrichment Services",
      description: "Professional data enrichment and cleansing services",
      link: "https://salescentri.com/services/data-enrichment",
    },
    {
      title: "Custom Implementation",
      description: "Dedicated setup and configuration support",
      link: "https://salescentri.com/pricing/enterprise-custom",
    },
    {
      title: "Training & Onboarding",
      description: "Comprehensive team training programs",
      link: "https://salescentri.com/resources/tutorials-webinars",
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
                Simple, <span className="gradient-text">Transparent</span> Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Choose the perfect plan for your team's lead generation needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold px-8 py-4 text-lg"
                >
                  <Link href="https://salescentri.com/pricing/free-trial">Start 14-Day Free Trial</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-black bg-white hover:bg-purple-50 px-8 py-4 text-lg"
                >
                  <Link href="https://salescentri.com/pricing/plans-overview">View Plans Overview</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`scroll-reveal glass-effect border-white/20 relative ${
                  plan.popular
                    ? "border-purple-400/50 shadow-lg shadow-purple-500/20 scale-105"
                    : "hover:border-purple-400/30"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-black font-semibold px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                      <plan.icon className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-orbitron font-bold text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold"
                        : "bg-white text-black hover:bg-gray-100"
                    } transition-all duration-300`}
                  >
                    <Link href={plan.ctaLink}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="gradient-text">Additional Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional services to maximize your success with AI Hunter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="scroll-reveal glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-white hover:bg-purple-500/20"
                  >
                    <Link href={service.link}>
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal space-y-6">
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-400">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll
                    be billed prorated for the difference.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
                  <p className="text-gray-400">
                    Yes, we offer a 14-day free trial with full access to all features. No credit card required to
                    start.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-400">
                    We accept all major credit cards, PayPal, and wire transfers for enterprise customers.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom enterprise solutions?</h3>
                  <p className="text-gray-400">
                    Yes, we provide custom enterprise solutions with dedicated support, custom integrations, and volume
                    discounts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="scroll-reveal text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-400 text-black bg-white hover:bg-purple-50 px-8 py-4 text-lg"
            >
              <Link href="https://salescentri.com/pricing">
                View Complete Pricing Details
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
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of sales teams already using AI Hunter to supercharge their lead generation
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
