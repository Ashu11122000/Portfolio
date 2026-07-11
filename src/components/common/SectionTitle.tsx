//import React from "react";

type SectionTitleProps = {
  title?: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  highlight,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-8 ${center ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl font-semibold">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}