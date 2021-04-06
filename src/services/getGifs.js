

const apiKey = "bCW43Yc7NpKieEugD8zwBq7bvCRmniOx";

export default function getGifs({ keyword = "panda" } = {}) {
  // si llega algo vacio pone panda x defecto
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=45&offset=0&rating=g&lang=en`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response; // === const data = response.data
      const gifs = data.map(image => {
          const {images, title, id} = image
          const {url} = images.downsized_medium
          return {title, id, url}
        
        });
      return gifs;
    });
}
