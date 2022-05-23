const answerArray = [
	`Looks pretty good to me`,
	`Not sure that's something you want`,
	`Ask me again after a coffee`,
	`Not got a clue champ, maybe don't ask a randomised array for help`,
	`Outlook pretty hazy, let me clean my glasses`,
	`Sounds like an epic idea, let me stand back before you do it though`,
	`Hmm, I don't think that is a wise course of action`,
	`It's your money, why not`,
	`The early bird gets the worm, but the second mouse gets the cheese`,
	`I wouldn't do that if I were you. But I'm not, so go for it`,
	`I'm not sure, ask me again later`,
];
const inputQuestion = document.getElementById('q-input');
const submitBtn = document.getElementById('submit');
const displayAnswer = document.getElementById('answer');
const inputAnswer = document.getElementById('input-question');
const trev = document.getElementById('trev');

function askQuestion() {
	const randomNumber = Math.floor(Math.random() * answerArray.length);
	const question = inputQuestion.value;
	inputQuestion.value = '';
	inputAnswer.innerText = `You asked: ${question}`;
	displayAnswer.innerText = `Trev's wisdom: "${answerArray[randomNumber]}"`;
	trev.classList.add('vanish');
}
