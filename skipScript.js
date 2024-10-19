const skipButtons = document.getElementsByClassName("ytp-skip-ad-button");

if (skipButtons && skipButtons.length > 0) {
  skipButtons[0].click();
} else {
  console.log("No skip button found.");
}
