
export const GifGrid = ({ category }) => {
    
    const getGifs = async() => {

        const url = `https://api.giphy.com/v1/stickers/search?api_key=7qXH8xWTO1wGqFPmD9JMMgdtAjKTpmKS&q=${ category }&limit=20`
        const resp = await fetch( url );
        const { data = [] } = await resp.json();


        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        console.log(gifs);
    
    }
    
    getGifs();
    
    
    return (
      <>
          <h3>{ category }</h3>

      </>
    )
  }
  