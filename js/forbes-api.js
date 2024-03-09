// const originalUrl = `https://www.forbes.com/forbesapi/person/rtb/0/-estWorthPrev/true.json`;
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
    <figure><img src="${(obj.imageExists)? obj.squareImage : obj.person.name[0]+'.jpeg'}" alt="${obj.person.name}" /></figure>
    <div class="card-body">
      <h2 class="card-title">${obj.person.name}</h2>
      <p>Rank: ${obj.rank+1}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">$${obj.finalWorth} M</button>
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

