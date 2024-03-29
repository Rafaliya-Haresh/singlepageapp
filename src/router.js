import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '*',
            redirect: { name: 'home' }
        },{   
            name: 'home',
            path: '/home',
            component: Home
        }
    ]
});
