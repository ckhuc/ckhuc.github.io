let selectedDateOption = "";

function showDateTime(choice) {
  selectedDateOption = choice;

  document.getElementById("dateTimeSection").classList.remove("hidden");

  document.getElementById("chosenDateText").textContent =
    "You picked " + choice + " — now choose a day and time 😊";

  document.getElementById("finalResult").textContent = "";
}

function showFinalAnswer() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const finalResult = document.getElementById("finalResult");

  if (date === "" || time === "") {
    finalResult.textContent = "Pick both a day and time first 😭";
    return;
  }

  finalResult.textContent =
    "Perfect. You picked " + selectedDateOption + " on " + date + " at " + time + " 💕 Screenshot this and send it to me.";
}
