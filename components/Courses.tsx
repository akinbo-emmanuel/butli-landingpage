"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Courses = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <section
      id="courses"
      className="bg-white text-[#0077b6] py-20 md:py-32 flex flex-col items-center"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="box bg-white text-[#0077b6] border rounded-lg"
          >
            <CardHeader>
              <CardTitle>Basic Leadership Course</CardTitle>
              <CardDescription className="text-[#6b7280] text-xs">
                A foundational course designed to introduce essential leadership
                principles for adults (age 18 and above).
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Enroll Now</Button>
            </CardFooter>
          </motion.div>

          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="box bg-white text-[#0077b6] border rounded-lg"
          >
            <CardHeader>
              <CardTitle>Advanced Leadership Course</CardTitle>
              <CardDescription className="text-[#6b7280]">
                An in-depth course for experienced leaders (age 18 and above)
                looking to enhance their skills.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Enroll Now</Button>
            </CardFooter>
          </motion.div>

          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="box bg-white text-[#0077b6] border rounded-lg md:col-span-2 lg:col-span-1"
          >
            <CardHeader>
              <CardTitle>Executive Leadership Course</CardTitle>
              <CardDescription className="text-[#6b7280]">
                A comprehensive course for executives (age 18 and above) to
                refine their leadership strategies.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Enroll Now</Button>
            </CardFooter>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
