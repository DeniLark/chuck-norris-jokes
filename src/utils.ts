export const inflectionCategory = (
  titleCategory: string
): string => {
  if (titleCategory === "all") return "all categories"
  return `${titleCategory} category`
}
