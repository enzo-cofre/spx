const getData = async(view) => {

    try {
        let res = await fetch('./app/data.json')
        if (!res.ok) throw res
        let data = await res.json()
        let viewData = data[view]
        return viewData

    } catch (err) {
        console.log('Error', err)
    }

}

export default getData