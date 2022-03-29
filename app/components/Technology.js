import changeBG from "../helpers/changeBG.js"
import getData from "../helpers/getData.js"

export async function Technology() {
    const $technology = document.createElement('div')
    $technology.classList.add('technology')

    $technology.innerHTML = `
    <h2><span>03</span>space launch 101</h2>
 
    <div>
        <div id='techImage' class='tech-image'>
        </div>

        <div class='text'>
            <div id='techNav' class='tech-nav'>
            </div>
            <div id='techArticle' class='tech-article'>
            </div>
        </div>
    </div>
    `


    const populateNav = () => {
        let navHTML = ''
        for (const key in dataArray) {
            navHTML += `<button data-id='${key}'>${Number(key)+1}</button>`
        }
        $technology.querySelector('#techNav').innerHTML = navHTML
    }

    const displayTech = (techIndex) => {

        $technology.querySelectorAll('#techNav button').forEach(el => {
            if (el.dataset.id == techIndex) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })

        const techSelected = dataArray[techIndex]
        const {name, description, images} = techSelected

        $technology.querySelector('#techImage').innerHTML = `
        <img src='./app/${images.landscape}' class='landscape'>
        <img src='./app/${images.portrait}' class='portrait'>
        `
        $technology.querySelector('#techArticle').innerHTML = `
        <h4>the technology...</h4>
        <h3>${name}</h3>
        <p>${description}</p>
        `
    }

    changeBG('technology')
    let dataArray = await getData('technology')
    populateNav()
    displayTech(0)

    $technology.addEventListener('click', e => {
        if(e.target.matches('#techNav button')){
            displayTech(e.target.dataset.id)
        }
    })




    return $technology
}