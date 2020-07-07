import { writable } from 'svelte/store'

const codeups = writable([])

const customCodeupsStore = {
  subscribe: codeups.subscribe,
  setCodeups: codeupArray => {
    codeups.set(codeupArray)
  },
  addCodeup: codeupData => {
    const newCodeup = {
      ...codeupData
      // id: Math.random().toString
      // isFavorite: false
    }
    codeups.update(items => {
      return [newCodeup, ...items]
    })
  },
  toggleFavorite: id => {
    codeups.update(items => {
      const updatedCodeup = { ...items.find(el => el.id === id) }
      updatedCodeup.isFavorite = !updatedCodeup.isFavorite
      const codeupIndex = items.findIndex(el => el.id == id)
      const updatedCodeups = [...items]
      updatedCodeups[codeupIndex] = updatedCodeup
      return updatedCodeups
    })
  },
  removeCodeup: id => {
    codeups.update(items => {
      return items.filter(i => i.id !== id)
    })
  },
  updateCodeup: (id, codeupData) => {
    codeups.update(items => {
      const codeupIndex = items.findIndex(i => i.id === id)
      const updatedCodeup = { ...items[codeupIndex], ...codeupData }
      const updatedCodeups = [...items]
      updatedCodeups[codeupIndex] = updatedCodeup
      return updatedCodeups
    })
  }
}

export default customCodeupsStore