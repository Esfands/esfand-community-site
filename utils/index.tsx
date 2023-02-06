export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Takes in a video URL and parses out the video id and returns a thumbnail.
// If no ID found by regex, it gives the default thumbnail
export function getThumbnail(videoUrl: string) {
  const res = videoUrl.match(/v=([^&]+)/);

  const videoId = res ? res[1] : "unknown_image";

  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}
