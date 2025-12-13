import type { PropsWithChildren } from "react";

type TagProps = PropsWithChildren<{
    href?: string;
    link?: boolean;
    external?: boolean;
}>;


export default function Tag({ href, link = false, external, children }: TagProps) {
    if (!link) return <span className="tag-item">{children}</span>;

    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="tag-item"
        >
            {children}
        </a>
    );
}
