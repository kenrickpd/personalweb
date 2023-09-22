import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const projectsData = [
  {
    title: "Election BNCC", 
    description: "Election BNCC is an election website to vote for the next CEO on my organization called BNCC. My role here is as back-end developer.",
    tags: ["Next.js","Express.js", "PostgreSQL", "Routing-controllers", "Typeorm"],
    imageUrl: "/electionbncc.png",
    width: '1898',
    height: '1079',
  }, 
  {
    title: "Foodtura", 
    description: "Foodtura is a platform that will be focused on a restaurant management. My role here is as back-end developer",
    tags: ["Next.js","Express.js", "PostgreSQL", "Routing-controllers", "Typeorm"],
    imageUrl: "/foodtura.png",
    width: '1010',
    height: '715',
  },
  {
    title: "blogskuy", 
    description: "Blogskuy is a blog website. This project isn’t completely done but my job as a back-end web developer is already done.",
    tags: ["Next.js","Express.js", "MySQL", "Routing-controllers", "Typeorm"],
    imageUrl: "/blogskuy.png",
    width: '1370',
    height: '715',
  },
  {
    title: "Himtikit Website", 
    description: "This website is a learning kit website for the students on my university. This is my first project using a framework instead of just using vanilla HTML, CSS and JS.",
    tags: ["Laravel", "PHP", "Blade"],
    imageUrl: "/Himtikit.png",
    width: '1370',
    height: '776',
  }
]as const;

export const skillsData = [
  "C",
  "C#",
  "C++",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "Laravel",
  "Git",
  "TypeScript",
  "ExpressJs",
  "NextJs",
  "PostgreSQL",
  "Postman",
  "Routing-controllers",
  "Framer motion"
]as const;