const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  // results.innerHTML = `${height}`;
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  // results.innerHTML = `${weight}`;
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // results.innerHTML = `<span>${bmi}</span>`;

    if (parseInt(bmi) < 18.6) {
      results.innerHTML = `<span>${bmi} you are under weight</span>`;
    } else if (18.6 > parseInt(bmi) > 24.9) {
      results.innerHTML = `<span>${bmi} you are Normal Range</span>`;
    } else if (parseInt(bmi) < 24.9) {
      results.innerHTML = `<span>${bmi} you are over weight`;
    }
  }
});
