const container = document.querySelector(".container");
const renderNewAdviceBtn = document.querySelector(".icon-button");

let advice;

const adviceGeneratorDisplay = function (data) {
  advice = `
    <div class="container">
      <p class = "advice-id">ADVICE #${data.id}</p>
      <p class="advice-generator">${data.advice}</p>  
      <svg class = "divider" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
    </div>
    `;
  container.innerHTML = "";
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
