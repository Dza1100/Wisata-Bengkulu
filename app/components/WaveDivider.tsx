type WaveDividerProps = {
  fromColor: string
  toColor: string
}

export default function WaveDivider({ fromColor, toColor }: WaveDividerProps) {
  return (
    <div style={{ background: toColor, display: 'block', lineHeight: 0, marginTop: '-2px' }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: '60px' }}
      >
        <path
          d="M0 0 L1440 0 L1440 20 Q1080 60 720 35 Q360 10 0 50 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  )
}
