import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// AI Infrastructure — stacked servers
export function IconInfrastructure(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="5.5" rx="1" />
      <rect x="3.5" y="15" width="17" height="5.5" rx="1" />
      <circle cx="7" cy="6.25" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17.75" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 9v6" />
    </svg>
  );
}

// Environmental Impact — leaf
export function IconEnvironment(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 20C4 14 6 6 18 4c1 8-4 15-12 16Z" />
      <path d="M7 19c3-4 6-7 10-13" />
    </svg>
  );
}

// AI & ESG — balanced scale
export function IconESG(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18" />
      <path d="M6 7h12" />
      <path d="M6 7 3 13a3 3 0 0 0 6 0Z" />
      <path d="M18 7l-3 6a3 3 0 0 0 6 0Z" />
      <path d="M9 21h6" />
    </svg>
  );
}

// Governance & Policy — shield
export function IconGovernance(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

// Privacy & Society — people
export function IconPrivacy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="2.75" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17" cy="8.5" r="2" />
      <path d="M15.5 13.2c2.4.3 4 2 4 4.3" />
    </svg>
  );
}

// AI Safety & Future Intelligence — compass
export function IconSafety(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.5 9.5-1.8 4.7a.5.5 0 0 1-.5.3l-4.7 1.8 1.8-4.7a.5.5 0 0 1 .5-.3Z" />
    </svg>
  );
}

export const categoryIcons: Record<string, (props: IconProps) => ReactElement> = {
  "ai-infrastructure": IconInfrastructure,
  "environmental-impact": IconEnvironment,
  "ai-esg": IconESG,
  "governance-policy": IconGovernance,
  "privacy-society": IconPrivacy,
  "ai-safety-future-intelligence": IconSafety,
};
