const FriendlyDragon = require('./classes/friendly-dragon')
const EvilDragon = require('./classes/evil-dragon')

const falkor = new FriendlyDragon(
  'falkor',
  'white',
  ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"],
  "Bastian",
)

const smaug = new EvilDragon(
  "Smaug",
  "black",
  ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"],
  "Dwarf King"
)


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
