class myElement extends HTMLElement {
	constructor() {
		super()
	}
	getTemplate() {
		const template = document.createElement('template')
		template.innerHTML = `
			<section>
				<h2>Hola mundo!</h2>
				<div>
					<p>Hola mundo!</p>
				</div>
			</section>
			${this.getStyles()}
		`
		return template
	}
	getStyles() {
		return `
			<style>
				h2{
					color: red;
				}
			</style>
		`
	}
	render() {
		this.appendChild(this.getTemplate().content.cloneNode(true))
	}
	connectedCallback() {
		this.render()
	}
}
// Tiene que estar escrito con kebab kase el primer parametro
customElements.define('my-element', myElement)
