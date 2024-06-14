const fliable = {
  fly() {
    return `${this.name} flies`
  },
}

const landable = {
  land() {
    return `${this.name}, the ${this.species} flies`
  }
}

class Animal {
  constructor(name, species) {
    this.name = name
    this.species = species
  }
  greet() {
    return `${this.name} say s hi.`
  }
}
// Animal class에 넣으면, 날지 못하는 동물도 fly(), land를 가진다.
// Child class를 만들 수 있지만, 다중상속이 불가한 JS에서 요긴하다.

const bernie = new Animal("Berine", "Pelican")
console.log('bernie: ', bernie);

const flyingBernie = Object.assign(bernie, fliable)
console.log('flyingBernie: ', flyingBernie);

// 여러개도 가능하다
// Object.assign으로는 mixin의 prop, method들은 객체의 prop으로 바로 들어간다
const flyingLandingBernie = Object.assign(bernie, fliable, landable)
console.log('flyingLandingBernie: ', flyingLandingBernie);

// prototype으로 넣어주고 싶을 때는
const protoBernie = new Animal("Berine", "Pelican")
function applyMixins(targetClass, mixins) {
  mixins.forEach(mixin => {
    Object.keys(mixin).forEach(key => {
      targetClass.__proto__.key = mixin[key];
    });
  });
}
applyMixins(protoBernie, [fliable, landable]);
console.log('protoBernie: ', protoBernie);

// Class-based Mixin
// getter, setter, #private, #private method, contructor 모두 사용 가능
const Canfly = Base => class extends Base {
  fly() {
    return `${this.name} flies`
  }
  get hasWings() {
    return true
  }
}

const CanSwim = Base => class extends Base {
  swim() {
    console.log(`${this.name} is swimming!`);
  }
  get hasGills() {
    return true
  }
}

class FlySwimAnimal extends Canfly(CanSwim(Animal)) { }
const wtf = new FlySwimAnimal("Duck")
console.log(wtf.swim())
console.log(wtf.fly())