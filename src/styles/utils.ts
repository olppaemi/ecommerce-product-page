export const rem = (px: number, context = 16): string => `${px / context}rem`;

export const percent = (numerator: number, denominator: number) =>
  `${(numerator / denominator) * 100}%`;
