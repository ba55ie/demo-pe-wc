// 🦜 import styles from './word-count.css' assert { type: 'css' };

customElements.define(
	'word-count',
	class WordCount extends HTMLElement {
		/**
		 * The average reader can read 238 words per minute (WPM) while reading silently.
		 * When reading aloud, the average reader can read 183 words per minute (WPM).
		 */
		static WPM = 238;

		#words;

		get words() {
			this.#words ??= this.innerText
				.replaceAll('\n', ' ')
				.split(' ')
				.filter(Boolean);

			return this.#words;
		}

		get showReadTime() {
			return this.hasAttribute('read-time');
		}

		get readTime() {
			return Math.ceil(this.words.length / WordCount.WPM);
		}

		connectedCallback() {
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
				`<span class="word-count">${this.words.length} words to read ${
					this.showReadTime ? `in ${this.readTime} minutes` : ''
				}</span>`
			);
		}
	}
);
