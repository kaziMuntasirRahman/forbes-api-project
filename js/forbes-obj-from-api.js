document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here
  for (const n of billionaireObj.personList.personsLists) {
    document.getElementById('billionaire-container').innerHTML += `
      <li>${n.person.name}</li>
    `;
  }
});
