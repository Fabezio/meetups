import { writable } from 'svelte/store'

const codeups = writable([
  {
    id: "c1",
    title: "Hello!",
    subtitle: "Learn to code quickly",
    description:
      "Because time is money, you will need to learn to be reaaaally efficiency",
    imageUrl:
      "svelte-wp.webp",
    address: "0001 CodeJS Road, MIT",
    contactEmail: "max.academind@dev-svelte.info",
    isFavorite: true,
  },
  {
    id: "c2",
    title: "Pssst",
    subtitle: "Django is better",
    description:
      "If you seek a backend webdev framework, Django is really cool!",
    imageUrl:
      "django-wp.png",
    address: "Monty street",
    contactEmail: "unchained-development@outlook.us",
    isFavorite: false,
  },
  {
    id: "c3",
    title: "Angular",
    subtitle: "A powerful framework",
    description:
      "Not so heavy, almost a giant one",
    imageUrl:
      "https://miro.medium.com/max/1400/1*ATk4P87sYInOVxABACMn3Q.jpeg",
    address: "Typescript Avenue",
    contactEmail: "simon@angularjs.info",
    isFavorite: false,
  },
])

const customCodeupsStore = {
  subscribe: codeups.subscribe,
  addCodeup: codeupData => {
    const newCodeup = {
      ...codeupData,
      id: Math.random().toString,
      isFavorite: false
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