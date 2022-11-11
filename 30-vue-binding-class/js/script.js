/*
Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.
*/

const app = new Vue({
	el: '#root',
	data: {
		randomColor: '',
		classStr: 'rosso blue',
		isRed: true,
	},
	methods: {
		// cambiaColore: function() {}
		cambiaColore() {
			this.isRed = !this.isRed;
			this.randomColor = '';
		},
		putRandomColor() {
			this.randomColor = this.getRandomColor();
		},
		getRandomColor() {
			const acceptableChars = '0123456789ABCDEF';
			let color = '#'
			for (let i = 0; i < 6; i++) {
				color += acceptableChars[this.getRandomInteger(0, 15)];
			}
			return color; // #xxxxxx
		},
		getRandomInteger(min, max) {
			return Math.floor(Math.random() * (max - min + 1) ) + min;
		},
	}
});
