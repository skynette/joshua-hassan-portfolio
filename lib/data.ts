import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import BudesCodeAcademyImg from "@/public/budescode-academy.png";
import CTFImage from "@/public/ctf.png";
import LotteryImage from "@/public/lottery.png";
import uTubeImage from "@/public/uTube.png";
import fundFairImage from "@/public/fundfair.png";
import timmyTurnerImage from "@/public/timmyTurner.png"
import PodxImg from "@/public/podx.png"
import ASWAImg from "@/public/aswa.png"
import PantheraImg from "@/public/panthera.jpg"
import IncomeExpenseBotImg from "@/public/finance-bot.png"


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
        title: "Shortlet Lagos | Blockhain Developer",
        location: "Remote",
        description:
            "Developing blockchain-based rental solutions and user interfaces for Lagos' short-term accommodation platform",
        icon: React.createElement(FaReact),
        date: "March 2024 - Present",
    },
    {
        title: "Budescode Academy | Full-Stack Developer",
        location: "Remote",
        description:
            "At Budescode Academy, I primarily work on backend development tasks, ensuring the robustness and efficiency of our platform's core functionalities. This includes implementing features, optimizing performance, and maintaining the integrity of our backend systems.",
        icon: React.createElement(SiDjango),
        date: "September 2023 - February 2024",
    },
    {
        title: "Accuvend | Front-End Developer",
        location: "Lagos, NG",
        description:
            "Led front-end development at Accuvend, contributing to an intuitive admin dashboard and responsive website. Translated design concepts into engaging user interfaces while ensuring robust connectivity and data exchange. Collaborated effectively within a team to achieve project objectives.",
        icon: React.createElement(CgWorkAlt),
        date: "October 2023 - November 2023",
    },
    {
        title: "Spire Edge Realty | Full-Stack Developer",
        location: "Lagos, NG",
        description:
            "Developed and deployed a responsive digital marketing website, enhancing sales by up to 40%. Designed and implemented a modern, device-compatible user interface. Integrated a custom property search feature enabling users to search based on location, type, price, and more.",
        icon: React.createElement(FaPython),
        date: "August 2020 - Decemeber 2020",
    },

] as const;

export const projectsData = [
    {
        title: "PodX",
        description:
            "A decentralized live podcasting platform that enables creators to host on-chain sessions and receive cryptocurrency tips in real-time. Built with Web3 integration, it combines blockchain technology with live streaming capabilities to create a monetizable podcasting ecosystem.",
        tags: ["NextJs", "Wagmi", "Privy", "Real-time Streaming"],
        imageUrl: PodxImg,
        link: "https://podx.fun/"
    },
    {
        title: "Income-Expense Bot",
        description:
            "A Telegram bot with Django-FastAPI backend for personal finance management. Features transaction tracking, category management, and multi-currency support with an intuitive button-based interface.",
        tags: ["Django", "FastAPI", "Python", "Telegram API", "PostgreSQL"],
        imageUrl: IncomeExpenseBotImg,
        link: "https://t.me/joshua_income_expense_bot",
        githubLink: "https://github.com/skynette/finance-bot"
    },
    {
        title: "AI solana wallet analyzer",
        description:
            "A comprehensive web application that provides in-depth analysis of Solana blockchain wallets. It combines real-time blockchain data, historical analysis, and AI-powered insights to give users a complete view of wallet activity and portfolio composition.",
        tags: ["NextJs", "Moralis", "Openai", "Solana"],
        imageUrl: ASWAImg,
        link: "https://aswa-sol.io/"
    },
    {
        title: "Budescode Academy",
        description:
            "A dynamic learning platform designed to empower developers in honing and advancing their skills. Leveraging technologies like Django, TypeScript, Next.js, Tailwind, and Redux, it offers a comprehensive educational experience.",
        tags: ["Django", "Python", "Javascript", "Bootstrap"],
        imageUrl: BudesCodeAcademyImg,
        link: "https://academy.budescode.com/"
    },
    {
        title: "Panthera Bot",
        description:
            "A sophisticated Telegram airdrop bot that gamifies token distribution through a comprehensive scoring system. The bot incorporates a dynamic leaderboard and innovative 'star' purchase mechanism for point accumulation.",
        tags: ["Telegram API", "Node.js", "React", "Web3"],
        imageUrl: PantheraImg,
        link: "https://t.me/panthera4_bot/Panthera?startapp=1282968872"
    },
    {
        title: "Fundfair",
        description:
            "Decentralized crowdfunding platform on blockchain. Empowers individuals to fund impactful projects transparently and securely. Eliminates intermediaries with smart contracts.",
        tags: ["Django", "Typescript", "Tailwind", "Solidity", "Thirdweb"],
        imageUrl: fundFairImage,
        link: "https://fundfair.vercel.app/"
    },
    {
        title: "GDG CTF Challenge",
        description:
            "An engaging online game within the Google Developer Group (GDG) community. Participants explore the GDG event website, discovering hidden flags to earn points and encourage interactive learning.",
        tags: ["React", "Django", "Tailwind", "React Query"],
        imageUrl: CTFImage,
        link: "https://gdg-benin.vercel.app/"
    },
    {
        title: "Rapid Draw",
        description: "A decentralized application (dapp) on the Polygon (Matic) blockchain designed for conducting lotteries. Users can participate by purchasing tickets using Matic cryptocurrency and have the chance to win rewards.",
        tags: ["Ethereum", "Polygon", "Solidity", "Next.js", "ThirdWeb", "Tailwind"],
        imageUrl: LotteryImage,
        link: "https://rapidraw.vercel.app/"
    },
    {
        title: "Timmy Turner",
        description: "A sleek website showcasing NFT claiming. Built with Ethereum, Solidity, and Next.js. Leveraging ThirdWeb and styled with Tailwind for a seamless user experience.",
        tags: ["Ethereum", "Solidity", "Next.js", "ThirdWeb", "Tailwind"],
        imageUrl: timmyTurnerImage,
        link: "https://timmy-turner.vercel.app/"
    },
    {
        title: "uTube",
        description: "uTube is a web application built with React and Material UI that allows users to search and watch YouTube videos.",
        tags: ['React', 'MUIv5', 'RestAPI'],
        imageUrl: uTubeImage,
        link: "https://utube-v01.netlify.app/"
    },
    // {
    //     title: "E-Commerce",
    // },
    // {
    //     title: "Home",
    // },
    // {
    //     title: "Expensify API",
    // },
    // {
    //     title: "Food service",
    // },
    //     title: "GFT",
    // },
    //     title: "Real estate api",
    //    
    // },
]

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
