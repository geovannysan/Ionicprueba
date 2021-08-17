import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonButtons,
  IonButton,
  useIonRouter,
  IonBackButton,
  IonToolbar,
} from "@ionic/react";
import { Storage } from '@capacitor/storage';
import { useHistory } from "react-router-dom";
import React from "react";

const Sub1: React.FC  <{datos:()=>(e:any) => void}> =props => {
  const router = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
      <IonBackButton  defaultHref={"/"} />
    </IonButtons>
    <IonTitle>Back Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Hello World
      
        <IonButton onClick={ props.datos()} routerLink="/" >
            "cerrar session"
        </IonButton>
        </IonContent>

    </IonPage>
  );
};
export default Sub1;