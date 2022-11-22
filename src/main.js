import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { app, db } from '../firebase';

Vue.config.productionTip = false;
Vue.prototype.$firebase = app;
Vue.prototype.$firestore = db;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
