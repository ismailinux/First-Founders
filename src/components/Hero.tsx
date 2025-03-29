
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-brutalist-white overflow-hidden">
      <div className="absolute inset-0 brutalist-noise"></div>
      
      {/* Geometric shapes for Neo-Brutalist style */}
      <div className="absolute top-20 right-10 w-16 h-16 md:w-32 md:h-32 bg-brutalist-lightgray brutalist-border rotate-12"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 md:w-40 md:h-40 bg-brutalist-orange brutalist-border -rotate-6"></div>
      
      <div className="brutalist-container px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
            BUILDING AFRICA'S FUTURE STARTUPS
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We partner with early-stage founders to build, scale, and fund startups that solve Africa's most pressing challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="brutalist-btn text-center">
              APPLY NOW
            </Link>
            <Link to="/services" className="brutalist-border bg-brutalist-black text-brutalist-white font-bebas uppercase tracking-wide px-8 py-3 text-xl text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
