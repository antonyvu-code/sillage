// Scene marker — "nhịp truyện" mở đầu mỗi section: sợi chỉ dọc màu
// ambre + timestamp + một câu dẫn chuyện in nghiêng. Chuỗi timestamp
// (18:47 → 18:56 → 19:00–23:00 → flashback → 00:14) là xương sống
// storytelling của cả trang.
export default function Scene({ scene, className = '' }) {
  return (
    <div className={`reveal ${className}`}>
      <div
        aria-hidden="true"
        className="mb-5 h-14 w-px bg-gradient-to-b from-transparent to-ambre/70"
      />
      <p className="text-xs uppercase tracking-[0.3em] text-ambre/90">
        {scene.chapter} <span className="text-bone/60">·</span>{' '}
        <span className="tabular-nums">{scene.time}</span>
      </p>
      <p className="mt-3 max-w-md font-fraunces text-lg italic leading-snug text-bone/75 [text-wrap:pretty] sm:text-xl">
        {scene.text}
      </p>
    </div>
  )
}
