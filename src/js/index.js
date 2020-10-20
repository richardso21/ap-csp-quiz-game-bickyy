import { quizQuestion } from "./quizQuestion";
import { DOMSelectors } from "./Dom";
console.log("connected");

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
        <h2 class= "qan" id="${item.number}">${item.number}. ${item.question}</h2>
       
        <h3 class= "answer">
          <input type="radio" name="${item.number}"  value="${item.choices.a}">
          <label for="${item.choices}">${item.choices.a}</label>
        </h3>
        <h3 class= "answer"> 
        <input type="radio" name="${item.number}"  value="${item.choices.b}">
        <label for="${item.choices}">${item.choices.b}</label>
        </h3>
        <h3 class= "answer">
        <input type="radio" name="${item.number}"  value="${item.choices.c}">
        <label for="${item.choices}">${item.choices.c}</label>
        </h3>
        `
    )
  );
  const quizResults = function () {
    var score = 0;

    quizQuestion.forEach((ques) => {
      const answerSelected = document.querySelector(
        `input[name="${ques.number}"]:checked`
      ).value;

      if (answerSelected === `${ques.correctAnswer}`) {
        score++;
        document.getElementById(`${ques.number}`).style.color = "green";
      } else {
        document.getElementById(`${ques.number}`).style.color = "red";
      }
      DOMSelectors.resultContainer.innerHTML = `<h1>You got a ${score}/${quizQuestion.length}</h1>`;
    });
  };
  DOMSelectors.submitButton.addEventListener("click", quizResults);
};

init();
