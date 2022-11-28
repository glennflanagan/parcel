import "./styles.css";

const worker = new Worker(new URL("worker.js", import.meta.url), {
  type: "module",
});

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

worker.postMessage("Oi!");
