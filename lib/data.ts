import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
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
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Budescode Academy | Full-Stack Developer",
        location: "Remote",
        description:
            "Some frontend work lol",
        icon: React.createElement(SiDjango),
        date: "September 2023 - Present",
    },
    {
        title: "Accuvend | Front-End Developer",
        location: "Lagos, NG",
        description:
            "Led front-end development at Accuvend, contributing to an intuitive admin dashboard and responsive website. Translated design concepts into engaging user interfaces while ensuring robust connectivity and data exchange. Collaborated effectively within a team to achieve project objectives.",
        icon: React.createElement(CgWorkAlt),
        date: "November 2023",
    },
    {
        title: "Spire Edge Realty | Full-Stack Developer",
        location: "Lagos, NG",
        description:
            "Developed and deployed a responsive digital marketing website, enhancing sales by up to 40%. Designed and implemented a modern, device-compatible user interface. Integrated a custom property search feature enabling users to search based on location, type, price, and more.",
        icon: React.createElement(FaPython),
        date: "2021 - present",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "E-Commerce",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma", "Zustand"],
        imageUrl: "",
    },
    {
        title: "Budescode Academy",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["Django", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: "",
    },
    {
        title: "GDG CTF Challenge",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Django", "Tailwind", "React Query"],
        imageUrl: "",
    },
] as const;

export const skillsData = [
    "Python",
    "Django",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "Zustand",
    "Tanstack Query",
    "Redis",
    "PostgreSQL",
    "Framer Motion",
] as const;
