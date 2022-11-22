import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { app, db } from '../firebase';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.prototype.$firebase = app;
Vue.prototype.$firestore = db;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app');
