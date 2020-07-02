import { writable } from 'svelte/store'

const codeups = writable([
  {
    id: "m1",
    title: "Hello!",
    subtitle: "Learn to code quickly",
    description:
      "Because time is money, you will need to learn to be reaaaally efficiency",
    imageUrl:
      "https://th.bing.com/th/id/OIP.6KmniewXDmmYxJRysPRDvAHaI6?pid=Api&w=149.4809688581315&h=180&c=7&dpr=1,3",
    address: "0001 CodeJS Road, MIT",
    contactEmail: "max.academind@dev-svelte.info",
    isFavorite: false,
  },
  {
    id: "m2",
    title: "Pssst",
    subtitle: "Django is better",
    description:
      "If you seek a backend webdev framework, Django is really cool!",
    imageUrl:
      "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/3/formation-django.png",
    address: "Monty street",
    contactEmail: "unchained-development@outlook.us",
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
  toggleFavorite: (id) => {
    codeups.update(items => {
      const updatedCodeup = { ...items.find(el => el.id === id) }
      updatedCodeup.isFavorite = !updatedCodeup.isFavorite
      const codeupIndex = items.findIndex(el => el.id == id)
      const updatedCodeups = [...items]
      updatedCodeups[codeupIndex] = updatedCodeup
      return updatedCodeups
    }
    )
  }
}

export default customCodeupsStore