import type { ReactNode } from "react";

// Flat vector illustrations for the project cards. Colours come from the theme
// tokens through the .il-* classes, so they follow light and dark mode.

const Frame = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox="0 0 320 200"
    className="project-art-svg"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

const CodekarArt = () => (
  <Frame>
    {/* editor window */}
    <rect x="24" y="22" width="224" height="152" rx="12" className="il-paper il-border" />
    <circle cx="40" cy="37" r="3.5" className="il-line" />
    <circle cx="52" cy="37" r="3.5" className="il-line" />
    <circle cx="64" cy="37" r="3.5" className="il-line" />
    <rect x="198" y="29" width="38" height="16" rx="8" className="il-accent" />
    <path d="M214 33.5l8 3.5-8 3.5z" className="il-on" />
    <rect x="24" y="50" width="224" height="1.5" className="il-line" />
    {/* file tree */}
    <rect x="36" y="64" width="30" height="5" rx="2.5" className="il-hi" />
    <rect x="36" y="76" width="22" height="5" rx="2.5" className="il-hi" />
    <rect x="36" y="88" width="34" height="5" rx="2.5" className="il-hi" />
    <rect x="36" y="100" width="26" height="5" rx="2.5" className="il-hi" />
    {/* code */}
    <rect x="86" y="62" width="34" height="6" rx="3" className="il-lilac" />
    <rect x="126" y="62" width="52" height="6" rx="3" className="il-hi" />
    <rect x="98" y="76" width="26" height="6" rx="3" className="il-sage" />
    <rect x="130" y="76" width="64" height="6" rx="3" className="il-hi" />
    <rect x="98" y="90" width="48" height="6" rx="3" className="il-accent" />
    <rect x="152" y="90" width="30" height="6" rx="3" className="il-hi" />
    <rect x="86" y="104" width="22" height="6" rx="3" className="il-lilac" />
    {/* output */}
    <rect x="82" y="124" width="154" height="38" rx="8" className="il-hi" />
    <circle cx="98" cy="143" r="7" className="il-sage" />
    <path d="M94.5 143l2.8 2.8 5-5.6" className="il-check" />
    <rect x="112" y="137" width="72" height="5" rx="2.5" className="il-muted" />
    <rect x="112" y="147" width="48" height="5" rx="2.5" className="il-muted" />
    {/* web project preview */}
    <g transform="rotate(6 272 118)">
      <rect x="238" y="84" width="68" height="64" rx="9" className="il-paper il-border" />
      <rect x="238" y="84" width="68" height="14" rx="9" className="il-accent" />
      <rect x="238" y="92" width="68" height="6" className="il-accent" />
      <rect x="248" y="106" width="30" height="8" rx="4" className="il-sage" />
      <rect x="248" y="120" width="48" height="5" rx="2.5" className="il-hi" />
      <rect x="248" y="130" width="36" height="5" rx="2.5" className="il-hi" />
    </g>
    {/* profile */}
    <circle cx="284" cy="46" r="15" className="il-lilac" />
    <circle cx="284" cy="42" r="5" className="il-paper" />
    <path d="M272.5 57.5a11.5 9 0 0 1 23 0z" className="il-paper" />
  </Frame>
);

const SamvadArt = () => (
  <Frame>
    {/* connections */}
    <path d="M86 62C104 62 106 74 120 74" className="il-dash" />
    <path d="M234 104C216 104 214 92 200 92" className="il-dash" />
    <circle cx="72" cy="62" r="16" className="il-lilac" />
    <circle cx="72" cy="58" r="5.5" className="il-paper" />
    <path d="M60.5 73a11.5 9.5 0 0 1 23 0z" className="il-paper" />
    <circle cx="248" cy="104" r="16" className="il-sage" />
    <circle cx="248" cy="100" r="5.5" className="il-paper" />
    <path d="M236.5 115a11.5 9.5 0 0 1 23 0z" className="il-paper" />
    {/* phone */}
    <rect x="108" y="12" width="104" height="176" rx="20" className="il-paper il-border" />
    <rect x="144" y="21" width="32" height="5" rx="2.5" className="il-hi" />
    <rect x="120" y="42" width="60" height="24" rx="11" className="il-hi" />
    <rect x="130" y="50" width="38" height="4" rx="2" className="il-muted" />
    <rect x="130" y="58" width="24" height="4" rx="2" className="il-muted" />
    <rect x="142" y="76" width="58" height="24" rx="11" className="il-accent" />
    <rect x="152" y="84" width="36" height="4" rx="2" className="il-on" />
    <rect x="152" y="92" width="22" height="4" rx="2" className="il-on" />
    <path d="M178 106l3 3 6-7M184 106l3 3 6-7" className="il-check-s" />
    <rect x="120" y="116" width="48" height="24" rx="11" className="il-hi" />
    <rect x="130" y="124" width="28" height="4" rx="2" className="il-muted" />
    <rect x="130" y="132" width="16" height="4" rx="2" className="il-muted" />
    <rect x="120" y="150" width="40" height="22" rx="11" className="il-hi" />
    <circle cx="131" cy="161" r="2.6" className="il-muted" />
    <circle cx="140" cy="161" r="2.6" className="il-muted" />
    <circle cx="149" cy="161" r="2.6" className="il-muted" />
    {/* one-time code badge */}
    <g transform="rotate(-5 262 44)">
      <rect x="228" y="30" width="68" height="28" rx="14" className="il-paper il-border" />
      <circle cx="245" cy="44" r="3.2" className="il-ink" />
      <circle cx="258" cy="44" r="3.2" className="il-ink" />
      <circle cx="271" cy="44" r="3.2" className="il-ink" />
      <circle cx="284" cy="44" r="3.2" className="il-accent" />
    </g>
  </Frame>
);

