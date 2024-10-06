// 1. Fetch, Load and show catagories on html 


// create loadcatagories
const loadCategories = () => {
      console.log("loadcatagories created")

    //   fetch the data

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
}


// create DisplayCatagories

const displayCategories = (categories) => {
     const categoryContainer = document.getElementById("categories")

    categories.forEach((item) => {
     console.log(item);
    //  create button 
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    // add button category container
    categoryContainer.append(button);
    })
        
   
}


loadCategories()