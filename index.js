let resultEl = document.getElementById('result');
let clickBtnEl = document.getElementById("clickBtn");

let concept = [null, "Business", "Job", "Forming"];

let randomOf = Math.ceil(Math.random() * 3);


clickBtnEl.onclick = () => {
    let res = concept[randomOf];
    resultEl.textContent = res;
};




// function evenOrOdd() {
//     console.log("EVEN");

// };


// evenOrOdd();


