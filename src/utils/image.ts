export const getImageUrl = (src: string): string => {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  const cleanPath = src.startsWith('/') ? src.slice(1) : src;
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};
