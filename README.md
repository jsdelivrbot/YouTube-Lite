# General Description
I followed Stephen Grider's Redux and React tutorial series. This code is the result from the first major section of the course. I did modify some CSS and made my YT API key in a separate ignored file.

When working the program searches YouTube after 300ms passes from your last keystroke. 5 results are displayed and  you can select which one you want to play. Make sure to create your own key.js file!

# Creating key.js
Create key.js file in src directory and use the code below in the file, replacing 'YourCrazyAPIKeyHere' with your Youtube Data v3 API key. https://console.developers.google.com should get you in the right direction if you need to create your API Key.

```js
module.exports = {
  YT: 'YourCrazyAPIKeyHere'
};
```



