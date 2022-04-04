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
  
  const { results,next }: any = await fetch(API_URL).then((x) => x.json());
       
        
      const data:any = await Promise.all(
        results.map(async (i: any) => 
           //await(await await fetch(i.url)).json(),
          await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i.url.slice(-6, -1).replace("m", "").replace("o", "").replace("n", "").replace("/", "")}/`)).json()
          )

      )
     
      await data.map(async(a:any)=>{
        const {types}:any= await   fetch("https://pokeapi.co/api/v2/pokemon/"+a.id).then((x) => x.json())
        a.types=types;
        return a
      })
   
  return  [next,data]   

};
 
export const getMovies1 = async (API:string) => {
  
  const { results,next }: any = await fetch(API).then((x) => x.json());
  const data:any = await Promise.all(
        results.map(async (i: any) => 
           //await(await await fetch(i.url)).json(),
          await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i.url.slice(-6, -1).replace("m", "").replace("o", "").replace("n", "").replace("/", "")}/`)).json()
          )

      )
     
      await data.map(async(a:any)=>{
        const {types}:any= await   fetch("https://pokeapi.co/api/v2/pokemon/"+a.id).then((x) => x.json())
        a.types=types;
        return a
      })
   
  return  [next,data]   
};
export const getEspecie= async (path:string)=>{
 try{
   const pokemon = await fetch(path).then((x)=>x.json());
   return pokemon;
 }catch(error){
     return error
   }
}
const dato =(path:string)=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${path}.svg`;
export const getevol =async (path:string)=>{
   try{
    const {chain} = await fetch(path).then((x) => x.json());
    
   const datos:any= {nom:chain.species.name,url:dato(chain.species.url.slice(-6, -1).replace("i", "").replace("e", "").replace("s", "").replace("/", ""))};
    const nuevo:[] = await  chain["evolves_to"].map((e:any)=>{
        const nombre= e.species.name;
        const ur = e.species.url;
        const detalle=  e["evolves_to"].map((e:any)=>{return e["evolution_details"][0]["min_level"]})
        const detalle2= e["evolution_details"][0]["min_level"]
       const nombre2=  e["evolves_to"][0].species.name;
       return[datos,{lev:[detalle2]},{nom:nombre,url: dato(ur.slice(-6, -1).replace("i", "").replace("e", "").replace("s", "").replace("/", ""))}
       ,{nom:nombre,url: dato(ur.slice(-6, -1).replace("i", "").replace("e", "").replace("s", "").replace("/", ""))},{lev:detalle}
       ,{nom:nombre2,url:dato(e["evolves_to"][0].species.url.slice(-6, -1).replace("i", "").replace("e", "").replace("s", "").replace("/", ""))}]
      
      
     
    })
     
    
   return nuevo

    
  }catch(error){
 return (error)
      
  }

  }
