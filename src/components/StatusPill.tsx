import type { Status } from '../data/homeData.ts'

export default function StatusPill({ status }: { status: Status }) {
  return <span className="pill">{status}</span>
}