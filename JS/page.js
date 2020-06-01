let n = 0;

const PageLoop = () => {

    n = Math.log10(window.scrollY*0.1)

    console.log(Math.log10(n))

    if (n > 1 && n < 10){
        Id('icon').style.transform = `scale(${n**2})`
    }

    if (n>1.5){
        Id('icon').style.opacity = 0;
    }else{
        Id('icon').style.opacity = 0.05;
    }

}


setInterval(PageLoop, 1000/60)