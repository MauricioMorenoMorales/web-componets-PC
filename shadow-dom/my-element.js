class myElement extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}
	getTemplate() {
		const template = document.createElement('template')
		template.innerHTML = `
			<section>
				<h2 class="title">Hola mundo!</h2>
				<div>
					<p>Soy un texto de ejemplo</p>
				</div>
			</section>
			${this.getStyles()}
		`
		return template
	}
	getStyles() {
		return `
			<style>
				.title{
					color: red;
				}
			</style>
		`
	}
	render() {
		//Se hace referencia a el shadow dom
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
	}
	connectedCallback() {
		this.render()
	}
}
// Tiene que estar escrito con kebab kase el primer parametro
customElements.define('my-element', myElement)
