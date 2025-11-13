import { useState } from 'react'
import { List, X, EnvelopeSimple, Globe, MapPin } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import lumiereLogo from '@/assets/images/lumiere-logo.svg'
import { BenchmarkChart } from '@/components/BenchmarkChart'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Who We Are', id: 'who-we-are' },
    { label: 'What We Build', id: 'what-we-build' },
    { label: 'Our Approach', id: 'our-approach' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Contact', id: 'contact' },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90 border-b border-border/50 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center p-1.5 shadow-lg shadow-primary/40">
                <img 
                  src={lumiereLogo} 
                  alt="Lumiere AI Logo" 
                  className="h-full w-full logo-rotate"
                />
              </div>
              <span className="font-display font-bold text-xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">LUMIERE AI</span>
            </div>
            
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
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
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

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

        <section id="our-approach" className="py-20 bg-gradient-to-br from-card/40 via-card/30 to-background/20 backdrop-blur-sm border-y border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Our Approach</h2>
              <p className="text-lg mb-12">
                We've developed a methodology that balances speed with proper adoption:
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-[oklch(0.65_0.25_350_/_0.3)] bg-card/50 backdrop-blur-sm hover:border-[oklch(0.65_0.25_350)] hover:shadow-lg hover:shadow-[oklch(0.65_0.25_350_/_0.2)] transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl">Phase 1: Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-2 text-sm list-disc ml-4">
                      <li>Audit your operations to find high-impact automation opportunities</li>
                      <li>Workshop with your teams to understand workflows</li>
                      <li>Map out what's actually automatable vs. what still needs humans</li>
                      <li>Build a realistic roadmap</li>
                    </ul>
                    <div className="pt-4">
                      <p className="font-semibold text-sm">Deliverable:</p>
                      <p className="text-sm">Clear assessment of where agents can help and where they can't</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[oklch(0.70_0.20_50_/_0.3)] bg-card/50 backdrop-blur-sm hover:border-[oklch(0.70_0.20_50)] hover:shadow-lg hover:shadow-[oklch(0.70_0.20_50_/_0.2)] transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl">Phase 2: Build</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-2 text-sm list-disc ml-4">
                      <li>Design and develop custom agents tailored to your specific workflows</li>
                      <li>Integrate natively with your existing tools</li>
                      <li>Set up our orchestration system</li>
                      <li>Test rigorously against real scenarios</li>
                      <li>Train your team on working with agents</li>
                    </ul>
                    <div className="pt-4">
                      <p className="font-semibold text-sm">Deliverable:</p>
                      <p className="text-sm">Working agents that actually solve your problems</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[oklch(0.65_0.25_265_/_0.3)] bg-card/50 backdrop-blur-sm hover:border-[oklch(0.65_0.25_265)] hover:shadow-lg hover:shadow-[oklch(0.65_0.25_265_/_0.2)] transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl">Phase 3: Optimize</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-2 text-sm list-disc ml-4">
                      <li>Deploy on our infrastructure or yours</li>
                      <li>Monitor performance and fix issues as they come up</li>
                      <li>Expand capabilities as new use cases emerge</li>
                      <li>Keep the system learning and improving</li>
                    </ul>
                    <div className="pt-4">
                      <p className="font-semibold text-sm">Deliverable:</p>
                      <p className="text-sm">Agents that get better over time, not worse</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">How It Actually Works: Our Orchestration System</h2>
              <p className="text-lg mb-12">
                We've built a proprietary multi-layer orchestration system for managing complex agent operations. It's inspired by research from Anthropic and Microsoft, but adapted for real enterprise environments.
              </p>

              <h3 className="text-2xl font-semibold mb-8">The Architecture:</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="border-2 border-primary bg-gradient-to-br from-primary/20 to-primary/5 text-foreground shadow-xl shadow-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl">ORCHESTRATOR</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Takes a high-level task, breaks it into steps, routes work to the right agents
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[oklch(0.70_0.20_50)] bg-gradient-to-br from-[oklch(0.70_0.20_50_/_0.2)] to-[oklch(0.70_0.20_50_/_0.05)] text-foreground shadow-xl shadow-[oklch(0.70_0.20_50_/_0.3)]">
                  <CardHeader>
                    <CardTitle className="text-xl">SUPERVISOR</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Watches agents work, catches errors, tracks quality and performance
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[oklch(0.65_0.25_350)] bg-gradient-to-br from-[oklch(0.65_0.25_350_/_0.2)] to-[oklch(0.65_0.25_350_/_0.05)] text-foreground shadow-xl shadow-[oklch(0.65_0.25_350_/_0.3)]">
                  <CardHeader>
                    <CardTitle className="text-xl">JUDGE</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Validates outputs, handles approvals, escalates to humans when needed
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl">WORKER AGENTS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Specialized agents that do the actual work: finance, HR, operations, customer service, etc.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg font-semibold mb-12">This isn't theoretical – it's what runs our systems in production today.</p>

              <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Core AI:</h4>
                  <ul className="space-y-2 list-disc ml-6">
                    <li>Claude/Gemini/Mistral for reasoning and decision-making</li>
                    <li>LangGraph/Google ADK/Claude SDK for agent orchestration</li>
                    <li>A2A protocol</li>
                    <li>Custom fine-tuning when needed</li>
                    <li>RAG for dynamic knowledge integration</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Integration:</h4>
                  <ul className="space-y-2 list-disc ml-6">
                    <li>Model Context Protocol (MCP) for system connectivity</li>
                    <li>Custom MCP servers for proprietary integrations</li>
                    <li>Connection to your existing work tools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Infrastructure:</h4>
                  <ul className="space-y-2 list-disc ml-6">
                    <li>On cloud or on-premise (hosting in Europe or in France as needed)</li>
                    <li>PostgreSQL and vector databases</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Testing:</h4>
                  <ul className="space-y-2 list-disc ml-6">
                    <li>Custom benchmarks for domain-specific tasks</li>
                    <li>Assist in the creation of business metrics adapted to the need</li>
                    <li>Real-world scenario testing</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="vision" className="py-20 bg-gradient-to-br from-card/40 via-card/30 to-background/20 backdrop-blur-sm border-y border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Our Long-Term Vision: Agent as a Service</h2>
              <p className="text-lg mb-8">
                Beyond custom builds, we're working toward something bigger: Agent as a Service (AaaS).
              </p>
              <p className="text-lg mb-8">
                Here's the idea: instead of selling you software or consulting hours, we loan you an agent. But not just any agent – one that actually learns and grows with your company.
              </p>

              <h3 className="text-2xl font-semibold mb-6">How It's Different:</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">Traditional Chatbots:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm list-disc ml-4">
                      <li>Static responses based on a fixed knowledge base</li>
                      <li>"Memory" is just appending context to a prompt</li>
                      <li>No real learning or adaptation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary bg-gradient-to-br from-primary/20 to-primary/5 text-foreground shadow-xl shadow-primary/30">
                  <CardHeader>
                    <CardTitle className="text-xl">Our Agent:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm list-disc ml-4">
                      <li>Learns through nested learning, fine-tuning, and continuous training on your data</li>
                      <li>Adapts to your company's policies, workflows, and best practices</li>
                      <li>If mistakes made, it learns from them, improves over time</li>
                      <li>Functions like a junior team member who gets better at the job</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="text-base italic mb-4">
                Think of it like hiring a junior developer. They start not knowing your codebase, they make mistakes, they ask questions, but over time they become valuable contributors who understand how your team works. That's what we're building, but for AI agents.
              </p>
              <p className="text-base text-muted-foreground">
                We're not there yet – this is our long-term vision. But the systems we're building now are the foundation.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="why-us" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Why Work With Us</h2>
              
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

        <section id="comparison" className="py-20 bg-card/30 backdrop-blur-sm border-y border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">What Makes Us Different from Devin?</h2>
              <p className="text-lg mb-8">
                People ask us this a lot since we describe ourselves as "the French Devin for business."
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-2 border-border/50 bg-card/50 backdrop-blur-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border/50 p-4 text-left font-semibold"></th>
                      <th className="border border-border/50 p-4 text-left font-semibold">Devin</th>
                      <th className="border border-border/50 p-4 text-left font-semibold">Lumiere AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border/50 p-4 font-semibold">What it does</td>
                      <td className="border border-border/50 p-4">Autonomous software engineering – writes, tests, debugs, and deploys code</td>
                      <td className="border border-border/50 p-4">Autonomous business operations – finance, HR, customer service, operations</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="border border-border/50 p-4 font-semibold">Where it runs</td>
                      <td className="border border-border/50 p-4">Devin's cloud environment</td>
                      <td className="border border-border/50 p-4">Your infrastructure or ours</td>
                    </tr>
                    <tr>
                      <td className="border border-border/50 p-4 font-semibold">Who uses it</td>
                      <td className="border border-border/50 p-4">Engineering teams</td>
                      <td className="border border-border/50 p-4">Entire organizations</td>
                    </tr>
                    <tr className="bg-card/30">
                      <td className="border border-border/50 p-4 font-semibold">Geography</td>
                      <td className="border border-border/50 p-4">US-based</td>
                      <td className="border border-border/50 p-4">French/EU-based</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg font-semibold mt-8">
                The analogy: Devin is an AI software engineer. We're building AI employees for every other role.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="status" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Current Status</h2>
              <div className="space-y-4 text-lg">
                <p>
                  We're a startup. We have clients. We have working systems in production. We're learning what works and what doesn't.
                </p>
                <p>
                  We're actively taking on new projects with companies ready to explore agentic transformation. If you're interested, let's talk about what's actually possible for your specific situation.
                </p>
              </div>

              <div className="mt-12 p-8 border-2 border-primary bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl shadow-primary/30 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-lg">
                  Build autonomous agent systems that actually work in real enterprise environments, helping European companies lead in the shift from assistive to agentic AI.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-card/40 via-card/30 to-background/20 backdrop-blur-sm border-y border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Get In Touch</h2>
              <div className="space-y-4 text-lg mb-12">
                <p>
                  If you're thinking about how autonomous agents could help your operations, we'd be happy to discuss specifics.
                </p>
                <p className="font-semibold">
                  No sales pitch. No overpromising. Just a realistic conversation about what's possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <EnvelopeSimple size={24} weight="bold" className="text-primary" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:contact@lumiereai.dev" className="text-lg hover:underline text-primary">
                      contact@lumiereai.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Globe size={24} weight="bold" className="text-[oklch(0.70_0.20_50)]" />
                  <div>
                    <p className="font-semibold mb-1">Web</p>
                    <a href="https://www.lumiere-ai.fr" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline text-[oklch(0.70_0.20_50)]">
                      www.lumiere-ai.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin size={24} weight="bold" className="text-[oklch(0.65_0.25_350)]" />
                  <div>
                    <p className="font-semibold mb-1">Based in</p>
                    <p className="text-lg">Paris, France</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/50 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Lumiere AI - Autonomous agents for real business problems
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App