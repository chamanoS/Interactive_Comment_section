//   const countElement = document.getElementById("count");
//   const increaseButton = document.getElementById("increase_1");
//   console.log(increaseButton)
//   const decreaseButton = document.getElementById("decrease");


//   let count = parseInt(countElement.textContent);

//   increaseButton.addEventListener("click", () => {
//     count++;
//     countElement.textContent = count;
//   });

//   decreaseButton.addEventListener("click", () => {
//     if (count > 0) {
//       count--;
//       countElement.textContent = count;
//     }
//   });



function countingVotes(evn){
   
    const increaseButton = document.getElementById(evn);
    const decreaseButton = document.getElementById(evn);
    const cnt = evn.replace("increase_","count_");
    console.log(cnt)
    const NewcountIncrease = increaseButton.parentElement.nextElementSibling.id;
    const NewcountDecrease = decreaseButton.parentElement.previousElementSibling.id;


    const nc = document.getElementById(NewcountIncrease)
   
    const dec = document.getElementById(NewcountDecrease)
    console.log(dec)

 let count = parseInt(countElement.textContent);
let countA = parseInt(nc.textContent)
let countB=parseInt(dec.textContent)
increaseButton.addEventListener("click", () => {
        countA++;
        nc.textContent = countA;
      });
    
      decreaseButton.addEventListener("click", () => {
        if (countB > 0) {
          countB--;
          dec.textContent = countB;
        }
      });
}
