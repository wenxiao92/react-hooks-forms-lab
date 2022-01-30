import React from "react";

// function Filter({ onCategoryChange, onItemChange, inputField }) {

//   //changing of the state is handled in the child component, while the parent stores the current and future state
//   function handleSearchChange(event){
//     onItemChange(event.target.value)
//   }


//   return (
//     <div className="Filter">
//       <input type="text" name="search" placeholder="Search..." onChange={handleSearchChange} value={inputField}/>
//       <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;

function Filter({ search, onSearchChange, onCategoryChange }) {
  function handleSearchChange(event) {
    // we could pass up the whole event object via onSearchChange
    // but passing *only* the value makes the data easier to work with in the parent
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;