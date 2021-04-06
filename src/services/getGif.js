const apiKey = "bCW43Yc7NpKieEugD8zwBq7bvCRmniOx";

export default function getGif({id}) {
  // si llega algo vacio pone panda x defecto
  const apiUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response; // === const data = response.data
     // console.log(data)
      const {title,import_datetime,username,images} = data
     
      const {url} = images.downsized_medium 
      return {title,import_datetime,username,url};
    });
}