export const library = {
    getData: async (url) => {
        const consulta = await fetch(url, {mode: "cors"})
            .then(a=>a.json())
            .then(a=>a.Characters)
            .catch(err => console.log(err))
            
        return consulta
    },
<<<<<<< HEAD
    getCharacter: async (url, character) => {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: character })
        })
        .then(a => a.json())
        .catch(err => console.log(err))

        return response
=======
    extractImage: (urlImage) => {
        const regex = /(.png\/).*/
        return urlImage.replace(regex, '$1')
>>>>>>> f97831842c3ae0bd0d1abae1dfee09d3af905b13
    }
}