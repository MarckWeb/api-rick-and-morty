

let callApiMorty = async(url)=>{
    let response = await fetch(url)
    console.log(response)
    const date = await response.json();
    console.log(date)
    date.results.forEach(dates => {
        document.getElementById("galery").innerHTML += `<li class="items">
            <img src="${dates.image}">
            <div id="paragrap">
                <h3>${dates.name}</h3>
                <p>specie: "${dates.species}"</p>
                <p>${dates.location.name}</p>
            </div>
        </li>`
    });
}

callApiMorty(" https://rickandmortyapi.com/api/character/")