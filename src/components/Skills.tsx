import { motion } from 'framer-motion'

const SKILLS = [
  { name: 'React', level: 90, color: '#4ECDC4' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'Vue.js', level: 80, color: '#4FC08D' },
  { name: 'Node.js', level: 75, color: '#339933' },
  { name: 'CSS / Tailwind', level: 90, color: '#06B6D4' },
  { name: 'Python', level: 70, color: '#FFE66D' },
  { name: 'Git', level: 85, color: '#F05032' },
  { name: 'Docker', level: 65, color: '#2496ED' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 gradient-text"
        >
          技能
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              custom={i}
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex justify-between mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-white/50 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                  className="h-full rounded-full group-hover:brightness-125 transition-all"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
