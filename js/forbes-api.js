const url = `https://www.forbes.com/forbesapi/person/rtb/0/-estWorthPrev/true.json`;
const billionaireContainer = document.getElementById('billionaire-container');



function addItemToIndex(){
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json.personList.personsLists))
  .then(json => displayOnlyItem(json.personList.personsLists[0].person.name))
  .then(json => displayItems(json.personList.personsLists))
}

function displayItems(ara) {
  let i = 0;
  for (const obj of ara) {
    billionaireContainer.innerHTML += `
      <li>${obj.id} => ${obj.title}</li>
      `
      i++;
      if(i===10){
        break;
      }
    console.log(`${i.rank} => ${i.person.name}`);
  }
}



addItemToIndex();

