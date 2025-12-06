let quoteCollection = [];

window.onload = function () {
  const savedQuotes = localStorage.getItem("savedQuotes");

  if (savedQuotes) {
    quoteCollection = JSON.parse(savedQuotes);
    displayQuotes();
  }
};

const addButton = document.getElementById("addQuoteButton");
addButton.addEventListener("click", addQuote);

function addQuote() {
  const inputField = document.getElementById("quoteInput");
  const userText = inputField.value.trim();

  if (userText === "") {
    alert("Please type a quote before adding!");
    return;
  }

  quoteCollection.push(userText);
  inputField.value = "";

  saveQuotesToLocalStorage();
  displayQuotes();
}

function deleteQuote(position) {
  quoteCollection.splice(position, 1);
  saveQuotesToLocalStorage();
  displayQuotes();
}

function saveQuotesToLocalStorage() {
  localStorage.setItem("savedQuotes", JSON.stringify(quoteCollection));
}

function displayQuotes() {
  const listElement = document.getElementById("quoteList");
  listElement.innerHTML = "";

  quoteCollection.forEach((quoteText, index) => {
    const newListItem = document.createElement("li");

    newListItem.innerHTML = `
      <span>${quoteText}</span>
      <button class="delete-button" onclick="deleteQuote(${index})">Delete</button>
    `;

    listElement.appendChild(newListItem);
  });
}
