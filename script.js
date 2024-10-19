// const toggleSwitch = document.getElementById("toggle-switch");

// function autoRunAndSkipScripts() {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tabs[0].id },
//       files: ["autoAdRun.js", "skipScript.js"],
//     });
//   });
// }

function autoWalkScripts() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["walkScript.js"],
    });
  });
}

// window.addEventListener("DOMContentLoaded", () => {
//   const savedState = localStorage.getItem("auto-ad-run-toggle-state");
//   if (savedState === "on") {
//     toggleSwitch.checked = true;
//     autoAdRunScripts();
//   } else {
//     toggleSwitch.checked = false;
//     autoWalkScripts();
//   }
// });

// toggleSwitch.addEventListener("change", () => {
//   if (toggleSwitch.checked) {
//     localStorage.setItem("auto-ad-run-toggle-state", "on");
//     autoRunAndSkipScripts();
//   } else {
//     localStorage.setItem("auto-ad-run-toggle-state", "off");
//     autoWalkScripts();
//   }
// });

document.getElementById("run-fast-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["runFastScript.js"],
    });
  });
});

document.getElementById("walk-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["walkScript.js"],
    });
  });
});
