import {useEffect,useState} from 'react';

import {IonToast,
  IonContent, IonList, IonCard, IonIcon, IonItem, IonLabel, IonCardHeader
  , IonCardSubtitle, IonCardTitle, IonFooter, IonCardContent, IonHeader, IonPage, IonTitle, IonAvatar, IonToolbar, IonGrid, IonRow, IonCol,
} from '@ionic/react';
import {File as FileEntry} from '@ionic-native/file'
import {readSecretFile,redSystem,Filedatos} from './util';

import {
  FileTransfer,
} from "@ionic-native/file-transfer";
import { ellipse, square, triangle, folder } from 'ionicons/icons';
import './Tab3.css';
import Itemss from '../components/Items'
import { addFavor, setUSerState } from '../redux/action';
import { Capacitor } from "@capacitor/core";
import { useDispatch, useSelector } from 'react-redux';
const Tab3: React.FC = () => {
  const user = useSelector((state: any) => state);
  const [showToast1, setShowToast1] = useState(false);
  const [dato,setdato]= useState("")
    const [showToast, setShowToast] = useState(false);
  const [datos,setdato1]= useState("")
  const dispatch = useDispatch()
const filter =(is:number)=>{
        dispatch(addFavor(is))
    }

     useEffect(  ()=>{
       readSecretFile().then( (e:any)=>(console.log(e), setShowToast1(true) )).catch((err:any)=>(console.log(":"+err),setdato(err),setShowToast1(true)))
       redSystem().then( (e:any)=>(console.log(e), setdato1(e) ,setShowToast(true) )).catch((err:any)=>(console.log("redSystem:"+err),setdato1(err),setShowToast(true)))
       Filedatos().then( (e:any)=>(console.log(e),setdato(e) )).catch((err:any)=>(console.log("Filedatos:"+err)))

    },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >

{dato ? <div>{dato}</div>: <div >
 
</div>}
        {/*user.user  ? user.user.map((va: any, i: number) => (

          <div key={i}>

        <IonItem button onClick={() => filter(i) }>
            <IonAvatar slot="start">
                <img src={va.img} />
            </IonAvatar>
            <IonLabel className="ion-no-border">
              {va.nombre}
            </IonLabel>
        </IonItem>
    </div>)):<div/> */}


 <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message={dato}
        position="top"
        buttons={[
          {
            side: 'start',
            icon: 'star',
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]}
      />
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={datos}
        position="bottom"
        buttons={[
          {
            side: 'start',
            icon: 'star',
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]}
      />


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
