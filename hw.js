//Question 1

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}];

shopItems.forEach(item => {
    console.log("=======================================");
    console.log("Name:\t", item.name);
    console.log("Price:\t", item.price);
    console.log("About:\t", item.desc);
    console.log("Category:\t", item.category);
    console.log("=======================================");
});

//Question 2

const hwPerson = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt"
    }
  ]
};

//why does this keep breaking :(((((
function displayFavoriteFoodDishes(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      console.log(key + " contains:");
      obj[key].forEach(item = {
        console.log(item);
      });
    } else if (typeof obj[key] === "object") {
      console.log(key + " contains:");
      displayFavoriteFoodDishes(obj[key]);
    } else {
      console.log(key + " contains:\n" + obj[key]);
    }
  }
}

displayFavoriteFoodDishes(hwPerson);

//Question 3
function checkStringLength(string) {
  return new Promise((resolve, reject) => {
    if (string.length > 10) {
      resolve("Big word");
    } else {
      reject("Small String");
    }
  });
}

checkStringLength('Is this a big word?')
    .then(result => console.log(result))
    .catch(error => console.log(error));


//Question 4
//Poker Game (Google had to help me here, this was super tricky for me)
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} // Getting the math.random built into a func.

class GameMember {
  constructor() {
    this.hand = [randomNumber(1, 13), randomNumber(1, 13)];
  }

  hit() {
    throw new Error("Method not implemented.");
  }
} //game member class calling func

class Dealer extends GameMember {
  hit() {
    const handTotal = this.hand.reduce((total, card) => total + card, 0);
    if (handTotal <= 16) {
      const newCard = randomNumber(1, 13);
      this.hand.push(newCard);
      console.log("Dealer hits:", newCard);
    } else {
      console.log("Dealer cannot hit.");
    }
  }
}

class Player extends GameMember {
  hit() {
    const handTotal = this.hand.reduce((total, card) => total + card, 0);
    if (handTotal < 21) {
      const newCard = randomNumber(1, 13);
      this.hand.push(newCard);
      console.log("Player hits:", newCard);
    } else {
      console.log("Player cannot hit.");
    }
  }
}

//logs
const dealer = new Dealer();
console.log("Dealer's hand:", dealer.hand); // Initial hand
dealer.hit(); // Dealer hits a card
console.log("Dealer's hand:", dealer.hand); // Updated hand

const player = new Player();
console.log("Player's hand:", player.hand); // Initial hand
player.hit(); // Player hits a card
console.log("Player's hand:", player.hand); // Updated hand
