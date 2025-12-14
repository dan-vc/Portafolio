import { PropsWithChildren } from "react";
import Github from "./icons/Github";
import Figma from "./icons/Figma";
import BaselineOpenInNew from "./icons/BaselineOpenInNew";

type Props = PropsWithChildren<{
  url?: string,
  githubUrl?: string,
  figmaUrl?: string,
  img: string,
  title: string,
  content: string,
}>;

export default function ProyectCard({ url, githubUrl, figmaUrl, img, title, content, children }: Props) {
  return (
    <div className="proyect-card">
      <div className="media">
        <img src={img} alt={title} />
        <div className="links">
          {url &&
            <a href={url} target="_blank" className="link">
              <BaselineOpenInNew />
            </a>
          }
          {githubUrl &&
            <a href={githubUrl} target="_blank" className="link">
              <Github />
            </a>
          }
          {figmaUrl &&
            <a href={figmaUrl} target="_blank" className="link">
              <Figma />
            </a>
          }
        </div>
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{content}</p>
        <div className="tags">
          {children}
        </div>
      </div>
    </div>
  );
}
