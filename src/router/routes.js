
// GeneralViews
import NotFound from '@/pages/NotFoundPage.vue';
import Wrapper from "@/layout/Wrapper";


import CreateNewCourse from "../pages/EditCourse";



// Admin pages
const Login = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Login.vue");
const Library = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Library.vue");
const Home = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Home.vue");
const Courses = () => import(/* webpackChunkName: "dashboard" */"@/pages/Courses.vue");
const NewCourse = () => import(/* webpackChunkName: "dashboard" */"@/pages/EditCourse.vue");
const EditLesson = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/EditLesson.vue");
const Playground = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Trash/Playground.vue");
const routes = [
    {
        path: "/",
        component: Wrapper,
        redirect: "/playground",
        children: [
          {
            path: "home",
            name: "home",
            component: Home,
            meta:{
              breadcrumb:[
                {text: 'Home', active:true}
              ]
            }
          },
          {
            path: "courses",
            name: "courses",
            component: Courses,
            meta:{
              breadcrumb:[
                {text: 'Home',to:{name:'home'}},
                {text: 'Courses',active:true},
              ]
            }
          },
          {
            path: "playground",
            name: "playground",
            component: Playground,

          },
          /*{
            path: "profile",
            name: "profile",
            component: Profile,
            meta:{
              breadcrumb:[
                {text: 'Home',to:{name:'home'}},
                {text: 'Profile',active:true},
              ]
            }
          },*/
          {
            path: "/edit-course/:id",
            name: "edit-course",
            component: NewCourse,
            props: true,
            meta:{
              breadcrumb:[
                {text: 'Home',to:{name:'home'}},
                {text: 'Courses',to:{name:'courses'}},
                {text: '',active: true},
              ]
            }
          },
          {
            path: "library",
            name: "library",
            component: Library,
            meta:{
              breadcrumb:[
                {text: 'Home',to:{name:'home'}},
                {text: 'Library',active: true},
              ]
            }
          },
          {
            path: "/edit-lesson",
            name: "edit-lesson",
            component: EditLesson,
            meta:{
              breadcrumb:[
                {text: 'Home',to:{name:'home'}},
                {text: 'Courses',to:{name:'courses'}},
                {text: 'CourseName',to:{name:'newcourse'}},
                {text: 'LessonName',active: true},
              ]
            }

          },

        ]
    },
  { path: "/login",
    name: "login",
    component: Login,
  },
    { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/WrapperElements/Views/' + name + '.vue');
   return res;
};**/

export default routes;
