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
		}
	},
	methods: {
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
	}
})

// Mount our Vue app on the element with id `app` in the DOM
app.mount('#app')
