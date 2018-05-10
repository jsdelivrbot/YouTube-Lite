# General Description
I followed Stephen Grider's Redux and React tutorial series. This code is the result from the first major section of the course. I did modify some CSS and made my YT API key in a separate ignored file.

Search YouTube after 300ms passes from your last keystroke. Display 5 results and select which one you want to play.

# Creating key.js
Create key.js file in src directory and use the code below in the file, replacing 'YourCrazyAPIKeyHere' with your Youtube Data v3 API key. https://console.developers.google.com should get you in the right direction.

```js
module.exports = {
  YT: 'YourCrazyAPIKeyHere'
};
```



