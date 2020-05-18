const Email = Id('email');
Email.addEventListener('mouseenter', () => {
    for (let i=0; i<Class('eye').length; i++){
        Class('eye')[i].style.fill = '#01FFFB';
        Class('eye')[i].style.opacity = 1;
    }
}) 

Email.addEventListener('mouseleave', () => {
    for (let i=0; i<Class('eye').length; i++){
        Class('eye')[i].style.fill = '#0286FF';
        Class('eye')[i].style.opacity = 0.9;
    }
}) 
