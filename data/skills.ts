export type Skill = {
  name: string;
  level: number; // internal scale 0-100, never displayed as a number
};

export const skills: Skill[] = [
  { name: "React / React Native", level: 90 },
  { name: "Laravel", level: 80 },
  { name: "Next.js", level: 70 },
  { name: "Node.js", level: 60 },
  { name: "NestJS", level: 48 },
];
