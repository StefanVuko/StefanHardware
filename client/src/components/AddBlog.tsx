import { useState } from "react";
import { Link } from "react-router";

function AddBlog() {
  const [text, setText] = useState("Text...");
  const [heading, setHeading] = useState("Heading...");
  const [type, setType] = useState("Type...");
  const [summary, setSummary] = useState("Summary...");
  const [keywords, setKeywords] = useState("Keywords...");

  const handleTextChange = (event: any) => {
    setText(event.target.value); // Updates state when the input value changes
  };

  const handleHeadingChange = (event: any) => {
    setHeading(event.target.value); // Updates state when the input value changes
  };

  const handleTypeChange = (event: any) => {
    setType(event.target.value); // Updates state when the input value changes
  };

  const handleSummaryChange = (event: any) => {
    setSummary(event.target.value); // Updates state when the input value changes
  };

  const handleKeywordChange = (event: any) => {
    setKeywords(event.target.value); // Updates state when the input value changes
  };

  const createBlog = () => {
    const heading = (document.getElementById("heading") as HTMLInputElement)
      .value;
    const type = (document.getElementById("type") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLInputElement)
      .value;
    const text = (document.getElementById("text") as HTMLInputElement).value;
    const keywords = (document.getElementById("keywords") as HTMLInputElement)
      .value;
    const date = "21.01.2025"; //LMAO
    const isPinned = false;
    const newBlog = {
      heading,
      text,
      summary,
      date,
      type,
      keywords,
      isPinned,
    };

    console.log(newBlog);

    fetch(`/api/createNewBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    }).then((resp) => console.log(resp.status));
  };

  return (
    <>
      <div className="edit--blog--container">
        <div className="edit--blog--heading">
          <h2>Create Blog</h2>
        </div>
        <div className="edit--blog--content">
          <form>
            <label className="edit--blog--label" htmlFor="heading">
              Heading
            </label>
            <br></br>
            <input
              id="heading"
              placeholder={heading}
              onChange={handleHeadingChange}
              className="edit--blog--text"
              type="text"
            ></input>
            <br></br>
            <label className="edit--blog--label" htmlFor="type">
              Type
            </label>
            <br></br>
            <input
              id="type"
              placeholder={type}
              onChange={handleTypeChange}
              className="edit--blog--text"
              type="text"
            ></input>
            <br></br>
            <label className="edit--blog--label" htmlFor="keywords">
              Keywords
            </label>
            <br></br>
            <input
              id="keywords"
              placeholder={keywords}
              onChange={handleKeywordChange}
              className="edit--blog--text"
              type="text"
            ></input>
            <br></br>
            <label className="edit--blog--label" htmlFor="summary">
              Summary
            </label>
            <br></br>
            <input
              id="summary"
              className="edit--blog--text"
              placeholder={summary}
              onChange={handleSummaryChange}
              type="text"
            ></input>
            <br></br>
            <label className="edit--blog--label" htmlFor="text">
              Text
            </label>
            <br></br>
            <textarea
              id="text"
              className="edit--blog--text--text"
              placeholder={text}
              onChange={handleTextChange}
              rows={1} // Initial number of rows
              onInput={(e) => {
                // @ts-ignore
                e.target.style.height = "auto";
                // @ts-ignore
                e.target.style.height = e.target.scrollHeight + "px"; // Set height to match content
              }}
            ></textarea>
            <br></br>
          </form>
        </div>
        <div className="edit--blog--button--container">
          <Link to={`/`}>
            <input
              className="edit--blog--button"
              type="submit"
              value="Create Blog"
              onClick={createBlog}
            ></input>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AddBlog;
