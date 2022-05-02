let searchNews = async (API, value) => {
  try {
    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/news?q={query}`
    );
    let data = await res.json();
    //  console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
};

let append=(data,container) =>{

data.forEach(({urlToImage}) =>{

    let div=document.createElement("div")
    div.setAttribute('class',"news")

    let img=document.createElement("img")
    let h3=document.createElement("h3")

    img.src=small;
    h3.innerText=urlToImage;

    div.append(img,h3)
    container.append(div)
})

}

