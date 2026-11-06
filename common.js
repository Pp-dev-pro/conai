"use strict";
/* Shared: navigation, footer, team cards, counters */
const TEAM = [
  { name: "Priyanshu Kumar", roll: "2024/C/02",    img: "images/member1.jpg" },
  { name: "Gaurav Kumar",    roll: "2024/C/301",   img: "images/member2.jpg" },
  { name: "Raushan Kumar",   roll: "2024/C/16",    img: "images/member3.jpg" },
  { name: "Pankaj Kumar",    roll: "2025/CL/6023", img: "images/pankaj.jpg" }
];
const PAGES = [["index.html", "Home"], ["predict.html", "Predict"], ["app.html", "Android App"], ["science.html", "Model &amp; Data"], ["dam.html", "Dam Case Study"]];
const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

document.body.insertAdjacentHTML("afterbegin", `<div class="grid-bg"></div>
<header class="nav"><a class="brand" href="index.html"><span class="dot"></span>CONCRETE<b>AI</b></a>
<button class="burger" id="burger" aria-label="Menu">☰</button>
<nav id="menu">${PAGES.map(p => `<a href="${p[0]}" class="${p[0] === here ? "on" : ""}">${p[1]}</a>`).join("")}</nav></header>`);
document.body.insertAdjacentHTML("beforeend", `<footer>
<div class="fl"><img src="images/logo-sbte.jpg" alt="SBTE Patna"><img src="images/logo-gp.jpg" alt="Government Polytechnic Sheikhpura"></div>
<p><b>ConcreteAI</b> · Comprehensive Analysis and Prediction of Concrete Characteristics Using Machine Learning: A Case Study of Dam Structures</p>
<p>Minor Project, 5th Semester Diploma in Civil Engineering · Government Polytechnic Sheikhpura · SBTE Patna</p>
<p>${TEAM.map(m => m.name + " (" + m.roll + ")").join(" · ")}</p>
<p>Supervisors: Mr. Prabhat Kumar, Mr. Pintu Kumar</p></footer>`);
document.getElementById("burger").addEventListener("click", () => document.getElementById("menu").classList.toggle("open"));

const tl = document.getElementById("team-list");
if (tl) tl.innerHTML = TEAM.map(m => `<div class="mem"><img src="${m.img}" alt="${m.name}" loading="lazy" onerror="this.style.visibility='hidden'"><h4>${m.name}</h4><p>Roll No: ${m.roll}</p><span>Diploma Civil Engineering</span></div>`).join("");

document.querySelectorAll("[data-n]").forEach(el => {
  const to = +el.dataset.n, d = +(el.dataset.d || 0), t0 = performance.now();
  (function s(now) { const p = Math.min((now - t0) / 1400, 1); el.textContent = (to * p).toFixed(d); if (p < 1) requestAnimationFrame(s); })(t0);
});
/* reveal on scroll */
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 });
  document.querySelectorAll(".panel,.fig,.cards article").forEach(el => { el.classList.add("rv"); io.observe(el); });
}
