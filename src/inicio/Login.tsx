import React, { useState,useRef, useEffect, Fragment } from 'react';
import {IonToast,IonButton,IonInput, IonContent,IonList, IonCard,IonIcon, IonItem, IonLabel, IonCardHeader
  ,IonCardSubtitle, IonCardTitle, IonCardContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow, IonCol,IonLoading } from '@ionic/react';
import { key, personCircle, triangle, folder } from 'ionicons/icons';
import xtrim from '../imagen/b.png';
import './Loginn.css';
import { useForm, Controller } from "react-hook-form";
//import { ErrorMessage } from "@hookform/error-message";

const Log: React.FC  <{error:string,handleChanges :()=>(e:any) => void ,values :()=>(e:any) => void,showLoading:boolean,Toast1:boolean, ShowToast1:() =>void}> = props  => {
   const { handleSubmit, control } = useForm();
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent >
        <IonHeader collapse="condense">
          
        </IonHeader> 
<IonContent>
        <div id="cont">
<div className="dat">
<div className="Bienvenido">
<span className="text">Bienvenido</span>

<p className="text"></p></div>


<img className="logo" src={xtrim}/>
</div>

  <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="sv">
    <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" className="wave"></path>
  </svg>
  <div className="form">
  <form onSubmit={props.handleChanges()} noValidate>
  
  <IonItem className="item">
  <IonLabel position="floating"><IonIcon  className="icon"icon={personCircle} color="#C9CBD5" /> Email</IonLabel>
  <IonInput type="text"  name="email" onIonChange={props.values()} required/>
</IonItem>


<IonItem className="item">
  <IonLabel position="floating"><IonIcon  className="icon" icon={key} color="#C9CBD5" /> Password</IonLabel>
  <IonInput type="password" name="password"onIonChange={props.values()} required />
</IonItem>
<span className="olvidar">Olvide mi contraseña?</span>
<IonButton className="btn" expand="block" type="submit"  color="primary">Entrar</IonButton>
</form>
<span className="olvidar"></span>

<IonButton className="btn" expand="block" fill="outline" color="gray" >Registro</IonButton>
</div> 
</div>


  <IonLoading
        cssClass='my-custom-class'
        isOpen={props.showLoading}
        message={'Please wait...'}
        spinner='dots'        
      />


  </IonContent>
 <IonToast
        isOpen={props.Toast1}
        onDidDismiss={() => props.ShowToast1()}
        message={props.error}
        duration={2000}
      />
       
 </IonContent>
    </IonPage>
  );
};

export default Log;
