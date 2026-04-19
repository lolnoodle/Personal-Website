"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { skills } from "@/data/skills";

const interests = [
  {
    label: "Hip-Hop",
    image: "/hiphop.png",
    description: `Hiphop is not just something I listen to, it is a big part of how I think. The culture, the creativity, the constant push to do something that has never been done before. I find myself deep in the underground scene on a regular basis, discovering new artists and sounds before they blow up. But no matter how far I go, Lil Uzi Vert stays number one. His music has a way of always fitting the moment, whatever the vibe is, there is an Uzi song for it.

The influence goes further than just listening though. When I designed the light mode of this portfolio, I pulled the color scheme directly from Lil Uzi Vert vs the World, inspired by his purple era. That is what hiphop does to me, it bleeds into everything creative I do.

What I admire most about artists like Uzi and Playboi Carti is the commitment to a vision. Every project has a theme, a world, a sound that is entirely their own. They do not follow trends, they set them, and a whole generation of artists came up inspired by what they built. That kind of creative courage is something I try to bring into my own work. Build something with a clear identity. Make it yours. Leave a mark.

The picture? That is me and my fiancée on our own version of the Lil Uzi Vert vs the World 2 cover. Said what I said.`,
  },
  {
    label: "Gaming",
    image: "/gaming.png",
    description: `Gaming has been part of my identity since before I could really explain what identity meant. It started with a PS2 and Crash Bandicoot, moved through a DS, PSP, Wii, Xbox 360, PS3, PS4 and eventually landed on PC. Every console, every era, every late night session with friends. Gaming was never just entertainment for me, it was where I felt most at home.

That picture is from the 2019 LEC Finals at Ahoy Rotterdam, where I got to meet G2 in person. My favorites on that team were Mikyx and Wunder, not the ones everyone talked about, but the backbone of everything. The players whose impact only became obvious when you actually understood the game. There is something I respect deeply about doing essential work without needing the spotlight.

Gaming is also what brought me to programming in the first place. I enrolled in Creative Media and Game Technologies because I wanted to build games. Somewhere along the way that shifted. During projects at CMGT, most of which were centered around solving real day to day problems people face, I realized that what actually motivated me was impact. Making something that genuinely makes someone's life easier hits different than anything else. The game developer dream evolved into something bigger.

But gaming still shapes how I think. Watching how studios listen to their communities, how they build worlds with clear identities, how they balance creativity with functionality. All of that lives in how I approach my own work. Also it helps me decompress, clock out from reality for a second, and come back sharper.
`,
  },
  {
    label: "Fashion & Streetwear",
    image: "/fashion.jpg",
    description: `Fashion is how I tell my story before I say a word. The way you dress is a message, and anyone paying attention can read a lot about a person just from what they chose to put on that morning. For me it has always been about expression, looking good and feeling like myself at the same time.

My taste lives somewhere between loud and deliberate. Balenciaga for when something needs to make a statement, oversized fits and baggy jeans as my everyday comfort zone because as a skinny guy that silhouette just works. Simple and bold, or completely out there. If it speaks to me, I wear it.

But the brands that mean the most to me are closer to home. Banlieue and Daily Paper are two Dutch labels I genuinely respect, and Banlieue especially holds a different kind of weight. The founders are from Crooswijk, the same neighborhood I grew up in. Seeing that happen, people from your own streets building something that the whole country wears, is the kind of thing that stays with you. It is proof that where you come from does not limit where you can go, you just have to put in the work.

Fashion and programming are not as different as people think. Both are about creativity, craft and having something to say. The best fits and the best products share the same quality: they have a clear identity and they are not trying to be everything for everyone.`,
  },
  {
    label: "Engaged",
    image: "/engaged.jpg",
    description: `I met her at a sushi restaurant. I was the team leader, she was new, and I was the one showing her how everything worked. Safe to say the training went well.

Finding your person at a young age is something I do not take for granted. She is my biggest supporter and my most honest critic at the same time, the kind of person who will hype you up and then immediately tell you when you are wrong. That balance is everything. Every project idea I have, every late night rant about something I am obsessed with, every moment of doubt, she is there for all of it. She makes me want to be better and then actually holds me accountable to it.

We are Moroccan and Turkish, not a combination you see every day, but we make it work. Learning each other's cultures, the food, the traditions, the language. I am slowly working on the Turkish, mostly through long conversations with my mother in law, which is going great and I am definitely not struggling at all.

I am genuinely blessed to have found someone who fits so well into every part of my life. She is not just my partner, she is part of the story.`,
  },
];

