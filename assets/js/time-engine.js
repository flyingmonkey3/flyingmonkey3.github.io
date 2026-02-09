const dayEl=document.getElementById("day");
const dateEl=document.getElementById("date");
const timeEl=document.getElementById("time");

function tick(){
  const now=new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"});
  const d=new Date(now);

  const days=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
  dayEl.textContent=days[d.getDay()];
  dateEl.textContent=d.toDateString().toUpperCase();

  const h=String(d.getHours()).padStart(2,"0");
  const m=String(d.getMinutes()).padStart(2,"0");
  timeEl.textContent=`${h}:${m}`;
}
tick();
setInterval(tick,1000);
