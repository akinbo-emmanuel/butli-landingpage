import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#428c9d] py-20 md:py-32 flex items-center"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Vision
          </h2>
          <p>
            To raise and build a society of leaders who solely rely on
            Bible-based leadership and management principles in transforming
            their families, communities, organization and nations.
          </p>
          <h2 className="text-3xl font-bold mb-4 mt-8">
            Our Mission
          </h2>
          <p>
            To build the leadership capacity of every Believer.
          </p>
          <h2 className="text-3xl font-bold mb-4 mt-8">
            Our Motto
          </h2>
          <p>
            Legacy and Impact...
          </p>
          <h2 className="text-3xl font-bold mb-4 mt-8">
            Our Core-Values
          </h2>
          <p>
            We ring &quot;BELLS&quot; in the heart of humanity
            <br />
            B- Building Capacity
            <br />
            E- Excellence
            <br />
            L- Love
            <br />
            L- Leadership and Service
            <br />
            S- Spirituality
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://res.cloudinary.com/dypvfvu6i/image/upload/v1721617942/BUTLI/BUTLI_Blue_logo_iel6gz.jpg"
            alt="Leadership Event 1"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="https://res.cloudinary.com/dypvfvu6i/image/upload/v1721617952/BUTLI/butli-5_stojbb.jpg"
            alt="Leadership Event 2"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="https://res.cloudinary.com/dypvfvu6i/image/upload/v1721617954/BUTLI/butli-2_xx4nbj.jpg"
            alt="Leadership Event 3"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="https://res.cloudinary.com/dypvfvu6i/image/upload/v1721617950/BUTLI/butli-13_ctnv0e.jpg"
            alt="Leadership Event 4"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
