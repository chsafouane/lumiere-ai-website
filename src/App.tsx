import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'
import lumiereLogo from '@/assets/images/lumiere-logo.svg'
import { Home } from '@/pages/Home'
import { OurApproach } from '@/pages/OurApproach'
import { Vision } from '@/pages/Vision'
import { WhyUs } from '@/pages/WhyUs'
import { Contact } from '@/pages/Contact'
import { Toaster } from '@/components/ui/sonner'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Our Approach', path: '/our-approach' },
    { label: 'Vision', path: '/vision' },
    { label: 'Why Us', path: '/why-us' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90 border-b border-border/50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center p-1.5 shadow-md shadow-primary/20">
              <img
                src={lumiereLogo}
                alt="Lumiere AI Logo"
                className="h-full w-full logo-rotate"
              />
            </div>
            <span className="font-display font-bold text-xl text-foreground">LUMIERE AI</span>
          </Link>
          
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm rounded-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm rounded-lg transition-all shadow-lg shadow-primary/25"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Lumiere AI - Autonomous agents for real business problems
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navigation />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App