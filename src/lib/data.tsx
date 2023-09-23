import React from "react";
import { LuClipboardCheck, LuGraduationCap } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import {MdDeveloperMode} from "react-icons/md"

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
    title: "blogskuy", 
    description: "Blogskuy is a classic blogging website. This project isn’t completely done but my job as a back-end web developer is already done.",
    tags: ["Next.js","Express.js", "MySQL", "Routing-controllers", "Typeorm"],
    imageUrl: "/blogskuy.png",
    width: '1370',
    height: '715',
  },
  {
    title: "Foodtura", 
    description: "Foodtura is a platform that are focused on a restaurant management. My role here is as back-end developer",
    tags: ["Next.js","Express.js", "PostgreSQL", "Routing-controllers", "Typeorm"],
    imageUrl: "/foodtura.png",
    width: '1010',
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

export const experiencesData = [
  {
    title: 'Atma Asta Ratetra Staff',
    location: 'SMAN 8 Bandung, Indonesia',
    description: 'Atma Asta is an annual event held by my high school, SMAN 8 Bandung. My role here is as Staff of Tenant Division.',
    icon: React.createElement(LuClipboardCheck),
    date: '2019'
  },
  {
    title: 'Graduated High School',
    location: 'SMAN 8 Bandung, Indonesia',
    description: 'I graduated from my high school SMAN 8 Bandung.',
    icon: React.createElement(LuGraduationCap),
    date: '2021'
  },
  {
    title: 'Attend BINUS University Computer Science',
    location: 'BINUS University Bandung, Indonesia',
    description: 'Im currently studying at BINUS University in Computer Science Degree.',
    icon: React.createElement(FaUniversity),
    date: '2021'
  },
  {
    title: 'Joined HIMTI',
    location: 'BINUS University Bandung, Indonesia',
    description: 'I joined a Students Association called HIMTI(Himpunan Mahasiswa Teknik Informatika Universitas Bina Nusantara) as Web Developer Activist for 1 year.',
    icon: React.createElement(FaPeopleGroup),
    date: '2022'
  },
  {
    title: 'Joined BNCC',
    location: 'BINUS University Bandung, Indonesia',
    description: 'I Joined an organization called BNCC(Bina Nusantara Computer Science) as Research and Development Staff for 1 year.',
    icon: React.createElement(MdDeveloperMode),
    date: '2023'
  }
]as const;