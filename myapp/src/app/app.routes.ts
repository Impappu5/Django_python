import { Routes } from '@angular/router';
// import { Login } from './login/login';
import { Signup } from './main_component/signup/signup';
import { Home } from './shared_component/home/home';
import { Contact } from './main_component/contact/contact';
import { About } from './main_component/about/about';
import { Login } from './main_component/login/login';
// import { Dashboard } from './main_component/dashboard/dashboard';
import { Sidebar } from './shared_component/sidebar/sidebar';
import { Layout } from './main_component/layout/layout';
import { Main } from './main_component/main/main';
import { Profile } from './main_component/profile/profile';

export const routes: Routes = [
    { path: '', component: Home, title: 'Layout Page' },
    { path: 'main', component: Main, title: 'Main Page' },
    {
        path: 'dashboard',
        component: Layout,
        children: [
            { path: '', component: Main, },
            { path: 'admins', component: Signup },
        ]
    },

    {
        path: 'profile',
        component: Layout,
        children: [
            { path: '', component: Profile, },
        ]
    },

    { path: 'dashboard', component: Layout, title: 'Sidebar Page' },
    { path: 'home', component: Home, title: 'Home Page' },
    { path: 'login', component: Login, title: 'Login Page' },
    { path: 'signup', component: Signup, title: 'Signup Page' },
    { path: 'contact', component: Contact, title: 'Contact Page' },
    { path: 'about', component: About, title: 'About Page' },

    { path: '', redirectTo: 'login', pathMatch: 'full' },

     { path: 'profile', component: Profile },
  { path: '', redirectTo: 'login', pathMatch: 'full' }


    //    {path:'forgotPassword',component:ForgotPassword,title:'Password Reset Page'}




];
