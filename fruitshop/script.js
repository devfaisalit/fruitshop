let products = {
  data: [
    {
      productName: 'apple',
      price: 'price 430/kg',
      image: 'ap.webp'
    },
    {
      productName: 'banana',
      price: 'price 180/kg',
      image: 'bn.png'
    },
    {
      productName: 'pineapple',
      price: 'price 180/kg',
      image: 'pineapple.jpg'
    },
    {
      productName: 'plum',
      price: 'price 350/kg',
      image: 'plum.jpg'
    },

    {
      productName: 'cherry',
      price: 'price 220/kg',
      image: 'cherry.webp'
    },
    {
      productName: 'melon',
      price: 'price 250/kg',
      image: 'm.webp'
    },
    {
      productName: 'grapes',
      price: 'price 190/kg',
      image: 'gr.png'
    },
    {
      productName: 'orange',
      price: 'price 179/kg',
      image: 'or.png'
    },
    {
      productName: 'guava',
      price: 'price 220/kg',
      image: 'guava.webp'
    },
    {
      productName: 'blueberry',
      price: 'price 450/kg',
      image: 'blueberry.webp'
    },
    {
      productName: 'blackberry',
      price: 'price 300/kg',
      image: 'blackberry.webp'
    },
    {
      productName: ' gooseberry',
      price: 'price 255/kg',
      image: 'gooseberry.webp'
    },
    {
      productName: 'jackfruit',
      price: 'price 299/kg',
      image: 'jackfruit.webp'
    },
    {
      productName: 'javaplum',
      price: 'price 249/kg',
      image: 'javaplum.webp'
    },
    {
      productName: 'kiwifruit',
      price: 'price 310/kg',
      image: 'kiwifruit.webp'
    },
    {
      productName: 'lime',
      price: 'price 350/kg',
      image: 'lime.webp'
    },
    {
      productName: 'muskmelon',
      price: 'price 279/kg',
      image: 'muskmelon.webp'
    },
    {
      productName: 'papaya',
      price: 'price 679/kg',
      image: 'papaya.webp'
    },
    {
      productName: 'peach',
      price: 'price 310/kg',
      image: 'peach.webp'
    },
    {
      productName: 'pear',
      price: 'price 279/kg',
      image: 'pear.webp'
    },
    {
      productName: 'mango',
      price: 'price 430/kg',
      image: 'mango.webp'
    }
  ]
};



for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = i.price;

  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("products").appendChild(card);
}



//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

// value uncrease function



function atc() {
  let element = document.getElementById('incrementtext');
  let value = element.innerHTML;
  ++value;
  document.getElementById('incrementtext').innerHTML = value;
}

function minus() {
  let element = document.getElementById('incrementtext');
  let value = element.innerText;
  if (value < 1) {
    value
  } else {
    --value
  }
  document.getElementById('incrementtext').innerHTML = value;
}
