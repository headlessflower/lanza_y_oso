import homeArt from '../data/art-main.js'

export function createArtworkSlug(artwork) {
  const titleSlug = artwork.title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return `${titleSlug}-${artwork.id}`
}

export const artworks = homeArt.map((artwork) => ({
  ...artwork,
  slug: createArtworkSlug(artwork),
  link: `/art/${createArtworkSlug(artwork)}`
}))

export function getArtworkBySlug(slug) {
  return artworks.find((artwork) => artwork.slug === slug)
}
