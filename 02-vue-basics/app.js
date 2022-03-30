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
	}
})

// Mount our Vue app on the element with id `app` in the DOM
app.mount('#app')
