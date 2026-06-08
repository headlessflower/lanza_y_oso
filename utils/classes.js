import classOfferings from '../data/classes.js'

export const classes = classOfferings

export function getClassBySlug(slug) {
  return classes.find((offering) => offering.slug === slug)
}
