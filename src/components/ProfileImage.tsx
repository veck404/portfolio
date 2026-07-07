export function ProfileImage() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
      <div className="pc-card relative group mx-auto max-w-[400px] animate-floating animation delay-400">
        <img
          src="/assets/prof-pic-800.webp"
          srcSet="/assets/prof-pic-400.webp 400w, /assets/prof-pic-800.webp 800w"
          sizes="(max-width: 768px) 80vw, 400px"
          alt="Victor Umaru"
          width={400}
          height={493}
          loading="eager"
          decoding="async"
          className="relative z-20 w-full h-auto rounded-full shadow-xl transform lg:hover:scale-110 hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 hidden rounded-full bg-black/20 pointer-events-none z-30 transition-transform duration-500 dark:block group-hover:scale-105 lg:group-hover:scale-110" />
      </div>
    </div>
  );
}
