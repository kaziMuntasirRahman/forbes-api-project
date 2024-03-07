const url = `https://www.forbes.com/forbesapi/person/rtb/0/-estWorthPrev/true.json`;
const billionaireContainer = document.getElementById('billionaire-container');


fetch(url)
  .then(res => res.json())
  .then(data => displayItems(data.personList.personsLists));


function displayItems(ara) {
  for (const i of ara) {
    billionaireContainer.innerHTML += `
      <li>${i.rank} => ${i.person.name}</li>
      `
    // console.log(`${i.rank} => ${i.person.name}`);
  }
}
