import type { Word } from '../data/homeData'

export default function WordCard({ word, evidence}: Word) {
  return (
    <div className="card word-card">
      <div className="row">
        <span className="word">{word}</span>
        {}
      </div>
      <p>{evidence}</p>
    </div>
  )
}