export function withBase(path) {
  if (!path) return path;
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function youtubeEmbedUrl(url) {
  const id = url.split("/").pop();
  return `https://www.youtube-nocookie.com/embed/${id}`;
}
