export default function isValidImageURL(url: string): boolean {
  if (typeof url !== 'string') return false;
  return !!url.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
}
