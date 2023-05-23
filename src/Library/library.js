export const library = {
    getData: async (url) => {
        const consulta = await fetch(url, {
            method: 'GET'
        })
            .then(a => a.json())
            .catch(err => console.log(err))
            
        return consulta
    }
}