import { useContext } from "react";

import { AppContext } from "src/context";

import "./index.scss";

export default function BlogCard({ thumbnail, author, date, title }) {
  const { theme } = useContext(AppContext);

  return (
    <div className={`blog-card ${theme === "dark" ? "dark" : ""}`}>
      <img
        className="thumbnail"
        src={thumbnail}
        alt="Blog thumbnail"
        width="100%"
        height={185}
      />
      <div className="blog-card-content">
        <div>
          <p>By </p>
          <strong>{author} </strong>
          <p>| {date}</p>
        </div>
        <h3 className="blog-title">{title}</h3>
      </div>
    </div>
  );
}
