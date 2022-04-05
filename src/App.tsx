import React, { useState, useRef, useEffect, } from 'react';
import { Storage } from '@capacitor/storage';
import { Redirect, Route, useHistory, withRouter,RouteComponentProps } from 'react-router';

import {
  IonApp,
  IonPage,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  useIonRouter,
  createAnimation,
  IonSplitPane,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { createBrowserHistory } from 'history';

import { ellipse, square, triangle, folder } from 'ionicons/icons';
import Taba from './components/Tablas'
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Loging from './inicio/Login';


import Sub from './pages/info/index';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { setUSerState } from './redux/action';

import { useDispatch, useSelector } from 'react-redux';


/* Theme variables */
import './theme/variables.css';
import './theme/tabar.css';
const App: React.FC  = (store) => {
  //const history = createBrowserHistory();
  const dispatch = useDispatch()
  //  A simple, hard-coded navigation

 // let history = useHistory();
  const [error, setError] = useState("")
  const [Toast1, setToast1] = useState<boolean>(false)
  const [form1, setForm1] = useState({
    email: '',
    password: ''
  })
  const animationBuilder = (baseEl: any, opts?: any) => {
    const enteringAnimation = createAnimation()
      .addElement(opts.enteringEl)
      .direction('reverse')
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2')
      .duration(250);

    const leavingAnimation = createAnimation()
      .addElement(opts.leavingEl)
      .fromTo('opacity', 1, 0)
      .duration(350);

    const animation = createAnimation()
      .addAnimation(enteringAnimation)
      .addAnimation(leavingAnimation);

    return animation;
  };
  const setName = async (auth: boolean, token: string) => {
    await Storage.set({
      key: 'auth',
      value: token,
    });
  };
  const checkName = async () => {
    const value = await Storage.get({ key: 'auth' });
    setError("" + value.value)
    if (value.value === null) {
      return false;
    }
    else {
      return true;
    }
  };
  const [auth, setauth] = useState(false);
  const removeName = async () => {
    const value = await Storage.remove({ key: 'auth' });
    if (value === undefined) {
      return false;
    } else {
      console.log(true)
      return true;
    }
  };
  const datos = (() => {
    setError("session cerrada")
    setauth(false)
    removeName().then(function (resultado) {
      return resultado
    }).catch(function (falloCallback) {
      return console.log(falloCallback)
      console.log(falloCallback)
    })
    return
  })

  useEffect(() => {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(clickedTab => {
      clickedTab.addEventListener('click', () => {
        tabs.forEach(tab => {
          tab.classList.remove('active');
        });
        clickedTab.classList.add('active');
      });
    });
    checkName().then(function (resultado) {
      return setauth(resultado)
    }).catch(function (falloCallback) {
      return console.log(falloCallback)
      setToast1(true)
      setError(falloCallback)

    })

  }, [])
  const [showLoading, setShowLoading] = useState(false);

  const ShowToast1 = () => {
    if (Toast1) { setToast1(false) }
    else { setToast1(true) }

  }
  const values = (e: any) => {
    setForm1({ ...form1, [e.target.name]: e.target.value })
  }
  const handleChanges = async (event: any) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      setShowLoading(true)
      let config = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form1)
      }
      try {
        const datos = await fetch('http://192.168.1.8:1313/depar/LoginUser/', config)
        const result = await datos
        // console.log(result.status)
        if (result.status === 200) {
          const d: any = await result.json()
          setName(d.auth, d.token);
          dispatch(setUSerState(d.username))
          setShowLoading(false)
          setauth(true)
          setToast1(true)
          checkName()
          return
        }
        setShowLoading(false)
      } catch (error) {
        console.log(error)
        setError(""+error)
        setShowLoading(false)
        setToast1(true)
      }

    } else {

    }

  }

  if (!auth) {

    return (
      <IonApp>
        <IonReactRouter  >
          <IonRouterOutlet id="main" animation={animationBuilder} >

            <Route exact path="/subtab1/:groupid" component={Sub} />
            <Route path="/home"  >
              <Taba />
            </Route>

            <Route exact path="/">

              <Redirect to="/home/" />
            </Route>

          </IonRouterOutlet>

        </IonReactRouter>
      </IonApp>
    );
  } else {
    return (
      <IonApp>
        <IonReactRouter >
          <IonRouterOutlet animation={animationBuilder}>
            <Route exact path="/home"> 
              <Loging handleChanges={() => handleChanges}
                values={() => values}
                showLoading={showLoading}
                Toast1={Toast1}
                ShowToast1={() => ShowToast1}
                error={error} />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>

      </IonApp>);
  }

};

export default App;
