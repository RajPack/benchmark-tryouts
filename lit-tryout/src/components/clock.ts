import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("lit-clock")
export class Clock extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .clock {
        background-color: midnightblue;
        color: #ffffff;
        padding: 10px;
        width: 100px;
        border-radius: 4px;
      }
    `,
  ];
  @state() private time = new Date();
  private formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  connectedCallback(): void {
    super.connectedCallback();
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  render() {
    return html` <div class="clock">${this.formatter.format(this.time)}</div> `;
  }
}
