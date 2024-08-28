import { createSignal } from "solid-js";
import { customElement } from 'solid-element';


export default function SolidClock() {
  const [time, setTime] = createSignal(new Date());
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  setInterval(() => {
    setTime(new Date())
  }, 1000)    
  return (
    <>
      <style>{`.clock{
        background-color: midnightblue;
        color: #ffffff;
        padding: 10px;
        width: 100px;
        border-radius: 4px;;
      }`}</style>
      <div class="clock">
            {formatter.format(time())}
    </div>
    </>
    
  )
  
}

customElement('solid-clock', {}, SolidClock);