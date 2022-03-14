interface IResultdata {
  name: string;
  url: string;
  count:string;
  next:string;
  previous:string;
}
const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
const datos = async(path:string)=>{
  try{
 const info= await fetch(path).then((x)=>  x.json())
 return [...info]
}catch{

}

}
const types = async (path:string)=> {
  try{
      const info= await fetch(`https://pokeapi.co/api/v2/pokemon-species/${path.slice(-6, -1).replace("m", "").replace("o", "").replace("n", "").replace("/", "")}/`).then((x)=>  x.json())
       return info.color;
  }catch{

  }
}
export const getMovies = async () => {
  
  const { results }: any = await fetch(API_URL).then((x) => x.json());

      const data = Promise.all(
        results.map(async (i: any) => await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i.url.slice(-6, -1).replace("m", "").replace("o", "").replace("n", "").replace("/", "")}/`)).json())
      )
   

  console.log( data);
  return  data
};

export const getMovies1 = async (API:string) => {
  
  const { results }: any = await fetch(API).then((x) => x.json());
  const movies = results.map(
    ({
      name,
      count,
      next,
      url,      
    }: IResultdata) => ({      
      title: name,
      count:count,
      next:next,
      pokemon: datos(url),
      color: types(url),             
    })
  );

  return movies;
};
