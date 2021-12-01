// function for get pictures from unsplash api
async function loadImage(keyword) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&client_id=nZZ16wVt8mcEiQog_obeolP8LEW3QmLaBYzoyz7axXg`)
    const data = await response.json()

    //displaying the images
    if (data.results.length <= 0){
        alert("We could not find any matching pictures")
    }
    else{
        for (let i = 0; i < data.results.length; i++){
            const image = document.createElement("img")
            image.className = "imgs"
            image.src = data.results[i].urls.thumb
            document.getElementById("imageResults").appendChild(image)
    
            //make the image downloadable in normal size by click
            image.addEventListener("click", () => {
                window.open(
                    data.results[i].links.download,
                    '_blank'
                );
            })
        }
    }
}

// function for calling the loadImage on buttonpress(search)
document.getElementById("searchButton").addEventListener("click", () => {
    if (document.getElementById("searchKey").value == ""){
        alert("Please write in search keyword")
    }
    else{
        document.getElementById("imageResults").innerHTML = ""
        loadImage(document.getElementById("searchKey").value)
        document.getElementById("searchKey").value = ""   
    }
})