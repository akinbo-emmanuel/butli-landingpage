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
          Plan your year with our detailed training calendar.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button aria-label="View Calendar" variant={"outline"}>
            <Link
              href="https://drive.google.com/file/d/1XX2TH00da5HuoBLpKjtmxIV5oVzGQbqR/view?usp=sharing"
              target="_blank"
              className="text-[#428c9d] hover:underline"
              prefetch={false}
            >
              View Calendar
            </Link>
          </Button>
          <div className="bg-white text-[#428c9d] p-4 rounded-lg shadow-md w-full max-w-md">
            <h3 className="text-2xl font-bold mb-2">Upcoming Projects</h3>
            <ul className="space-y-2">
              <li>International Young Leaders Conference</li>
              <li>BUTLI School of Leadership and Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
