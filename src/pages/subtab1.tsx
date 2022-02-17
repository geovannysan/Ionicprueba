import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonMenuButton,
  IonButtons,
  IonSlides,
  IonSlide,
  IonButton,
  useIonRouter,
  IonItem,
  IonInput,
  IonBackButton,
  IonCol,
  IonToolbar,
} from "@ionic/react";
import { Storage } from '@capacitor/storage';
import { useHistory } from "react-router-dom";
import React from "react";
import Foto from '../assets/categories/category-1.png';

import './home.scss';


export interface IdProducto{
  id:number,
  name:string,
  price:number,
  image:string,
}
export interface Idcateg{

}
 
const Sub1: React.FC  <{datos:()=>(e:any) => void}> =props => {
  const router = useHistory();
  let products:any = [];
  const pro ={categoria:[ 
    {
        id: 1,
        name: 'Womens T-Shirt',
        price: 55,
        image: Foto
      },
      {
        id: 2,
        name: 'Mens T-Shirt',
        price: 34,
        image: 'https://source.unsplash.com/random'
      }, {
        id: 3,
        name: 'Womens T-Shirt',
        price: 40,
        image: 'https://source.unsplash.com/random'
      }]};
  const [datos,setDatos] = React.useState([]);
 const getFeaturedProducts=() =>{
    

    let prod1: IdProducto = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-1.png'
    }
    let prod2: IdProducto = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-2.png'
    }
    let prod3: IdProducto = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-3.png'
    }

    products.push(prod1, prod2, prod3);
    setDatos(products.push(prod1, prod2, prod3))
//onsole.log(datos)
    return products;
  }


  React.useEffect(()=>{
    getFeaturedProducts()
   // setDatos()

  },[])
  return (
    <IonPage>
    <IonHeader>
    <IonToolbar>
    <IonButtons slot="start">

   
   <i className="bi bi-list"  />
   
   </IonButtons>
   
   <IonButtons slot="end">
   <IonButtons className="notificacion">
   <i className="bi bi-bell"  />
  
   <span>&nbsp;</span>
    </IonButtons>
      <IonButtons className="filter">
   <i className="bi bi-funnel" />
   </IonButtons>
   </IonButtons>

    </IonToolbar>
    </IonHeader>
    <IonContent>
      <div className="search ion-padding">
        <IonItem lines="none">
        <IonInput placeholder="Buscar"></IonInput>
         <i className="bi bi-search" slot="start" />
        </IonItem>
      </div>

      <div className="title ion-padding">
      <h2>Categoria</h2>
      <p>Ver mas</p>
        
      </div>
      <div className="categoria-slider ion-padding-start">
       <IonSlides
       options={{slidesPerView:'auto',zoom:false,grabCursor:true}}>
        {pro.categoria.length ? pro.categoria.map((value: any, idx: number)=>(
            
            <IonSlide key={idx}>
            <IonCol>
              <h4>{value.name}</h4>
              <img src={value.image}/>
            </IonCol>
                           
            </IonSlide>)):'' }
       </IonSlides>
       

      </div>
      <div className="title ion-padding">
      <h2>Proximos</h2>
      <p>Ver mas</p>
        
      </div>
      <div className="product-slider ion-padding-start">
      <IonSlides 
      options={{slidesPerView:'auto',zoom:false,grabCursor:true}}>
      {pro.categoria.length?pro.categoria.map((value:any)=>(
        <IonSlide key={value.id}>
        <IonCol className="ion-text-left">
        <img src={value.image}/>
        <p>{value.price} </p>
        <h6>{value.name}</h6>
        </IonCol>
        </IonSlide>
        ))

      :''}
      </IonSlides>
      </div>
    </IonContent>
    </IonPage>
   /* <IonPage>
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

    </IonPage>/*/
  );
};
export default Sub1;