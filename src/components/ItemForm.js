import React, { useState }  from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}
export default ItemForm;

// function ItemForm({onItemFormSubmit}) {
//   //Setting two states due to an item having a name (one state) and a category (second state)
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("Produce");


//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   function handleCategoryChange(event) {
//     setCategory(event.target.value);
//   }

//   function handleSubmit(event){
//   event.preventDefault();
//   //prop passed from ShoppingList to have function defined in this child component. When submitted id will
//   //auto generate, name will be taken from first state and category will be taken from second state
//   onItemFormSubmit({
//     id: uuid(),
//     name,
//     category,
//   });
//   }





//   return (
//     <form className="NewItem" onSubmit={handleSubmit}> {/*onSubmit event handler is on the form element */}
//       <label>
//         Name:
//         <input type="text" name="name" value={name} onChange={handleNameChange}/>
//       </label>


//       <label>
//         Category:
//         <select name="category" value={category} onChange={handleCategoryChange} >
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

//Abstraction example
// function ItemForm({ onItemFormSubmit }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "Produce",
//   });

//   function handleChange(event) {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     onItemFormSubmit({
//       id: uuid(),
//       ...formData
//     });
//   }

//   return (
//     <form className="NewItem" onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Category:
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//         >
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

