const searchBtn= document.getElementById("search")
const input=document.getElementById("input")
const cardBody= document.getElementById("cardBody")
function searchMovies(){
    axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=62561093").then(res => 
    {
            if (res.data.Title==input.value) {
                const { Title,Poster,imdbRating,Year,Website,Rated,Plot,Actors,Genre} = res.data
                cardBody.innerHTML+= `
            <div class="card__body">
                <div class="card__body__img">
                    <img src="${Poster}" alt="">
                </div>
                <div class="card__body__right">
                    <h1>${Title}</h1>
                    <h3><i class="fa-solid fa-star" style="color: #e8b730;"></i>${imdbRating}</h3>
                    <p class="prag">${Rated} ${Year} ${Website}</p>
                    <div class="box">
                        <p>Action</p>
                        <p>Adventure</p>
                        <p>Comedy</p>
                    </div>
                </div>
            </div>
            <div class="card__footer">
                <div class="card__footer__1">
                    <h2>Plot</h2>
                    <p>${Plot}</p>
                </div>
                <div class="card__footer__2">
                    <h2>Cast</h2>
                    <p>${Actors}</p>
                </div>
            </div>
                `
            }
        }
    )
}
