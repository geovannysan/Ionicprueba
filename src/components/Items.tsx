import React, { useState, useRef, useEffect, } from 'react';
import {
    IonButton, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,
    IonAvatar,
    IonFab,
    IonLabel,
    IonFabButton,
    IonSkeletonText,
    IonListHeader,
    IonIcon,
    IonThumbnail,
    IonNav, useIonRouter,
    IonList
} from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
const PopoverList: React.FC<{ id: any}> = props => {
    const { nombre,img ,color} = props.id ;
    return (<div>

        <IonItem button >
            <IonAvatar slot="start">
                  <img src={img} />
            </IonAvatar>
            <IonLabel className="ion-no-border">
              {nombre}
           
            </IonLabel>
        </IonItem>
    </div>)
};
export default PopoverList;