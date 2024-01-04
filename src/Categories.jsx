function Categories({ categories, filterItems }) {
  return (
    <div>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => filterItems(category)}
              className="btn"
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
