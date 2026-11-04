"use strict";

const form = document.querySelector("#converter");
const temperatureInput = document.querySelector("#temperature");
const unitSelect = document.querySelector("#unit");
const errorMessage = document.querySelector("#error");
const status = document.querySelector("#status");
const output = {
  celsius: document.querySelector("#celsius"),
  fahrenheit: document.querySelector("#fahrenheit"),
  kelvin: document.querySelector("#kelvin"),
};

const ABSOLUTE_ZERO_C = -273.15;
const ABSOLUTE_ZERO_F = -459.67;
const ABSOLUTE_ZERO_K = 0;

function toCelsius(value, unit) {
  if (unit === "C") return value;
  if (unit === "F") return (value - 32) * 5 / 9;
  return value - 273.15;
}

function format(value) {
  return Number(value.toFixed(4)).toLocaleString(undefined, {
    maximumFractionDigits: 4,
  });
}

function clearResults() {
  Object.values(output).forEach((element) => {
    element.textContent = "—";
  });
}

function showError(message) {
  errorMessage.textContent = message;
  status.textContent = "Check input";
  clearResults();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessage.textContent = "";

  const rawValue = temperatureInput.value.trim();
  const value = Number(rawValue);
  const unit = unitSelect.value;

  if (rawValue === "" || !Number.isFinite(value)) {
    showError("Enter a valid numeric temperature.");
    temperatureInput.focus();
    return;
  }

  if ((unit === "C" && value < ABSOLUTE_ZERO_C) ||
      (unit === "F" && value < ABSOLUTE_ZERO_F) ||
      (unit === "K" && value < ABSOLUTE_ZERO_K)) {
    showError("That temperature is below absolute zero. Please enter a physically valid value.");
    temperatureInput.focus();
    return;
  }

  const celsius = toCelsius(value, unit);
  const fahrenheit = celsius * 9 / 5 + 32;
  const kelvin = celsius + 273.15;

  output.celsius.textContent = format(celsius);
  output.fahrenheit.textContent = format(fahrenheit);
  output.kelvin.textContent = format(kelvin);
  status.textContent = "Conversion complete";
});
