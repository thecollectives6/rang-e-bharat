import React, { useState } from 'react';
import { ImageOff, Sparkles } from 'lucide-react';

export interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  fallbackIcon?: React.ReactNode;
  containerClassName?: string;
  badge?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  showCaptionOverlay?: boolean;
  captionTitle?: string;
  captionSubtitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  fallbackIcon,
  className = '',
  containerClassName = '',
  badge,
  aspectRatio = 'auto',
  showCaptionOverlay = false,
  captionTitle,
  captionSubtitle,
  loading = 'lazy',
  decoding = 'async',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
    auto: '',
  }[aspectRatio];

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // If alt is explicitly provided (including empty string for decorative images), honor it
  const isDecorative = alt === '';
  const computedAlt = alt !== undefined ? alt : (fallbackTitle || 'Indian Cultural Heritage');

  // If no source provided or failed to load, show graceful fallback card
  if (!src || hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-orange-50/40 to-stone-100 p-4 text-center dark:border-stone-800 dark:from-stone-900 dark:via-stone-800/60 dark:to-stone-900 ${aspectClasses} ${containerClassName}`}
        role={isDecorative ? 'presentation' : 'img'}
        aria-label={isDecorative ? undefined : (fallbackTitle || computedAlt || 'Heritage Image')}
        aria-hidden={isDecorative ? true : undefined}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-2">
          {fallbackIcon || <ImageOff className="h-5 w-5 opacity-70" aria-hidden="true" />}
        </div>
        <h4 className="font-serif text-xs font-bold text-stone-800 dark:text-stone-200 line-clamp-1">
          {fallbackTitle || computedAlt || 'Indian Cultural Heritage'}
        </h4>
        {fallbackSubtitle && (
          <p className="mt-0.5 text-[10px] text-stone-500 dark:text-stone-400 line-clamp-1">
            {fallbackSubtitle}
          </p>
        )}
        {badge && (
          <div className="absolute top-2 right-2 rounded-md bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold text-amber-800 dark:text-amber-300">
            {badge}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-800 ${aspectClasses} ${containerClassName}`}
    >
      {/* Loading Shimmer Skeleton */}
      {isLoading && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 animate-pulse bg-stone-200/80 dark:bg-stone-700/60 flex items-center justify-center"
        >
          <Sparkles className="h-5 w-5 text-amber-500/40 animate-spin" />
        </div>
      )}

      {/* Actual Responsive Image */}
      <img
        src={src}
        alt={computedAlt}
        loading={loading}
        decoding={decoding}
        referrerPolicy="no-referrer"
        onError={handleImageError}
        onLoad={handleImageLoad}
        className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        {...props}
      />

      {/* Optional Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-20 rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase text-amber-300 border border-white/10 shadow-xs">
          {badge}
        </div>
      )}

      {/* Optional Caption Overlay */}
      {showCaptionOverlay && (captionTitle || captionSubtitle) && (
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-6 text-white">
          {captionTitle && (
            <p className="font-serif text-xs font-bold text-white line-clamp-1 drop-shadow-xs">
              {captionTitle}
            </p>
          )}
          {captionSubtitle && (
            <p className="text-[10px] text-amber-200/90 line-clamp-1">
              {captionSubtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
