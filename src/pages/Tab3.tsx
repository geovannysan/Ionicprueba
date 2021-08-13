import { IonContent,IonList, IonCard,IonIcon, IonItem, IonLabel, IonCardHeader
  ,IonCardSubtitle, IonCardTitle, IonCardContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow, IonCol, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { ellipse, square, triangle, folder } from 'ionicons/icons';
import './Tab3.css';
import {addFavor,setUSerState} from '../redux/action';

import { useDispatch, useSelector } from 'react-redux';
const Tab3: React.FC = () => {
 const user = useSelector((state:any)=> state.user);
 //console.log(user)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        
  
   {user? user.map((va:any,i:number)=>(<div key={i}><IonItem button>{va.color} {va.nombre}</IonItem>
                   </div>)):<div/>}

  


       
 </IonContent>
    </IonPage>
  );
};

export default Tab3;
