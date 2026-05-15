import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PHRASES = ['前端开发者', '创意设计师', '终身学习者', '代码艺术家 ✨']

export default function Hero() {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = PHRASES[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 100)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 50)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setPhraseIdx((phraseIdx + 1) % PHRASES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  useEffect(() => {
    setText(PHRASES[phraseIdx].slice(0, charIdx))
  }, [charIdx, phraseIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center z-10"
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="text-7xl md:text-9xl mb-6"
        >
          👋
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight"
        >
          <span className="text-white/80">你好，我是</span>
          <br />
          <span className="gradient-text">Eleven</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-3xl text-brand-blue h-12 flex items-center justify-center gap-1"
        >
          <span className="text-white/50">我是一名</span>
          <span>{text}</span>
          <span className="animate-pulse text-brand-pink">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex gap-4 justify-center"
        >
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold hover:shadow-lg hover:shadow-brand-purple/30 transition-all hover:scale-105"
          >
            查看我的作品
          </button>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 rounded-full border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all hover:scale-105"
          >
            联系我
          </button>
        </motion.div>
      </div>
    </section>
  )
}
