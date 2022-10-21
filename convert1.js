    let cntBtn = document.getElementById('cntBtn');
    cntBtn.addEventListener('click', convertCtoF);


        function convertCtoF(){
            console.log('convert was clicked');
            let celValue = document.getElementById("celValue");
            celValue = Number(celValue.value);
            console.log(typeof celValue);
            let fahrValue = (celValue*1.8) + 32;
            let yourOutput = document.querySelector('output');
            yourOutput.innerHTML = fahrValue.toFixed(2);
        }
  

       