document.addEventListener("DOMContentLoaded", function () {
  var dialogContainer = document.getElementById("dialog-container");
  var dialogForm = document.getElementById("dialog-form");
  var inputText = document.getElementById("input-text");

  dialogForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var inputTextValue = inputText.value.trim();
    var strings = inputTextValue.split("\n");
    var concatenatedString = strings.join(" OR ");

    navigator.clipboard
      .writeText(concatenatedString)
      .then(function () {
        console.log("Copied to clipboard: " + concatenatedString);
      })
      .catch(function (error) {
        console.error("Failed to copy to clipboard: ", error);
      });

    inputText.value = ''; // Clear the text area after submitting
  });

  document.getElementById("cancel-button").addEventListener("click", function () {
    inputText.value = ''; // Clear the text area when cancel is clicked
  });
});
