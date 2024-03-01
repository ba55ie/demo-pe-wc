const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

customElements.define(
	'ajax-form',
	class extends HTMLElement {
		connectedCallback() {
			this.form = this.querySelector('form');
			this.button = this.querySelector('button');
			this.template = this.querySelector('template');

			this.addEventListener('submit', this);
		}

		handleEvent(event) {
			if (event.type === 'submit') {
				event.preventDefault();

				this.subscribe(new FormData(this.form));
			}
		}

		async subscribe(data) {
			this.form.inert = true;
			this.button.textContent = 'Loading...';

			await delay(1000);

			this.form.remove();

			const node = this.render(data.get('email'));

			this.append(node);
		}

		render(email) {
			const clone = this.template.content.cloneNode(true);

			clone.querySelector('.user').textContent = email;

			return clone;
		}
	}
);
