// 🦜 import styles from './word-count.css' assert { type: 'css' };

customElements.define(
	'word-count',
	class extends HTMLElement {
		/**
		 * The average reader can read 238 words per minute (WPM) while reading silently.
		 * When reading aloud, the average reader can read 183 words per minute (WPM).
		 */
		WPM = 238;

		get showReadTime() {
			return this.hasAttribute('read-time');
		}

		connectedCallback() {
			const words = this.innerText
				.replaceAll('\n', ' ')
				.split(' ')
				.filter(Boolean);

			const sheet = new CSSStyleSheet();

			sheet.replaceSync(`
				.word-count {
					display: inline-block;
					margin: 1rem 0 0;
					padding: 0.25rem 0.5rem;

					color: #fff;
					background: hotpink;
					border-radius: 3px;
				}
			`);

			document.adoptedStyleSheets.push(sheet);

			this.insertAdjacentHTML(
				'afterbegin',
				`<span class="word-count">${words.length} words to read ${
					this.showReadTime
						? `in ${Math.floor(words.length / this.WPM)} minutes`
						: ''
				}</span>`
			);
		}
	}
);
