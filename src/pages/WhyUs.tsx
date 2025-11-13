import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WhyUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Why Work With Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're not consultants. We're not a platform. We're builders who develop custom multi-agent systems that integrate into your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="py-20 bg-card/30 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp}>
              <Card className="border-2 border-[oklch(0.65_0.25_350_/_0.3)] hover:border-[oklch(0.65_0.25_350)] hover:shadow-xl hover:shadow-[oklch(0.65_0.25_350_/_0.2)] transition-all bg-card/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">We're Realistic</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We won't promise AI will solve everything. Some tasks need humans. Some workflows aren't ready for automation. We'll tell you what will work and what won't.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="border-2 border-[oklch(0.70_0.20_50_/_0.3)] hover:border-[oklch(0.70_0.20_50)] hover:shadow-xl hover:shadow-[oklch(0.70_0.20_50_/_0.2)] transition-all bg-card/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">We're Technical</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We have deep AI/ML expertise and business process knowledge. We understand both the technology and how businesses actually operate.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="border-2 border-[oklch(0.65_0.25_265_/_0.3)] hover:border-[oklch(0.65_0.25_265)] hover:shadow-xl hover:shadow-[oklch(0.65_0.25_265_/_0.2)] transition-all bg-card/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">We're Builders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We don't just strategize – we write code, deploy systems, fix bugs, and iterate until it works.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="border-2 border-primary/40 hover:border-primary hover:shadow-xl hover:shadow-primary/30 transition-all bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">We're French/EU-Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Data security and compliance are critical priorities for us</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>On-premise or EU-based cloud deployment options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>GDPR-native by design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>We work with leading technology partners and provide sovereign solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Who This Is For
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">We work best with:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-2">Enterprise Ready</h4>
                  <p className="text-sm text-muted-foreground">Mid-sized to large European companies ready to experiment with autonomous AI</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                <span className="text-2xl">⚙️</span>
                <div>
                  <h4 className="font-semibold mb-2">Complex Workflows</h4>
                  <p className="text-sm text-muted-foreground">Organizations with complex workflows that traditional automation can't handle</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                <span className="text-2xl">🤝</span>
                <div>
                  <h4 className="font-semibold mb-2">Collaborative Mindset</h4>
                  <p className="text-sm text-muted-foreground">Teams willing to work alongside AI rather than expecting magic</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-6 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-2">Transformation Focus</h4>
                  <p className="text-sm text-muted-foreground">Companies that understand this is a transformation, not just a tool purchase</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-card/30 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-center">
              Industries We Work In
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-6 bg-card border border-border/50 rounded-lg text-center hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold text-sm">Financial Services</h4>
              </div>
              <div className="p-6 bg-card border border-border/50 rounded-lg text-center hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">🏥</div>
                <h4 className="font-semibold text-sm">Healthcare</h4>
              </div>
              <div className="p-6 bg-card border border-border/50 rounded-lg text-center hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">🏭</div>
                <h4 className="font-semibold text-sm">Manufacturing</h4>
              </div>
              <div className="p-6 bg-card border border-border/50 rounded-lg text-center hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">🛍️</div>
                <h4 className="font-semibold text-sm">Retail</h4>
              </div>
              <div className="p-6 bg-card border border-border/50 rounded-lg text-center hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">🛒</div>
                <h4 className="font-semibold text-sm">E-commerce</h4>
              </div>
              <div className="p-6 bg-card border border-border/50 rounded-lg text-center hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold text-sm">Energy</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
