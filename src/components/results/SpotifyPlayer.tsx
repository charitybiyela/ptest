import React from 'react';

interface SpotifyPlayerProps {
  playlistId: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ playlistId }) => {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="shadow-lg"
    />
  );
};

export default SpotifyPlayer;