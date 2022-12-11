import Vue from 'vue';
import VueRouter from 'vue-router';
import Form from './views/Form';
import Main from './views/Main';

Vue.use(VueRouter);

export default new VueRouter({

    mode:'history',

    routes:[

        {path:'/main',component:Main, alias:'/'},

        {path:'/form',component:Form}

    ]



})
