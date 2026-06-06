const form = document.getElementById('question'),
    metaNextStep = document.querySelector('meta[name="next-step"]'),
    nextStep = metaNextStep ? metaNextStep.content : '404.html',
    metaAnswer = document.querySelector('meta[name="answer"]');
    answer = metaAnswer ? metaAnswer.content : 'jniowefijoewfefwijo',
    failureCount = 0;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userInput = document.getElementById('answer').value.toLowerCase();

    if (userInput.includes(answer)) {
        window.location.href = `${nextStep}.html`;
        return;
    }

    failureCount++;
    let failureMessage = "Wrong answer! Try again.";
    
    if (failureCount > 2) {
        failureMessage += "\nStuck when you don't think you should be? Text me.";
    }
    alert(failureMessage);
});
