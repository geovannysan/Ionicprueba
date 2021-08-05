import React, { useState,useRef, useEffect,} from 'react';
import { IonContent,IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import { ellipse, square, triangle, folder } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
const Tab2: React.FC = () => {
const [cont, setCont] = useState([])
    const [pok, setPokemon] = useState([])
    useEffect(() => {
        onbtenerdatos();
    }, [])
    const onbtenerdatos = async () => {
        const req = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const res = await req.json()
        setCont(res.count)
        setPokemon(res.results)
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
*/ console.log(pok)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
    
    <IonList >
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>

        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {alert("")}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="start">
          <IonItemOption onClick={() => {alert("dato")}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
