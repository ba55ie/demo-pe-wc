customElements.define(
	'my-component',
	class extends HTMLElement {
		/**
		 * The class constructor object
		 */
		constructor() {
			// Always call super first in constructor
			super();

			// Inject some HTML
			this.innerHTML = `<h1>Hi, universe!</h1>`;

			// ALT: Shadow DOM
			// Creates a shadow root
			// this.root = this.attachShadow({mode: 'closed'});

			// Inject some HTML into the shadow DOM
			// this.root.innerHTML =
			// 	`<h1>Hi, universe!</h1>`;
		}

		/**
		 * Runs each time the element is appended to or moved in the DOM
		 */
		connectedCallback() {
			console.log('connected!', this);
		}

		/**
		 * Runs when the element is removed from the DOM
		 */
		disconnectedCallback() {
			console.log('disconnected', this);
		}

		/**
		 * Runs when the value of an attribute is changed on the component
		 * @requires observedAttributes() method
		 * @param  {String} name     The attribute name
		 * @param  {String} oldValue The old attribute value
		 * @param  {String} newValue The new attribute value
		 */
		attributeChangedCallback(name, oldValue, newValue) {
			console.log('changed', name, oldValue, newValue, this);
		}

		/**
		 * Create a list of attributes to observe
		 * @return  {Array} The attributes to observe
		 */
		static get observedAttributes() {
			return ['greeting'];
		}
	}
);
