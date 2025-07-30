"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search, ArrowRight, HelpCircle, MessageSquare, Book, Phone } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

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

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is AI Hunter and how does it work?",
          answer:
            "AI Hunter is an AI-powered B2B lead generation platform that uses advanced machine learning algorithms to discover verified contact emails and enrich prospect data. It scans millions of data points across the web to find accurate contact information and provides comprehensive company and contact insights.",
        },
        {
          question: "How do I get started with AI Hunter?",
          answer:
            "Getting started is easy! Sign up for our 14-day free trial, no credit card required. Once registered, you can immediately start discovering leads, enriching data, and integrating with your existing CRM systems. Our onboarding team will guide you through the setup process.",
        },
        {
          question: "Do I need technical knowledge to use AI Hunter?",
          answer:
            "No technical knowledge is required. AI Hunter is designed with a user-friendly interface that anyone can use. We also provide comprehensive tutorials, documentation, and support to help you get the most out of the platform.",
        },
        {
          question: "Can I integrate AI Hunter with my existing CRM?",
          answer:
            "Yes! AI Hunter integrates seamlessly with popular CRM platforms including Salesforce, HubSpot, Pipedrive, and many others. Our API also allows for custom integrations with your existing sales stack.",
        },
      ],
    },
    {
      title: "Features & Functionality",
      faqs: [
        {
          question: "How accurate is the email discovery feature?",
          answer:
            "Our AI-powered email discovery maintains a 95% accuracy rate. We use multiple verification methods and real-time validation to ensure the emails we provide are current and deliverable. All emails go through our proprietary verification process before being delivered to you.",
        },
        {
          question: "What is the Voice AI Agent and how does it work?",
          answer:
            "Our Voice AI Agent is an intelligent system that can make outbound calls, conduct natural conversations, and qualify leads automatically. It uses advanced natural language processing to understand responses and can handle complex conversations while maintaining a human-like interaction.",
        },
        {
          question: "How does data enrichment work?",
          answer:
            "Data enrichment automatically fills in missing information about your contacts and companies. When you provide basic information like an email or company name, our system searches across multiple data sources to provide comprehensive details including job titles, company size, industry, social profiles, and more.",
        },
        {
          question: "Can I use AI Hunter for bulk lead generation?",
          answer:
            "AI Hunter is designed to handle both individual lead searches and bulk operations. You can upload lists, search by criteria, or use our API for large-scale lead generation. Different plans offer different volume limits to match your needs.",
        },
      ],
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "What pricing plans are available?",
          answer:
            "We offer three main plans: Starter ($49/month), Professional ($149/month), and Enterprise (custom pricing). Each plan includes different features and usage limits. All plans come with a 14-day free trial so you can test the platform before committing.",
        },
        {
          question: "Can I change my plan anytime?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be billed prorated for the difference. There are no long-term contracts or cancellation fees.",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial. This gives you plenty of time to explore the platform and see how it can benefit your sales process.",
        },
        {
          question: "Do you offer enterprise discounts?",
          answer:
            "Yes, we provide custom enterprise solutions with volume discounts, dedicated support, and additional features. Contact our sales team to discuss your specific requirements and get a custom quote.",
        },
      ],
    },
    {
      title: "Data & Compliance",
      faqs: [
        {
          question: "Is AI Hunter GDPR compliant?",
          answer:
            "Yes, AI Hunter is fully GDPR compliant. We only collect and process data from publicly available sources and provide tools for data subjects to request removal of their information. We also maintain strict data security standards and provide transparency in our data handling practices.",
        },
        {
          question: "How do you ensure data security?",
          answer:
            "We maintain enterprise-grade security with SOC 2 certification, end-to-end encryption, and regular security audits. All data is stored in secure, compliant data centers with multiple layers of protection. We also provide detailed security documentation for enterprise customers.",
        },
        {
          question: "Where does the contact data come from?",
          answer:
            "Our data comes from publicly available sources including company websites, professional networks, business directories, and social media platforms. We use AI to aggregate and verify this information, ensuring accuracy while respecting privacy regulations.",
        },
        {
          question: "Can contacts opt out of your database?",
          answer:
            "Yes, we provide easy opt-out mechanisms for individuals who don't want their information in our database. We honor all opt-out requests promptly and maintain suppression lists to prevent re-inclusion of opted-out contacts.",
        },
      ],
    },
    {
      title: "Support & Training",
      faqs: [
        {
          question: "What support options are available?",
          answer:
            "We offer multiple support channels including live chat (24/7), email support, phone support during business hours, and a comprehensive knowledge base. Professional and Enterprise customers receive priority support with faster response times.",
        },
        {
          question: "Do you provide training for new users?",
          answer:
            "Yes! We offer comprehensive onboarding for all new customers, including video tutorials, webinars, and one-on-one training sessions for Enterprise customers. Our resource center also contains detailed guides and best practices.",
        },
        {
          question: "How can I access the user documentation?",
          answer:
            "Our complete user guide and API documentation are available at salescentri.com/docs. This includes step-by-step tutorials, integration guides, and troubleshooting resources. The documentation is regularly updated with new features and improvements.",
        },
        {
          question: "Can I get help with implementation?",
          answer:
            "Our customer success team can help with implementation, CRM integration, and workflow optimization. Enterprise customers receive dedicated account management and custom implementation support.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  const helpResources = [
    {
      icon: Book,
      title: "User Guide",
      description: "Comprehensive documentation and tutorials",
      link: "https://salescentri.com/docs/user-guide",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "24/7 instant support from our team",
      link: "https://salescentri.com/contact/support-request/live-chat",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      link: "https://salescentri.com/contact/support-request",
    },
  ]

  return (
    <div className="pt-20">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap((category) =>
              category.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            ),
          }),
        }}
      />

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
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find answers to common questions about AI Hunter and our services
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="scroll-reveal text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search terms or browse our categories below</p>
                <Button
                  onClick={() => setSearchTerm("")}
                  variant="outline"
                  className="border-purple-400 text-black bg-white hover:bg-purple-50"
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredFAQs.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="scroll-reveal">
                    <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
                      <span className="gradient-text">{category.title}</span>
                    </h2>
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 100 + faqIndex
                        const isOpen = openItems.includes(globalIndex)

                        return (
                          <Card
                            key={faqIndex}
                            className="glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300"
                          >
                            <CardContent className="p-0">
                              <button
                                onClick={() => toggleItem(globalIndex)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                              >
                                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                                {isOpen ? (
                                  <ChevronUp className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                )}
                              </button>
                              {isOpen && (
                                <div className="px-6 pb-6">
                                  <div className="border-t border-white/10 pt-4">
                                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Need More <span className="gradient-text">Help?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Can't find what you're looking for? Try these additional resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {helpResources.map((resource, index) => (
              <Card
                key={index}
                className="scroll-reveal glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <resource.icon className="h-8 w-8 text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold w-full"
                  >
                    <Link href={resource.link}>
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

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal max-w-4xl mx-auto">
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                <h2 className="text-3xl font-orbitron font-bold mb-6 text-white">Still Have Questions?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our support team is here to help. Get in touch and we'll respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold px-8 py-4 text-lg"
                  >
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-purple-400 text-black bg-white hover:bg-purple-50 px-8 py-4 text-lg"
                  >
                    <Link href="https://salescentri.com/contact/support-request/submit-ticket">
                      Submit Ticket
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
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
              Start your free trial today and experience the power of AI-driven lead generation
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
