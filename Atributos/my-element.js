class myElement extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}
	//Agregamos el observador
	static get observedAttributes() {
		return ['title', 'parrafo', 'img']
	}
	//Agregamos el attribute changed callback que es quien controla el ciclo de vida
	attributeChangedCallback(atributo, oldValue, newValue) {
		if (atributo === 'title') {
			this.title = newValue
		}
		if (atributo === 'parrafo') {
			this.parrafo = newValue
		}
		if (atributo === 'img') {
			this.img = newValue
		}
	}
	getTemplate() {
		const template = document.createElement('template')
		template.innerHTML = `
			<section>
				<h2>${this.title}</h2>
				<div>
					<p>${this.parrafo}</p>
					<img src="${this.img}"></img>
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
		//Se hace referencia a el shadow dom
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
	}
	connectedCallback() {
		this.render()
	}
}
// Tiene que estar escrito con kebab kase el primer parametro
customElements.define('my-element', myElement)
