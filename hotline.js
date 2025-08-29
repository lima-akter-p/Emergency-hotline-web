// heart button functionality

let count = 0;


const buttons = document.querySelectorAll('.heart');
const redHeart = document.getElementById('red-heart');


buttons.forEach(heart => {
  heart.addEventListener('click', () => {
    count++; 
    redHeart.textContent = count; 
  });
});

// call button functionality
let now = new Date()
let time = now.toLocaleTimeString();
let li = document.createElement("li")
   li.textContent = `[${time}]`;
  

  






let coins = 100;

const coinDisplay = document.getElementById("coinCount");
const historyList = document.getElementById("callHistory");

document.querySelectorAll(".callBtn").forEach(button => {
  button.addEventListener("click", function(){
    const serviceName = this.getAttribute("data-name");
    const serviceNumber = this.getAttribute("data-number");

    
    

    if(coins < 20){
      alert("Not enough coins! You need at least 20 coin to make a call");
      return;
    }
    coins -= 20;
    coinDisplay.textContent = coins;
    
    alert(`Calling ${serviceName} at ${serviceNumber} - ${time}`);


    const li = document.createElement("li");
    li.textContent = `${serviceName} - ${serviceNumber} -${time}`;
    historyList.appendChild(li);

    
  });
});

// clear button functionality

const clearBtn = document.getElementById("clearBtn");

const historyDiv = document.getElementById("callHistory")

clearBtn.addEventListener("click", function(){
  historyDiv.innerText = "";
});

// copy button functionality

function copyText(index){
  let texts = document.getElementsByClassName("textToCopy");
  let text = texts[index].innerText;

  navigator.clipboard.writeText(text).then(() =>{
    alert("Copied:" + text);
  });
  count++;
  document.getElementById("red-copy").innerText = count;
}

// exact time functionality







    



