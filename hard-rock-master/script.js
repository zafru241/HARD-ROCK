const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')

const apiURL = 'https://api.lyrics.ovh';

//adding event listener in form

form.addEventListener('submit', e=>{
    e.preventDefault();
    searchValue = search.value.trim();

    //checking search value empty or not
    if(searchValue){
        alert('There is nothing to search')
    }
    else{
        searchSong(searchValue);
       
    }
})
// search song

async function searchSong(searchValue){
    const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`)
    const data = await searchResult.json();
    showData(data);
}
//updating DOM
function showData(data){
    result.innerHTML =`
    <ul class="song-list">
    ${data.data.map(song=>`<li>
                            <div>
                             <strong>
                             ${song.artist.name}
                             </strong> -${song.title}
                             </div>
                             <span data-artist = "${song.artist.name}"data-songtitle ="${song.title}">
                                get lyrics
                                </span>
                                </li>
    `).join('')
}
</ul>
`
}