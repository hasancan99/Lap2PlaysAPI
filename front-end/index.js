const theatres = document.querySelector("#AllTheatres")

const fetchTheatreData = async () =>{
    try{
        const res= await fetch('http://localhost:3000/theatres')
        if (res.ok){
            const data= await res.json()
            postTheatres(data)
        }else{
            throw "Error: http Status Code = " + res.status
        }}
        catch(err){
            console.log(err)
        }
}

const postTheatres = (data) =>{
    data.forEach(element => {
        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        const p4 = document.createElement('p')
        const a = document.createElement('a')
        div.className = 'theatre-container';
        h3.className = 'theatre-name';
        p1.className = 'theatre-location';
        p2.className = 'theatre-phone';
        p3.className = 'theatre-capacity';
        h3.textContent= element['theatre_name']
        p1.textContent= element['theatre_location']
        p2.textContent= element['phone_number']
        p3.textContent= element['capacity']
        p4.textContent= "Currently Showing: "
        a.textContent= element['play_name']
        a.href='#'
        a.dataset.id=element['plays_id']

        a.addEventListener('click', (e) =>{
            e.preventDefault()
            showPlay(e)
        })
        p4.append(a)
        div.append(h3,p1,p2,p3,p4)
        theatres.append(div)
        
    });
}

const showPlay = async (data)=>{
    const id = data.target.dataset.id
    console.log(id)
    try{
        const res = await fetch(`http://localhost:3000/plays/${id}`)
        if (res.ok){
            const playInfo = await res.json()
            console.log(playInfo)
            const div = document.createElement('div')
            div.style.position = "fixed";
            div.style.top = "50%";
            div.style.left = "50%";
            div.style.transform = 'translate(-50%, -50%)';
            div.style.backdropFilter = "blur(10px)";
            div.style.zIndex = "9999";
            div.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            const h3 = document.createElement('h3')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            const p3 = document.createElement('p')
            const p4 = document.createElement('p')
            const a = document.createElement('a')
            div.className = 'play-container';
            h3.className = 'play-name';
            p1.className = 'director';
            p2.className = 'actors';
            p3.className = 'price';
            p4.className = 'dates'
            h3.textContent= playInfo['play_name']
            p1.textContent= playInfo['director']
            p2.textContent= playInfo['actors']
            p3.textContent= playInfo['price']
            p4.textContent= playInfo['dates']
            a.textContent= 'BACK TO THEATRES'
            a.href='#'
            
            
            div.append(h3, p1, p2, p3, p4, a)
            a.addEventListener('click', e=>{
                div.remove()
                
            }, { once: true })
            theatres.append(div)
            
        }else{
            throw "Error: http Status Code = " + res.status
        }}
        catch(err){
            console.log(err)
        }


}   

fetchTheatreData()
// const fetchFruitData = (fruit) => {
//     fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
//      .then((res) => res.json())
//      .then((data) => addFruit(data))
//      .catch((e) => console.log(e));
//    };
