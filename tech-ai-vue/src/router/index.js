import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue'
import Home2 from '@/pages/Home2.vue'
import Home3 from '@/pages/Home3.vue'
import HomeLight from '@/pages/HomeLight.vue'
import Home2Light from '@/pages/Home2Light.vue'
import Home3Light from '@/pages/Home3Light.vue'

import About from '@/pages/About.vue'
import UseCase from '@/pages/UseCase.vue'
import UseCaseSingle from '@/pages/UseCaseSingle.vue'
import Error from '@/pages/Error.vue'
import Register from '@/pages/Register.vue'
import Signin from '@/pages/Signin.vue'
import Teams from '@/pages/Teams.vue'
import Blog from '@/pages/Blog.vue'
import BlogTwo from '@/pages/BlogTwo.vue'
import BlogSingle from '@/pages/BlogSingle.vue'
import Contact from '@/pages/Contact.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/home-2',
            name: 'Home Two',
            component: Home2,
        },
        {
            path: '/home-3',
            name: 'Home Three',
            component: Home3,
        },
        {
            path: '/home-light',
            name: 'Home Light',
            component: HomeLight,
        },
        {
            path: '/home-2-light',
            name: 'Home Two Light',
            component: Home2Light,
        },
        {
            path: '/home-3-light',
            name: 'Home Three Light',
            component: Home3Light,
        },
        {
            path: '/about',
            name: 'About Us',
            component: About,
        },
        {
            path: '/use-case',
            name: 'Use Case',
            component: UseCase,
        },
        {
            path: '/use-case-details',
            name: 'Use Case Details',
            component: UseCaseSingle,
        },
        {
            path: '/404',
            name: '404 Not Found',
            component: Error,
        },
        {
            path: '/sign-up',
            name: 'Sign Up',
            component: Register,
        },
        {
            path: '/sign-in',
            name: 'Sign In',
            component: Signin,
        },
        {
            path: '/teams',
            name: 'Teams',
            component: Teams,
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog,
        },
        {
            path: '/blog-two',
            name: 'Blog Two',
            component: BlogTwo,
        },
        {
            path: '/blog-details',
            name: 'Blog Details',
            component: BlogSingle,
        },
        {
            path: '/contact-us',
            name: 'Contact Us',
            component: Contact,
        },
    ],
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});
