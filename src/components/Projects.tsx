import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const PROJECTS = [
  {
    title: '电商平台',
    desc: '全栈电商应用，包含商品展示、购物车、支付集成等完整功能。',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-brand-pink to-brand-purple',
  },
  {
    title: '数据可视化仪表盘',
    desc: '实时数据监控面板，支持拖拽布局和多种图表类型。',
    tags: ['TypeScript', 'D3.js', 'WebSocket'],
    gradient: 'from-brand-blue to-green-400',
  },
  {
    title: 'AI 聊天助手',
    desc: '基于大语言模型的智能对话应用，支持多轮对话和上下文理解。',
    tags: ['Python', 'FastAPI', 'LLM'],
    gradient: 'from-brand-orange to-brand-yellow',
  },
  {
    title: '个人博客系统',
    desc: '支持 Markdown 编辑、标签分类和全文搜索的静态博客。',
    tags: ['Next.js', 'MDX', 'Tailwind'],
    gradient: 'from-brand-purple to-brand-blue',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 gradient-text"
        >
          项目作品
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.title}
              variants={fadeUp}
              custom={i}
              className="card-hover group relative backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-white/20 cursor-pointer"
            >
              {/* Gradient top strip */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${proj.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                  {proj.title}
                </h3>
                <FiExternalLink className="text-white/30 group-hover:text-white transition-colors text-lg mt-1" />
              </div>

              <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70 group-hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
