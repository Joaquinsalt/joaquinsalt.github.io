import { Link } from 'react-router-dom'
import type { Work } from '../data/homeData'
import StatusPill from './StatusPill'

export default function WorkChip({ code, label, title, role, evidence, to,status }: Work) {
  return (
    <Link to={to} className="chip card">
      <p className="label">{code} · {label}</p>
      <h3>{title}</h3>
      <StatusPill status={status} />
      <p className="small">{role} {evidence}</p>
    </Link>
  )
}
