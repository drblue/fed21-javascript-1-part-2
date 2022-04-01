/**
 * Vue.js Basics
 *
 */

// Create our Vue app
const app = Vue.createApp({
	data() {
		return {
			todos: [
				{ title: "Make coffee", completed: true },
				{ title: "Drink coffee", completed: false },
				{ title: "Drink MOAR coffee", completed: false },
				{ title: "Drink ALL THE coffee", completed: false },
			],
		}
	},

	methods: {
	},

	computed: {
	}
})

// Mount our Vue app on the element with id `app` in the DOM
app.mount('#app')
