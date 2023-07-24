"use client";
import { FC, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
// import {Container} from "tsparticles-engine"
import Options from "@/utils/animationOption";

interface ParticlesProps {
  id: string;
}

const ParticlesComponent: FC<ParticlesProps> = (props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //     await console.log(container);
  //   },
  //   []
  // );

  return (
    <Particles
      id={props.id}
      init={particlesInit}
      //   loaded={particlesLoaded}
      options={Options}
    />
  );
};

export default ParticlesComponent;
