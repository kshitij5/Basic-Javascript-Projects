// local reviews data
// that should be fetched using ajax/ api request
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      info:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      info:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      info:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      info:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// we are selceting all the elements required

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn");

// setting initial values
var currentItem = 0;
var lastRandom = randomItem();

// show person based on items
function updatePerson(person) {
    const items = reviews[Math.abs(person)%(reviews.length)];
    // console.log(currentItem);
    img.src = items.img;
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.info;
}

// return random number from 0 to 3
function randomItem() {
    return Math.floor((Math.random() * reviews.length - 1) + 1);
}

// load initial items
window.addEventListener('DOMContentLoaded', () => {
    updatePerson(currentItem);
});

// show next person
nextBtn.addEventListener('click', () => {
    currentItem++;
    // console.log(currentItem%reviews.length);
    updatePerson(currentItem);
});

// show prev person
prevBtn.addEventListener('click', () => {
    currentItem--;
    // console.log(currentItem%reviews.length);
    updatePerson(currentItem);
});

// shiw random person
random.addEventListener('click', () => {
    var currentRandom = randomItem();
    while(currentRandom==lastRandom){
        currentRandom = randomItem();
    }
    console.log(currentRandom);
    updatePerson(currentRandom);
    lastRandom = currentRandom;
});