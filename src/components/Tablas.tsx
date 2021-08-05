
import React from "react";
import Tab from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import { Redirect, Route, useHistory } from 'react-router-dom';
import {
  IonApp,
  IonPage,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  createAnimation ,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { ellipse, square, triangle, folder } from 'ionicons/icons';

const Tabs: React.FC = () => {
  return (
     <IonTabs>
            <IonRouterOutlet  >
           
              <Route exact path="/home/tab1" render={()=><Tab/>}

              />
              <Route exact path="/home/tab2">
             <Tab2/>

              </Route>
              <Route path="/home/tab3"
              render={()=><Tab3/>
              }
              />

              <Route exact path="/home">
               <Redirect from ="/home"to="/home/tab1" />
               </Route>
               
            </IonRouterOutlet>

            <IonTabBar className="IonTabBar" slot="bottom" >
              <IonTabButton className="tab" tab="tab1"  href="/home/tab1">
                 <div className="tab  purple">
                    <i className="bi bi-house" />
                    <p>Home</p>
                  </div>
              </IonTabButton>
              <IonTabButton className="tab" tab="tab2" href="/home/tab2">
                 <div className="tab pink">
                    <i className="bi bi-heart-fill" />
                    <p>Favoritos</p>
                  </div>
              </IonTabButton>
              <IonTabButton className="tab"  tab="tab3" href="/home/tab3">
                <div className="tab teal">
                    <i className="bi bi-person-badge-fill" />
                    <p>facturas</p>
                    </div>
              </IonTabButton>
            </IonTabBar>

          </IonTabs>
  );
};

export default Tabs;
