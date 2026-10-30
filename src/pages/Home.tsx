import { Link } from 'react-router-dom'
import WordCard from '../components/Wordcard.tsx'
import WorkChip from '../components/Workchip.tsx'
import PcbTraces from '../components/pcbTraces.tsx'
import { words, overview, goals, works} from '../data/homeData.ts'
export default function Home() {
  return (
    <main className="home">
      <PcbTraces/>
      <div className="trace" aria-hidden="true"><span className="trace-pulse" /></div>
      <section className="hero">
        <div>
          <p className="label">Hello, I’m</p>
          <h1>Joaquin Barrera</h1>
          <p className="subtitle">Science Academy student interested in electrical engineering</p>
          <div className="buttons">
            <Link to="/research" className="btn btn-solid">View research</Link>
            <Link to="/projects" className="btn btn-outline">View projects</Link>
          </div>
        </div>

        <figure className="photo-wrap">
          {/* Swap this div for <img src="/me.jpg" alt="..." className="photo" /> once you have an approved photo */}
          {/* <div className="photo" role="img" aria-label="Profile Picture"> */}
          <img src="../assets/pfp.png" alt="Photo of Joaquin Barrera" className="photo" />
          {/* </div> */}
          <figcaption>Photo placeholder</figcaption>
        </figure>
      </section>

      <section className="words">
        {words.map((w) => <WordCard key={w.word} {...w} />)}
      </section>

      <section className="about-goals">
        <div>
          <h2 className="label">Who I am</h2>
          <p className="overview">{overview}</p>
        </div>
        <div>
          <h2 className="label">Where I’m headed</h2>
          <div className="card goals">
            {goals.map((g) => (
              <p key={g.label}><span className="label small-label">{g.label}</span><br />{g.text}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="featured">
        {/* <PcbTraces  /> */}
        <h2 className="label">Featured work</h2>
        <div className="chips">
          {works.map((w) => <WorkChip key={w.code} {...w} />)}
        </div>
      </section>

      <footer className="footer"></footer>
    </main>
  )
}