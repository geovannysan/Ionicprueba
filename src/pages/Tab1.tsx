import React, { useState,useRef, useEffect,} from 'react';
import { IonButton,IonInput,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,
  IonAvatar,
  IonFab,
  IonLabel,
  IonFabButton,
  IonSkeletonText,
  IonListHeader,
  IonIcon,
  IonThumbnail,
  IonNav,useIonRouter,
  IonList } from '@ionic/react';
  import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';

import './Tab1.css';
import '../inicio/div.css';
import  {useSelector} from 'react-redux';



const Tab1: React.FC = (props) => {
  const [username,setUsername]=useState('')
  const [Password,setPassword]=useState('')
  const router = useIonRouter();
  const user = useSelector((state:any)=> state.user.username)

  
  //  A simple, hard-coded navigation
  const goForward = () => {
    
    router.push("/subtab1","back","push");
  }
  return (
    <IonPage>
      
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent className="ion-center home">

      <div className="raiz">
        <div className="ion-padding">
        <p className="lista" color="white">Helo {user}</p></div>
        
        
      </div>
      <div className="list1">
        <h4 className="lista">Notificaciones</h4>
      </div>
      <div className="list">
        <IonList>
          <div className="ion-padding custom-skeleton">
            <IonSkeletonText animated style={{ width: '60%' }} />
            <IonSkeletonText animated />
            <IonSkeletonText animated style={{ width: '88%' }} />
            <IonSkeletonText animated style={{ width: '70%' }} />
            <IonSkeletonText animated style={{ width: '60%' }} />
          </div>

          <IonList>
            <IonListHeader>
              <IonLabel>
                <IonSkeletonText animated style={{ width: '20%' }} />
              </IonLabel>
            </IonListHeader>
            <IonItem>
              <IonAvatar slot="start">
                <IonSkeletonText animated />
              </IonAvatar>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
              <IonThumbnail slot="end">
                <IonSkeletonText animated />
              </IonThumbnail>
            </IonItem>
            <IonItem>
              
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
              <IonThumbnail slot="end">
                <IonSkeletonText animated />
              </IonThumbnail>
            </IonItem>
            <IonItem>
              
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
              <IonThumbnail slot="end">
                <IonSkeletonText animated />
              </IonThumbnail>
            </IonItem>
            <IonItem>
              
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
              <IonThumbnail slot="end">
                <IonSkeletonText animated />
              </IonThumbnail>
            </IonItem>
            <IonItem>
             <IonAvatar slot="start">
                <IonSkeletonText animated />
              </IonAvatar>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonList>
      </div>
      {/*<div className="ion-padding custom-skeleton">
            <IonSkeletonText animated style={{ width: '60%' }} />
            <IonSkeletonText animated />
            <IonSkeletonText animated style={{ width: '88%' }} />
            <IonSkeletonText animated style={{ width: '70%' }} />
            <IonSkeletonText animated style={{ width: '60%' }} />
          </div>

          <IonList>
            <IonListHeader>
              <IonLabel>
                <IonSkeletonText animated style={{ width: '20%' }} />
              </IonLabel>
            </IonListHeader>
            <IonItem>
              <IonAvatar slot="start">
                <IonSkeletonText animated />
              </IonAvatar>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
              <IonThumbnail slot="end">
                <IonSkeletonText animated />
              </IonThumbnail>
            </IonItem>
            <IonItem>
             <IonAvatar slot="start">
                <IonSkeletonText animated />
              </IonAvatar>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
          </IonList>*/}

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton  onClick={goForward}>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab>
         </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
