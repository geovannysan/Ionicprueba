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
export const datoscolor =async (path:string)=>{
   try{
    const {color}:any = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${path}`).then((x) => x.json());
    
   return color

    
  }catch(error){
 return (error)
      
  }

  }
