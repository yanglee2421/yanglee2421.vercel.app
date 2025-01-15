"use client";
import { type Container as ParticlesContainer } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBubblesPreset } from "@tsparticles/preset-bubbles";
import { loadBigCirclesPreset } from "@tsparticles/preset-big-circles";
import { loadSlim } from "@tsparticles/slim";
import React from "react";

const snowPro = initParticlesEngine(async (engine) => {
  await loadBubblesPreset(engine);
  await loadBigCirclesPreset(engine);
  await loadSlim(engine);
});

const particlesLoaded = async (container?: ParticlesContainer) => {
  console.log(container);
};

type ParticlesUIProps = {
  preset: string;
};

export const ParticlesUI = (props: ParticlesUIProps) => {
  React.use(snowPro);

  return (
    <Particles
      options={{
        preset: props.preset,
        background: { opacity: 0 },
      }}
      particlesLoaded={particlesLoaded}
    />
  );
};
