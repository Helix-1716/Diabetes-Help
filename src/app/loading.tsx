export default function RootLoading() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/70 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="inline-block size-3 rounded-full bg-primary animate-pulse" />
        <span className="inline-block size-3 rounded-full bg-primary/70 animate-pulse [animation-delay:120ms]" />
        <span className="inline-block size-3 rounded-full bg-primary/50 animate-pulse [animation-delay:240ms]" />
        <span className="ml-3 text-sm text-foreground/70">Loading…</span>
      </div>
    </div>
  );
}


