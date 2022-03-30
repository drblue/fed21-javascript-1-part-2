/**
 * Vue.js Basics
 *
 */

// Create our Vue app
const app = Vue.createApp({
	data() {
		return {
			count: 0,

			msg: "Hello, Vue!",

			salary: 10,

			showBox: true,

			x: 0,
			y: 0,
		}
	},
	methods: {
		getSalaryImg() {
			return this.salary >= 50
				? "https://c.tenor.com/t5jP_vn9sdQAAAAd/money-printer-fed.gif"
				: "https://memegenerator.net/img/instances/48464525.jpg"
		},

		increaseSalary(amount = 1) {
			this.salary += amount
		},
		decreaseSalary(amount = 1) {
			if (this.salary - amount < 5) {
				this.salary = 5
				return
			}

			this.salary -= amount
		},

		toggleBox() {
			this.showBox = !this.showBox
		},

		updateCoords(e) {
			this.x = e.offsetX
			this.y = e.offsetY
		}
	},
	computed: {
		salaryClass() {
			return this.salary >= 20 ? "good-salary" : "bad-salary"
		}
	}
})

// Mount our Vue app on the element with id `app` in the DOM
app.mount('#app')
