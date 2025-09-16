export const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <svg
        className="w-6 h-6 text-emerald-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5 3L19 12L5 21V3Z" />
      </svg>
      <h1 className="text-3xl font-extrabold font-serif tracking-wide">
        Local<span className="text-emerald-600">Joy</span>
      </h1>
    </div>
  );
};
