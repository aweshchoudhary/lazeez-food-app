const fetchFood = (event, name) => {
  const items = document.getElementsByClassName("card");
  const item = document.getElementsByClassName(event.target.id);
  const displayNone = () => {
    for (let card = 0; card < items.length; card++) {
      const currentCard = items[card];
      currentCard.style.display = "none";
    }
  };
  displayNone();
  for (let i = 0; i < item.length; i++) {
    const element = item[i];
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }
};

const activeCard = () => {
  const active = document.getElementsByClassName("activeCard")[0];
  const cards = document.getElementsByClassName("card");
  for (let card = 0; card < cards.length; card++) {
    const currentCard = cards[card];
    if (currentCard.classList.item(0) == active.id) {
      currentCard.style.display = "block";
    }
  }
};
activeCard();

const toggleNav = () => {
  const hamburger = document.getElementsByClassName("hamburger-list")[0];
  hamburger.style.display === "none"
    ? (hamburger.style.display = "block")
    : (hamburger.style.display = "none");
};
