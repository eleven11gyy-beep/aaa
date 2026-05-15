import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi'

const LINKS = [
  { icon: FiGithub, label: 'GitHub', href: '#' },
  { icon: FiMail, label: 'Email', href: '#' },
  { icon: FiTwitter, label: 'Twitter', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text"
        >
          联系我
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-12"
        >
          有想法或合作意向？随时联系我！
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-16"
        >
          {LINKS.map(({ icon: Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-brand-pink group-hover:to-brand-purple group-hover:border-transparent transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-purple/20">
                <Icon className="text-2xl text-white/70 group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10"
        >
          <p className="text-gray-400 mb-4">或发送邮件到</p>
          <p className="text-xl md:text-2xl gradient-text font-display font-bold">
            hello@eleven.dev
          </p>
        </motion.div>
      </div>
    </section>
  )
}
