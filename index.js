


document.querySelector("button").addEventListener("click", handleClick)
    
    function handleClick() {
        const height = parseInt(document.getElementById("height").value);
        const weight = parseInt(document.getElementById("weight").value);

        const bmi = ((weight / (height*height))*10000).toFixed(2);


        console.log(bmi);
        document.getElementById("output").innerHTML = bmi;
    }
