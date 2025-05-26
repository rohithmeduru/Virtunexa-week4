const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const formSteps = document.querySelectorAll(".form-step");
const progress = document.getElementById("progress");
const steps = document.querySelectorAll(".step");

let currentStep = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!validateInputs(formSteps[currentStep])) return;
    currentStep++;
    updateFormSteps();
    updateProgress();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStep--;
    updateFormSteps();
    updateProgress();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle("active", index === currentStep);
  });

  steps.forEach((step, index) => {
    step.classList.toggle("active", index <= currentStep);
  });
}

function updateProgress() {
  const stepPercent = (currentStep / (steps.length - 1)) * 100;
  progress.style.width = `${stepPercent}%`;
}

function validateInputs(stepElement) {
  const inputs = stepElement.querySelectorAll("input");
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Please fill all fields before proceeding.");
      return false;
    }
  }
  return true;
}

document.getElementById("multiStepForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});
