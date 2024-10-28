// Your code here!

const player1 = {
  name: "Ryu",
  health: 50,
  attackSkill: "punch",
  attackDamage: 16,

  attack: function (opponent) {
    opponent.health -= this.attackDamage;
    if (opponent.health < 0) opponent.health = 0; // Ensure health doesn't go negative
    console.log(
      `${this.name} attacked ${opponent.name} with a ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${opponent.name}'s health is now ${opponent.health}.`
    );

    if (opponent.health === 0) {
      console.log(`${opponent.name} has been defeated!`);
    }
  },
};

const player2 = {
  name: "Ken",
  health: 40,
  attackSkill: "flying kick",
  attackDamage: 24,

  attack: function (opponent) {
    opponent.health -= this.attackDamage;
    if (opponent.health < 0) opponent.health = 0; // Ensure health doesn't go negative
    console.log(
      `${this.name} attacked ${opponent.name} with a ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${opponent.name}'s health is now ${opponent.health}.`
    );

    if (opponent.health === 0) {
      console.log(`${opponent.name} has been defeated!`);
    }
  },
};

// Test the attack functionality
player1.attack(player2); // Ryu attacked Ken with a punch, inflicting 16 damage. Ken's health is now 24.
player2.attack(player1); // Ken attacked Ryu with a flying kick, inflicting 24 damage. Ryu's health is now 26.
