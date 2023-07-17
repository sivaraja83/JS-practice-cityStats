let button = document.querySelector("button");
button.addEventListener("click",displaystats);

function displaystats(){
    let input = document.getElementById("input");
    let city = input.options[input.selectedIndex].value;
   
    let population = 0, literacyrate = 0, language = ' ';
    switch (city){
        case 'Bengaluru':
            population = 8445889
            literacyrate = 88.71
            language  = 'Kannada'
            break
        case 'Chennai':
            population = 464673
            literacyrate = 90.20
            language  = 'Tamil'
            break
        case 'Kochi':
            population = 12345
            literacyrate = 84.56
            language = 'Malayalam'
            break
        case 'Trivandrum':
            population = 67890
            literacyrate = 90.78
            language =  'Malayalam and Tamil'
            break
        case 'Mumbai':
            population = 34566
            literacyrate = 78.54
            language = 'Hindhi'
            break
    }
    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyrate}%`;
    let resultdiv = document.createElement('div');
    resultdiv.id = 'result'
    document.getElementById("wrapper").appendChild(resultdiv)
    
    document.getElementById("result").innerHTML=text

}