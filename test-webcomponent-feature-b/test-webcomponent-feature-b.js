import 'test-webcomponent/test-webcomponent.js';

class TestWebcomponentFeatureB extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>Feature B</h1>
      <test-webcomponent></test-webcomponent>
    `;
  }
}

customElements.define('test-webcomponent-feature-b', TestWebcomponentFeatureB);
