
const traces = [
  { d: 'M0 0 L0 100', delay: 0 }
]

// const vias = [
//   [450, 170]
// ]

export default function PcbTraces() {
  return (
    <svg
      className="pcb-traces"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g className="desk-trace">
        {traces.map((t) => <path key={t.d} d={t.d} />)}
      </g>

     {/* <rect x={35} y={45} width={30} height={10} fill="green" stroke="red"  /> */}
      {/* <g className="pcb-pulses">
        {traces.map((t) => (
          <path
            key={t.d}
            d={t.d}
            pathLength={100}
            style={{ animationDelay: `${t.delay}s` } as CSSProperties}
          />
        ))}
      </g> */}
{/* 
      <g className="pcb-vias">
        {vias.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={9} />)}
      </g> */}
    </svg>
  )
}