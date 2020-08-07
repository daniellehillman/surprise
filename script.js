

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()

axios.get(`https://api.giphy.com/v1/gifs/search?q=birthday&rating=g&api_key=so6QOTNdmWKPObKhaL11EhE7gGtpiiqG`)
      .then(res => {
        let gifs = res.data.data

        document.getElementById('surprise').innerHTML = ''

        for (let i = 0; i < gifs.length; i++) {
          let gifElem = document.createElement('img')
          gifElem.src = gifs[i].images.original.url
          gifElem.alt = gifs[i].title
          document.getElementById('surprise').append(gifElem)
        }

      })
      .catch(err => { console.log(err) })
})

