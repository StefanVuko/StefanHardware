import { Link } from "react-router";
import Keyword from "./Keyword";

function BlogPreview(props: any) {
  function splitKeywords(keywords: any) {
    return keywords.split(";");
  }

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
          <div className="blog--preview--keyword">
            {splitKeywords(props.keywords).map((keyword: any) => {
              return <Keyword key={keyword} text={keyword} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPreview;
