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
      className="bg-white text-[#428c9d] py-20 md:py-32 flex flex-col items-center"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="box bg-white text-[#428c9d] border rounded-lg"
          >
            <CardHeader>
              <CardTitle>Basic Leadership Course</CardTitle>
              <CardDescription className="text-[#6b7280]">
                A foundational course designed to introduce essential leadership
                principles.
                <br /> <br />{" "}
                <p className="font-semibold text-[#428c9d]">
                  Coming up -{" "}
                  <span className="font-extrabold text-base">
                    September 2nd to 29th
                  </span>
                </p>
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
            className="box bg-white text-[#428c9d] border rounded-lg flex flex-col justify-between"
          >
            <CardHeader>
              <CardTitle>Advanced Leadership Course</CardTitle>
              <CardDescription className="text-[#6b7280]">
                An in-depth course for experienced leaders looking to enhance
                their skills.
                <br /> <br />{" "}
                <p className="font-semibold text-[#428c9d]">
                  Anticipate!!! Coming up -{" "}
                  <span className="font-extrabold text-base">
                    May 5 - 10, 2025
                  </span>
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button disabled className="disabled:cursor-not-allowed">
                Enroll Now
              </Button>
            </CardFooter>
          </motion.div>

          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="box bg-white text-[#428c9d] border rounded-lg md:col-span-2 lg:col-span-1 flex flex-col justify-between"
          >
            <CardHeader>
              <CardTitle>Executive Leadership Course</CardTitle>
              <CardDescription className="text-[#6b7280]">
                A comprehensive course for executives to refine their leadership
                strategies.
                <br /> <br />{" "}
                <p className="font-semibold text-[#428c9d]">
                  Anticipate!!! Coming up -{" "}
                  <span className="font-extrabold text-base">
                    August 22 & 23, 2025
                  </span>
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button disabled className="disabled:cursor-not-allowed">
                Enroll Now
              </Button>
            </CardFooter>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
