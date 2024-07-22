import Link from "next/link";
import { Button } from "./ui/button";

const Calendar = () => {
  return (
    <section
      id="calendar"
      className="bg-[#428c9d] text-white py-20 md:py-32 flex flex-col items-center"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          2025 Leadership Training Calendar
        </h2>
        <p className="text-white text-center mb-8">
          Plan your year with our detailed training calendar for adults (age 18
          and above).
        </p>
        <div className="flex justify-center">
          <Button aria-label="View Calendar" variant={"outline"}>
            <Link
              href="#"
              className="text-[#0077b6] hover:underline"
              prefetch={false}
            >
              View Calendar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
