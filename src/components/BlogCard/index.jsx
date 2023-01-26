import "./index.scss";

export default function BlogCard({ thumbnail, author, date, title }) {
  return (
    <div className="blog-card">
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
