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
    let node = document.createElement('div')
    let body = document.body
    node.innerHTML = `You've Been Signed Up<button onclick="event.target.parentNode.remove()">Okay</button>`
    node.id = 'notification'
    body.insertBefore(node, body.firstChild)
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