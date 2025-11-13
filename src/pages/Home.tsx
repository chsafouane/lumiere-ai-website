import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BenchmarkChart } from '@/components/BenchmarkChart'
import { Link } from 'react-router-dom'

export function Home() {
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
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-foreground via-primary to-accent bg-clip-text text-transparent">
              Autonomous Agents for Enterprise Operations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Autonomous agents for real business problems
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="who-we-are" className="py-20 bg-gradient-to-br from-card/40 via-card/30 to-background/20 backdrop-blur-sm border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Who We Are</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                LumiereAI is a French AI startup with a straightforward thesis: the next major transformation for businesses is agentic transformation – moving from AI that assists to AI that autonomously executes.
              </p>
              <p>
                While others are still building chatbots and copilots, we're building autonomous agents that actually do the work. We're not consultants. We're not a platform. We're builders who develop custom multi-agent systems that integrate into your operations and work alongside your teams.
              </p>
              <p>
                We aspire to be at the forefront of this transformation, helping companies make the leap from AI-assisted to AI-autonomous operations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="what-we-build" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">What We Build</h2>
            <h3 className="text-2xl font-semibold mb-8">Autonomous Agents That Actually Execute</h3>
            
            <div className="mb-12 space-y-3">
              <p className="text-base md:text-lg">We design systems where agents don't just answer questions – they complete entire workflows:</p>
              <ul className="space-y-2 ml-6 text-base md:text-lg list-disc">
                <li>Plan multi-step processes without constant supervision</li>
                <li>Execute tasks across your existing tools and systems</li>
                <li>Make decisions within defined parameters</li>
                <li>Learn from outcomes and improve over time</li>
                <li>Collaborate with your team in real-time</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold mb-6">What We've Built So Far:</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-[oklch(0.65_0.25_350_/_0.3)] hover:shadow-xl hover:shadow-[oklch(0.65_0.25_350_/_0.2)] transition-all hover:border-[oklch(0.65_0.25_350)] bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Product Onboarding Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    With Mirakl, we built a system with GenAI to automate vendor products onboarding, moving product onboarding time from 24 days to 2 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[oklch(0.70_0.20_50_/_0.3)] hover:shadow-xl hover:shadow-[oklch(0.70_0.20_50_/_0.2)] transition-all hover:border-[oklch(0.70_0.20_50)] bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">JobsMatcher</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Autonomous AI recruitment pipeline that handles CV analysis, conducts multimodal interviews, grades candidates, and performs semantic job matching.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[oklch(0.65_0.25_265_/_0.3)] hover:shadow-xl hover:shadow-[oklch(0.65_0.25_265_/_0.2)] transition-all hover:border-[oklch(0.65_0.25_265)] bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Sales Forecasting Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    With Decathlon, we developed advanced ML forecasting models to predict sales patterns, enabling data-driven inventory decisions and improving forecast accuracy across product categories.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[oklch(0.65_0.25_350_/_0.3)] hover:shadow-xl hover:shadow-[oklch(0.65_0.25_350_/_0.2)] transition-all hover:border-[oklch(0.65_0.25_350)] bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Medical Practice Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    For Doctolib, we built an agentic RAG system that automates administrative workflows for healthcare practitioners, reducing time spent on manual tasks.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[oklch(0.70_0.20_50_/_0.3)] hover:shadow-xl hover:shadow-[oklch(0.70_0.20_50_/_0.2)] transition-all hover:border-[oklch(0.70_0.20_50)] bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Agentic Voice Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    We worked with a customer in real estate to automate interactions with customers through an agentic voice assistant.
                  </p>
                </CardContent>
              </Card>
            </div>

            <BenchmarkChart />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
