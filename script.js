const container = document.querySelector(".container");
const advice_id = document.querySelector(".advice-id");
const advice_generator = document.querySelector(".advice-generator");
const renderNewAdviceBtn = document.querySelector(".icon-button");

let advice;

const adviceGeneratorDisplay = function (id, text) {
  advice_id.textContent = `ADVICE #${id}`;
  advice_generator.textContent = text;
};

const adviceGeneratorFunction = async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response)
      throw new Error(`Failed to show an advice ${response.status}`);

    const data = await response.json();
    console.log(data);

    const id = data.slip.id;
    const text = data.slip.advice;
    adviceGeneratorDisplay(id, text);
  } catch (err) {
    console.error(err);
  }
};

renderNewAdviceBtn.addEventListener("click", function () {
  adviceGeneratorFunction();
});
