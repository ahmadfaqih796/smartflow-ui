export const capitalizeFirstLetter = (string: string) => {
   const formatted = string.replace(/-/g, ' ');
   return formatted.charAt(0).toUpperCase() + formatted.slice(1);
 }