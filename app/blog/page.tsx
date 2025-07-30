"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, BookOpen, FileText, Video } from "lucide-react"

export default function BlogPage() {
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

  const featuredPost = {
    title: "The Future of AI-Powered B2B Sales: 2024 Trends and Predictions",
    excerpt:
      "Discover how artificial intelligence is reshaping the B2B sales landscape and what it means for your business.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "AI Trends",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
  }

  const blogPosts = [
    {
      title: "How to Increase Lead Generation ROI by 300% with AI Hunter",
      excerpt:
        "Learn the proven strategies that top sales teams use to maximize their lead generation return on investment.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "Lead Generation",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Voice AI Agents: The Game-Changer for Sales Outreach",
      excerpt: "Explore how voice AI technology is revolutionizing sales outreach and qualification processes.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "Voice AI",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Data Enrichment Best Practices for B2B Sales Teams",
      excerpt:
        "Master the art of data enrichment to build comprehensive prospect profiles and improve conversion rates.",
      author: "David Kim",
      date: "2024-01-08",
      category: "Data Strategy",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Building High-Converting Email Sequences with AI",
      excerpt:
        "Discover how AI can help you create personalized email sequences that drive engagement and conversions.",
      author: "Lisa Wang",
      date: "2024-01-05",
      category: "Email Marketing",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "The Complete Guide to CRM Integration for Lead Management",
      excerpt: "Step-by-step guide to integrating AI Hunter with your existing CRM for seamless lead management.",
      author: "James Wilson",
      date: "2024-01-03",
      category: "Integration",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Compliance and Security in AI-Powered Lead Generation",
      excerpt: "Understanding GDPR, data privacy, and security best practices when using AI for lead generation.",
      author: "Sarah Johnson",
      date: "2024-01-01",
      category: "Compliance",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = [
    "All Posts",
    "AI Trends",
    "Lead Generation",
    "Voice AI",
    "Data Strategy",
    "Email Marketing",
    "Integration",
    "Compliance",
  ]

  const resources = [
    {
      icon: FileText,
      title: "Whitepapers & eBooks",
      description: "In-depth guides and research reports",
      link: "https://salescentri.com/resources/whitepapers-ebooks",
    },
    {
      icon: BookOpen,
      title: "Case Studies",
      description: "Real success stories from our clients",
      link: "https://salescentri.com/resources/case-studies",
    },
    {
      icon: Video,
      title: "Tutorials & Webinars",
      description: "Video content and live training sessions",
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
                AI Hunter <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Insights, strategies, and updates on AI-powered B2B sales intelligence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal mb-16">
            <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
              <span className="gradient-text">Featured Article</span>
            </h2>
            <Card className="glass-effect border-white/20 overflow-hidden max-w-4xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-400/30 mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="scroll-reveal mb-8">
                <h2 className="text-3xl font-orbitron font-bold mb-6">
                  Latest <span className="gradient-text">Articles</span>
                </h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={index === 0 ? "default" : "outline"}
                      size="sm"
                      className={
                        index === 0
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-black"
                          : "border-white/20 text-gray-300 hover:text-white hover:border-purple-400/50"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="scroll-reveal glass-effect border-white/20 hover:border-purple-400/50 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-purple-500/20 text-purple-400 border-purple-400/30">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-400 hover:text-white hover:bg-purple-500/20 p-0"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="scroll-reveal text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-black bg-white hover:bg-purple-50 px-8 py-4"
                >
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="scroll-reveal space-y-8">
                {/* Newsletter Signup */}
                <Card className="glass-effect border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4 text-sm">
                      Get weekly insights on B2B sales intelligence and AI trends delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-gray-400 text-sm"
                      />
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-black font-semibold"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Resources */}
                <Card className="glass-effect border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">More Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {resources.map((resource, index) => (
                      <div key={index} className="flex items-start space-x-3 group">
                        <div className="p-2 rounded bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                          <resource.icon className="h-4 w-4 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <Link href={resource.link} className="block group-hover:text-purple-400 transition-colors">
                            <h4 className="font-semibold text-white text-sm mb-1">{resource.title}</h4>
                            <p className="text-gray-400 text-xs">{resource.description}</p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card className="glass-effect border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AI",
                        "Lead Generation",
                        "B2B Sales",
                        "Voice AI",
                        "Data Enrichment",
                        "CRM",
                        "Automation",
                        "ROI",
                      ].map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-white/20 text-gray-300 hover:border-purple-400/50 hover:text-purple-400 cursor-pointer transition-colors text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Put these insights into action with AI Hunter's powerful lead generation platform
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
