document.querySelectorAll("video").length > 0
  ? document.querySelectorAll("video").forEach((video) => {
      video.playbackRate = 16;
    })
  : console.log("No video elements found on this page.");

