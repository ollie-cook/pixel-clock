interface ColonProps {
  colour: string;
}

export default function Colon({ colour }: ColonProps) {
  return (
    <svg viewBox="0 0 90 210">
      <rect x="30" y="90" width="30" height="30" fill={colour} />
      <rect x="30" y="180" width="30" height="30" fill={colour} />
    </svg>
  )
}