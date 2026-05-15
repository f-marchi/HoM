export function withBase(path) {
  if (!path) return path;
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function youtubeVideoId(url) {
  return new URL(url).pathname.split("/").filter(Boolean).pop();
}

export function youtubeThumbnailUrl(url) {
  return `https://i.ytimg.com/vi/${youtubeVideoId(url)}/hqdefault.jpg`;
}
