let blogResponse =
`[{"title":"Don't Lose Faith","blurb":"By: Hillel Weitzman","tags":[],"image":"https://foreignpolicy.com/wp-content/uploads/2020/04/economy-after-coronavirus-brian-stauffer-illustration-3_2l.jpg","isPublished":true,"_id":"5ebadd21731a3f04b686c298","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-13T03:19:02.123Z","createdAt":"2020-05-12T17:33:25.519Z","id":"5ebadd21731a3f04b686c298"},{"title":"Why Now Is The Time To Start Investing","blurb":"By: Hillel Weitzman","tags":[],"image":"https://miro.medium.com/max/700/0*n_yrdNXwQ-p43iB6","isPublished":true,"_id":"5ebadc66731a3f04b686c297","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:27:23.373Z","id":"5ebadc66731a3f04b686c297"},{"title":"First Quarter Economic Summary","blurb":"By: Josh Meltzer","tags":[],"image":"https://miro.medium.com/max/700/0*O0h6ragpIeFBR89G","isPublished":true,"_id":"5ebadc24731a3f04b686c296","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:26:47.015Z","id":"5ebadc24731a3f04b686c296"},{"title":"The Stock Market is not the 'Real Market'","blurb": "By: Josh Meltzer","tags":[],"image":"https://miro.medium.com/max/700/0*tC22iHehtreuTz1E","isPublished":true,"_id":"5ebadc02731a3f04b686c295","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:25:47.311Z","id":"5ebadc02731a3f04b686c295"},{"title":"The Need for a New Trading Tool","blurb":"By: Ben Kestenbaum","tags":[],"image":"https://miro.medium.com/max/700/0*QDqDbFUHRo78xFCQ.jpg","isPublished":true,"_id":"5ebadbb6731a3f04b686c294","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:24:38.134Z","id":"5ebadbb6731a3f04b686c294"},{"title":"Why College Students Should Start Investing","blurb":"By: Ian Moore","tags":[],"image":"https://miro.medium.com/max/640/0*2PqbtHASp_zCE8AV.jpg","isPublished":true,"_id":"5ebad8f5731a3f04b686c293","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-12T17:13:22.565Z","id":"5ebad8f5731a3f04b686c293"}]`;

let postResponse =
`{"title":"Don't Lose Faith","blurb":"By: Hillel Weitzman","tags":[],"image":"https://foreignpolicy.com/wp-content/uploads/2020/04/economy-after-coronavirus-brian-stauffer-illustration-3_2l.jpg","content":"<p>Many Americans lost faith in the stock market following the 2008 crash, but there was hope that the decade-long bull market which followed would restore their sentiment. This, unfortunately, did not happen to a large extent. Given an economy that displayed consistent growth, why did only about <u>half of Americans</u> have money in the stock market in April 2019? Granted, the crash of 2008 left many with a painful memory of what the worst-case scenario looks like, but I believe the long-lasting pessimism that the recession created is rooted deeper within people.</p><p>Beyond leaving many households desperate for financial support, the Great Recession exposed fragility in the merits of the average investor. The crash made it clear that many who had experienced success from trading in the past were woefully unaware of how the stock market actually functions. People knew the indicators of a good sell or good buy, but did they know what produces those indicators? Did ordinary people know why they made money when they did, and why they lost money when they did? The Great Recession exposed Americans to the fact that they knew very little about the intricacies of the stock market, as many had lost thousands of dollars and couldn't explain why. </p><p>The information existed publicly, and one with the free time could learn how the market truly functions - but time is an extremely limited resource to working Americans. Instead, many opted to trust the guidance of their brokers and advisors, guidance which led them astray. In a 2015 study, <u>21% of those surveyed</u> said they don't trust their financial advisors and brokers. </p><p>Given this long-lasting pessimism surrounding the stock market, created by the 2008 recession, imagine the impacts the 2020 market crash will have. Our economy will remain in recovery as long as Americans don't have faith in the financial institutions it thrives off of. Americans are in need of a medium that can provide them with information that they require without any ulterior incentives. They are in need of a service that gives accessible explanations of the intricacies of their investments, so they can put more faith in themselves instead of others when investing. If we want to return the stock market to the bull market that we had gotten used to, we need to change our methodology of understanding and learning about it. </p><p></p>","isPublished":true,"_id":"5ebadd21731a3f04b686c298","author":{"fullName":"Michael Grant Warshowsky","_id":"5eba2935c9e191400fe778d4","id":"5eba2935c9e191400fe778d4"},"publishedAt":"2020-05-13T03:19:02.123Z","createdAt":"2020-05-12T17:33:25.519Z","id":"5ebadd21731a3f04b686c298"}`

let blogObject = JSON.parse(blogResponse)
let postObject = JSON.parse(postResponse)

var Content = [``, ``, ``]

for (let i=0; i< blogObject.length; i++){

    let post = blogObject[i];

    let template;


    if (i == 0){

        template =
        `
        <div class = 'post featured blog-item' id = ${post.id}>
            <div class = 'banner' style = 'background-image: url(${post.image})'>
            </div>
            <div class = 'info'>
                <h1 class = 'title'> ${post.title} </h1>
                <h2 class = 'by'> ${post.blurb} </h2>
                <h3 class = 'author'> ${post.author.fullName} <span class = 'date'> ${post.publishedAt.substring(0,10)} </span> </h3>
            </div>
         </div>
        `
        Content[0] += template

    }else if (i < 4){

        template =
        `
        <div class = 'post blog-item' id = ${post.id}>
            <div class = 'banner' style = 'background-image: url(${post.image})'>
            </div>
            <div class = 'info'>
                <h1 class = 'title'> ${post.title} </h1>
                <h2 class = 'by'> ${post.blurb} </h2>
                <h3 class = 'author'> ${post.author.fullName} <span class = 'date'> ${post.publishedAt.substring(0,10)} </span> </h3>
            </div>
         </div>
        `
        Content[1] += template

    }else{

        template =
        `
        <div class = 'archived blog-item' id = ${post.id} style = 'background-image: url(${post.image})'>
            <div class = 'card'>
                <h1> ${post.title} </h1>
                <h2> ${post.author.fullName} </h2>
                <h3> ${post.publishedAt.substring(0,10)} </h3>
            </div>
        </div>
        `

        Content[2] += template
    }
}

Class('article')[0].classList.add('hidden')

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

