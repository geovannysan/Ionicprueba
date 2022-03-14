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
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButtons,
  IonButton,
  useIonPopover,
  IonAvatar,
  IonLabel,
  createAnimation,
  IonSearchbar,
  IonList
} from '@ionic/react';
import { ellipse, ellipsisHorizontal, search, personCircle, ellipsisVertical, square, triangle, folder, arrowForwardCircle } from 'ionicons/icons';
import { SharedElement } from 'react-navigation-shared-element';
import Car from '../assets/types/Electric.png';
import Car1 from '../assets/images/001.png';
import Car2 from '../assets/pokeball.png';
import { addFavor, setUSerState } from '../redux/action';

import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import Itemss from '../components/Items'


import './Tab2.scss';

const animationBuilder = (baseEl: any, opts?: any) => {
    const enteringAnimation = createAnimation()
      .addElement(opts.enteringEl)
      .fromTo('opacity', 0, 1)
      .duration(350);

    const leavingAnimation = createAnimation()
      .addElement(opts.leavingEl)
      .fromTo('opacity', 1, 0)
      .duration(350);

    const animation = createAnimation()
      .addAnimation(enteringAnimation)
      .addAnimation(leavingAnimation);

    return animation;
  };

const PopoverList: React.FC<{
  onHide: () => void,  user:any;

}> = ({ onHide, user}) => {

  return (<div>
    <IonList>
{user.length>0 ? user.map((tem:any,i:number)=><Itemss key={i}
 id={tem}/>):<div/>}
     
    </IonList>
    <div className="ion-no-border no-padding" >


      <IonButton expand="full" size="large" fill="clear" onClick={onHide}> Close</IonButton>


    </div>
  </div>)
};
const Tab2: React.FC = () => {
  const user:any = useSelector((state: any) => state.user);
  //console.log(Object.keys(user).length)
  const dispatch = useDispatch()

  const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss(), user });

  const [ver, setver] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [cont, setCont] = useState("")
  const [pok, setPokemon] = useState([{ id: '', nombre: '', types: {}, color: '', img: '' }])
  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);
  const car: any = []



  useEffect(() => {
    getData().then((data:any) => {
        data.forEach(async (valor: any, indice: number) => {
          const ids = await (await fetch(valor.varieties["0"].pokemon["url"])).json()
          const dat = await ids.types
          await car.push({ id: valor.order, nombre: valor.name, types: dat, color: valor.color.name, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/` + valor.id + `.svg` })
          setPokemon([...car.sort()])
        });
        setver(true)

      })
  }, [])
  async function searchNext($event: CustomEvent<void>) {
    await getData1().then((res:any) => {
      if (cont != null) {
        setDisableInfiniteScroll(res.length < 10);
        res.forEach(async (valor: any, indice: number) => {
          const ids = await (await fetch(valor.varieties["0"].pokemon["url"])).json()
          const dat = await ids.types
          await car.push({ id: valor.order, nombre: valor.name, types: dat, color: valor.color.name, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/` + valor.id + `.svg` })
          setPokemon([...pok, ...car.sort()])
        });
      } else {
        setDisableInfiniteScroll(false)
      }
    }).catch(error => {
      setDisableInfiniteScroll(true)
    });
    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }

  async function getData() {
    try {
      const ids = await (await fetch('https://pokeapi.co/api/v2/pokemon/')).json()
      setCont(ids.next)
      const data = Promise.all(
        ids.results.map(async (i: any) => await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i.url.slice(-6, -1).replace("m", "").replace("o", "").replace("n", "").replace("/", "")}/`)).json())
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
        ids.results.map(async (i: any) => await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i.url.slice(-6, -1).replace("m", "").replace("o", "").replace("n", "").replace("/", "")}/`)).json())
      )
      return data
    } catch (error) {
      return (error)
      console.log(error)

    }

  }
  const enviar = (path: any) => {
    const js = JSON.stringify(path);
    //Convirtiendo a objeto javascript
    let data = JSON.parse(js);
    dispatch(setUSerState(path))
    console.log(js)
    console.log(data)
   

  }
  const datos = async (path: string) => {
    const dat = await fetch(path)
    if (dat.status) {
      return true;
    } else {
      return false;
    }

  }
const datoscolor = async(path:string)=>{
   try{
    const {color}:any = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${path}`).then((x) => x.json());
    
   return color.name

    
  }catch(error){
 
  }

  }
 
 


  const filterNames = (nombre: any) => {
    return nombre.nombre.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  };
  return (
    <IonPage >
      <IonHeader className="ion-no-border" >
        <IonToolbar >

          <IonButtons slot="primary" onClick={(e) =>
            present({
              event: e.nativeEvent,
            })
          }>
            <IonButton className="io-padding-top">
              <IonIcon className="bi bi-bag-dash-fill"> </IonIcon>
              
            </IonButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
        <IonSearchbar mode="ios"
          type="text"

          onIonChange={(e: any) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </IonHeader>
      <IonContent >
        {pok.length > 2 ? <div><IonList>
          {

            pok.sort().filter(filterNames).map((value: any, idx: number, []) => (
 

              <div key={idx} className=" no-padding-top" >
                <IonCard style={{   
                  backgroundColor: `${(datoscolor(value.nombre).then(x=>x))}`
                }}>
                  <div className="mask">
                    <img src={Car2} />
                  </div>
                  <IonCardContent>
                    <IonRow>
                      <IonCol size="8">
                        <IonCardSubtitle class="no">#{value.id}
                        </IonCardSubtitle>

                        <IonCardTitle>{value.nombre}</IonCardTitle>
                        <IonCardSubtitle> 
                          {
                            value.types.map((v: any, i: number) => (<IonBadge style={{
                              margin: "3px"
                            }} key={i} >
                              <img src={`https://duiker101.github.io/pokemon-type-svg-icons/icons/${v.type.name}.svg`} alt=""
                              />
                              <span>{v.type.name}</span>
                            </IonBadge>))}

                        </IonCardSubtitle>
                        <IonButton size="small" color="light" onClick={() => enviar({ key: nanoid(), id: value.id, nombre: value.nombre, color: value.color, img: value.img, cantidad: 1 })} > <IonIcon className="bi bi-bag-dash-fill" > enviar</IonIcon></IonButton>
                      </IonCol>
                      <IonCol size="4">
                        <IonImg src={datos(value.img) ? value.img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{value.id}.png'} />

                      </IonCol>

                    </IonRow>

                  </IonCardContent>
                </IonCard>
              </div>
            ))}
        </IonList>
          <IonInfiniteScroll threshold="100px" disabled={disableInfiniteScroll}
            onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
            <IonInfiniteScrollContent
              loadingText="Loading more good ...">
            </IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </div> : <div></div>}

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
