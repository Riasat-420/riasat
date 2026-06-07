// src/components/AvailableBadge.tsx
// Drop this anywhere in your Hero/Navbar section

const AvailableBadge = () => {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full
                 bg-green-500/10 text-green-400 border border-green-500/25
                 select-none"
      aria-label="Currently available for work"
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
      </span>
      Available for Work
    </span>
  );
};

export default AvailableBadge;
