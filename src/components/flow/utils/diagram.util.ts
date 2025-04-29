export const getLabel = (value: string) => {
  const fullLabel = value || "";
  const labelMatch = fullLabel.match(/^(.*?)\((.*?)\)$/);

  const label = labelMatch ? labelMatch[1].trim() : fullLabel;
  const index = labelMatch ? labelMatch[2].trim() : "";

  return { label, index };
};
