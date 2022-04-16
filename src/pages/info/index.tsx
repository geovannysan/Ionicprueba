import React, { useState,useEffect, } from 'react';
import {
  IonButton, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,
  IonAvatar,
  IonFab,
  IonLabel,
  IonFabButton,
  IonSkeletonText,
  IonSegmentButton,
  IonListHeader,
  IonCard,IonRow,
  IonCardSubtitle,
 	IonImg,IonBadge,
  IonSegment,IonButtons,
  IonIcon,IonCardTitle,IonRange,
  IonNav, useIonRouter,IonBackButton,
  IonList,CreateAnimation,IonProgressBar,IonCol
} from '@ionic/react';
import { RangeValue } from '@ionic/core';
import "./info.css";
import Car2 from '../../assets/pokeball.png';
import {getEspecie,getevol}from '../../utils/api';
import { heart,heartDislike,arrowBack, personCircle, map, informationCircle } from 'ionicons/icons';
import { RouteComponentProps,useParams } from 'react-router';
import { deFavor, setUSerState } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'



const Info: React.FC = () => {
	const [selected,setSelect] = useState<string>("friends");
	const[pok,setPok]= useState<any>([]);
	const[evolu,setEvo]=useState<any>([]);
	const[color,setColor]=useState<string>("")
	const[infopoke,setInfopo]=useState<any>([])
    const val=["primary","secondary","tertiary","success","warning","danger","light","medium","dark"]
const router = useIonRouter();
const dispatch= useDispatch();
let id:any= useParams();
 const user:any = useSelector((state: any) => state.user);

  const Istrue =  user.some((item:any)=>item.id === infopoke.id);
   
 const goForward = (id:string) => {
    
  }
const enviar = (path: any) => {
	
	if (!user.includes((e:any)=> e.id===infopoke.id)){const js = JSON.stringify(path);
	    let data = JSON.parse(js);
	    dispatch(setUSerState(path))}
	    else{

	    }
  }
	
	
   const Infopoke = async () => { 
   	try{
	const data:any = await getEspecie(`https://pokeapi.co/api/v2/pokemon-species/${id.groupid}`);
 	const pokemon:any = await getEspecie(`https://pokeapi.co/api/v2/pokemon/${id.groupid}`);
 	const evol:string = await data["evolution_chain"].url;
 	const Ecolucion:any = await getevol(evol);
    const tetp= await data["flavor_text_entries"].filter((e:any)=>e.version["url"]==="https://pokeapi.co/api/v2/version/26/"&& e.language["name"]==="es")
   await setColor(data.color.name)
          	 
    await setInfopo(pokemon)
    await  setPok(tetp)
   await setEvo(Ecolucion)

    return [pok ,infopoke,evolu];
}catch(err){
	router.push(`/home`, "back", "push");
}

     }

useEffect(()=>{
Infopoke();
},[])
		

	return(
		<IonPage>

      <IonContent fullscreen >
        <IonHeader className="ion-no-border no-border">
          <IonToolbar >
          <IonButtons slot="start">
          <IonBackButton defaultHref={"/"}/>
        </IonButtons>
        <IonButtons slot="end">
	    	 {
	    	 	!Istrue?<IonButton  fill="clear" onClick={() => dispatch(setUSerState({  id: infopoke.id, nombre: infopoke.name, color: color, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${infopoke.id}.png`, cantidad: 1 }))}  >
	              
	                <IonIcon   icon={heart} />
	        </IonButton>:<IonButton  fill="clear" onClick={() => dispatch(deFavor({  id: infopoke.id, nombre: infopoke.name, color: color, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${infopoke.id}.png`, cantidad: 1 }))}  >
	             
	              <IonIcon color="black"  icon={heartDislike} />
	        </IonButton> }     
    	</IonButtons>
  
    </IonToolbar>
              
        </IonHeader>
        <IonContent className="ion-center home">
          <div className="head" style={{backgroundColor:color}}>
            <div className="ion-padding container">
            <div style={{width:"50%"}}>
             <h2>#{infopoke.id}</h2>
             </div>
             <div style={{width:"50%",left: "100px" ,textAlign: "right"}}>           
              		<h1>{infopoke.name}</h1>
             	             
             </div>
             <div style={{width:"50%",height:"10px"}}></div>
             <div style={{width:"50%",height:"10px",textAlign: "right"}}>
              <IonCardSubtitle className="custom-skeleton" >
             {(infopoke.length!==0)?
             infopoke.types.map((e:any,i:number)=>{
                           		return(
                           			
                                  
                           			<IonBadge style={{margin: "3px"}} key={i} >
                                       
                                       	<img className="type" src={`https://duiker101.github.io/pokemon-type-svg-icons/icons/${e.type.name}.svg`} alt=""/>
                                       
                                      <span>{e.type.name}</span>

                                      </IonBadge>
                                     
                                 
                                   
                           			)
                           	}):<IonBadge><IonSkeletonText className="type"animated style={{ height:"100%"}} /></IonBadge>
                           	             }
                           	              </IonCardSubtitle>
             </div>
             
            </div>
             <div className="mask1" >
                                             <img  src={Car2} />
                              </div>
          </div>
         
          <div className="doup">
          <div >
          	<IonImg style={{height:"150px",marginTop:"-100px",}}
          	src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+id.groupid+".svg"}
          	/>
          </div>
          <IonSegment mode="md" scrollable  style={{marginTop:20}} onIonChange={(e:any) => setSelect(e.detail.value)}>
          <IonSegmentButton value="friends">
            <p>Base</p>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <p>Stats</p>
          </IonSegmentButton>
          <IonSegmentButton value="stat">
            <p>Evolución</p>
          </IonSegmentButton>
          
          </IonSegment>
          {
          	(selected==="friends")?
      
          	<div style={{width:"100%",display:"flex" ,justifyContent:"center"}}>
          	<div  className="custom-skeleton" style={{position:"absolute",justifyContent:"center",width:"85%",marginTop:5}}>
          	{(pok.length!==0)?pok.map((e:any,i:number)=>{
          	return(
          		<IonCard key={i}> 
          		<span>
          	          		
          	    {e.flavor_text}
          	          	</span>
          	          	<br></br>
          	          	</IonCard>
          	          	)
          	          	}):<IonCard><IonSkeletonText animated style={{ width: '100%' ,height:"100%"}} /></IonCard>}
          	<div style={{width:"100%",display:"flex",marginTop:"-15%"
          	,flexDirection:"row",
          	justifyContent:"space-between" }}>
          		
          		<div style={{width:"50%",}}>
				<IonCard style={{height:"100%",justifyContent:"center"}}> 
          		          	          		
          	   <IonCardSubtitle>Height</IonCardSubtitle>
            <IonCardTitle>{infopoke.height} cm</IonCardTitle>
          	    
          	   

          	    </IonCard>
          	    </div >
          	    

          	    <div style={{width:"45%",}}>
				<IonCard style={{height:"100%",textAlign:"center",justifyContent:"center"}}> 
          		      <IonCardSubtitle>Weight</IonCardSubtitle>
            <IonCardTitle>{infopoke.weight} kg</IonCardTitle>
          	   
              	          		
          	    
          	    
          	   

          	    </IonCard>
          	    </div >
          	    </div>
          	    

          	</div>
          	
          	</div>:<div></div>
          	}
          {
          	(selected==="enemies")?
          	<div style={{display:"flex",backgroundColor:"red",justifyContent:"center"}}>
          	<div   style={{position:"absolute",justifyContent:"center",width:"90%",marginTop:25}}>
          		{ (infopoke.length!==0)?infopoke.stats.map((e:any,i:number)=>{
          	return(	 <IonRow key={i}>
        <IonCol size="4"><IonCardSubtitle  style={{size:"10px"}}>{e.stat.name} </IonCardSubtitle></IonCol>
       <IonCol size="2">{e["base_stat"]}</IonCol>
        <IonCol size="6"><IonProgressBar color={val[i]}  value={e["base_stat"]/100}></IonProgressBar><br /></IonCol>
      </IonRow>
          		
          		
          		

          		)
          	}):''

          	}	

          	</div></div>:<div></div> 	
          }
          {<div>
          	{(selected==="stat")?
          	(evolu[0])&&evolu[0].length!==0&&(
          		<IonRow style={{textAlign:"center"}}>
          			{evolu[0].map((e:any,i:number)=>{
          				
          				
          				if (e.nom) {
          					return(<IonCol size="4" key={"f"+i}>
          						<IonCard>
          						<img src={e.url}/>
          				          					<IonCardSubtitle>{e.nom}</IonCardSubtitle>
          				          					</IonCard>
          				          				</IonCol>)
          				}
          				if (e) {
          					return(<IonCol size="4" key={i}>
          					<IonCard>
          					<br></br>
          					<br></br>
          				          					<IonCardSubtitle style={{textAlign:"25%"}}>{e.lev}</IonCardSubtitle>
          				          					<IonCardSubtitle style={{textAlign:"25%"}}>Level min</IonCardSubtitle>
          				          					<i className="bi bi-arrow-right" />
          				          					</IonCard>
          				          				</IonCol>)
          				}
          				
          				
          			})}
          		</IonRow>
          		):''
          	}
          </div>

          }
          
          </div>          
        </IonContent>
      </IonContent>
    </IonPage>
		)
}

export default Info;