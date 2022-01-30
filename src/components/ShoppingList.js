import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

// function ShoppingList({ items, onItemFormSubmit }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchItem, setSearch] = useState("");

//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }


//   const itemsToDisplay = items.filter((item) => 
//     selectedCategory === "All" || item.category === selectedCategory) //initial filter by dropdown list
//     .filter((item)=> item.name.toLowerCase().includes(searchItem.toLowerCase())) //secondary filter from searchbar


//   return (
//     <div className="ShoppingList">
//       <ItemForm onItemFormSubmit={onItemFormSubmit}/> {/*The submit button "add to list" will activate the function located in child component */}

//        {/* Passing the current state and the change state function (not yet defined) into the child component */}
//       <Filter onCategoryChange={handleCategoryChange} onItemChange={setSearch} inputField={searchItem}/>
     
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;


function ShoppingList({ items, onItemFormSubmit }) {
  console.log(items)
  console.log(onItemFormSubmit)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    // category
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    // search term
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={setSearch}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;