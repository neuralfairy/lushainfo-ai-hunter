import Link from "next/link"
import { Zap, MapPin, Mail } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "API Reference", href: "https://salescentri.com/docs/api-reference" },
      { name: "User Guide", href: "https://salescentri.com/docs/user-guide" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Leadership Team", href: "https://salescentri.com/company/about-us/leadership-team" },
      { name: "Careers", href: "https://salescentri.com/company/careers" },
      { name: "Partner Portal", href: "https://salescentri.com/login/partner-portal" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
      { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
      { name: "Tutorials", href: "https://salescentri.com/resources/tutorials-webinars" },
    ],
    support: [
      { name: "Contact", href: "/contact" },
      { name: "Support Request", href: "https://salescentri.com/contact/support-request" },
      { name: "Live Chat", href: "https://salescentri.com/contact/support-request/live-chat" },
      { name: "Submit Ticket", href: "https://salescentri.com/contact/support-request/submit-ticket" },
    ],
  }

  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-purple-400" />
              <div className="flex flex-col">
                <span className="font-orbitron text-xl font-bold gradient-text">AI Hunter</span>
                <span className="text-xs text-gray-400">Powered by Lush AI Info</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm">
              AI Hunter by Lush AI Info - Advanced AI-powered lead discovery and contact enrichment platform for modern
              B2B sales teams.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Austin, TX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@lushainfo.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <Link
                href="https://salescentri.com/trust/security-privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link
                href="https://salescentri.com/trust/compliance-certifications"
                className="hover:text-white transition-colors"
              >
                Compliance
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <Link
                href="https://salescentri.com?utm_source=lushainfo.com&utm_medium=footer&utm_campaign=partner_network"
                className="hover:text-purple-400 transition-colors"
              >
                Powered by Sales Intelligence Platform
              </Link>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-gray-500">© 2024 Lushainfo Solutions. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
