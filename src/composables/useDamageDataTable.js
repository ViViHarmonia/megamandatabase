import { ref } from "vue";
export function useDamageDataTable() {
  const specialWeapons = ref([
    //base
    { code: "nullw", name: "None", icon: "/weapons/megabuster.png" }, //make null image
    { code: "mega", name: "Mega/Rock Buster", icon: "/weapons/megabuster.png" },
    {
      code: "bass",
      name: "Bass/Forte Buster",
      icon: "/weapons/bassbuster.png",
    },
    //MM1
    {
      code: "cutw",
      name: "Rolling Cutter",
      icon: "/weapons/rollingcutter.png",
    },
    { code: "elecw", name: "Thunder Beam", icon: "/weapons/thunderbeam.png" },
    { code: "icew", name: "Ice Slasher", icon: "/weapons/iceslasher.png" },
    { code: "bombw", name: "Hyper Bomb", icon: "/weapons/hyperbomb.png" },
    { code: "firew", name: "Fire Storm", icon: "/weapons/firestorm.png" },
    { code: "gutsw", name: "Super Arm", icon: "/weapons/megabuster.png" }, //put in super arm icon
    //MMPU
    { code: "timew", name: "Time Slow", icon: "/weapons/megabuster.png" },
    { code: "oilw", name: "Oil Slider", icon: "/weapons/megabuster.png" },

    //MM2
    { code: "metalw", name: "Metal Blade", icon: "/weapons/megabuster.png" },
    { code: "airw", name: "Air Shooter", icon: "/weapons/megabuster.png" },
    { code: "bubblew", name: "Bubble Lead", icon: "/weapons/megabuster.png" },
    {
      code: "quickw",
      name: "Quick Boomerang",
      icon: "/weapons/megabuster.png",
    },
    { code: "crashw", name: "Crash Bomber", icon: "/weapons/megabuster.png" },
    { code: "flashw", name: "Time Stopper", icon: "/weapons/megabuster.png" },
    { code: "heatw", name: "Atomic Fire", icon: "/weapons/megabuster.png" },
    { code: "woodw", name: "Leaf Shield", icon: "/weapons/megabuster.png" },
    //MM3
    { code: "needlew", name: "Needle Cannon", icon: "/weapons/megabuster.png" },
    {
      code: "magnetw",
      name: "Magnet Missile",
      icon: "/weapons/megabuster.png",
    },
    { code: "geminiw", name: "Gemini Laser", icon: "/weapons/megabuster.png" },
    { code: "hardw", name: "Hard Knuckle", icon: "/weapons/megabuster.png" },
    { code: "topw", name: "Top Spin", icon: "/weapons/megabuster.png" },
    { code: "snakew", name: "Search Snake", icon: "/weapons/megabuster.png" },
    { code: "sparkw", name: "Spark Shock", icon: "/weapons/megabuster.png" },
    { code: "shadoww", name: "Shadow Blade", icon: "/weapons/megabuster.png" },
    //MM4
    { code: "brightw", name: "Flash Stopper", icon: "/weapons/megabuster.png" },
    { code: "toadw", name: "Rain Flush", icon: "/weapons/megabuster.png" },
    { code: "drillw", name: "Drill Bomb", icon: "/weapons/megabuster.png" },
    {
      code: "pharaohw1",
      name: "Pharaoh Shot",
      icon: "/weapons/megabuster.png",
    },
    { code: "ringw", name: "Ring Boomerang", icon: "/weapons/megabuster.png" },
    { code: "dustw", name: "Dust Crusher", icon: "/weapons/megabuster.png" },
    { code: "divew", name: "Dive Missile", icon: "/weapons/megabuster.png" },
    { code: "skullw", name: "Skull Barrier", icon: "/weapons/megabuster.png" },
    //MM5
    { code: "gravityw", name: "Gravity Hold", icon: "/weapons/megabuster.png" },
    { code: "wavew", name: "Water Wave", icon: "/weapons/megabuster.png" },
    { code: "stonew", name: "Power Stone", icon: "/weapons/megabuster.png" },
    { code: "gyrow", name: "Gyro Attack", icon: "/weapons/megabuster.png" },
    { code: "starw", name: "Star Crash", icon: "/weapons/megabuster.png" },
    { code: "chargew", name: "Charge Kick", icon: "/weapons/megabuster.png" },
    { code: "napalmw", name: "Napalm Bomb", icon: "/weapons/megabuster.png" },
    { code: "crystalw", name: "Crystal Eye", icon: "/weapons/megabuster.png" },
    //MM6
    {
      code: "blizzardw",
      name: "Blizzard Attack",
      icon: "/weapons/megabuster.png",
    },
    {
      code: "centaurw1",
      name: "Centaur Flash",
      icon: "/weapons/megabuster.png",
    },
    { code: "flamew", name: "Flame Blast", icon: "/weapons/megabuster.png" },
    {
      code: "knightw",
      name: "Knight Crusher",
      icon: "/weapons/megabuster.png",
    },
    { code: "plantw", name: "Plant Barrier", icon: "/weapons/megabuster.png" },
    {
      code: "tomahawkw",
      name: "Silver Tomahawk",
      icon: "/weapons/megabuster.png",
    },
    { code: "windw", name: "Wind Storm", icon: "/weapons/megabuster.png" },
    { code: "yamatow", name: "Yamato Spear", icon: "/weapons/megabuster.png" },
    //MMI,II,III,IV
    { code: "enkerw", name: "Mirror Buster", icon: "/weapons/megabuster.png" },
    { code: "quintw", name: "Sakugarne", icon: "/weapons/megabuster.png" },
    { code: "punkw", name: "Screw Crusher", icon: "/weapons/megabuster.png" },
    {
      code: "balladew",
      name: "Ballade Cracker",
      icon: "/weapons/megabuster.png",
    },
    //MMV
    { code: "terraw", name: "Spark Chaser", icon: "/weapons/megabuster.png" },
    { code: "mercuryw", name: "Grab Buster", icon: "/weapons/megabuster.png" },
    { code: "venusw", name: "Bubble Bomb", icon: "/weapons/megabuster.png" },
    { code: "marsw", name: "Photon Missile", icon: "/weapons/megabuster.png" },
    {
      code: "jupiterw",
      name: "Electric Shock",
      icon: "/weapons/megabuster.png",
    },
    { code: "saturnw", name: "Black Hole", icon: "/weapons/megabuster.png" },
    { code: "uranusw", name: "Deep Digger", icon: "/weapons/megabuster.png" },
    { code: "plutow", name: "Break Dash", icon: "/weapons/megabuster.png" },
    { code: "neptunew", name: "Salt Water", icon: "/weapons/megabuster.png" },
    //MMPOWER
    {
      code: "pharaohw2",
      name: "Pharaoh Wave",
      icon: "/weapons/megabuster.png",
    },
    {
      code: "centaurw2",
      name: "Centaur Arrow",
      icon: "/weapons/megabuster.png",
    },
    //MM7
    {
      code: "freezew",
      name: "Freeze Cracker",
      icon: "/weapons/megabuster.png",
    },
    { code: "junkw", name: "Junk Shield", icon: "/weapons/megabuster.png" },
    { code: "burstw", name: "Danger Wrap", icon: "/weapons/megabuster.png" },
    { code: "cloudw", name: "Thunder Bolt", icon: "/weapons/megabuster.png" },
    { code: "springw", name: "Wild Coil", icon: "/weapons/megabuster.png" },
    { code: "slashw", name: "Slash Claw", icon: "/weapons/megabuster.png" },
    { code: "shadew", name: "Noise Crush", icon: "/weapons/megabuster.png" },
    { code: "turbow", name: "Scorch Wheel", icon: "/weapons/megabuster.png" },
    //MM8
    { code: "tenguw1", name: "Tornado Hold", icon: "/weapons/tornadohold.png" },
    { code: "astrow1", name: "Astro Crush", icon: "/weapons/astrocrush.png" },
    { code: "swordw", name: "Flame Sword", icon: "/weapons/flamesword.png" },
    { code: "clownw", name: "Thunder Claw", icon: "/weapons/thunderclaw.png" },
    {
      code: "searchw",
      name: "Homing Sniper",
      icon: "/weapons/homingsniper.png",
    },
    { code: "frostw", name: "Ice Wave", icon: "/weapons/icewave.png" },
    { code: "grenadew", name: "Flash Bomb", icon: "/weapons/flashbomb.png" },
    { code: "aquaw", name: "Water Balloon", icon: "/weapons/waterballoon.png" },
    //MM&B1
    { code: "coldw", name: "Ice Wall", icon: "/weapons/icewall.png" },
    { code: "burnerw", name: "Wave Burner", icon: "/weapons/waveburner.png" },
    { code: "piratew", name: "Remote Mine", icon: "/weapons/remotemine.png" },
    { code: "groundw", name: "Spread Drill", icon: "/weapons/spreaddrill.png" },
    { code: "tenguw2", name: "Tengu Blade", icon: "/weapons/tengublade.png" },
    { code: "magicw", name: "Magic Card", icon: "/weapons/magiccard.png" },
    { code: "astrow2", name: "Copy Vision", icon: "/weapons/copyvision.png" },
    {
      code: "dynamow",
      name: "Lightning Bolt",
      icon: "/weapons/lightningbolt.png",
    },
    //MM&B2
    {
      code: "bulletw1",
      name: "Rock'n Vulcan",
      icon: "/weapons/megabuster.png",
    },
    { code: "bulletw2", name: "Forte Vulcan", icon: "/weapons/megabuster.png" },
    { code: "stovew1", name: "Flame Shower", icon: "/weapons/megabuster.png" },
    { code: "stovew2", name: "Flame Mixer", icon: "/weapons/megabuster.png" },
    { code: "fanw1", name: "Barrier Wind", icon: "/weapons/megabuster.png" },
    {
      code: "fanw2",
      name: "Forte Cyclone",
      icon: "/weapons/megabuster.png",
    },
    { code: "monkw1", name: "Doppel Crash", icon: "/weapons/megabuster.png" },
    { code: "monkw2", name: "Doppler Attack", icon: "/weapons/megabuster.png" },
    { code: "clockw1", name: "Time Switch", icon: "/weapons/megabuster.png" },
    { code: "clockw2", name: "Time Bomb", icon: "/weapons/megabuster.png" },
    //MM9
    {
      code: "concretew",
      name: "Concrete Shot",
      icon: "/weapons/megabuster.png",
    },
    { code: "tornadow", name: "Tornado Blow", icon: "/weapons/megabuster.png" },
    { code: "splashw", name: "Laser Trident", icon: "/weapons/megabuster.png" },
    { code: "plugw", name: "Plug Ball", icon: "/weapons/megabuster.png" },
    {
      code: "jewelw",
      name: "Jewel Satellite",
      icon: "/weapons/megabuster.png",
    },
    { code: "hornetw", name: "Hornet Chaser", icon: "/weapons/megabuster.png" },
    { code: "magmaw", name: "Magma Bazooka", icon: "/weapons/megabuster.png" },
    {
      code: "galaxyw",
      name: "Black Hole Bomb",
      icon: "/weapons/megabuster.png",
    },
    //MM10
    { code: "bladew", name: "Triple Blade", icon: "/weapons/megabuster.png" },
    { code: "pumpw", name: "Water Shield", icon: "/weapons/megabuster.png" },
    {
      code: "commandow",
      name: "Commando Bomb",
      icon: "/weapons/megabuster.png",
    },
    { code: "chillw", name: "Chill Spike", icon: "/weapons/megabuster.png" },
    { code: "sheepw", name: "Thunder Wool", icon: "/weapons/megabuster.png" },
    {
      code: "strikew",
      name: "Rebound Striker",
      icon: "/weapons/megabuster.png",
    },
    { code: "nitrow", name: "Wheel Cutter", icon: "/weapons/megabuster.png" },
    { code: "solarw", name: "Solar Blaze", icon: "/weapons/megabuster.png" },
    //MM11
    { code: "blockw", name: "Block Dropper", icon: "/weapons/megabuster.png" },
    {
      code: "fusew",
      name: "Scramble Thunder",
      icon: "/weapons/megabuster.png",
    },
    { code: "blastw", name: "Chain Blast", icon: "/weapons/megabuster.png" },
    { code: "acidw", name: "Acid Barrier", icon: "/weapons/megabuster.png" },
    { code: "tundraw", name: "Tundra Storm", icon: "/weapons/megabuster.png" },
    { code: "torchw", name: "Blazing Torch", icon: "/weapons/megabuster.png" },
    { code: "impactw", name: "Pile Driver", icon: "/weapons/megabuster.png" },
    { code: "bouncew", name: "Bounce Ball", icon: "/weapons/megabuster.png" },
    //MMDOS
    { code: "sonicw", name: "Sonic Wave", icon: "/weapons/megabuster.png" },
    { code: "voltw", name: "Force Field", icon: "/weapons/megabuster.png" },
    {
      code: "dynaw",
      name: "Nuclear Detonator",
      icon: "/weapons/megabuster.png",
    },
    //MMDOS3
    { code: "bitw", name: "Bit Cannon", icon: "/weapons/megabuster.png" },
    { code: "slicew", name: "Blade Launcher", icon: "/weapons/megabuster.png" },
    { code: "petrolw", name: "Oil Stream", icon: "/weapons/megabuster.png" },
    {
      code: "sharkw",
      name: "Shark Boomerang",
      icon: "/weapons/megabuster.png",
    },
    {
      code: "cascadew",
      name: "Water Shooter",
      icon: "/weapons/megabuster.png",
    },
    { code: "solderw", name: "Torch Arm", icon: "/weapons/megabuster.png" },
  ]);
  function damageDataTable2(robot, game, player, funct) {
    //funct 1 brings whole table. funct 2 just brings robot weakness
    var tempColumns;
    var tempRow;
    switch (game) {
      case "MM1":
        tempColumns = [
          {
            name: "buster",
            field: "buster",
            align: "start",
            sortable: false,
          },
          {
            name: "cutw",
            field: "cutw",
            align: "center",
            sortable: false,
          },
          {
            name: "gutsw",
            field: "gutsw",
            align: "center",
            sortable: false,
          },
          {
            name: "icew",
            field: "icew",
            align: "center",
            sortable: false,
          },
          {
            name: "bombw",
            field: "bombw",
            align: "center",
            sortable: false,
          },
          {
            name: "firew",
            field: "firew",
            align: "center",
            sortable: false,
          },
          {
            name: "elecw",
            field: "elecw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "cut":
            tempRow = {
              buster: 3,
              cutw: 1,
              gutsw: 14,
              icew: 0,
              bombw: 2,
              firew: 3,
              elecw: 1,
              weapon: "cutw",
              weakness: ["mega", "gutsw"],
            };
            break;
          case "guts":
            tempRow = {
              buster: 2,
              cutw: 1,
              gutsw: 1,
              icew: 0,
              bombw: 10,
              firew: 2,
              elecw: 1,
              weapon: "gutsw",
              weakness: ["mega", "bombw"],
            };
            break;
          case "ice":
            tempRow = {
              buster: 1,
              cutw: 2,
              gutsw: "X",
              icew: 0,
              bombw: 4,
              firew: 1,
              elecw: 10,
              weapon: "icew",
              weakness: ["elecw"],
            };
            break;
          case "bomb":
            tempRow = {
              buster: 2,
              cutw: 2,
              gutsw: "X",
              icew: 0,
              bombw: 1,
              firew: 4,
              elecw: 2,
              weapon: "bombw",
              weakness: ["mega", "firew"],
            };
            break;
          case "fire":
            tempRow = {
              buster: 2,
              cutw: 2,
              gutsw: "X",
              icew: 4,
              bombw: 1,
              firew: 1,
              elecw: 1,
              weapon: "firew",
              weakness: ["mega", "icew"],
            };
            break;
          case "elec":
            tempRow = {
              buster: 1,
              cutw: 10,
              gutsw: 4,
              icew: 0,
              bombw: 2,
              firew: 1,
              elecw: 1,
              weapon: "elecw",
              weakness: ["cutw"],
            };
            break;
        }
        break;
      case "MM2":
        break;
      case "MM3":
        break;
      case "MM4":
        break;
      case "MM5":
        break;
      case "MM6":
        break;
      case "MM7":
        break;
      case "MM8":
        tempColumns = [
          {
            name: "buster",
            field: "buster",
            align: "start",
            sortable: false,
          },
          {
            name: "tenguw1",
            field: "tenguw1",
            align: "center",
            sortable: false,
          },
          {
            name: "astrow1",
            field: "astrow1",
            align: "center",
            sortable: false,
          },
          {
            name: "swordw",
            field: "swordw",
            align: "center",
            sortable: false,
          },
          {
            name: "clownw",
            field: "clownw",
            align: "center",
            sortable: false,
          },
          {
            name: "searchw",
            field: "searchw",
            align: "center",
            sortable: false,
          },
          {
            name: "frostw",
            field: "frostw",
            align: "center",
            sortable: false,
          },
          {
            name: "grenadew",
            field: "grenadew",
            align: "center",
            sortable: false,
          },
          {
            name: "aquaw",
            field: "aquaw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "tengu":
            tempRow = {
              buster: "2:3:4",
              tenguw1: "2:1",
              astrow1: 0,
              swordw: 2,
              clownw: 1,
              searchw: 1,
              frostw: 6,
              grenadew: 1,
              aquaw: 1,
              weapon: "tenguw1",
              weakness: ["mega", "frostw"],
            };
            break;
          case "cut":
            tempRow = {
              buster: "2:3:4",
              tenguw1: "2:3",
              astrow1: 6,
              swordw: 4,
              clownw: 4,
              searchw: 3,
              frostw: 4,
              grenadew: 3,
              aquaw: 4,

              weapon: "NONE",
              weakness: ["mega", "astrow1"],
            };
            break;
        }
        break;
      case "MM9":
        break;
      case "MM10":
        break;
      case "MM11":
        break;
      case "MMI":
        break;
      case "MMII":
        break;
      case "MMIII":
        break;
      case "MMIV":
        break;
      case "MMV":
        break;
      case "MM&B1":
        tempColumns = [
          {
            name: "buster",
            field: "buster",
            align: "start",
            sortable: false,
          },
          {
            name: "coldew",
            field: "coldew",
            align: "center",
            sortable: false,
          },
          {
            name: "burnerw",
            field: "burnerw",
            align: "center",
            sortable: false,
          },
          {
            name: "piratew",
            field: "piratew",
            align: "center",
            sortable: false,
          },
          {
            name: "groundw",
            field: "groundw",
            align: "center",
            sortable: false,
          },
          {
            name: "tenguw2",
            field: "tenguw2",
            align: "center",
            sortable: false,
          },
          {
            name: "magicw",
            field: "magicw",
            align: "center",
            sortable: false,
          },
          {
            name: "astrow2",
            field: "astrow2",
            align: "center",
            sortable: false,
          },
          {
            name: "dynamow",
            field: "dynamow",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "tengu":
            tempRow = {
              megab: "1:3",
              bassb: "1:2",
              coldw: 1,
              burnerw: 1,
              piratew: 1,
              groundw: "6:4:3",
              tenguw2: "1:1:1",
              magicw: 1,
              astrow2: 1,
              dynamow: 1,
              weapon: "tenguw2",
              weakness: ["groundw"],
            };
            break;
        }
        switch (player) {
          case "mega":
            tempRow.buster = tempRow.megab;
            break;
          case "bass":
            tempRow.buster = tempRow.bassb;
            break;
        }
        break;
      case "MM&B2":
        break;
      case "MM1D":
        break;
      case "MM3D":
        break;
      case "MMP1":
        break;
      case "MMP2":
        break;
      case "MMPU":
        break;
    }
    var arrayWeaknesses = [];
    switch (funct) {
      case 1:
        wpnColumns.value = tempColumns;
        rbtRow.value = tempRow;
        break;
      case 2:
        if (tempRow.weakness[0] == "NONE") {
          arrayWeaknesses.push(specialWeapons.value[0]);
          return arrayWeaknesses;
        }
        for (var i = 0; i < tempRow.weakness.length; i++) {
          for (var j = 0; j < specialWeapons.value.length; j++) {
            if (specialWeapons.value[j].code == tempRow.weakness[i]) {
              arrayWeaknesses.push(specialWeapons.value[j]);
            }
          }
        }
        console.log(arrayWeaknesses);
        return arrayWeaknesses;
        break;
      case 3:
        if (tempRow.weapon == "NONE") {
          return specialWeapons.value[0];
        }
        for (var i = 0; i < specialWeapons.value.length; i++) {
          if (specialWeapons.value[i].code == tempRow.weapon) {
            return specialWeapons.value[i];
          }
        }
        break;
    }
  }

  return { damageDataTable2, specialWeapons };
}
