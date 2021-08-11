import React, { useState, useRef, useEffect, } from 'react';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonCardTitle,
  IonBadge,
  IonImg,
  IonIcon,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList
} from '@ionic/react';
import { ellipse, square, triangle, folder } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { SharedElement } from 'react-navigation-shared-element';
import Car from '../assets/types/Electric.png';
import Car1 from '../assets/images/001.png';
import Car2 from '../assets/pokeball.png'

import './Tab2.scss';
const Tab2: React.FC = () => {
  const [cont, setCont] = useState([])
  const [pok, setPokemon] = useState([{}])
  const car: any = []
  useEffect(() => {
    // onbtenerdatos();
    getData()
      .then(data => {
        data.forEach((valor: any, indice: number) => {
          // setPokemon(res.results)   setPokemon([ value.order,value.name,value.color.name])
          //setPokemon(...pok,[{id:valor.order,nombre:valor.name,color:valor.color.name}])
          car.push({ id: valor.order, nombre: valor.name, color: valor.color.name, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/` + valor.order + `.svg` })
        });
        setPokemon(car)
        console.log(pok)
        // console.log(car)
      })
  }, [])
  const onbtenerdatos = async () => {
    const req = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const res = await req.json()
    setCont(res.count)
    setPokemon(res.results)

  }

  async function getData() {
    try {
      const ids = await (await fetch('https://pokeapi.co/api/v2/pokemon/')).json()
      const data = Promise.all(
        ids.results.map(async (i: any) => await (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i.name}/`)).json())
      )
      return data
    } catch (error) {
      return (error)
      console.log(error)

    }
  }
  /*   const obtener = async (strict:'pag') => {
         const req = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${'pag'}&limit=20`)
         const res = await req.json()
         setPokemon(res.results)
 
     }
     const [page, setPage] = React.useState(1);
     const handleChange = (event, value) => {
         setPage(value);
         obtener((-1 + value) * 20)
     };
 */ //console.log(pok)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="ion-no-border">
          <IonTitle>Tab </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
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
        <IonContent>


        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
