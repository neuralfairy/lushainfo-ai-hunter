"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      setIsVisible(scrollPosition > windowHeight && !isDismissed)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg transform transition-transform duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-white font-semibold">Ready to supercharge your lead generation?</span>
            <div className="hidden sm:flex items-center space-x-2">
              <Button asChild variant="outline" size="sm" className="bg-white text-black hover:bg-gray-100 border-0">
                <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
              </Button>
              <Button asChild size="sm" className="bg-black text-white hover:bg-gray-800">
                <Link href="https://salescentri.com/get-started/free-trial">Start Free Trial</Link>
              </Button>
            </div>
          </div>
          <button onClick={() => setIsDismissed(true)} className="text-white hover:text-gray-200 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
        {/* Mobile CTAs */}
        <div className="sm:hidden flex space-x-2 mt-2">
          <Button asChild variant="outline" size="sm" className="flex-1 bg-white text-black hover:bg-gray-100 border-0">
            <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
          </Button>
          <Button asChild size="sm" className="flex-1 bg-black text-white hover:bg-gray-800">
            <Link href="https://salescentri.com/get-started/free-trial">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
