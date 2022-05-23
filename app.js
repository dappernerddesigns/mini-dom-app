const answerArray = [
	`Looks pretty good to me`,
	`Not sure that's something you want`,
	`Ask me again after a coffee`,
	`Not got a clue champ, maybe don't ask a randomised array for help`,
	`Outlook pretty hazy, let me clean my glasses`,
	`Sounds like an epic idea, let me stand back before you do it though`,
	`Hmm, I don't think that is a wise course of action`,
];
const inputQuestion = document.getElementById('q-input');
const submitBtn = document.getElementById('submit');
const displayAnswer = document.getElementById('answer');
const inputAnswer = document.getElementById('input-question');
function askQuestion() {
	console.log(inputQuestion.value);
	displayAnswer.innerText = `You asked: ${inputQuestion.value}`;
	const randomNumber = Math.floor(Math.random() * answerArray.length);

	console.log(answerArray[randomNumber]);
}
