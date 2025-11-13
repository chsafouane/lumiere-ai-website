import { motion } from 'framer-motion'

export function WhyUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  return (
    <main>
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Why Work With Us</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-semibold mb-3">We're Realistic</h3>
                <p>
                  We won't promise AI will solve everything. Some tasks need humans. Some workflows aren't ready for automation. We'll tell you what will work and what won't.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">We're Technical</h3>
                <p>
                  We have deep AI/ML expertise and business process knowledge. We understand both the technology and how businesses actually operate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">We're Builders</h3>
                <p>
                  We don't just strategize – we write code, deploy systems, fix bugs, and iterate until it works.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">We're French/EU-Based</h3>
                <ul className="space-y-1 list-disc ml-6">
                  <li>Data security and compliance are critical priorities for us</li>
                  <li>On-premise or EU-based cloud deployment options</li>
                  <li>GDPR-native by design</li>
                  <li>We work with leading technology partners and provide sovereign solutions</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6">Who This Is For</h3>
            <p className="text-lg mb-6">We work best with:</p>
            <ul className="space-y-2 list-disc ml-6 mb-8">
              <li>Mid-sized to large European companies ready to experiment with autonomous AI</li>
              <li>Organizations with complex workflows that traditional automation can't handle</li>
              <li>Teams willing to work alongside AI rather than expecting magic</li>
              <li>Companies that understand this is a transformation, not just a tool purchase</li>
            </ul>

            <h4 className="text-xl font-semibold mb-4">Industries We Work In:</h4>
            <p className="text-lg">Financial services, healthcare, manufacturing, retail, e-commerce & energy</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
