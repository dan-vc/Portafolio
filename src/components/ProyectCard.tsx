import { ReactNode } from "react";

type Props = {
  url: string,
  img: string,
  title: string,
  content: string,
  tags: {
    component: ReactNode,
    name: string
  }[]
};

export default function ProyectCard({ url, img, title, content, tags }: Props) {
  console.log(tags)

  return (
    <a className="proyect-card" href={url} target="blank">
      <img src={`/img/${img}`} alt="" />
      <div className="content">
        <h4>{title}</h4>
        <p>{content}</p>
        <div className="tags">
          {tags.map(e => (
            <span className='tag-item'>
              {e.component}
              {e.name}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
