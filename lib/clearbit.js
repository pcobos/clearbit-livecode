// authorization key from clearbit
const authorization = "Bearer sk_33883e2b8b3066b2216f3dd4aa063ee0";

// Selectors
const form = document.querySelector("#clearbitForm")
const emailInput = document.querySelector("#clearbitEmail")

const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")
const userBio = document.querySelector("#userBio")
const userLocation = document.querySelector("#userLocation")

// Event listener to display the data on submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  fetchEmail(email);
})

// Fetching the data from the API
const fetchEmail = (email) => {
  const apiUrl = `https://person-stream.clearbit.com/v2/combined/find?email=${email}`

  fetch(apiUrl, {
    // Passing the authorization header
    headers: { Authorization: authorization }
  }).then(response => response.json())
  .then((data) => {
    console.log(data.person)
    displayInfo(data);
  })
}

// Function to display the info
const displayInfo = (data) => {
  const person = data.person;
  userName.innerText = person.name.fullName;
  userEmail.innerText = person.email;
  userBio.innerText = person.bio;
  userLocation.innerText = person.location;
} 