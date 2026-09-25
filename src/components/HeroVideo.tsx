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
    // phones keep the still poster: the hero is tall and narrow there, so moving footage would sit
    // right behind the text and cost data
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wide = window.matchMedia('(min-width: 900px)');
    const update = () => setPlay(!reduce.matches && wide.matches);
    update();
    reduce.addEventListener('change', update);
    wide.addEventListener('change', update);
    return () => {
      reduce.removeEventListener('change', update);
      wide.removeEventListener('change', update);
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
      <source src="/video/lynx-video.webm" type="video/webm" />
      <source src="/video/lynx-video.mp4" type="video/mp4" />
    </video>
  );
}
