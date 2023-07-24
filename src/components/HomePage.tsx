import Ellipse from "./Ellipse";
import HomeComponent from "./HomeComponent";
import ParticlesComponent from "./Particles";

const HomePage = () => {
  return (
    <section>
      <Ellipse top="-150px" left="10px" />
      <HomeComponent />
      <ParticlesComponent id="tsparticles" />
    </section>
  );
};

export default HomePage;
