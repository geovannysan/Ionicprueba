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
  IonCard,
 	IonImg,
  IonSegment,
  IonIcon,
  IonThumbnail,
  IonNav, useIonRouter,
  IonList,CreateAnimation
} from '@ionic/react';
import "./info.css";
import Car2 from '../../assets/pokeball.png';
import {getEspecie}from '../../utils/api';


const Info: React.FC = () => {
const router = useIonRouter();

	const [selected,setSelect] = useState<string>("friends");
	const[pok,setPok]= useState<any>([]);
   const Infopoke = async () => { 
  const data:any = await getEspecie("https://pokeapi.co/api/v2/pokemon-species/1");  
    const tetp= await data["flavor_text_entries"].filter((e:any)=>e.version["url"]==="https://pokeapi.co/api/v2/version/26/"&& e.language["name"]==="es")
    await  setPok(tetp)  
       return pok 
     }

useEffect(()=>{
Infopoke();
},[])
	return(
		<IonPage>

      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-center home">
          <div className="head">
            <div className="ion-padding">
              <p className="lista" color="white">Helo </p>
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
          <IonSegment scrollable  style={{marginTop:20}} onIonChange={(e:any) => setSelect(e.detail.value)}>
          <IonSegmentButton value="friends">
            <p>Acerca</p>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <p>Base Stats</p>
          </IonSegmentButton>
          <IonSegmentButton value="stat">
            <p>Evolutio</p>
          </IonSegmentButton>
          <IonSegmentButton value="ataques">
            <p>Moves</p>
          </IonSegmentButton>
          </IonSegment>
          {
          	(selected==="friends")?
          	<CreateAnimation
  duration={2000}
  beforeStyles={{
    opacity: 0.2
  }}
  afterStyles={{
    background: 'rgba(0, 255, 0, 0.5)'
  }}
  afterClearStyles={['opacity']}
  keyframes={[
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.5)' },
    { offset: 1, transform: 'scale(1)' }
  ]}>
          	<div style={{width:"100%",display:"flex",justifyContent:"center"}}>
          	<div style={{position:"absolute",justifyContent:"center",alignItems:"center",width:"85%",marginTop:5}}>
          	{pok.map((e:any)=>{
          	return(
          		<IonCard> 
          		<span>
          	          		
          	    {e.flavor_text}
          	          	</span>
          	          	<br></br>
          	          	</IonCard>
          	          	)
          	          	})}

          	</div></div></CreateAnimation>:<div></div>
          	}
          {
          	(selected==="enemies")?
          	<div></div>:<div></div> 	
          }
          
          </div>          
        </IonContent>
      </IonContent>
    </IonPage>
		)
}

export default Info;