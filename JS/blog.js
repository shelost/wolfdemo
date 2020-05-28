let blogResponse = ``
// `[{"title":"Don't Lose Faith","blurb":"By: Hillel Weitzman","tags":[],"image":"https://foreignpolicy.com/wp-content/uploads/2020/04/economy-after-coronavirus-brian-stauffer-illustration-3_2l.jpg","isPublished":true,"_id":"5ebadd21731a3f04b686c298","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-13T03:19:02.123Z","createdAt":"2020-05-12T17:33:25.519Z","id":"5ebadd21731a3f04b686c298"},{"title":"Why Now Is The Time To Start Investing","blurb":"By: Hillel Weitzman","tags":[],"image":"https://miro.medium.com/max/700/0*n_yrdNXwQ-p43iB6","isPublished":true,"_id":"5ebadc66731a3f04b686c297","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:27:23.373Z","id":"5ebadc66731a3f04b686c297"},{"title":"First Quarter Economic Summary","blurb":"By: Josh Meltzer","tags":[],"image":"https://miro.medium.com/max/700/0*O0h6ragpIeFBR89G","isPublished":true,"_id":"5ebadc24731a3f04b686c296","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:26:47.015Z","id":"5ebadc24731a3f04b686c296"},{"title":"The Stock Market is not the 'Real Market'","blurb": "By: Josh Meltzer","tags":[],"image":"https://miro.medium.com/max/700/0*tC22iHehtreuTz1E","isPublished":true,"_id":"5ebadc02731a3f04b686c295","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:25:47.311Z","id":"5ebadc02731a3f04b686c295"},{"title":"The Need for a New Trading Tool","blurb":"By: Ben Kestenbaum","tags":[],"image":"https://miro.medium.com/max/700/0*QDqDbFUHRo78xFCQ.jpg","isPublished":true,"_id":"5ebadbb6731a3f04b686c294","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:24:38.134Z","id":"5ebadbb6731a3f04b686c294"},{"title":"Why College Students Should Start Investing","blurb":"By: Ian Moore","tags":[],"image":"https://miro.medium.com/max/640/0*2PqbtHASp_zCE8AV.jpg","isPublished":true,"_id":"5ebad8f5731a3f04b686c293","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:13:22.565Z","id":"5ebad8f5731a3f04b686c293"}]`;

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', theUrl, false);
    xmlHttp.send(null)
    return xmlHttp.responseText
}

let blogRequest = JSON.parse(
    httpGet('https://api.wolf.financial/v1/blog-posts',),
)
if (blogRequest.success) {
    blogResponse = blogRequest.payload.blogPosts;
} else {
    alert('failed to load content!')
}


let blogObject = blogResponse;

var Content = [``, ``, ``]

for (let i=0; i< blogObject.length; i++){

    let post = blogObject[i];

    let template;


    if (i == 0){

        template =
        `
        <a href = 'article.html?id=${post.id}'>
        <div class = 'post featured blog-item' id = ${post.id}>
            <div class = 'banner' style = 'background-image: url(${post.image})'>
            </div>
            <div class = 'info'>
                <h1 class = 'title'> ${post.title} </h1>
                <h3 class = 'author'> ${post.blurb.substr(post.blurb.indexOf(': ')+1, post.blurb.length)} <span class = 'date'> ${post.publishedAt.substring(0,10)} </span> </h3>
            </div>
         </div>
           </a>
        `
        Content[0] += template

    }else if (i < 4){

        template =
        `
        <a href = 'article.html?id=${post.id}'>
        <div class = 'post blog-item' id = ${post.id}>
            <div class = 'banner' style = 'background-image: url(${post.image})'>
            </div>
            <div class = 'info'>
                <h1 class = 'title'> ${post.title} </h1>
                <h3 class = 'author'> ${post.blurb.substr(post.blurb.indexOf(': ')+1, post.blurb.length)} <span class = 'date'> ${post.publishedAt.substring(0,10)} </span> </h3>
            </div>
         </div>
        </a>
        `
        Content[1] += template

    }else{

        template =
        `
        <a href = 'article.html?id=${post.id}' class = 'arc'>
        <div class = 'archived blog-item' id = ${post.id} style = 'background-image: url(${post.image})'>
            <div class = 'card'>
                <h1> ${post.title} </h1>
                <h2> ${post.blurb.substr(post.blurb.indexOf(': ')+1, post.blurb.length)} </h2>
                <h3> ${post.publishedAt.substring(0,10)} </h3>
            </div>
        </div>
        </a>
        `

        Content[2] += template
    }
}

setTimeout(()=> {

    // Display Blog Articles
    for (let i=0; i<Class('blog').length; i++){
        Class('blog')[i].innerHTML = Content[i]
    }

    // Show Specific Article based on ID
    for (let i=0; i < Class('blog-item').length; i++){

        let item = Class('blog-item')[i];

        item.onclick = () => {
            sessionStorage.setItem('ID', item.id)
            location.href = 'article.html'


        }
    }

},100)