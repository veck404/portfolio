import { useTheme } from "../hooks/useTheme";

export function ProfileImage() {
  const { isDark } = useTheme();
  const dark = isDark;
  // Only reference image files that exist in public/assets
  const avifSrcSet = dark
    ? "/assets/prof-pic-drk-400.avif 400w"
    : "/assets/prof-pic-400.avif 400w";
  const webpSrcSet = dark
    ? "/assets/prof-pic-drk-800.webp 800w"
    : "/assets/prof-pic-800.webp 800w, /assets/prof-pic-400.webp 400w";
  const fallback = dark
    ? "/assets/prof-pic-drk.webp"
    : "/assets/prof-pic.webp";

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-full mix-blend-multiply pointer-events-none z-10" />
      <div className="pc-card relative group animate-floating animation delay-400">
        <picture>
          <source type="image/avif" srcSet={avifSrcSet} sizes="(max-width: 768px) 80vw, 400px" />
          <source type="image/webp" srcSet={webpSrcSet} sizes="(max-width: 768px) 80vw, 400px" />
          <img
            src={fallback}
            alt="Victor Umaru"
            width={400}
            height={400}
            loading="lazy"
            decoding="async"
            className="relative z-20 w-full max-w-[400px] h-auto rounded-full shadow-xl transform lg:hover:scale-110 hover:scale-105 transition-transform duration-500"
          />
        </picture>
        <div className="absolute inset-0 rounded-full bg-black/20 dark:block hidden z-30 pointer-events-none transform transition-transform duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
      </div>
    </div>
  );
}
