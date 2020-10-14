import { quizQuestion } from "./quizQuestion";
import { DOMSelectors } from "./Dom";

const init = function () {
  quizQuestion.forEach((item) =>
    DOMSelectors.quizContainer.insertAdjacentHTML(
      "beforeend",
      `
        <h4 class="item-image">
        <img
            class="item-image"
            src="${item.img}"
            alt=""
        />
        <h2 class= "qan">${item.number}. ${item.question}</h2>
       
        <h3 class= "answer">
          <input type="radio" id="${item.a}"name="${item.number}" value="${item.a}">
          ${item.a} 
        </h3>
        <h3 class= "answer"> 
        <input type="radio" id="${item.b}"name="${item.number}" value="${item.b}">
        ${item.b} 
        </h3>
        <h3 class= "answer">
        <input type="radio" id="${item.c}"name="${item.number}" value="${item.c}">
        ${item.c} 
        </h3>
        `
    )
  );
  const showResults = function () {
    var score = 0;
    quizQuestion.forEach((question) => {
      if (document.querySelector(`input[name="${question.number}"]:checked`)) {
        var radioValue = document.querySelector(
          `input[name="${question.number}"]:checked`
        ).value;
        if (radioValue == `${question.correct}`) {
          score++;
          document.getElementById(`${question.number}`).style.color = "green";
        } else if (radioValue != "Shawarma") {
          document.getElementById(`${question.number}`).style.color = "red";
        }
        DOMSelectors.resultContainer.innerHTML = `<h1>Your Score is ${score}/${quizQuestion.length}</h1>`;
      }
    });
  };
  DOMSelectors.submitButton.addEventListener("click", showResults);
};

init();