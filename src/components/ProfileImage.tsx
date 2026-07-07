export function ProfileImage() {
  return (
    <div className="relative mx-auto w-full max-w-[min(72vw,17rem)] sm:max-w-xs md:max-w-sm lg:max-w-[400px]">
      <div className="pc-card relative group mx-auto aspect-[400/493] w-full animate-floating overflow-visible">
        <img
          src="/assets/prof-pic-800.webp"
          srcSet="/assets/prof-pic-400.webp 400w, /assets/prof-pic-800.webp 800w"
          sizes="(max-width: 640px) 72vw, (max-width: 1024px) 320px, 400px"
          alt="Victor Umaru"
          width={400}
          height={493}
          loading="eager"
          decoding="async"
          className="relative z-20 h-full w-full rounded-full object-cover shadow-2xl shadow-slate-950/10 transition-transform duration-500 hover:scale-[1.035] lg:hover:scale-[1.055] dark:shadow-black/30"
        />
        <div className="absolute inset-0 z-30 hidden rounded-full bg-black/20 transition-transform duration-500 group-hover:scale-[1.035] pointer-events-none dark:block lg:group-hover:scale-[1.055]" />
      </div>
    </div>
  );
}
