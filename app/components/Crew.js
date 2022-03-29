import changeBG from "../helpers/changeBG.js"
import getData from "../helpers/getData.js"


export async function Crew() {
    const $crew = document.createElement('div')
    $crew.classList.add('crew')

    $crew.innerHTML = `
    <h2><span>02</span>meet your crew</h2>
    <div>
        <div class='text'>
            <div id='crewDescription' class='crew-description'>
            </div>
            <div id='crewNav' class='crew-nav'>
            </div>
        </div>

        <div id='crewPhoto' class='crew-photo'>
    
        
        </div>
    </div>
    `

    const populateNav = () => {
        let navHTML = ''
        for (const key in dataArray) {
            navHTML += `<button data-id='${key}'></button>`
        }
        $crew.querySelector('#crewNav').innerHTML = navHTML
    }

    const displayCrew = (crewIndex) => {

        $crew.querySelectorAll('#crewNav button').forEach(el => {
            if (el.dataset.id == crewIndex) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })

        
        const crewSelected = dataArray[crewIndex]
        const {bio, images, name, role} = crewSelected
        
        $crew.querySelector('#crewDescription').innerHTML = `
        <h4>${role}</h4>
        <h3>${name}</h3>
        <p>${bio}</p>
        `

        $crew.querySelector('#crewPhoto').innerHTML = `
        <img src='./app/${images.png}'>
        `
    }


    changeBG('crew')
    let dataArray = await getData('crew')
    populateNav()
    displayCrew(0)

    $crew.addEventListener('click', e => {
        if(e.target.matches('#crewNav button')){
            displayCrew(e.target.dataset.id)
        }
    })




    

 

    return $crew
}