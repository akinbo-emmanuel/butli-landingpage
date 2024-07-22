import Link from "next/link";
import { Button } from "./ui/button";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-white text-[#428c9d] py-20 md:py-32 flex flex-col items-center"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-[#6b7280] text-center mb-8">
          Have any questions or need more information? Reach out to us.
        </p>
        <div className="flex justify-center">
          <Button aria-label="contact@butli.org" variant={"outline"}>
            <Link
              href="mailto:contact@butli.org"
              className="text-[#0077b6] hover:underline"
              prefetch={false}
            >
              contact@butli.org
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
