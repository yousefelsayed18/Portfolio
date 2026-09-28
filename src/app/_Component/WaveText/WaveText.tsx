import React from "react";

type Props = {
  children?: string;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  style?: React.CSSProperties;
};

// Pure-CSS wave: no per-letter JS animation, so it costs no main-thread time.
export default function WaveText({
  children = "",
  className = "",
  amplitude = 8,
  duration = 1,
  delay = 0.06,
  style = {},
}: Props) {
  const letters = String(children).split("");

  return (
    <span
      style={{ display: "inline-flex", flexWrap: "wrap", ...style }}
      aria-label={children}
    >
      {letters.map((letter, i) =>
        letter === " " ? (
          <span key={i} style={{ display: "inline-block", width: "0.3em" }} />
        ) : (
          <span
            key={i}
            aria-hidden="true"
            className={`wave-letter ${className}`}
            style={
              {
                display: "inline-block",
                "--amp": `${amplitude}px`,
                "--dur": `${duration}s`,
                animationDelay: `${(i * delay).toFixed(2)}s`,
              } as React.CSSProperties
            }
          >
            {letter}
          </span>
        )
      )}
    </span>
  );
}
