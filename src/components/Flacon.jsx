// Flacon SVG — chai apothecary tối giản (thủy tinh trong, label giấy,
// nắp đen), chất lỏng lấy màu accent của từng scent. Vector thuần nên
// sắc nét mọi kích thước và đồng bộ tuyệt đối với design tokens.
import { useId } from 'react'

export default function Flacon({ scent, className = '' }) {
  // useId: mỗi instance một prefix riêng — cùng một scent có thể
  // xuất hiện nhiều nơi (hero + card) mà không trùng gradient ID.
  const id = useId()

  return (
    <svg
      viewBox="0 0 200 300"
      className={className}
      role="img"
      aria-label={`${scent.name} — eau de parfum, 50 ml flacon`}
    >
      <defs>
        <linearGradient id={`liq-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={scent.accent} stopOpacity="0.65" />
          <stop offset="1" stopColor={scent.accent} stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id={`glass-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="0.2" stopColor="#ffffff" stopOpacity="0.03" />
          <stop offset="0.8" stopColor="#ffffff" stopOpacity="0.02" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={`cap-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2e2a2e" />
          <stop offset="0.5" stopColor="#151215" />
          <stop offset="1" stopColor="#242024" />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx="0.5" cy="0.9" r="0.8">
          <stop offset="0" stopColor={scent.accent} stopOpacity="0.35" />
          <stop offset="1" stopColor={scent.accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Quầng sáng dưới đáy chai */}
      <ellipse cx="100" cy="268" rx="85" ry="26" fill={`url(#glow-${id})`} />

      {/* Thân chai — thủy tinh */}
      <rect
        x="42"
        y="88"
        width="116"
        height="184"
        rx="10"
        fill={`url(#glass-${id})`}
        stroke="rgba(234,227,216,0.28)"
        strokeWidth="1.5"
      />

      {/* Chất lỏng */}
      <rect x="48" y="118" width="104" height="148" rx="7" fill={`url(#liq-${id})`} />
      <ellipse cx="100" cy="118" rx="52" ry="4.5" fill="#ffffff" opacity="0.2" />

      {/* Label giấy */}
      <rect x="54" y="148" width="92" height="90" rx="2" fill="#EFE9DE" />
      <text
        x="100"
        y="165"
        textAnchor="middle"
        fontSize="7.5"
        letterSpacing="3.5"
        fill="#131013"
        className="font-geist"
      >
        SILLAGE
      </text>
      <text
        x="100"
        y="192"
        textAnchor="middle"
        fontSize="21"
        fill="#131013"
        className="font-fraunces"
      >
        {scent.name}
      </text>
      <line x1="68" y1="203" x2="132" y2="203" stroke="#131013" strokeWidth="0.5" opacity="0.35" />
      <text
        x="100"
        y="215"
        textAnchor="middle"
        fontSize="6.5"
        fill="#131013"
        opacity="0.7"
        className="font-geist"
      >
        {scent.notes.tete}
      </text>
      <text
        x="100"
        y="229"
        textAnchor="middle"
        fontSize="6"
        letterSpacing="1.6"
        fill="#131013"
        opacity="0.55"
        className="font-geist"
      >
        EAU DE PARFUM · 50 ML
      </text>

      {/* Cổ + nắp */}
      <rect
        x="86"
        y="62"
        width="28"
        height="28"
        fill={`url(#glass-${id})`}
        stroke="rgba(234,227,216,0.25)"
        strokeWidth="1"
      />
      <rect x="76" y="26" width="48" height="40" rx="5" fill={`url(#cap-${id})`} />
      <line x1="84" y1="30" x2="84" y2="62" stroke="#ffffff" strokeWidth="0.6" opacity="0.12" />
      <line x1="116" y1="30" x2="116" y2="62" stroke="#000000" strokeWidth="0.8" opacity="0.3" />

      {/* Highlight thủy tinh */}
      <line
        x1="53"
        y1="102"
        x2="53"
        y2="258"
        stroke="#ffffff"
        strokeWidth="2.5"
        opacity="0.16"
        strokeLinecap="round"
      />
      <line
        x1="147"
        y1="106"
        x2="147"
        y2="254"
        stroke="#ffffff"
        strokeWidth="1.4"
        opacity="0.1"
        strokeLinecap="round"
      />
    </svg>
  )
}
