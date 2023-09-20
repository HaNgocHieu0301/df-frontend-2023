(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const c of r.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && a(c);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function o(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = o(n);
    fetch(n.href, r);
  }
})();
const v = [
    {
      bookId: 0,
      name: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author:
        "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides, Grady Booch (Foreword)",
      topic: "Design patterns",
    },
    {
      bookId: 1,
      name: "The Pragmatic Programmer: From Journeyman to Master",
      author: "Andrew Hunt, David Thomas",
      topic: "Computer programming",
    },
    {
      bookId: 2,
      name: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert Cecil Martin",
      topic: "Software design",
    },
    {
      bookId: 3,
      name: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      topic: "Coding interview",
    },
    {
      bookId: 4,
      name: "Refactoring: Improving the Design of Existing Code",
      author: "Martin Fowler",
      topic: "Code refactoring",
    },
  ],
  i = document.querySelector("main"),
  k = document.querySelector("tbody"),
  f = document.querySelector(".search-input"),
  u = document.querySelector(".pagination-container"),
  I = document.getElementById("pagination-numbers"),
  m = document.querySelector("footer"),
  y = document.getElementById("next-button"),
  h = document.getElementById("prev-button"),
  d = 4;
let S,
  s = 1;
i.addEventListener("click", (e) => {
  e.target.id === "add-button"
    ? (J(), q())
    : e.target.className === "delete-button"
    ? w(e.target)
    : e.target.className === "search-input" && (S = setTimeout(P, 500)),
    D(e.target);
});
function L(e, t) {
  for (let o = e; o <= t; o++) E(o);
}
function E(e) {
  const t = document.createElement("button");
  (t.className = "pagination-number"),
    (t.innerHTML = e),
    t.setAttribute("page-index", e),
    I.appendChild(t);
}
function B() {
  document.querySelectorAll(".pagination-number").forEach((e) => {
    e.classList.remove("active"),
      Number(e.getAttribute("page-index")) == s && e.classList.add("active");
  });
}
function C() {
  const e = JSON.parse(localStorage.getItem("books")),
    t = Math.ceil(e.length / d),
    o = (n) => {
      n.classList.add("disabled"), n.setAttribute("disabled", !0);
    },
    a = (n) => {
      n.classList.remove("disabled"), n.removeAttribute("disabled");
    };
  s === 1 ? o(h) : a(h), t === s ? o(y) : a(y);
}
function N() {
  document.querySelectorAll(".pagination-number").forEach((e) => {
    const t = Number(e.getAttribute("page-index"));
    t &&
      e.addEventListener("click", () => {
        const o = JSON.parse(localStorage.getItem("books"));
        l(t, o);
      });
  });
}
function l(e, t) {
  (s = e), B(), C();
  const o = (e - 1) * d,
    a = e * d,
    n = t.slice(o, a);
  M(n);
}
function O() {
  let e = JSON.parse(localStorage.getItem("books"));
  e ||
    (localStorage.setItem("books", JSON.stringify(v)),
    (e = JSON.parse(localStorage.getItem("books"))));
  const t = Math.ceil(e.length / d);
  L(s, t),
    l(s, e),
    h.addEventListener("click", () => {
      const o = JSON.parse(localStorage.getItem("books"));
      l(s - 1, o);
    }),
    y.addEventListener("click", () => {
      const o = JSON.parse(localStorage.getItem("books"));
      l(s + 1, o);
    }),
    N();
}
function M(e) {
  const t = e || JSON.parse(localStorage.getItem("books"));
  (k.innerHTML = ""),
    t.forEach((o) => {
      const a = document.createElement("tr");
      (a.innerHTML = `
            <td>${o.name}</td>
            <td>${o.author}</td>
            <td>${o.topic}</td>
            <td class="delete-button" data-id="${o.bookId}">Delete</td>
        `),
        k.appendChild(a);
    });
}
function q() {
  v.map((t) => t.topic).forEach((t) => {
    const o = document.createElement("option");
    (o.value = t),
      (o.text = t),
      document.querySelector("select").appendChild(o);
  });
}
function A(e) {
  document.body.appendChild(e),
    (i.style.opacity = "0.4"),
    (i.style.filter = "blur(5px)"),
    i.classList.add("disabled"),
    (u.style.opacity = "0.4"),
    (u.style.filter = "blur(5px)"),
    u.classList.add("disabled"),
    (m.style.opacity = "0.4"),
    (m.style.filter = "blur(5px)"),
    m.classList.add("disabled"),
    (document.body.style.cursor = "default");
}
function J() {
  const e = document.createElement("div");
  (e.className = "modal"),
    (e.innerHTML = `
        <div class="modal-top">
            <h2><span>Add</span> Book</h2>
            <img class="close-icon" src="/close-icon.svg">
        </div>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name">
            <label for="author">Author</label>
            <input type="text" id="author" name="author">
            <label for="topic">Topic</label>
            <select id="topic" name="topic">
            </select>
            <button class="button">Create</button>
        </form>    
    `),
    A(e);
}
function w(e) {
  const o = JSON.parse(localStorage.getItem("books")).find((n) => {
      if (n.bookId === parseInt(e.dataset.id)) return n;
    }),
    a = document.createElement("div");
  (a.className = "modal modal__delete"),
    (a.innerHTML = `
        <div class="modal-top">
            <h2><span>Delete</span> Book</h2>
            <img class="close-icon" src="/close-icon.svg">
        </div>
        <h3>Do you want to delete <br><strong>${o.name}?</strong></h3>
        <div class="modal-buttons">
            <button class="secondary-button">Delete</button>
            <button class="button">Cancel</button> 
        </div>   
    `),
    A(a);
}
function P() {
  const e = JSON.parse(localStorage.getItem("books"));
  clearTimeout(S),
    (S = setTimeout(() => {
      f.addEventListener("input", () => {
        const t = e.filter((o) => {
          const a = o.name.toLowerCase().trim(),
            n = f.value.toLowerCase().trim();
          if (a.includes(n)) return o;
        });
        t && l(1, t);
      });
    }));
}
function x(e) {
  const t = JSON.parse(localStorage.getItem("books")),
    o = Math.ceil(t.length / d),
    a = t.filter((c) => c.bookId !== parseInt(e.dataset.id));
  localStorage.setItem("books", JSON.stringify(a)), b(), (f.value = "");
  const n = JSON.parse(localStorage.getItem("books")),
    r = Math.ceil(n.length / d);
  if (r < o) {
    const g = Array.from(document.querySelectorAll(".pagination-number")).find(
      (p) => {
        if (Number(p.getAttribute("page-index")) === o) return p;
      }
    );
    I.removeChild(g);
  }
  l(r, n);
}
function b() {
  document.querySelector(".modal").remove(),
    (i.style.opacity = "1"),
    (i.style.filter = "none"),
    i.classList.remove("disabled"),
    (u.style.opacity = "1"),
    (u.style.filter = "none"),
    u.classList.remove("disabled"),
    (m.style.opacity = "1"),
    (m.style.filter = "none"),
    m.classList.remove("disabled");
}
function T(e) {
  e.preventDefault();
  const t = document.querySelector(".modal"),
    o = t.querySelector("#name"),
    a = t.querySelector("#author"),
    n = t.querySelector("#topic"),
    r = JSON.parse(localStorage.getItem("books")),
    c = {
      bookId: Math.floor(Math.random() * 300 + r.length),
      name: o.value,
      author: a.value,
      topic: n.value,
    };
  r.push(c), localStorage.setItem("books", JSON.stringify(r)), b();
  const g = JSON.parse(localStorage.getItem("books")),
    p = Math.ceil(g.length / d);
  p > s && (L(s + 1, p), N()), l(s, g);
}
function D(e) {
  const t = document.querySelector(".modal .close-icon");
  t && t.addEventListener("click", b),
    e.id === "add-button"
      ? document.querySelector(".modal").addEventListener("submit", T)
      : e.className === "delete-button" &&
        (document
          .querySelector(".modal__delete .secondary-button")
          .addEventListener("click", () => x(e)),
        document
          .querySelector(".modal__delete .button")
          .addEventListener("click", b));
}
O();
