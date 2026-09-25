'use client';

import { useEffect, useState } from 'react';

/**
 * Decorative background footage. The poster image underneath is always rendered by the server, so
 * the hero is complete before (and without) any video. The video is only mounted after hydration
 * and never for visitors who prefer reduced motion.
 */
export function HeroVideo() {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPlay(!reduce.matches);
    update();
    reduce.addEventListener('change', update);
    return () => {
      reduce.removeEventListener('change', update);
    };
  }, []);
  if (!play) return null;
  return (
    <video
      className="hero__video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/video/lynx-video-poster.jpg"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src="/video/lynx-video.webm#t=4.4" type="video/webm" />
      <source src="/video/lynx-video.mp4#t=4.4" type="video/mp4" />
    </video>
  );
}
