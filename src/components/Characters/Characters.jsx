import { motion } from 'framer-motion'
import './Characters.css'

const characters = [
  {
    name: 'Eleven',
    desc: 'A girl with psychokinetic abilities who opened the gate to the Upside Down.',
    img: `${import.meta.env.BASE_URL}images/eleven1.jpg`
  },
  {
    name: 'Mike Wheeler',
    desc: 'A loyal leader driven by courage and empathy.',
    img: `${import.meta.env.BASE_URL}images/mike1.jpg`
  },
  {
    name: 'Will Byers',
    desc: 'A sensitive boy deeply connected to the Upside Down.',
    img: `${import.meta.env.BASE_URL}images/will.jpg`
  },
  {
    name: 'Vecna',
    desc: 'A terrifying entity from the Upside Down feeding on trauma.',
    img: `${import.meta.env.BASE_URL}images/henry.jpg`
  },
  {
    name: 'Lucas Sinclair',
    desc: 'A brave and practical thinker who always stands his ground.',
    img: `${import.meta.env.BASE_URL}images/lucas1.jpg`
  },
  {
    name: 'Max Mayfield',
    desc: 'A fearless skateboarder with a strong will and troubled past.',
    img: `${import.meta.env.BASE_URL}images/max1.jpg`
  },
  {
    name: 'Dustin Henderson',
    desc: 'The heart of the group, known for his intelligence and humor.',
    img: `${import.meta.env.BASE_URL}images/dustin2.jpg`
  },
  {
    name: 'Steve Harrington',
    desc: 'From high school star to the group’s most reliable protector.',
    img: `${import.meta.env.BASE_URL}images/steve1.jpg`
  },
  {
    name: 'Nancy Wheeler',
    desc: 'A determined investigator who refuses to ignore the truth.',
    img: `${import.meta.env.BASE_URL}images/nancy.jpg`
  },
  {
    name: 'Jonathan Byers',
    desc: 'A quiet, artistic soul who protects his family with unwavering loyalty.',
    img: `${import.meta.env.BASE_URL}images/jonathon.jpg`
  },
  {
    name: 'Robin Buckley',
    desc: 'Quick-witted, intelligent, and unapologetically herself.',
    img: `${import.meta.env.BASE_URL}images/robin.jpg`
  },
  {
    name: 'Jim Hopper',
    desc: 'The tough but caring police chief who protects Hawkins.',
    img: `${import.meta.env.BASE_URL}images/hopper.jpg`
  }
]

const Characters = () => {
  return (
    <section className="characters" id="characters">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Main Characters
      </motion.h2>

      <div className="char-grid">
        {characters.map((char, i) => (
          <motion.div
            className="char-card"
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={char.img} alt={char.name} />

            <div className="char-info">
              <h3>{char.name}</h3>
              <p>{char.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Characters
