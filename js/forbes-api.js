// const originalUrl = `https://www.forbes.com/forbesapi/person/rtb/0/-estWorthPrev/true.json`;
const url = `https://raw.githubusercontent.com/kaziMuntasirRahman/f-data/main/forbes-data.json`;
const billionaireContainer = document.getElementById('billionaire-container');



function addItemToIndex() {
  fetch(url)
    .then(response => response.json())
    .then(json => displayItems(json.personList.personsLists))
}

let maxCart = 100;
let i = 0;

function displayItems(ara) {
  for (;i<maxCart;i++) {
    billionaireContainer.innerHTML += `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="${(ara[i].imageExists)? ara[i].squareImage : ('img/img-placeholder/'+ara[i].person.name[0].toLowerCase()+'.jpeg')}" alt="${ara[i].person.name}" class="max-h-[384px]"></figure>
    <div class="card-body">
      <h2 class="card-title">${ara[i].person.name}</h2>
      <p>Rank: #${ara[i].rank+1}</p>
      <p>Country of Citizen Ship: <span class='font-bold'>${ara[i].countryOfCitizenship}<span></p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">$${ara[i].finalWorth} M</button>
        </div>
      </div>
    </div>
    `;
  }
}

function loadMore(){
  // billionaireContainer.innerHTML = '';
  maxCart = maxCart+100;
  addItemToIndex();
}

addItemToIndex();

