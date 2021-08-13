import React, { useState, useRef, useEffect, } from 'react';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonCardTitle,
  IonBadge,
  IonImg,
  IonIcon,
  IonFab,
  IonFabButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButtons,
  IonButton,
   useIonPopover,
   IonListHeader,
  IonList,useIonViewWillEnter
} from '@ionic/react';
import { ellipse,ellipsisHorizontal,search,personCircle,ellipsisVertical, square, triangle, folder ,arrowForwardCircle} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { SharedElement } from 'react-navigation-shared-element';
import Car from '../assets/types/Electric.png';
import Car1 from '../assets/images/001.png';
import Car2 from '../assets/pokeball.png';
import {addFavor,setUSerState} from '../redux/action';

import { useDispatch, useSelector } from 'react-redux';


import './Tab2.scss';


  
const PopoverList: React.FC<{
  onHide: () => void,user:any;

}> = ({ onHide ,user}) => {

 return (<div>
    <IonList>
      <IonListHeader>Ionic</IonListHeader>
     {user ? user.map((va:any, i:number)=>(<div key={i}><IonItem button>{va.color}</IonItem>
                   </div>)):<div></div>}
      </IonList>
      <IonItem lines="none" >
      <IonRow>
        <IonCol cl-4> <IonButton    > Close</IonButton></IonCol>
  <IonCol col-4> <IonButton   onClick={onHide}> Close</IonButton></IonCol>
        
        </IonRow>
      </IonItem>
    </div>)
};
const Tab2: React.FC = () => {
  const user = useSelector((state:any)=> state.user);
  const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() ,user});

  const[ver,setver]=useState(false)
  const [cont, setCont] = useState("")
  const [pok, setPokemon] = useState([{id:'',nombre:'',color:'',img:''}])
  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);
  const car: any = []



  useEffect(() => {
    // onbtenerdatos();
    getData()
      .then(data => {

        data.forEach((valor: any, indice: number) => {
          // setPokemon(res.results)   setPokemon([ value.order,value.name,value.color.name])
          //setPokemon([...pok,{id:valor.order,nombre:valor.name,color:valor.color.name}])
          car.push({ id: valor.order, nombre: valor.name, color: valor.color.name, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/` + valor.order + `.svg` })
        });
        setPokemon(car)
        setver(true)
        
         //console.log(cont)
      })
  }, [])
  async function searchNext($event: CustomEvent<void>) {
   await getData1().then(res=>{
      if(cont!=null){
         setDisableInfiniteScroll(res.length < 10);
      res.forEach((valor: any, indice: number) => {
          car.push({ id: valor.order, nombre: valor.name, color: valor.color.name, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/` + valor.order + `.svg` })
       });
      setPokemon([...pok,...car ])
      }else{
        setDisableInfiniteScroll(false)
      }
    }).catch(error=>{
      setDisableInfiniteScroll(false)
    });
    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }

  

  async function getData() {
    try {
      const ids = await (await fetch('https://pokeapi.co/api/v2/pokemon/')).json()
      setCont(ids.next)
      const data = Promise.all(
        ids.results.map(async (i: any) => await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i.name}/`)).json())
      )
      return data
    } catch (error) {
      return (error)
      console.log(error)

    }
  }
  async function getData1() {
     try {
      const ids = await (await fetch(cont)).json()
      setCont(ids.next)
      const data = Promise.all(
        ids.results.map(async (i: any) => await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i.name}/`)).json())
      )
      return data
        } catch (error) {
      return (error)
      console.log(error)

    }
      
  }
  const dispatch=useDispatch()
  const enviar=(e:any)=>{
    dispatch(setUSerState(e))
    //console.log(e)
   //console.log(pok)
  }
  
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar >
         
    <IonButtons slot="primary" onClick={(e) =>
                        present({
                          event: e.nativeEvent,
                        })
                      }>
      <IonButton color="secondary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}    />
      </IonButton>
    </IonButtons>
    <IonTitle></IonTitle>
     
          
        </IonToolbar>
    

      </IonHeader>
      <IonContent >
        {ver?<div><IonList>
                  {pok.map((value: any, idx: number, []) => (
                    <div key={idx} className=" no-padding-top" >
                      <IonCard style={{
                        backgroundColor: `${value.color}`
                      }}>
                        <div className="mask">
                          <img src={Car2} />
                        </div>
                        <IonCardContent>
                          <IonRow>
                            <IonCol size="8">
                              <IonCardSubtitle class="no">#{value.id}</IonCardSubtitle>
                              <IonCardTitle>{value.nombre}</IonCardTitle>
                              <IonCardSubtitle>
                                <IonBadge >
                                  <img src={Car} alt="" />
                                  <span>Electico</span>
                                </IonBadge>
                                 <IonButton onClick={()=>enviar(value)}> enviar</IonButton>
                              </IonCardSubtitle>
                            </IonCol>
                            <IonCol size="4">
                              <IonImg src={value.img} />
                            </IonCol>
                          </IonRow>

                        </IonCardContent>
                      </IonCard>
                    </div>
                  ))}
                </IonList>
                 <IonInfiniteScroll  threshold="100px" disabled={disableInfiniteScroll}
                                     onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
                    <IonInfiniteScrollContent
                        loadingText="Loading more good ...">
                    </IonInfiniteScrollContent>
                  </IonInfiniteScroll>
                  </div>:<div></div>}
       
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
