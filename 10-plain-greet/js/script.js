/*
Predisponiamo due input, in cui inseriremo Nome e Cognome.
In un paragrafo utilizzare Nome e Cognome per salutare l’utente
*/

const eleFirstName = document.querySelector('#first-name');
const eleLastName = document.querySelector('#last-name');
const eleOutput = document.querySelector('p');

eleFirstName.addEventListener('keyup', function() {
	eleOutput.innerHTML = `Ciao ${eleFirstName.value} ${eleLastName.value}`;
});

eleLastName.addEventListener('keyup', function() {
	eleOutput.innerHTML = `Ciao ${eleFirstName.value} ${eleLastName.value}`;
});