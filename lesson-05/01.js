/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    
    if(resource === 'gold') {
      this.resources.gold = this.resources.gold + amount
      return this.resources.gold
    } if(resource === 'lumber'){
      this.resources.lumber = this.resources.lumber + amount
      return this.resources.lumber
      } else {
        console.log("Invalid resource");
        return "Invalid resource"
      }
    }
  }

// console.log(game.addResource('goldff', 50));