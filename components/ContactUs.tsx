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
          Contact Us / For Partnership
        </h2>
        <p className="text-[#6b7280] text-center mb-8">
          Have any questions, want to partner with us or need more information? Reach out to us.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-2">
          <Button aria-label="butlileadership@gmail.com" variant={"outline"}>
            <Link
              href="mailto:butlileadership@gmail.com"
              className="text-[#428c9d] hover:underline"
              prefetch={false}
            >
              butlileadership@gmail.com
            </Link>
          </Button>

          <Button aria-label="+2348104997075" variant={"outline"}>
            <Link
              href="tel:+2348104997075"
              className="text-[#428c9d] hover:underline"
              prefetch={false}
            >
              +2348104997075
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
