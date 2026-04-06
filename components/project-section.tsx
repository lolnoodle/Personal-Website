"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

function ProjectSection() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1.4 }}
      className="flex flex-col max-w-dvw m-2 border-solid border-[var(--border)] border bg-[var(--background3)]"
    >
      <div className="p-1">
        <p className="text-4xl text-[var(--accent)] font-bebas ml-2">
          Featured Projects
        </p>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-3 p-3">
        <Image
          src="/logo.png"
          alt="IF"
          width={300}
          height={300}
          className="row-span-3"
        ></Image>
        <div className="row-span-2">
          <h1 className="font-space text-[var(--accent)] text-2xl mb-1">
            Project name
          </h1>
          <p className="font-space">
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt quod dicta nihil accusamus obcaecati architecto, corporis
            atque eaque quaerat, explicabo dolore? Asperiores a quasi
            repellendus dolor dolore architecto velit quos?
          </p>
        </div>
        <div className="col-span-2 flex justify-between items-center">
          <div className="flex flex-row space-x-3">
            <p className="border-[var(--accent)] text-[var(--accent)] border-3 p-1.5 rounded-md font-bebas text-xl bg-white dark:bg-black shadow-md/20 dark:shadow-white">
              REACT NATIVE
            </p>
            <p className="border-[var(--accent)] text-[var(--accent)] border-3 p-1.5 rounded-md font-bebas text-xl bg-white dark:bg-black shadow-md/20 dark:shadow-white">
              FIRE BASE
            </p>
            <p className="border-[var(--accent)] text-[var(--accent)] border-3 p-1.5 rounded-md font-bebas text-xl bg-white dark:bg-black shadow-md/20 dark:shadow-white">
              EXPO
            </p>
          </div>
          <Link
            className="border-[var(--accent)] border-2 rounded-md p-1 bg-[var(--accent)] dark:text-black hover:bg-[var(--background2)] shadow-md/20 dark:shadow-white font-bebas text-2xl mr-2"
            href="/projects"
          >
            SEE MORE
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectSection;
