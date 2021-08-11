import React, { useState, useRef, useEffect, } from 'react';
import { IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import { ellipse, square, triangle, folder } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { SharedElement } from 'react-navigation-shared-element';

import './Tab2.css';
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
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>


          {pok.map((value: any, idx: number, []) => (

            <div style={{
              backgroundColor: `${value.color} `
            }}>
              <img src={value.img} />
              {value.id}
            </div>



          ))}



        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
