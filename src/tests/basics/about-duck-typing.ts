class Pigeon {
  sound: string = "coos";
}

class Owl {
  sound: string = "hoots";
}

class Penguin {
  sound: string = "peeps";
  swim() {
    console.log("I'm a bird and I can swim");
  }
}

const pigeon: Pigeon = new Owl(); // Fonctionne
const owl: Owl = new Pigeon(); // Fonctionne
const pigeon2: Pigeon = new Penguin(); // Fonctionne
const penguin: Penguin = new Pigeon(); // Erreur de compilation
