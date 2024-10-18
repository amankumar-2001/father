document.querySelectorAll("video").length > 0
  ? document.querySelectorAll("video").forEach((video) => {
      video.playbackRate = 16;
    })
  : console.log("No video elements found on this page.");

// setInterval(() => {
//   const skipButton = document.getElementById("skip-button:3");
//   console.log({ skipButton });
//   if (skipButton) {
//     skipButton.click();
//     console.log("Clicked the skip button.");
//   } else {
//     console.log("Skip button not found.");
//   }
// }, 1);
