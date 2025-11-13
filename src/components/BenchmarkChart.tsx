import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts'

const data = [
  { name: 'Traditional\nAutomation', value: 45, color: 'oklch(0.65 0.25 350)' },
  { name: 'Standard\nAI Tools', value: 68, color: 'oklch(0.70 0.20 50)' },
  { name: 'Lumiere AI\nAgents', value: 94, color: 'oklch(0.65 0.25 265)' }
]

export function BenchmarkChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-card/80 to-background/60 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6 md:p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.02_265_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.02_265_/_0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-display font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Performance Comparison
        </h3>
        <p className="text-sm text-muted-foreground mb-6">Task Completion Efficiency (%)</p>
        
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.02 265 / 0.3)" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="oklch(0.68 0.05 265)"
              tick={{ fill: 'oklch(0.68 0.05 265)', fontSize: 12 }}
              interval={0}
              angle={0}
              textAnchor="middle"
            />
            <YAxis 
              stroke="oklch(0.68 0.05 265)"
              tick={{ fill: 'oklch(0.68 0.05 265)', fontSize: 12 }}
              domain={[0, 100]}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={80}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke={entry.color}
                  strokeWidth={2}
                  style={{
                    filter: `drop-shadow(0 4px 12px ${entry.color}40)`
                  }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs md:text-sm">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-sm" 
                style={{ 
                  backgroundColor: item.color,
                  boxShadow: `0 0 8px ${item.color}80`
                }}
              />
              <span className="text-muted-foreground">{item.name.replace('\n', ' ')}</span>
              <span className="font-semibold text-foreground">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
