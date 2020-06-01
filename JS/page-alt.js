
let n;

let s = Id('screen');
let l = Id('left');
let r = Id('right')

const AltLoop = () => {

    n = window.scrollY

    switch (true){

        case n < 400:
            s.style.backgroundImage = 'url(../../Assets/screenshot-img-2.jpeg)'
            l.innerHTML = `
            <h1 class = 'title'> Investment </h1>
            `
            r.innerHTML = `
            <h1 class = 'title'> Analysis <img src = '../../Assets/icon-3.png'> </h1>
            `
            break;
        case n > 400 && n < 700:
            s.style.backgroundImage = 'url(../../Assets/screenshot-img-1.jpeg)'
            l.innerHTML = `
            <h1> Financial ratio analysis in which investment securities are tailored to a particular tier using a custom ‘binning system.’   </h1>
            `
            r.innerHTML = `
            <h1> Variables utilized in this binning system include:</h1>
            <h2> Price/Equity · Price/Book · Free Cash Flow · Price/Earnings-to-Growth Debt/Equity · Dividend Yield · Net Profit Margin · Market Cap · Beta · Expense Ratio </h2>
            `
            break;
        case n > 700 && n < 1000:
            s.style.backgroundImage = 'url(../../Assets/screenshot-img-3.jpeg)'
            l.innerHTML = `
            <h1> Portfolio customization based on user goals </h1>
            `
            r.innerHTML = `
            <h1> Value, growth, risk mitigation, long-term, etc. </h1>
            `
            break;
        case n > 1000:
            s.style.backgroundImage = 'url(../../Assets/screenshot-img-4.jpeg)'
            l.innerHTML = `
             <h1> Data output weighted against industry, sector, and market averages in order to provide comparisons and perspective. </h1>
            `
            r.innerHTML = `
            <h1> Up-to-date summaries on how the market values your portfolio </h1>
            `
            break;
    }

    console.log(n)

}

setInterval(AltLoop, 1000/60)