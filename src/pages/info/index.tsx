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
  IonIcon,IonCardTitle,
  IonNav, useIonRouter,IonBackButton,
  IonList,CreateAnimation
} from '@ionic/react';
import "./info.css";
import Car2 from '../../assets/pokeball.png';
import {getEspecie}from '../../utils/api';
import { heart,arrowBack, personCircle, map, informationCircle } from 'ionicons/icons';


const Info: React.FC = () => {
const router = useIonRouter();

	const [selected,setSelect] = useState<string>("friends");
	const[pok,setPok]= useState<any>([]);
	const[infopoke,setInfopo]=useState<any>([])
	
   const Infopoke = async () => { 
  const data:any = await getEspecie("https://pokeapi.co/api/v2/pokemon-species/1");
  const pokemon:any = await getEspecie("https://pokeapi.co/api/v2/pokemon/1");
  
 
    const tetp= await data["flavor_text_entries"].filter((e:any)=>e.version["url"]==="https://pokeapi.co/api/v2/version/26/"&& e.language["name"]==="es")
    await setInfopo(pokemon)
    await  setPok(tetp)    	             	      	              
       return [pok ,infopoke];
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
	    	<IonButton  fill="clear"  >
	              
	                <IonIcon   icon={heart} />
	        </IonButton>      
    	</IonButtons>
  
    </IonToolbar>
              
        </IonHeader>
        <IonContent className="ion-center home">
          <div className="head">
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
             <div className="mask" >
                                             <img  src={Car2} />
                              </div>
          </div>
         
          <div className="doup">
          <div >
          	<IonImg style={{height:"150px",marginTop:"-100px",}}
          	src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"}
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
            <p>Evolutio</p>
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
          	<div style={{display:"flex"
          	,marginTop:"-15%"
          	,flexDirection:"row",
          	justifyContent:"space-between" }}>
          		
          		<div style={{width:"45%",}}>
				<IonCard style={{height:"100%",justifyContent:"center"}}> 
          		          	          		
          	   <IonCardSubtitle>Height</IonCardSubtitle>
            <IonCardTitle>{infopoke.height} cm</IonCardTitle>
          	    
          	   

          	    </IonCard>
          	    </div >
          	    

          	    <div style={{width:"45%",}}>
				<IonCard style={{height:"100%",justifyContent:"center"}}> 
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
          	<div></div>:<div></div> 	
          }
          {

          }
          
          </div>          
        </IonContent>
      </IonContent>
    </IonPage>
		)
}

export default Info;