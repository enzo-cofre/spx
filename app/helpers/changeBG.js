const changeBG = (view) => {
    document.getElementById('dynamic-styles').innerHTML = `
    body {
        background-image: url('app/assets/images/${view}/background-${view}-mobile.jpg');
    }

    @media screen and (min-width: 600px) {
        body {
            background-image: url('app/assets/images/${view}/background-${view}-tablet.jpg');
        }
    }
    @media screen and (min-width: 900px) {
        body {
            background-image: url('app/assets/images/${view}/background-${view}-desktop.jpg');
        }
    }
    `

}

export default changeBG