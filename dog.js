let btn=document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async() => {
   let link=await getImage();
   let img=document.querySelector("#result");
   img.setAttribute("src",link);
   console.log(link);
});

// let url="https://catfact.ninja/fact";

async function getImage() { //use async function
    try{
        let res=await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        console.log("error",e);
        return "no image found";
    }
}
