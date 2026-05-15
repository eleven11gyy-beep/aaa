import { motion } from 'framer-motion'

const TAGS = ['🚀 热爱新技术', '🎨 注重用户体验', '🧩 喜欢解构问题', '🎧 音乐爱好者', '☕ 咖啡驱动开发']

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
}

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-4 gradient-text"
          >
            关于我
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="relative backdrop-blur-sm bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all"
          >
            {/* Decorative circles */}
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-brand-pink/30 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-brand-blue/30 animate-float-delay" />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              你好！我是一名充满激情的前端开发者，热衷于用代码创造美妙的数字体验。
              我相信好的设计能让世界变得更美好，每一行代码都应该服务于用户的体验。
              在工作之外，我喜欢探索新技术、分享知识，以及在开源社区中贡献力量。
            </p>

            <div className="flex flex-wrap gap-3">
              {TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  variants={fadeUp}
                  custom={i + 2}
                  className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:scale-110 transition-transform cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
