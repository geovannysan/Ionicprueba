import {
  IonContent, IonList, IonCard, IonIcon, IonItem, IonLabel, IonCardHeader
  , IonCardSubtitle, IonCardTitle, IonFooter, IonCardContent, IonHeader, IonPage, IonTitle, IonAvatar, IonToolbar, IonGrid, IonRow, IonCol,
} from '@ionic/react';
import { ellipse, square, triangle, folder } from 'ionicons/icons';
import './Tab3.css';
import Itemss from '../components/Items'
import { addFavor, setUSerState } from '../redux/action';

import { useDispatch, useSelector } from 'react-redux';
const Tab3: React.FC = () => {
  const user = useSelector((state: any) => state);
  const dispatch = useDispatch()
 //console.log(user.user.filter((item:any,index:number) => index !== 0))
  /*var suma = 0
  const js = JSON.stringify(user);
  //Convirtiendo a objeto javascript
  let data = JSON.parse(js);
  const dat = data.map((va: any, i: number) => {
    suma += va.id
    // return suma
 
  })*/
const filter =(is:number)=>{
        //const fil=user.user.filter((item:any,index:number) => item == key);
       // console.log(fil)
        dispatch(addFavor(is))


    }
console.log(user)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >


        {user.user  ? user.user.map((va: any, i: number) => (

          <div key={i}>

        <IonItem button onClick={() => filter(i) }>
            <IonAvatar slot="start">
                <img src={va.img} />
            </IonAvatar>
            <IonLabel className="ion-no-border">
              {va.nombre}
            </IonLabel>
        </IonItem>
    </div>)):<div/> }





      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle> {0}</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab3;
