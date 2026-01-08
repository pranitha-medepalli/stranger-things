import { motion } from 'framer-motion'
import './UpsideDown.css'

const demogorgans = [
  '/images/demogorgan1.png',
  '/images/demogorgan2.png'
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 }
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut' }
  }
}

const UpsideDown = () => {
  return (
    <section className="upside-down" id="upside-down">

      {/* ⚠️ CAUTION WARNING */}
      <motion.div
        className="upside-warning"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="warning-label">⚠ CAUTION</span>
        <p>
          You are entering a hostile alternate dimension.
          Prolonged exposure may result in hallucinations,
          time distortion, and permanent psychological damage.
        </p>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="upside-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>The Upside Down</h2>
        <p>
          A dark reflection of Hawkins — frozen in time, corrupted by decay,
          where something is always watching.
        </p>
      </motion.div>

      {/* 👹 Demogorgans — scoped ONLY to Upside Down */}
      <motion.div
        className="demogorgon-wrap"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {demogorgans.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Demogorgon"
            className={`demogorgon d${i}`}
            variants={item}
          />
        ))}
      </motion.div>

    </section>
  )
}

export default UpsideDown
