const Email = Id('email');
const Timer = Id('timer');

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

Id('beta').onclick = signup

//signup validation
function signup() {

  function isValid(str) {
    // based on RFC 5322 Official Standard
    // https://tools.ietf.org/html/rfc5322
    // dont touch the regex
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return regex.test(str)
  }
  let email = Id('email')
  if (isValid(email.value)) {
    email.classList.add('success')
    var xhr = new XMLHttpRequest()
    xhr.open(
    'POST',
    'https://api.wolf.financial/v1/signup',
    true,
    )
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('Content-Type', 'application/json')
    let code = window.location.search.split("code=")[1];
    xhr.send(JSON.stringify(code ? { email: email.value, referral: code } : { email: email.value }))
    Class('notification')[0].classList.add('notif-active')
    setTimeout(() => {
        email.classList.remove('success')
    }, 1000)
  } else {
    email.classList.add('fail')
    email.value = ''
    setTimeout(() => {
        email.classList.remove('fail')
    }, 400)
  }
}

// Set the date we're counting down to
var countDownDate = new Date("May 30, 2020 00:00:00").getTime();

updateTimer()

function updateTimer(){

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let time = [
        Math.floor(distance / (1000 * 60 * 60 * 24)),
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        Math.floor((distance % (1000 * 60)) / 1000)
    ]

    let template = ``;

    for (let i=0; i<4; i++){

        let label;

        switch (i){
            case 0:
                label = 'Day';
                if (time[0] != 1){
                    label += 's'
                }
                break;
            case 1:
                label = 'Hour';
                if (time[1] != 1){
                    label += 's'
                }
                break;
            case 2:
                label = 'Minute';
                if (time[2] != 1){
                    label += 's'
                }
                break;
            case 3:
                label = 'Second';
                if (time[3] != 1){
                    label += 's'
                }
                break;
        }
        template +=
            `
            <div class = 'timer-col'>
                <h1> ${time[i]} </h1>
                <h2> ${label} </h2>
            </div>
            `
    }

    Timer.innerHTML = template;

}


var x = setInterval(updateTimer, 1000)
