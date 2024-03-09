const url = `https://raw.githubusercontent.com/kaziMuntasirRahman/forbes-data/main/forbes-data.json`;
const billionaireContainer = document.getElementById('billionaire-container');



function addItemToIndex() {
  fetch(url)
    .then(response => response.json())
    .then(json => displayItems(json.personList.personsLists))
}

function displayItems(ara) {
  let i = 0;
  for (const obj of ara) {
    billionaireContainer.innerHTML += `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="${obj.person.squareImage}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${obj.person.name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">$${obj.finalWorth} B</button>
        </div>
      </div>
    </div>
    `;
    i++;
    if(i===100)
      break;
  }
}



addItemToIndex();

