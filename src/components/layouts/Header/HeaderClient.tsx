"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { path: "/", label: "Home" },
    { path: "/now", label: "Now" },
    { path: "/blog", label: "Blogs" },
];

export default function HeaderClient() {
    const pathname = usePathname();

    const getClass = (path: string) =>
        pathname === path
            ? "text-foreground font-semibold"
            : "text-muted-foreground hover:text-foreground";

    return (
        <div className="flex">
            {navItems.map(({ path, label }) => (
                <Link
                    key={path}
                    href={path}
                    className={`text-lg font-medium transition-colors no-underline mr-4 ${getClass(
                        path,
                    )}`}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}
