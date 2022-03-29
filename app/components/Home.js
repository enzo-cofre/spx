import changeBG from "../helpers/changeBG.js"

export function Home() {
    const $home = document.createElement('div')
    $home.classList.add('home')

    $home.innerHTML = `
    <div class='text'>
        <h2>so, you want to travel to</h2>
        <h1>space</h1>
        <p>
            Let's face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we'll give you a truly out of this world experience!
        </p>
    </div>

    <div>
        <a href='#/destination' class='explore'>explore</a>
    </div>
    `
    changeBG('home')

    return $home
}