var POST_ID = window.location.search.substring(4, window.location.search.length)

let post = {}; //JSON.parse(response)

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', theUrl, false);
    xmlHttp.send(null)
    return xmlHttp.responseText
}

// get blogpost where blogString is its Id
let blogRequest = JSON.parse(
    httpGet(`https://api.wolf.financial/v1/blog-posts/${POST_ID}`,),
)
if (blogRequest.success) {
    post = blogRequest.payload.blogPost;
} else {
    alert('failed to load content!');
}

// Eventually, the response will be based on POST_ID via an HTTP request
// For now, POST_ID serves no purpose

Class('page')[0].innerHTML =
    `
    <div class = 'header'>
        <h1> ${post.title} </h1>
        <h2> ${post.blurb.substr(post.blurb.indexOf(': ')+1, post.blurb.length)} </h2>
        <h3> ${post.publishedAt.substring(0,10)} </h3>
    </div>
    <img src = ${post.image}>
    `
    + post.content;

var nodeA = document.createElement('meta');
nodeA.setAttribute('property', 'og:image');
nodeA.content = post.image;
document.getElementsByTagName('head')[0].appendChild(nodeA);
var nodeB = document.createElement('meta');
nodeB.setAttribute('property', 'og:title');
nodeB.content = post.title;
document.getElementsByTagName('head')[0].appendChild(nodeB);
var nodeC = document.createElement('meta');
nodeC.setAttribute('property', 'og:description');
nodeC.content = post.blurb;
document.getElementsByTagName('head')[0].appendChild(nodeC);
var nodeD = document.createElement('meta');
nodeD.setAttribute('property', 'og:url');
nodeD.content = `//wolf.financial/pages/article.html?id=${POST_ID}`;
document.getElementsByTagName('head')[0].appendChild(nodeD);
var nodeE = document.createElement('meta');
nodeE.setAttribute('property', 'og:type');
nodeE.content = "website";
document.getElementsByTagName('head')[0].appendChild(nodeE);