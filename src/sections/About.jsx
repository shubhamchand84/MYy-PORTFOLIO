import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('shubhamchandofficial@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20 scroll-mt-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/* Grid 1 - Intro */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Shubham</p>
              <p className="grid-subtext">Web developer skilled in React, Node.js, and modern UI/UX practices.</p>
            </div>
          </div>
        </div>

        {/* Grid 2 - Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Passionate about building full-stack apps using React, Next.js, Node.js, and MongoDB.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 3 - Globe */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely across most timezones.</p>
              <p className="grid-subtext">I'm based in India, with remote work availability.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Grid 4 - Passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding isn't just my profession—it is my passion.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 5 - Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] object-top object-contain" />
            <div className="space-y-2 text-center">
              <p className="grid-subtext">Contact me</p>

              <div 
                className="flex justify-center items-center gap-2 cursor-pointer" 
                onClick={handleCopy}
              >
                <img 
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} 
                  alt="copy" 
                  className="w-6 h-6"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  shubhamchandofficial@gmail.com
                </p>
              </div>
              
              {hasCopied && (
                <p className="text-sm text-green-400 transition duration-200">Email copied to clipboard!</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
