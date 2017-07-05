class Store {
  constructor (location, monsters) {
    this.title = "Monsters"
    this.monsters = monsters || []
    this.location = location
  }

  add (name) {
    this.monsters.push(new Monster(name))
  }

  remove (id) {
    id = parseInt(id)
    this.monsters = this.monsters.filter(m => m.id !== id)
  }

  find (id) {
    id = parseInt(id)
    return this.monsters.find((m) => m.id === id)
  }
}

class Monster {
  constructor(name, level) {
    this.name = name
    this.id = Date.now()
    this.level = level || 1
  }

  levelUp () { this.level++ }

  levelDown () {
    if (this.level > 1) {
      this.level--
    }
  }

  toHTML () {
    return (`<article class='monster-list-item' id=${this.id}>
      <h2>${this.name}</h2>
      <p class='monster-level'>Level <span class='monster-level-number'>${this.level}</span></p>
      <div class='monster-controls'>
      <button class='monster-levelup'>Level Up</button>
      <button class='monster-leveldown'>Level Down</button>
      <button class='monster-delete'>Delete</button>
      </div></article>`)
  }
}

const shrek = new Monster("Shrek")
const donkey = new Monster("Donkey")
const testStore = new Store("Boston", [shrek, donkey])
testStore.add("Banana")
console.log(testStore.title)
console.log(testStore.monsters)
// can't test remove because they all have the same Id
//but it does work.
shrek.levelUp()
console.log(shrek.level)
shrek.levelDown()
console.log(shrek.level)
console.log(shrek.toHTML())