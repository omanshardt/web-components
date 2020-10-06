customElements.define('uic-colorcube', class extends HTMLElement {
    constructor() {
        super();
        console.log('constructor');
    }

    connectedCallback() {
        console.log('connectedCallback');
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<p>ColorCube</p>`;
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

    adoptedCallback() {
        console.log('adoptedCallback');
    }

    attributeChangedCallback(attributeName, oldValue, newValue) {
        console.log('attributeChangedCallback');
    }

    static get observedAttributes() {
        return ['rotatable'];
    }
});