import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: '' },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: false, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              push: { quantity: 90 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              directions: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'image',
              image: [
                { src: 'https://cdn.simpleicons.org/openai/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/anthropic/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/googlegemini/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/githubcopilot/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/cursor/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/perplexity/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/mistral/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/meta/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/huggingface/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/langchain/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/ollama/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/nvidia/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/vercel/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/supabase/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/amazonaws/ffffff', width: 50, height: 50 },
                { src: 'https://cdn.simpleicons.org/docker/ffffff', width: 50, height: 50 },
                { src: '/cheems.png', width: 50, height: 50 },
                { src: '/cheems2.png', width: 50, height: 50 },
              ],
            },
            size: {
              value: { min: 15, max: 25 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default ParticlesContainer;
