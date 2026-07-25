import LatestBlogPost from "./LatestBlogPost";
import { InstitutionLink } from "./InstitutionLink";
import Link from "next/link";

export default function AboutSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
                <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">
                    Hey, I'm Aditya 👋
                </h1>
                <div className="text-muted-foreground leading-relaxed flex flex-col gap-3">
                    <div>
                        I work as a{" "}
                        <span className="text-foreground">
                            Software Developer
                        </span>{" "}
                        at{" "}
                        <InstitutionLink
                            href="https://konrad.com"
                            logo="/konrad.png"
                            name="Konrad"
                        />
                        , focusing on full-stack web applications and AI
                        integrations.
                    </div>
                    <div>
                        I studied{" "}
                        <span className="text-foreground">
                            Computer Science and Engineering
                        </span>{" "}
                        at{" "}
                        <InstitutionLink
                            href="https://jklu.edu.in"
                            logo="/jklu_logo.webp"
                            name="JKLU, Jaipur"
                        />
                        , with visiting semesters at{" "}
                        <InstitutionLink
                            href="https://www.iitgn.ac.in/"
                            logo="/iit_gandhinagar_logo.webp"
                            name="IIT Gandhinagar"
                        />{" "}
                        and{" "}
                        <InstitutionLink
                            href="https://iitjammu.ac.in"
                            logo="/iit_jammu_logo.webp"
                            name="IIT Jammu"
                        />
                        .
                    </div>
                    <div>
                        I like understanding how things work beneath the
                        surface. I focus on clear abstractions, practical
                        design, and building systems that behave predictably.
                    </div>
                    <div>
                        Outside of work, I follow commercial aviation and
                        photograph environments that show structure or symmetry.
                        I also explore how real-world systems work, including
                        economics and geopolitics, mostly out of curiosity
                        rather than depth.
                    </div>
                    <div className="flex w-full justify-end mt-2">
                        <Link
                            href="/now"
                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
                            </span>
                            what I'm doing now
                        </Link>
                    </div>
                </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-center gap-6">
                <div>
                    <LatestBlogPost />
                </div>
            </div>
        </div>
    );
}
