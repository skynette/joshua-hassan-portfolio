"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    const itemsToShowInitially = 4;
    const [visibleProjects, setVisibleProjects] = useState(projectsData.slice(0, itemsToShowInitially));

    const toggleShowMore = () => {
        const newVisibleProjects =
            visibleProjects.length === itemsToShowInitially ? projectsData : projectsData.slice(0, itemsToShowInitially);
        setVisibleProjects(newVisibleProjects);
    };

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div className="">
                {visibleProjects.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
                {projectsData.length > itemsToShowInitially && (
                    <button onClick={toggleShowMore} className="mt-4 text-blue-500 hover:underline">
                        {visibleProjects.length === itemsToShowInitially ? 'Show More' : 'Show Less'}
                    </button>
                )}
            </div>
        </section>
    );
}
