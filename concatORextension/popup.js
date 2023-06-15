document.addEventListener("DOMContentLoaded", function () {
    var openDialogButton = document.getElementById("open-dialog");
    var dialogForm = document.getElementById("dialog-form");
    var inputText = document.getElementById("input-text");
  
    openDialogButton.addEventListener("click", function () {
      dialogForm.style.display = "block";
    });
  
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
  
      dialogForm.style.display = "none";
    });
  
    document.getElementById("cancel-button").addEventListener("click", function () {
      dialogForm.style.display = "none";
    });
  });
  
  
  