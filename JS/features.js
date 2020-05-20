const Sidebar = Id('sidebar');
const Icons = Class('sidebar-img');
const Sections = Class('section');

var y;


const dists = [
    window.pageYOffset + Sections[0].getBoundingClientRect().top+300,
    window.pageYOffset + Sections[1].getBoundingClientRect().top+300,
    window.pageYOffset + Sections[2].getBoundingClientRect().top+300,
    window.pageYOffset + Sections[3].getBoundingClientRect().top+300,
]

let t = 0;

const FeaturesLoop = () => {

    for (let i=0; i<Icons.length; i++){
        Icons[i].classList.remove('sidebar-on')
    }

    y = window.scrollY;

    switch (true){
        case y < 400:
            Icons[0].classList.add('sidebar-on');
            break;
        case y > 400 && y < dists[1]:
            Icons[1].classList.add('sidebar-on');
            break;
        case y > dists[1] && y < dists[2]:
            Icons[2].classList.add('sidebar-on');
            break;
        case y > dists[2] && y < dists[3]:
            Icons[3].classList.add('sidebar-on');
            break;
        case y > dists[3]:
            Icons[3].classList.add('sidebar-on');
            break;
        default:
            Icons[3].classList.add('sidebar-on');
            break;
    }

    if (window.innerWidth > 800){

        if (window.innerWidth/window.innerHeight > 2.2){
            Class('page')[0].style.width = '80vw'
            for (let i=0; i<Class('screen').length; i++){
                Class('screen')[i].style.animation = 'bounce-screen-scaled 3s ease-in-out infinite alternate'
                Class('graphic')[i].style.width = '60%'
            }
            Id('sidebar').style.transform = 'translateX(-1vw) scale(0.7)'
            t=0;
        }else{
            Class('page')[0].style.width = '95vw'
            for (let i=0; i<Class('screen').length; i++){
                Class('screen')[i].style.animation = 'bounce-screen 3s ease-in-out infinite alternate'
                Class('graphic')[i].style.width = '50%'
            }
            if (t < 2){
                Id('sidebar').style.transform = 'translateX(-5.5vw) scale(0.8)'
            }else{
                Id('sidebar').style.transform = ''
            }
            t++;
        }

    }else{
        Class('page')[0].style.width = '100vw';
        for (let i=0; i<Class('screen').length; i++){
            Class('screen')[i].style.animation = 'bounce-screen 3s ease-in-out infinite alternate'
            for (let i=0; i<Class('screen').length; i++){
                Class('screen')[i].style.animation = 'bounce-screen 3s ease-in-out infinite alternate'
                Class('graphic')[i].style.width = '90%'
            }
        }
    }

}

setInterval(FeaturesLoop, 10)
