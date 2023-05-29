export const library = {
    getData: async (url) => {
        const consulta = await fetch(url, {mode: "cors"})
            .then(a=>a.json())
            .then(a=>a.Characters)
            .catch(err => console.log(err))
            
        return consulta
    },
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
    }
}