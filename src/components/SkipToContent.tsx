// src/components/SkipToContent.tsx
// Add <SkipToContent /> as the VERY FIRST element inside <body> / your root layout.
// This lets keyboard & screen-reader users skip the nav instantly.
// Ensure your main content container has id="main-content".

const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
               focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground
               focus:rounded-md focus:font-semibold focus:text-sm focus:shadow-lg
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
               transition-all"
  >
    Skip to main content
  </a>
);

export default SkipToContent;
