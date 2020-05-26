


const ContactLoop = () => {

    let arr = Id('body').value.replace(/ /g, `%20`).replace(/(?:\r\n|\r|\n)/g, '%0D%0A')
    /*
    let string = ``

    for (let i=0; i<arr.length; i++){
        string += arr[i] + `%20`
    }
    */

    Id('send').setAttribute('href', `mailto:shelost.off@gmail.com?body=${arr}`)
}

setInterval(ContactLoop, 1000/30)