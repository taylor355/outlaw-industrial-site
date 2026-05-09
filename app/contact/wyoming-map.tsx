const towns = [
  { name: "Evanston", x: 92, y: 236 },
  { name: "Kemmerer", x: 142, y: 204 },
  { name: "Diamondville", x: 132, y: 217 },
  { name: "Lyman", x: 123, y: 247 },
  { name: "Green River", x: 220, y: 232 },
  { name: "Rock Springs", x: 248, y: 218 }
];

type WyomingMapProps = {
  tone?: "light" | "dark";
};

export function WyomingMap({ tone = "light" }: WyomingMapProps) {
  const isDark = tone === "dark";
  const baseFill = isDark ? "#191919" : "#f4f0e8";
  const baseStroke = isDark ? "rgba(255,255,255,0.28)" : "#202020";
  const townFill = isDark ? "#ffffff" : "#111111";
  const mutedFill = isDark ? "#a9a196" : "#6d6a63";

  return (
    <svg
      className="wy-map"
      viewBox="0 0 520 360"
      role="img"
      aria-label="Southwest Wyoming service area map"
    >
      <rect x="80" y="54" width="360" height="252" fill={baseFill} stroke={baseStroke} strokeWidth="3" />
      <path
        d="M80 190 L80 306 L288 306 L288 210 L210 210 L210 190 Z"
        fill="#d7651f"
        opacity={isDark ? "0.32" : "0.22"}
      />
      <path
        d="M80 190 L80 306 L288 306 L288 210 L210 210 L210 190 Z"
        fill="none"
        stroke="#d7651f"
        strokeWidth="3"
      />
      <text x="260" y="86" textAnchor="middle" fill={mutedFill} fontSize="14" fontWeight="800">
        WYOMING
      </text>
      <text x="170" y="292" fill="#d7651f" fontSize="12" fontWeight="900">
        SOUTHWEST SERVICE AREA
      </text>
      {towns.map((town) => (
        <g key={town.name}>
          <circle cx={town.x} cy={town.y} r="5" fill={townFill} />
        </g>
      ))}
    </svg>
  );
}