const MaskArt = () => (
  <Frame>
    {/* face */}
    <circle cx="160" cy="102" r="54" className="il-hi il-border" />
    <circle cx="141" cy="90" r="4.5" className="il-ink" />
    <circle cx="179" cy="90" r="4.5" className="il-ink" />
    <path d="M132 78q9-6 18-1M170 77q9-5 18 1" className="il-brow" />
    {/* mask */}
    <path d="M110 108Q160 96 210 108L207 134Q160 164 113 134Z" className="il-sage" />
    <path d="M122 114Q160 106 198 114M120 126Q160 136 200 126M126 138Q160 150 194 138" className="il-pleat" />
    <path d="M110 108q-14 6-10 22M210 108q14 6 10 22" className="il-loop" />
    {/* detection box */}
    <path
      d="M92 62V48a8 8 0 0 1 8-8h14M228 62V48a8 8 0 0 0-8-8h-14M92 142v14a8 8 0 0 0 8 8h14M228 142v14a8 8 0 0 1-8 8h-14"
      className="il-bracket"
    />
    <rect x="92" y="18" width="60" height="18" rx="9" className="il-accent" />
    <path d="M102 27l3.5 3.5 6-7" className="il-check" />
    <rect x="118" y="25" width="26" height="4" rx="2" className="il-on" />
    {/* scan line */}
    <path d="M70 102H250" className="il-dash" />
  </Frame>
);

const SentimentArt = () => (
  <Frame>
    {/* supportive post */}
    <rect x="28" y="26" width="150" height="52" rx="14" className="il-paper il-border" />
    <path d="M52 78l-10 14 26-14z" className="il-paper il-border-tail" />
    <circle cx="50" cy="52" r="10" className="il-sage" />
    <path d="M45 52h10M50 47v10" className="il-check" />
    <rect x="68" y="42" width="86" height="5" rx="2.5" className="il-hi" />
    <rect x="68" y="54" width="62" height="5" rx="2.5" className="il-hi" />
    {/* opposed post */}
    <rect x="142" y="100" width="150" height="52" rx="14" className="il-paper il-border" />
    <path d="M268 152l10 14-26-14z" className="il-paper il-border-tail" />
    <circle cx="164" cy="126" r="10" className="il-accent" />
    <path d="M159 126h10" className="il-check-on" />
    <rect x="182" y="116" width="86" height="5" rx="2.5" className="il-hi" />
    <rect x="182" y="128" width="62" height="5" rx="2.5" className="il-hi" />
    {/* tally */}
    <rect x="34" y="118" width="14" height="40" rx="3" className="il-sage" />
    <rect x="54" y="132" width="14" height="26" rx="3" className="il-accent" />
    <rect x="28" y="161" width="46" height="2" rx="1" className="il-line" />
  </Frame>
);

const StyleArt = () => (
  <Frame>
    <defs>
      <clipPath id="nst-a">
        <rect x="24" y="62" width="76" height="76" rx="10" />
      </clipPath>
      <clipPath id="nst-b">
        <rect x="124" y="62" width="76" height="76" rx="10" />
      </clipPath>
      <clipPath id="nst-c">
        <rect x="224" y="62" width="76" height="76" rx="10" />
      </clipPath>
    </defs>
    {/* content */}
    <rect x="24" y="62" width="76" height="76" rx="10" className="il-paper il-border" />
    <g clipPath="url(#nst-a)">
      <circle cx="44" cy="84" r="8" className="il-accent" />
      <path d="M24 138V114Q50 94 72 110T100 108V138Z" className="il-sage" />
      <path d="M24 138V126Q56 114 100 128V138Z" className="il-hi" />
    </g>
    <path d="M112 100h12M118 94v12" className="il-plus" />
    {/* style */}
    <rect x="124" y="62" width="76" height="76" rx="10" className="il-hi il-border" />
    <g clipPath="url(#nst-b)">
      <path d="M118 84q16-16 30 0t30 0t30 0" className="il-stroke-a" />
      <path d="M118 102q16-16 30 0t30 0t30 0" className="il-stroke-b" />
      <path d="M118 120q16-16 30 0t30 0t30 0" className="il-stroke-c" />
    </g>
    <path d="M208 100h14M217 94l6 6-6 6" className="il-plus" />
    {/* result */}
    <rect x="224" y="62" width="76" height="76" rx="10" className="il-paper il-border" />
    <g clipPath="url(#nst-c)">
      <circle cx="244" cy="84" r="8" className="il-lilac" />
      <path d="M224 138V114Q250 94 272 110T300 108V138Z" className="il-accent" />
      <path d="M218 86q16-16 30 0t30 0t30 0" className="il-stroke-a il-soft" />
      <path d="M218 112q16-16 30 0t30 0t30 0" className="il-stroke-b il-soft" />
      <path d="M218 128q16-16 30 0t30 0t30 0" className="il-stroke-c il-soft" />
    </g>
  </Frame>
);

const ART: Record<string, () => ReactNode> = {
  Codekar: CodekarArt,
  Samvad: SamvadArt,
  "Face Mask Detector": MaskArt,
  "Twitter Sentiment Analysis": SentimentArt,
  "Neural Style Transfer": StyleArt,
};

export const ProjectArt = ({ name }: { name: string }) => {
  const Art = ART[name];
  return Art ? <div className="project-art">{Art()}</div> : null;
};
