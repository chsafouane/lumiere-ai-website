import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function OurApproach() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Our Approach</h1>
            <p className="text-lg mb-12">
              We've developed a methodology that balances speed with proper adoption:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
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

      <section className="py-20 bg-gradient-to-br from-card/40 via-card/30 to-background/20 backdrop-blur-sm border-y border-border/30">
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
    </main>
  )
}
