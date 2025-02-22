// const originalUrl = `https://www.forbes.com/forbesapi/person/rtb/0/-estWorthPrev/true.json`;
const url = `https://raw.githubusercontent.com/kaziMuntasirRahman/f-data/main/forbes-data.json`
const billionaireContainer = document.getElementById('billionaire-container')

const settingPlaceholder = () => {
  let contentPlaceholder = `
      <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="h-[384px] skeleton">
      </figure>
      <div class="card-body">
        <h2 class="card-title"></h2>
        <p>Rank: #</p>
        <p>Country of Citizen Ship:
        <span class='font-bold'>''<span>
        </p>
          <div class="card-actions justify-end">
          <button class="btn btn-primary">$ M</button>
          </div>
        </div>
      </div>
      `
  for (let j = 0; j < 100; j++)
    billionaireContainer.innerHTML += contentPlaceholder
}

function addItemToIndex () {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      billionaireContainer.innerHTML = ''
      displayItems(json.personList.personsLists.slice(0, maxCart))
    })
}

let maxCart = 100
let i = 0

function displayItems (ara) {
  for (; i < maxCart; i++) {
    billionaireContainer.innerHTML += `
    <div class="card w-96 bg-base-100 shadow-xl ">
    <figure>
    <img src="${ara[i].squareImage}"
        alt="${ara[i].person.name}" class="max-h-[384px]">
    </figure>
    <div class="card-body">
      <h2 class="card-title">${ara[i].person.name}</h2>
      <p>Rank: #${ara[i].rank + 1}</p>
      <p>Country of Citizen Ship: <span class='font-bold'>${
        ara[i].countryOfCitizenship
      }<span></p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">$${ara[i].finalWorth} M</button>
        </div>
      </div>
    </div>
    `
  }
}

function loadMore () {
  // billionaireContainer.innerHTML = '';
  settingPlaceholder()
  maxCart = maxCart + 100
  addItemToIndex()
}

settingPlaceholder()
addItemToIndex()
