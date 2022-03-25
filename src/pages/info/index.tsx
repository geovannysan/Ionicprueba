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
  IonSegment,
  IonIcon,
  IonThumbnail,
  IonNav, useIonRouter,
  IonList
} from '@ionic/react';
import "./info.css";


const Info =()=>{
	const [selected,setSelect] = useState<string>("friends")
  

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

          </div>
         
          <div className="doup">
          <IonSegment onIonChange={e => setSelect( e.detail.value)}>
          <IonSegmentButton value="friends">
            <IonLabel>Acerca</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Base</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Evolusión</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Movimentos</IonLabel>
          </IonSegmentButton>
          </IonSegment>
          </div>          
        </IonContent>
      </IonContent>
    </IonPage>
		)
}

export default Info;