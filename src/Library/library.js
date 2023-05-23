export const library = {
    getData: async (url) => {
        const consulta = await fetch(url, {
            method: 'GET'
        })
            .then(a => a.json())
            .catch(err => console.log(err))
            
        return consulta
    },
    extractImage: (urlImage) => {
        const regex = /(.png\/).*/
        return urlImage.replace(regex, '$1')
    }
}