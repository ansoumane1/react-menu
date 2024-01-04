import { useState } from "react";
import Title from "./Title";
import { menu as listMenu } from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = listMenu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const categories = ["all", ...tempSet];
// console.log(tempSet);

const allCategories = [
  "all",
  ...new Set(listMenu.map((item) => item.category)),
];
console.log(allCategories);
const App = () => {
  const [menuItems, setMenuItems] = useState(listMenu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(listMenu);
      return;
    }
    const newItems = listMenu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
