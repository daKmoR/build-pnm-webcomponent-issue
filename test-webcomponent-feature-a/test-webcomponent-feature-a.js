import 'test-webcomponent/test-webcomponent.js';

class TestWebcomponentFeatureA extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>Feature A</h1>
      <test-webcomponent></test-webcomponent>
    `;
  }
}

customElements.define('test-webcomponent-feature-a', TestWebcomponentFeatureA);
