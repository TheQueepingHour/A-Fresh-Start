document.addEventListener('DOMContentLoaded', () => {
    let body = document.getElementById('body')
    let header = document.createElement('header')
    header.innerHTML = `<a href="./index.html">Home</a>`
    header.setAttribute('class','container-fluid text-center')
    body.append(header)

    let main = document.createElement('main')
    main.setAttribute('id', 'mainSec')
    main.setAttribute('class', 'd-flex justify-content-center')
    body.append(main)

    let footer = document.createElement('footer')
    footer.setAttribute('id', 'footSec')
    footer.setAttribute('class', 'd-flex justify-content-center')
    body.append(footer)

    //Button stuff
    //button that adds stuff
    let pop = 0
    let popBtn = document.createElement('button')
    popBtn.setAttribute('id', 'popBtn')
    popBtn.setAttribute('class', 'btn btn-secondary')
    popBtn.innerHTML = "click me"
    popBtn.onclick = () => {
        pop++
        console.log(pop)
    }
    main.append(popBtn)

    let rainbowButton = document.createElement('button')
    rainbowButton.setAttribute('id', 'rainbowBtn')
    rainbowButton.setAttribute('class', 'btn btn-success')
    rainbowButton.innerHTML = "or click me"
    rainbowButton.onclick = async () => {
        function generateRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
          
        const colors = Array.from({ length: 100 }, generateRandomColor);
        for(let i = 0; i < colors.length; i++){
            body.style.background = colors[i]
        }        
    }
    footer.append(rainbowButton)
})