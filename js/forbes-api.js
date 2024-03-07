// const url = `https://www.forbes.com/forbesapi/person/rtb/0/-estWorthPrev/true.json`;
const billionaireContainer = document.getElementById('billionaire-container');



function addItemToIndex(){
  fetch("https://www.forbes.com/forbesapi/person/rtb/0/-estWorthPrev/true.json")
  .then(response => response.json())
  .then(json => console.log(json.personList.personsLists[0].person.name))
  .then(json => displayOnlyItem(json.personList.personsLists[0].person.name))
  .then(json => displayItems(json.personList.personsLists))
}

// function displayItems(ara) {
//   let i = 0;
//   for (const obj of ara) {
//     billionaireContainer.innerHTML += `
//       <li>${obj.id} => ${obj.title}</li>
//       `
//       i++;
//       if(i===10){
//         break;
//       }
//     // console.log(`${i.rank} => ${i.person.name}`);
//   }
// }


function displayOnlyItem(item) {
  billionaireContainer.innerHTML += `<li>item</li>`;
  billionaireContainer.innerHTML += `<li>${item}</li>`;
}

addItemToIndex();
a=5;
displayOnlyItem(a);