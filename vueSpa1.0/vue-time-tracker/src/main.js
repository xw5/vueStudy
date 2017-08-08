import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResoruce from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResoruce);

const router=new VueRouter();

router.map({
  '/home':{
    component:Home
  },
  '/time-entries':{
    component:TimeEntries,
    subRoutes:{
      '/log-time':{
        component:LogTime
      }
    }
  }
})

router.redirect(
  { 
    '*': '/home' 
  });
router.start(App, '#app')
