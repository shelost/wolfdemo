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

const looper = () => {

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
}


setInterval(looper, 1000/30)
