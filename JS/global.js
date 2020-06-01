const Navfab = Id('navfab');
const Navbar = Id('navbar')

Navfab.onclick = () => {
    Navbar.classList.toggle('navbar-out')
}

var CX = window.innerWidth/2;
var CY = window.innerHeight/2;

var initPositions = []

for (let i=0; i<Class('wolf-poly').length; i++){
    let poly = Class('wolf-poly')[i];
    initPositions.push([poly.getBoundingClientRect().x, poly.getBoundingClientRect().y]);
}

var MX, MY;

var FY = CY;
var up = true;

const loop = () => {


    for (let i=0; i<Class('wolf-poly').length; i++){

        let poly = Class('wolf-poly')[i];
        let px = poly.getBoundingClientRect().x
        let py = poly.getBoundingClientRect().y

        var q;

        switch(true){

            case Contains(poly, 'st5'):
                q = 12;
                break;
            case Contains(poly, 'st6'):
                q = 12;
                break;
            case Contains(poly, 'st1'):
                q = 10;
                break;
            case Contains(poly, 'st2'):
                q = 8;
                break;
            case Contains(poly, 'st3'):
                q = 8;
                break;
            case Contains(poly, 'st4'):
                q = 7;
                break;
            case Contains(poly, 'st0'):
                q = 8;
                break;
            default:
                q = 1;
                break;
        }

        let b = 1;

        if (MX-CX > 0){
            b = 1;
        }else{
            b = -1;
        }

        let dist = Math.sqrt((MX-px)**2 + (MY-py)**2)

        let angle = (dist/700)*10

        poly.style.transform = `translate(${Math.floor(MX-CX)*0.003*q}px, ${Math.floor(MY-CY)*0.003*q}px) rotate3D(0,0,1,${b*angle*0.1}deg)`


      if (window.innerWidth < 800){

        if (up){
            FY -= 0.3;
        }else{
            FY += 0.3;
        }

        if (FY < CY -200){
            up = false;
        }

        if (FY > CY +200){
            up = true;
        }

       poly.style.transform = `translate(0px, ${Math.floor(FY-CY)*0.005*q}px)`

      }


    }


    sessionStorage.getItem('light') == "1"? document.body.classList.add('light') : document.body.classList.remove('light')

}

Id('img-desktop').onclick = () => {
    sessionStorage.getItem('light') == "1"? sessionStorage.setItem('light', 0) : sessionStorage.setItem('light', 1)
    console.log('got it')
}

window.addEventListener('mousemove', e => {
    MX = e.clientX;
    MY = e.clientY;
})

setInterval(loop, 1000/30);

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to a more compatible method here
    }
  });


