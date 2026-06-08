import furnitureData from '../data/furniture.js'

export function createFurnitureSlug(piece) {
  const titleSlug = piece.title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return `${titleSlug}-${piece.id}`
}

export const furniturePieces = furnitureData.map((piece) => ({
  ...piece,
  slug: createFurnitureSlug(piece),
  link: `/furniture/${createFurnitureSlug(piece)}`
}))

export function getFurnitureBySlug(slug) {
  return furniturePieces.find((piece) => piece.slug === slug)
}
