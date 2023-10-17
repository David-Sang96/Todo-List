"use strict";

const userInput = document.querySelector("#text");
const submitBtn = document.querySelector("#submit");
const ul = document.querySelector(".list-items");
const chooseBtn = document.querySelector("#todo");
const select = document.querySelector(".select");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = userInput.value;
  if (inputValue === "") {
    return;
  } else {
    // * create div
    const div = document.createElement("div");
    div.classList.add("list-box");
    // *create li
    const li = document.createElement("li");
    li.innerText = inputValue;
    div.appendChild(li);
    // * check  button
    const checkBtn = document.createElement("button");
    checkBtn.setAttribute("title", "mark");
    checkBtn.classList.add("check");
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    div.appendChild(checkBtn);
    // * trash button
    const trashBin = document.createElement("button");
    trashBin.setAttribute("title", "delete");
    trashBin.classList.add("trash");
    trashBin.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`;
    div.appendChild(trashBin);
    ul.appendChild(div);
    // * check button
    checkBtn.addEventListener("click", (e) => {
      e.preventDefault();
      li.parentElement.classList.toggle("cross");
    });
    // * delete button
    trashBin.addEventListener("click", (e) => {
      e.preventDefault();
      li.parentElement.classList.add("delete");
      li.parentElement.addEventListener("transitionend", () => {
        li.parentElement.remove();
      });
    });
  }
  userInput.value = "";
});

// * select check and uncheck button
chooseBtn.addEventListener("click", (e) => {
  const btn = ul.childNodes;
  btn.forEach((list) => {
    switch (e.target.value) {
      case "all":
        list.style.display = "flex";
        break;
      case "checked":
        if (list.classList.contains("cross")) {
          list.style.display = "flex";
        } else {
          list.style.display = "none";
        }
        break;
      case "deleted":
        if (!list.classList.contains("cross")) {
          list.style.display = "flex";
        } else {
          list.style.display = "none";
        }
        break;
    }
  });
});
