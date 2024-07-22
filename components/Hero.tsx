import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative bg-[url('https://res.cloudinary.com/dypvfvu6i/image/upload/v1721617942/BUTLI/butli-1_t1fsfp.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40 z-10"></div>
      <div className="container mx-auto min-h-[91dvh] md:min-h-[93dvh] mt-20 text-white flex flex-col items-center justify-center text-center space-y-6 py-20 md:py-32 relative z-20 fade-in-5 animate-slideUp">
        <h1 className="text-3xl md:text-5xl font-bold fade-in-5 animate-slideUp">
          Unlock Your Leadership Potential
        </h1>
        <p className="text-lg md:text-xl font-semibold max-w-2xl fade-in-5 animate-slideUp">
          BuiltUp Leadership Institute (BUTLI) is dedicated to empowering individuals
          with the skills and knowledge to become transformative kingdom leaders in
          their communities and organizations.
        </p>
        <div className="flex gap-4 fade-in-5 animate-slideUp">
          <Button aria-label="Explore Courses">Explore Courses</Button>
          <Button variant="outline" aria-label="Contact Us" className="text-[#0077b6]">
            Contact Us
          </Button>
        </div>
        <div className="bg-white text-[#0077b6] p-4 rounded-lg fade-in-5 animate-slideUp">
          <p>
            &quot;And now I commend you to God and to the word of his grace,
            which is able to build you up and to give you the inheritance among
            all those who are sanctified.&quot; (Acts 20:32)
          </p>
          <p>
            &quot;And the word of God continued to increase, and the number of
            the disciples multiplied greatly in Jerusalem, and a great many of
            the priests became obedient to the faith.&quot; (Acts 6:7)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
