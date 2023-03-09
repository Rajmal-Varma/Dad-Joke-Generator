const btn1 = document.getElementById("btn");
const joke1= document.getElementById("joke");
const apiKey = "0WAA3iJAyVbtXnFTTOR77Q==SS0KMPOqZojV5zkH";

const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke(){
try {
        joke1.innerText="UPDATING...";
        btn1.innerText=true;
        btn1.innerText="LOADING..."
    const response = await fetch(apiURL , options);
    const data = await response.json();
    btn1.disabled=false;
    btn1.innerText="tell me a joke"
    joke1.innerText=data[0].joke;
    }
   
catch (error) {
    joke1.innerText="An error happened try again later"
    btn1.disabled = false;
    btn1.innerText="tell me a joke"
    console.log(error);
}
}
btn1.addEventListener("click"  , getJoke);

