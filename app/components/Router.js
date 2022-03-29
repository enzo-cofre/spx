import { Crew } from './Crew.js'
import { Destination } from './Destination.js'
import { Technology } from './Technology.js'
import { Home } from './Home.js'


export async function Router() {

    const $main = document.getElementById('main')
   
    let { hash } = location
    let page = ''

    if (!hash || hash === '#/') {
        $main.appendChild(Home()) 
        page = 'home'
    } else if (hash === '#/destination') {
        const destinationPage  = await Destination()
        $main.appendChild(destinationPage) 
        page = 'destination'
    } else if (hash === '#/crew') {
        const crewPage = await Crew()
        $main.appendChild(crewPage) 
        page = 'crew'
    } else if (hash === '#/technology') {
        const technologyPage  = await Technology()
        $main.appendChild(technologyPage) 
        page = 'technology'
    }

    document.querySelectorAll('#header a').forEach(el => {   
        if (el.dataset.page === page) {
            el.classList.add('active')
        } else {
            el.classList.remove('active')
        }
    })
 
}          
    
    