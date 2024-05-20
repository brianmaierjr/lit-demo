import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-button')
export class MyButton extends LitElement {
  static override styles = css`
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

  @property()
  intent: string = 'primary';

  override render() {
    return html`
      <button class=${this.intent}>
        <slot>Default Slot Content</slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
