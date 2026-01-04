const cards = document.getElementsByClassName('card');
// const audio = document.getElementsByClassName('pronunciation');

for (var index in cards){
    var button = cards[index].querySelector('.card-btn');
    button.addEventListener('click', function(event) {
        var currentButton = event.target;
        var currentCard = currentButton.parentNode;
        var currentAnswer = currentCard.querySelector('.card-answer');
        var currentAudio = currentCard.querySelector('.pronunciation');
        if(currentButton.innerHTML =='Show'){
            currentAnswer.style.display = 'Block' ;
            currentAudio.style.display = 'Block';
            currentButton.innerHTML = 'Hide';
        }
        else if (currentButton.innerHTML =='Hide'){
           currentButton.innerHTML = 'Show';
           currentAnswer.style.display = 'None';
           currentAudio.style.display = 'None';

        }
    })
}

// var audio = document.getElementsByClassName('pronunciation');
// audio.volume = 0.2;
