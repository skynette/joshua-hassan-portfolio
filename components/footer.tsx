import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mb-10 px-4 lg:px-8 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; {currentYear} Joshua. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> built with
                React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend, hosted on Vercel.
            </p>
        </footer>
    );
}
