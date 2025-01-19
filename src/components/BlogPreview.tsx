import { Link } from "react-router";

function BlogPreview(props: any) {
  return (
    <>
      <div className="blog--preview--container">
        <div className="blog--preview--heading">
          <Link to={`/blog?id=${props.id}`}>
            <h2>{props.heading}</h2>
          </Link>
        </div>
        <div className="blog--preview--text">
          <p>{props.summary}</p>
        </div>
      </div>
    </>
  );
}

export default BlogPreview;
