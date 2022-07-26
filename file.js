
// const h1 = document.getElementByID("title");

const url = "https://api.adviceslip.com/advice";

async function fetchAdvice() {
    fetch(url)
    .then((response) => {
      return response.json();
  
    })
    .then((data) => {
      let adviceData = data;
     
      let adviceElement = data.slip.advice
      let idElement = data.slip.id
      console.log(adviceData.slip)
      document.getElementById("text").innerHTML = adviceElement;
      document.getElementById("number").innerHTML = idElement;
    })
}




