var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyButton = class MyButton extends LitElement {
    constructor() {
        super(...arguments);
        this.intent = 'primary';
    }
    render() {
        return html `
      <button class=${this.intent}>
        <slot>Default Slot Content</slot>
      </button>
    `;
    }
};
MyButton.styles = css `
    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
    }
    button.primary {
      background-color: blue;
      color: white;
    }
    button.secondary {
      background-color: gray;
      color: white;
    }
    button.success {
      background-color: green;
      color: white;
    }
    button.danger {
      background-color: red;
      color: white;
    }
  `;
__decorate([
    property()
], MyButton.prototype, "intent", void 0);
MyButton = __decorate([
    customElement('my-button')
], MyButton);
export { MyButton };
//# sourceMappingURL=my-button.js.map