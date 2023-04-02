const container = document.querySelector(".container");
const renderNewAdviceBtn = document.querySelector(".icon-button");

let advice;

const adviceGeneratorDisplay = function (data) {
  container.innerHTML = "";
  advice = `
    <div class="container">
      <p class = "advice-id">ADVICE #${data.id}</p>
      <p class="advice-generator">${data.advice}</p>  
      <img class = "divider" src="images/pattern-divider-desktop.svg" alt="" class="divider">
    </div>
    `;
  container.insertAdjacentHTML("beforeend", advice);
};

const adviceGeneratorFunction = async function () {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);

    if (!response)
      throw new Error(`Failed to show an advice ${response.status}`);

    const data = await response.json();
    console.log(data);

    adviceGeneratorDisplay(data.slip);
  } catch (err) {
    console.error(err);
  }
};

renderNewAdviceBtn.addEventListener("click", function () {
  adviceGeneratorFunction();
});