export default function AboutPage() {
  const [currentInterest, setCurrentInterest] = useState(0);

  return (
    <div className="min-h-dvh bg-[var(--background)] flex flex-col">
      <div className="px-4 md:px-8 pt-10 pb-8 border-b border-[var(--border)] overflow-hidden">
        <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-3">
          // who i am
        </p>
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
          className="inline-block bg-[var(--text)]"
        >
          <span className="font-bebas text-5xl tracking-widest text-[var(--background)] px-2 leading-tight block">
            ISSAM FISSOUNE
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-4 md:px-8 py-10 border-b border-[var(--border)] w-full"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-7xl">
          <div className="relative w-full md:w-[420px] h-72 flex-shrink-0 border border-[var(--border)] overflow-hidden">
            <Image
              src="/school-work.jpg"
              alt="School work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          <p className="font-inter text-lg leading-relaxed text-[var(--text)] opacity-80">
            I&apos;m Issam a 26 year old developer from Rotterdam. Fresh off a
            CMGT degree at Hogeschool Rotterdam. I build things that work and
            look good doing it, whether that&apos;s a mobile app, a web
            platform, or something in between. Passionate about code, design,
            and everything in between. My background in Creative Media & Game
            Technologies taught me to think beyond the code. Not just how to
            build something, but why it should be built, who it&apos;s for, and
            what it should feel like to use. That combination of technical
            thinking and creative problem solving is what drives me. What I love
            about programming is that it never stops. There&apos;s always a
            better way to structure something, a smarter solution you
            didn&apos;t think of the first time, a new technology that changes
            how you approach a problem. That constant evolution is what keeps me
            genuinely interested. I&apos;m not here to clock in and execute
            tickets, I actually enjoy this. I take initiative without being
            asked, communicate openly, and I&apos;m the kind of person who makes
            the team better just by being in it. I pick things up fast, I ask
            the right questions, and when something needs to get done I get it
            done. Also pretty fun to grab a coffee with. Currently looking for
            my next challenge in Rotterdam.
          </p>
        </div>
      </motion.div>

      <div className="px-4 md:px-8 py-10 border-b border-[var(--border)]">
        <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-8">
          // tech stack
        </p>
        <div className="flex flex-col gap-6 max-w-xl">
          {skills.map((skill, i) => (
            <div key={skill.name} className="flex flex-col gap-2">
              <span className="font-bebas text-lg tracking-widest text-[var(--text)]">
                {skill.name}
              </span>
              <div className="w-full h-1 bg-[var(--border)] rounded-full">
                <motion.div
                  className="h-full bg-[var(--accent)] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 py-10">
        <p className="font-space text-sm text-[var(--accent)] tracking-widest mb-8">
          // beyond the code
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          <div className="relative w-full md:w-[560px] h-[480px] border border-[var(--border)] flex-shrink-0 bg-[var(--background3)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentInterest}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={interests[currentInterest].image}
                  alt={interests[currentInterest].label}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4 pt-1 flex-1">
            <div className="flex gap-6 flex-wrap">
              {interests.map((interest, i) => (
                <button
                  key={interest.label}
                  onClick={() => setCurrentInterest(i)}
                  className={`font-bebas text-2xl tracking-widest text-left transition-all duration-200 ${
                    i === currentInterest
                      ? "text-[var(--accent)]"
                      : "text-[var(--text)] opacity-30 hover:opacity-60"
                  }`}
                >
                  {interest.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentInterest}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3"
              >
                {interests[currentInterest].description
                  .split("\n\n")
                  .map((para, i) => (
                    <p
                      key={i}
                      className="font-inter text-s leading-relaxed text-[var(--text)] opacity-60"
                    >
                      {para}
                    </p>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
