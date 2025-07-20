document.getElementById('type1').onclick = function(){
    const cardType1 = document.getElementById('card');
    cardType1.setAttribute('class','cardType1');
    cardType1.innerHTML = '<p>Freemium</p>';
    
}

document.getElementById('type2').onclick = function(){
    const cardType2 = document.getElementById('card');
    cardType2.setAttribute('class','cardType2');
    cardType2.innerHTML = '<p>Premium</p>';
    
}

document.getElementById('type3').onclick = function(){
    const cardType3 = document.getElementById('card');
    cardType3.setAttribute('class','cardType3');
    cardType3.innerHTML = '<p>PRO</p>';
    
}



document.getElementById('submitSubscription').addEventListener("click", function(){
    this.innerHTML = 'Submitted';
    confirm('Are you sure you want to submit your subscription?')
    alert('Subscription submitted successfully.')
});
