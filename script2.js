fetch("https://striveschool-api.herokuapp.com/books")
  .then((arrayOfBooks) => {
    if (arrayOfBooks.ok) {
      return arrayOfBooks.json();
    }
  })
  .then((booksObj) => {
    const row = document.getElementsByClassName("row")[0];
    booksObj.forEach((book) => {
      const col = document.createElement("div");
      col.classList.add("col");
      col.innerHTML = `<div class="card">
      <img src=${book.img} class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.price}</p>
        <a href="#" class="btn btn-danger" onclick="discard(event)">Discard</a>
        <a href="#" class="btn btn-success" onclick="add(event)">Add to cart</a>
      </div>
    </div>`;

      row.appendChild(col);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// let titles = JSON.parse(localStorage.getItem("cart")) || [];
// window.addEventListener("DOMContentLoaded", () => {
//   if (titles) {
//     titles.forEach((titleBook) => {
//       cart.push(titleBook);
//     });
//   }
//   console.log(cart[0]);
// });

const discard = (event) => {
  const col = event.target.parentElement.parentElement.parentElement;
  col.remove();
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
const add = (event) => {
  event.preventDefault();
  const col = event.target.parentElement.parentElement.parentElement;
  cart.push(col);

  //   const title = event.target.parentElement.childNodes[1].innerText;
  //   titles.push(title);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const carrello = document.getElementsByClassName("btn")[0];

carrello.addEventListener("click", (event) => {
  event.preventDefault();
  const row = document.getElementsByClassName("row")[0];
  //   const ul = document.createElement("ul");
  //   const col = document.createElement("div");
  //   col.classList.add("col");
  row.innerHTML = "";
  //   row.classList.remove("row-cols-3");
  //   row.classList.remove("row-cols-lg-4");
  //   row.classList.add("row-cols-2");
  //   row.classList.add("my-3");
  //   row.classList.add("text-light");
  cart.forEach((card) => {
    // const li = document.createElement("li");
    console.log(card);
    // li.innerText = title;
    // ul.appendChild(li);
    // col.appendChild(li);
    // row.appendChild(col);
    const successBtn = card.lastElementChild.lastElementChild.lastElementChild;
    successBtn.remove();
    row.appendChild(card);
  });
});
