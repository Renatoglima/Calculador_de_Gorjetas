function calculateTip(event) {
    event.preventDefault();
    let bill= document.getElementById('bill').value;
    let service_qual = document.getElementById('service_qual').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == "" | service_qual == 0) {
        alert ('Por favor, preencha os valores')
        return;
    }

    if (numOfPeople == "" | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }
    
    let total = (bill * service_qual) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display="block";

}

document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);