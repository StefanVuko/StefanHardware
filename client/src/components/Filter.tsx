function Filter({ onSortChange, onTagChange }: any) {
  const handleTagClick = (tag: string) => {
    // This toggles the tag selection (add/remove tag)
    onTagChange(tag);
  };

  return (
    <>
      <div className="filter--container">
        <div className="filter--button--container">
          <button
            onClick={() => onSortChange("newest")}
            className="filter--button"
          >
            Newest
          </button>
          <button
            onClick={() => onSortChange("oldest")}
            className="filter--button"
          >
            Oldest
          </button>
        </div>
        <p onClick={() => handleTagClick("Phones")}>Phones</p>
        <p onClick={() => handleTagClick("CPU")}>CPU</p>
        <p onClick={() => handleTagClick("Hardware")}>Hardware</p>
        <p onClick={() => handleTagClick("Graphics")}>Graphics</p>
        <p onClick={() => handleTagClick("Data")}>Data</p>
      </div>
    </>
  );
}

export default Filter;
