import Home from './Home';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe'

export const ToTAL_SCREENS =[{
    screen_name: "Home",
    component: Home,
},
{
    screen_name: "AboutMe",
    component:AboutMe,
},
{
    screen_name: "ContactMe",
    component:ContactMe,
},
];


export const GET_SCREEN_INDEX=(screen_name)=>{
    if(!screen_name) return -1;
    for(let i=0; i<ToTAL_SCREENS.length; i++){
        if (ToTAL_SCREENS[i].screen_name===screen_name)return i;
    }
}