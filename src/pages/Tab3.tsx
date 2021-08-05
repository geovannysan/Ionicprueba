import { IonContent,IonList, IonCard,IonIcon, IonItem, IonLabel, IonCardHeader
  ,IonCardSubtitle, IonCardTitle, IonCardContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow, IonCol, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { ellipse, square, triangle, folder } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>  
  
  <ExploreContainer name="Tab 1 page"/>

  


       
 </IonContent>
    </IonPage>
  );
};

export default Tab3;
