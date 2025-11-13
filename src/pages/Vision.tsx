import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Vision() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Our Long-Term Vision: Agent as a Service</h1>
            <p className="text-lg mb-8">
              Beyond custom builds, we're working toward something bigger: Agent as a Service (AaaS).
            </p>
            <p className="text-lg mb-8">
              Here's the idea: instead of selling you software or consulting hours, we loan you an agent. But not just any agent – one that actually learns and grows with your company.
            </p>

            <h2 className="text-3xl font-semibold mb-6 mt-16">How It's Different:</h2>
            
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
            <p className="text-base text-muted-foreground mb-16">
              We're not there yet – this is our long-term vision. But the systems we're building now are the foundation.
            </p>

            <div className="mt-12 p-8 border-2 border-primary bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl shadow-primary/30 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-lg">
                Build autonomous agent systems that actually work in real enterprise environments, helping European companies lead in the shift from assistive to agentic AI.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-card/40 via-card/30 to-background/20 backdrop-blur-sm border-y border-border/30">
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

      <section className="py-20">
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
          </motion.div>
        </div>
      </section>
    </main>
  )
}
