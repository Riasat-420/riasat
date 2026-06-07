// src/components/ResumeButton.tsx
// Place this in your Hero section AND in the Navbar.
// Upload your CV to /public/Riasat-Resume.pdf first.

import { Download } from "lucide-react";

interface ResumeButtonProps {
  variant?: "primary" | "outline";
  className?: string;
}

const ResumeButton = ({ variant = "primary", className = "" }: ResumeButtonProps) => {
  const base =
    "inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg focus:ring-primary",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary",
  };

  return (
    <a
      href="/Riasat-Resume.pdf"
      download="Muhammad-Riasat-Ali-Resume.pdf"
      className={`${base} ${styles[variant]} ${className}`}
      aria-label="Download Muhammad Riasat Ali's resume as PDF"
    >
      <Download size={16} aria-hidden="true" />
      Download Resume
    </a>
  );
};

export default ResumeButton;
