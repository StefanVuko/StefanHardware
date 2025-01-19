import { useState } from "react";

function EditBlog(props: any) {
  const [text, setText] = useState(props.text);
  const [heading, setHeading] = useState(props.heading);
  const [type, setType] = useState(props.type);
  const [summary, setSummary] = useState(props.summary);

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

  const updateBlog = () => {
    const heading = (document.getElementById("heading") as HTMLInputElement)
      .value;
    const type = (document.getElementById("type") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLInputElement)
      .value;
    const text = (document.getElementById("text") as HTMLInputElement).value;
    const id = props.id;
    const date = props.date;
    const keywords = props.keywords;
    const isPinned = props.isPinned;
    const updatedBlog = {
      heading,
      text,
      summary,
      id,
      date,
      type,
      keywords,
      isPinned,
    };

    console.log(updatedBlog);

    fetch(`http://localhost:5000/updateBlog`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    }).then((resp) => console.log(resp.status));
  };

  return (
    <>
      <div className="edit--blog--container">
        <div className="edit--blog--heading">
          <h2>Edit Blog</h2>
        </div>
        <div className="edit--blog--content">
          <form>
            <label className="edit--blog--label" htmlFor="heading">
              Heading
            </label>
            <br></br>
            <input
              id="heading"
              value={heading}
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
              value={type}
              onChange={handleTypeChange}
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
              value={summary}
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
              value={text}
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
          <input
            className="edit--blog--button"
            type="submit"
            value="Update Blog"
            onClick={updateBlog}
          ></input>
        </div>
      </div>
    </>
  );
}

export default EditBlog;
