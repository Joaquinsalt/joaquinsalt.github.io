import type { Word } from '../data/homeData'
import StatusPill from './StatusPill'

export default function WordCard({ word, evidence,status }: Word) {
  return (
    <div className="card word-card">
      <div className="row">
        <span className="word">{word}</span>
        <StatusPill status={status} />
      </div>
      <p>{evidence}</p>
    </div>
  )
}