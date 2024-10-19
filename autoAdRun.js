const videoAds = document.getElementsByClassName("video-ads");
const adModules = document.getElementsByClassName("ytp-ad-module");

const adsHaveChildren = (elements) => {
  return Array.from(elements).some((element) => element.children.length > 0);
};

if (
  (adsHaveChildren(videoAds) || adsHaveChildren(adModules)) &&
  document.querySelectorAll("video").length > 0
) {
  document.querySelectorAll("video").forEach((video) => {
    video.playbackRate = 16;
  });
} else if (document.querySelectorAll("video").length > 0) {
  document.querySelectorAll("video").forEach((video) => {
    video.playbackRate = 1;
  });
}
