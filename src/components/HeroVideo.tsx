'use client';

import { useEffect, useRef } from 'react';

/** moment (seconds) the loop starts at, matching the poster frame */
const START = 4.4;

/**
 * Decorative background footage. The poster image underneath is always rendered, so the hero is
 * complete before (and without) any video. The element is rendered by the server, and a tiny effect
 * makes iOS Safari treat it as muted at the DOM level (React's `muted` prop alone is not enough for
 * autoplay) and starts playback, retrying whenever the browser allows it. With
 * prefers-reduced-motion the video is hidden by CSS and never started.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const play = () => {
      if (reduce.matches || !video.paused) return;
      video.muted = true;
      video.play().catch(() => {
        /* playback refused: the poster underneath stays, which is a complete hero */
      });
    };
    const onMeta = () => {
      if (video.currentTime < START && video.duration > START) video.currentTime = START;
    };
    const onVisible = () => {
      if (document.visibilityState === 'visible') play();
    };
    const onReduce = () => (reduce.matches ? video.pause() : play());

    video.addEventListener('loadedmetadata', onMeta);
    video.addEventListener('loadeddata', play);
    video.addEventListener('canplay', play);
    window.addEventListener('pageshow', play);
    document.addEventListener('visibilitychange', onVisible);
    reduce.addEventListener('change', onReduce);
    // low-power mode on iOS blocks autoplay until the first touch; allow that as a last resort
    window.addEventListener('touchstart', play, { once: true, passive: true });
    if (video.readyState >= 1) onMeta();
    play();

    return () => {
      video.removeEventListener('loadedmetadata', onMeta);
      video.removeEventListener('loadeddata', play);
      video.removeEventListener('canplay', play);
      window.removeEventListener('pageshow', play);
      document.removeEventListener('visibilitychange', onVisible);
      reduce.removeEventListener('change', onReduce);
      window.removeEventListener('touchstart', play);
    };
  }, []);

  return (
    <video
      ref={ref}
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
      <source src="/video/lynx-video.mp4" type="video/mp4" />
      <source src="/video/lynx-video.webm" type="video/webm" />
    </video>
  );
}
