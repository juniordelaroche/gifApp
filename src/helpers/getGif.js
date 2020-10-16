// Metodo que llama a la api y devuelve imagenes segun la categoria
export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=lUyX8LEVelQdrydht3FjidN5n4otWIok`;
  const resp = await fetch( url );
  const {data} = await resp.json();
  
  // Con esto hago un poco mas manejable la info que me da la api
  const gifs = data.map( img => {
    return {
      id    : img.id,
      title : img.title,
      url   : img.images?.downsized_medium.url
    }
  });
 
  return gifs;
}