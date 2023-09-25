
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

toggleBtnIcon.classList = isOpen
? 'fa-solid fa-xmark'
:'fa-solid fa-bars'
}

// Define the text you want to display
const textToDisplay = [
"E-waste contains toxic materials like lead, mercury, and cadmium, which can leach into the environment, causing pollution and health risks.",
"Additionally, improper disposal of e-waste in landfills contributes to electronic waste pollution, harming ecosystems.",
"Advantages of E-Waste Management:",
"1. Environmental Protection: Proper e-waste management reduces the release of harmful chemicals and reduces pollution, protecting the environment.",
"2. Resource Recovery: Recycling e-waste allows for the recovery of valuable resources like metals and plastics, reducing the need for mining and conserving natural resources.",
"3. Health Benefits: Effective e-waste management safeguards human health by minimizing exposure to hazardous materials.",
"4. Legal Compliance: Many countries have regulations in place that require responsible e-waste disposal, and compliance can prevent legal issues."
];

const popupBody = document.querySelector('.popup-body');
let currentTextIndex = 0;

function displayText() {
if (currentTextIndex < textToDisplay.length) {
popupBody.innerHTML += `<p>${textToDisplay[currentTextIndex]}</p>`;
currentTextIndex++;
// Scroll to the bottom of the popup to show the new content
popupBody.scrollTop = popupBody.scrollHeight;
} else {
document.getElementById('popup').style.display = 'none';
}
}

function openPopup() {
document.getElementById('popup').style.display = 'block';
displayText();
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
}

// Delay the popup by 30 seconds (30000 milliseconds)
setTimeout(openPopup, 10000);
