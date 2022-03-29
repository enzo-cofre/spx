import changeBG from "../helpers/changeBG.js"
import getData from "../helpers/getData.js"

export async function Destination() {
    const $destination = document.createElement('div')
    $destination.classList.add('destination')

    $destination.innerHTML = `
    <h2><span>01</span>pick your destination</h2>
    <div>

        <div id='destImage' class='dest-image'>
        </div>

        <div class='text'>
            <nav id='destinationNav' class='dest-nav'></nav>
            <div>
                <div id='destArticle'>
                </div>
                <div class='dest-numbers'>
                    <div>
                        <h4>avg. distance</h4>
                        <h3 id='destDistance'></h3>
                    </div>

                    <div>
                        <h4>est. travel time</h4>
                        <h3 id='destTravel'></h3>
                    </div>
                </div>
            </div>
        </div>


    </div>
    `

    const populateNav = () => {
        let navHTML = ''
        for (const key in dataArray) {
            navHTML += `<a data-id='${key}'>${dataArray[key].name}</a>`
        }
        $destination.querySelector('#destinationNav').innerHTML = navHTML
    }

    const displayDest = (destIndex) => {

        $destination.querySelectorAll('#destinationNav a').forEach(el => {
            if (el.dataset.id == destIndex) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })

        const destSelected = dataArray[destIndex]
        const {description, distance, images, name, travel} = destSelected

        $destination.querySelector('#destImage').innerHTML = `
        <img src='./app/${images.png}'>
        `
        $destination.querySelector('#destArticle').innerHTML = `
        <h1>${name}</h1>
        <p>${description}</p>
        `
        $destination.querySelector('#destDistance').textContent = distance

        $destination.querySelector('#destTravel').textContent = travel

    }

    changeBG('destination')
    let dataArray = await getData('destinations')
    populateNav()
    displayDest(0)

    $destination.addEventListener('click', e => {
        if(e.target.matches('#destinationNav a')){
            displayDest(e.target.dataset.id)
        }
    })


    

    return $destination
}