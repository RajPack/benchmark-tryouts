import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import "./clock";

@customElement("app-main")
export class AppMain extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .container {
        text-align: center;
        display: flex;
        gap: 12px;
        padding: 12px;
        flex-wrap: wrap;
      }
    `,
  ];

  private count = new Array(1000).fill(0);

  render() {
    return html`
      <div class="container">
        ${repeat(this.count, (_c) => html` <lit-clock></lit-clock> `)}
      </div>
    `;
  }
}
