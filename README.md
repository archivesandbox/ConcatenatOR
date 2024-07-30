# ConcatenatOR
### Description

This simple Chrome extension takes a column of strings, adds the boolean operator " OR " between them and copies the resulting string to the clipboard.
The string can then be pasted into the search bar in ArchivesSpace (or any other interface that uses Boolean operators) to isolate a group of titles, identifiers, or other criteria. 

### Installation

- Download the entire ConcatonatOR folder containing the extension files and move it to your location of choice.
- Go to chrome://extensions/ in Chrome, or select "Manage Extensions" from the menu.
- Click the button in the upper right to enable "Developer Mode" and then click the button on the upper left titled "Load unpacked." 
- Select the downloaded ConcatonatOR folder
- The extension interface can be accessed in the drop down menu of the puzzle shaped extensions icon to the right of the browser's search bar.

### Use
- Select and copy a group of search strings that are separated by line breaks/they each occupy a row in a column of a table
      Example:
      5489

      1274

      13902

      10006
  Result: 5489 OR 1274 OR 13902 OR 10006
  - Alternately, the strings can be typed directly into the text input box of the extension
- Open the extension, paste the search strings into the text input box and click COPY
  - The new concatonated string will then be copied to the clipboard
- Navigate to an ArchivesSpace search bar and use command/control V to paste the new string into it.

