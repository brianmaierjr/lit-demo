import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyButton extends LitElement {
    static styles: import("lit").CSSResult;
    intent: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
//# sourceMappingURL=my-button.d.ts.map