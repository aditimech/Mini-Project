let cntBtn = document.getElementById('cntBtn');
cntBtn.addEventListener('click', convertFtoC);


function convertFtoC(){
    console.log('convert was clicked');
    let fahrValue = document.getElementById("fahrValue");
    fahrValue = Number(fahrValue.value);
    console.log(typeof fahrValue);
    let celValue = (fahrValue - 32)/1.8;
    let yourOutput = document.querySelector('output');
    yourOutput.innerHTML = celValue.toFixed(2);


    }
