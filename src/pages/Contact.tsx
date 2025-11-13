import { motion } from 'framer-motion'
import { EnvelopeSimple, Globe, MapPin, PaperPlaneTilt } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const subject = encodeURIComponent(`Contact from ${formData.name} - ${formData.company}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`)
      
      window.location.href = `mailto:contact@lumiereai.dev?subject=${subject}&body=${body}`
      
      toast.success('Email client opened! Complete sending the message.')
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      })
    } catch (error) {
      toast.error('Failed to open email client. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main>
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Get In Touch</h1>
            <div className="space-y-4 text-lg mb-12">
              <p>
                If you're thinking about how autonomous agents could help your operations, we'd be happy to discuss specifics.
              </p>
              <p className="font-semibold">
                No sales pitch. No overpromising. Just a realistic conversation about what's possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                    <EnvelopeSimple size={24} weight="bold" className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-lg">Email</p>
                    <a href="mailto:contact@lumiereai.dev" className="text-lg hover:underline text-primary">
                      contact@lumiereai.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[oklch(0.70_0.20_50_/_0.2)] border border-[oklch(0.70_0.20_50_/_0.3)]">
                    <Globe size={24} weight="bold" className="text-[oklch(0.70_0.20_50)]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-lg">Web</p>
                    <a href="https://www.lumiere-ai.fr" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline text-[oklch(0.70_0.20_50)]">
                      www.lumiere-ai.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[oklch(0.65_0.25_350_/_0.2)] border border-[oklch(0.65_0.25_350_/_0.3)]">
                    <MapPin size={24} weight="bold" className="text-[oklch(0.65_0.25_350)]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-lg">Based in</p>
                    <p className="text-lg">Paris, France</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project and how we can help..."
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50"
                    size="lg"
                  >
                    <PaperPlaneTilt size={20} weight="bold" className="mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
