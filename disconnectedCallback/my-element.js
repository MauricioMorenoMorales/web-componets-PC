class myCustomElement extends HTMLElement {
	constructor() {
		super()
		console.log('Hola desde el constructor - Memoria')
	}
	connectedCallback() {
		console.log('Hola desde el DOM')
	}
	disconnectedCallback() {
		console.log('Adios de el DOM')
	}
}

customElements.define('my-custom-element', myCustomElement)

document.querySelector('my-custom-element').remove()
