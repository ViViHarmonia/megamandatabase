import { ref } from "vue";
export function useDamageDataTable() {
  const specialWeapons = ref([
    //base
    { code: "nullw", name: "None", icon: "/weapons/base/none.png" },
    {
      code: "megaw",
      name: "Mega/Rock Buster",
      icon: "/weapons/base/megawuster.png",
    },
    {
      code: "bassw",
      name: "Bass/Forte Buster",
      icon: "/weapons/base/bassbuster.png",
    },
    //MM1
    {
      code: "cutw",
      name: "Rolling Cutter",
      icon: "/weapons/MM1.PU/rollingcutter.png",
    },
    {
      code: "elecw",
      name: "Thunder Beam",
      icon: "/weapons/MM1.PU/thunderbeam.png",
    },
    {
      code: "icew",
      name: "Ice Slasher",
      icon: "/weapons/MM1.PU/iceslasher.png",
    },
    {
      code: "bombw",
      name: "Hyper Bomb",
      icon: "/weapons/MM1.PU/hyperbomb.png",
    },
    {
      code: "firew",
      name: "Fire Storm",
      icon: "/weapons/MM1.PU/firestorm.png",
    },
    { code: "gutsw", name: "Super Arm", icon: "/weapons/MM1.PU/superarm.png" }, //put in super arm icon
    //MMPU
    { code: "timew", name: "Time Slow", icon: "/weapons/MM1.PU/timeslow.png" },
    { code: "oilw", name: "Oil Slider", icon: "/weapons/MM1.PU/oilslider.png" },

    //MM2
    {
      code: "metalw",
      name: "Metal Blade",
      icon: "/weapons/mm2/metalblade.png",
    },
    { code: "airw", name: "Air Shooter", icon: "/weapons/mm2/airshooter.png" },
    {
      code: "bubblew",
      name: "Bubble Lead",
      icon: "/weapons/mm2/bubblelead.png",
    },
    {
      code: "quickw",
      name: "Quick Boomerang",
      icon: "/weapons/mm2/quickboomerang.png",
    },
    {
      code: "crashw",
      name: "Crash Bomber",
      icon: "/weapons/mm2/crashbomber.png",
    },
    {
      code: "flashw",
      name: "Time Stopper",
      icon: "/weapons/mm2/timestopper.png",
    },
    { code: "heatw", name: "Atomic Fire", icon: "/weapons/mm2/atomicfire.png" },
    { code: "woodw", name: "Leaf Shield", icon: "/weapons/mm2/leafshield.png" },
    //MM3
    {
      code: "needlew",
      name: "Needle Cannon",
      icon: "/weapons/mm3/needlecannon.png",
    },
    {
      code: "magnetw",
      name: "Magnet Missile",
      icon: "/weapons/mm3/magnetmissile.png",
    },
    {
      code: "geminiw",
      name: "Gemini Laser",
      icon: "/weapons/mm3/geminilaser.png",
    },
    {
      code: "hardw",
      name: "Hard Knuckle",
      icon: "/weapons/mm3/hardknuckle.png",
    },
    { code: "topw", name: "Top Spin", icon: "/weapons/mm3/topspin.png" },
    {
      code: "snakew",
      name: "Search Snake",
      icon: "/weapons/mm3/searchsnake.png",
    },
    {
      code: "sparkw",
      name: "Spark Shock",
      icon: "/weapons/mm3/sparkshock.png",
    },
    {
      code: "shadoww",
      name: "Shadow Blade",
      icon: "/weapons/mm3/shadowblade.png",
    },
    //MM4
    {
      code: "brightw",
      name: "Flash Stopper",
      icon: "/weapons/mm4/flashstopper.png",
    },
    { code: "toadw", name: "Rain Flush", icon: "/weapons/mm4/rainflush.png" },
    { code: "drillw", name: "Drill Bomb", icon: "/weapons/mm4/drillbomb.png" },
    {
      code: "pharaohw1",
      name: "Pharaoh Shot",
      icon: "/weapons/mm4/pharaohshot.png",
    },
    {
      code: "ringw",
      name: "Ring Boomerang",
      icon: "/weapons/mm4/ringboomerang.png",
    },
    {
      code: "dustw",
      name: "Dust Crusher",
      icon: "/weapons/mm4/dustcrusher.png",
    },
    {
      code: "divew",
      name: "Dive Missile",
      icon: "/weapons/mm4/divemissile.png",
    },
    {
      code: "skullw",
      name: "Skull Barrier",
      icon: "/weapons/mm4/skullbarrier.png",
    },
    //MM5
    {
      code: "gravityw",
      name: "Gravity Hold",
      icon: "/weapons/mm5/gravityhold.png",
    },
    { code: "wavew", name: "Water Wave", icon: "/weapons/mm5/waterwave.png" },
    {
      code: "stonew",
      name: "Power Stone",
      icon: "/weapons/mm5/powerstone.png",
    },
    { code: "gyrow", name: "Gyro Attack", icon: "/weapons/mm5/gyroattack.png" },
    { code: "starw", name: "Star Crash", icon: "/weapons/mm5/starcrash.png" },
    {
      code: "chargew",
      name: "Charge Kick",
      icon: "/weapons/mm5/chargekick.png",
    },
    {
      code: "napalmw",
      name: "Napalm Bomb",
      icon: "/weapons/mm5/napalmbomb.png",
    },
    {
      code: "crystalw",
      name: "Crystal Eye",
      icon: "/weapons/mm5/crystaleye.png",
    },
    //MM6
    {
      code: "blizzardw",
      name: "Blizzard Attack",
      icon: "/weapons/mm6/blizzardattack.png",
    },
    {
      code: "centaurw1",
      name: "Centaur Flash",
      icon: "/weapons/mm6/centaurflash.png",
    },
    {
      code: "flamew",
      name: "Flame Blast",
      icon: "/weapons/mm6/flameblast.png",
    },
    {
      code: "knightw",
      name: "Knight Crusher",
      icon: "/weapons/mm6/knightcrusher.png",
    },
    {
      code: "plantw",
      name: "Plant Barrier",
      icon: "/weapons/mm6/plantbarrier.png",
    },
    {
      code: "tomahawkw",
      name: "Silver Tomahawk",
      icon: "/weapons/mm6/silvertomahawk.png",
    },
    { code: "windw", name: "Wind Storm", icon: "/weapons/mm6/windstorm.png" },
    {
      code: "yamatow",
      name: "Yamato Spear",
      icon: "/weapons/mm6/yamatospear.png",
    },
    //MMI,II,III,IV
    {
      code: "enkerw",
      name: "Mirror Buster",
      icon: "/weapons/mmgb,p/mirrorbuster.png",
    },
    {
      code: "quintw",
      name: "Sakugarne",
      icon: "/weapons/mmgb,p/sakugarne.png",
    },
    {
      code: "punkw",
      name: "Screw Crusher",
      icon: "/weapons/mmgb,p/screwcrusher.png",
    },
    {
      code: "balladew",
      name: "Ballade Cracker",
      icon: "/weapons/mmgb,p/balladecracker.png",
    },
    //MMV
    {
      code: "terraw",
      name: "Spark Chaser",
      icon: "/weapons/mmgb,p/sparkchaser.png",
    },
    {
      code: "mercuryw",
      name: "Grab Buster",
      icon: "/weapons/mmgb,p/grabbuster.png",
    },
    {
      code: "venusw",
      name: "Bubble Bomb",
      icon: "/weapons/mmgb,p/bubblebomb.png",
    },
    {
      code: "marsw",
      name: "Photon Missile",
      icon: "/weapons/mmgb,p/photonmissile.png",
    },
    {
      code: "jupiterw",
      name: "Electric Shock",
      icon: "/weapons/mmgb,p/electricshock.png",
    },
    {
      code: "saturnw",
      name: "Black Hole",
      icon: "/weapons/mmgb,p/blackhole.png",
    },
    {
      code: "uranusw",
      name: "Deep Digger",
      icon: "/weapons/mmgb,p/deepdigger.png",
    },
    {
      code: "plutow",
      name: "Break Dash",
      icon: "/weapons/mmgb,p/breakdash.png",
    },
    {
      code: "neptunew",
      name: "Salt Water",
      icon: "/weapons/mmgb,p/saltwater.png",
    },
    //MMPOWER
    {
      code: "pharaohw2",
      name: "Pharaoh Wave",
      icon: "/weapons/mmgb,p/pharaohwave.png",
    },
    {
      code: "centaurw2",
      name: "Centaur Arrow",
      icon: "/weapons/mmgb,p/centaurarrow.png",
    },
    //MM7
    {
      code: "freezew",
      name: "Freeze Cracker",
      icon: "/weapons/megawuster.png",
    },
    { code: "junkw", name: "Junk Shield", icon: "/weapons/megawuster.png" },
    { code: "burstw", name: "Danger Wrap", icon: "/weapons/megawuster.png" },
    { code: "cloudw", name: "Thunder Bolt", icon: "/weapons/megawuster.png" },
    { code: "springw", name: "Wild Coil", icon: "/weapons/megawuster.png" },
    { code: "slashw", name: "Slash Claw", icon: "/weapons/megawuster.png" },
    { code: "shadew", name: "Noise Crush", icon: "/weapons/megawuster.png" },
    { code: "turbow", name: "Scorch Wheel", icon: "/weapons/megawuster.png" },
    //MM8
    {
      code: "tenguw1",
      name: "Tornado Hold",
      icon: "/weapons/mm8/tornadohold.png",
    },
    {
      code: "astrow1",
      name: "Astro Crush",
      icon: "/weapons/mm8/astrocrush.png",
    },
    {
      code: "swordw",
      name: "Flame Sword",
      icon: "/weapons/mm8/flamesword.png",
    },
    {
      code: "clownw",
      name: "Thunder Claw",
      icon: "/weapons/mm8/thunderclaw.png",
    },
    {
      code: "searchw",
      name: "Homing Sniper",
      icon: "/weapons/mm8/homingsniper.png",
    },
    { code: "frostw", name: "Ice Wave", icon: "/weapons/mm8/icewave.png" },
    {
      code: "grenadew",
      name: "Flash Bomb",
      icon: "/weapons/mm8/flashbomb.png",
    },
    {
      code: "aquaw",
      name: "Water Balloon",
      icon: "/weapons/mm8/waterballoon.png",
    },
    //MM&B1
    { code: "coldw", name: "Ice Wall", icon: "/weapons/mm&b/icewall.png" },
    {
      code: "burnerw",
      name: "Wave Burner",
      icon: "/weapons/mm&b/waveburner.png",
    },
    {
      code: "piratew",
      name: "Remote Mine",
      icon: "/weapons/mm&b/remotemine.png",
    },
    {
      code: "groundw",
      name: "Spread Drill",
      icon: "/weapons/mm&b/spreaddrill.png",
    },
    {
      code: "tenguw2",
      name: "Tengu Blade",
      icon: "/weapons/mm&b/tengublade.png",
    },
    { code: "magicw", name: "Magic Card", icon: "/weapons/mm&b/magiccard.png" },
    {
      code: "astrow2",
      name: "Copy Vision",
      icon: "/weapons/mm&b/copyvision.png",
    },
    {
      code: "dynamow",
      name: "Lightning Bolt",
      icon: "/weapons/mm&b/lightningbolt.png",
    },
    //MM&B2
    {
      code: "bulletw1",
      name: "Rock'n Vulcan",
      icon: "/weapons/r&f2/rocknvulcan.png",
    },
    {
      code: "bulletw2",
      name: "Forte Vulcan",
      icon: "/weapons/r&f2/fortevulcan.png",
    },
    {
      code: "stovew1",
      name: "Flame Shower",
      icon: "/weapons/r&f2/flameshower.png",
    },
    {
      code: "stovew2",
      name: "Flame Mixer",
      icon: "/weapons/r&f2/flamemixer.png",
    },
    {
      code: "fanw1",
      name: "Barrier Wind",
      icon: "/weapons/r&f2/barrierwind.png",
    },
    {
      code: "fanw2",
      name: "Forte Cyclone",
      icon: "/weapons/r&f2/fortecyclone.png",
    },
    {
      code: "monkw1",
      name: "Doppel Crash",
      icon: "/weapons/r&f2/doppelcrash.png",
    },
    {
      code: "monkw2",
      name: "Doppler Attack",
      icon: "/weapons/r&f2/dopplerattack.png",
    },
    {
      code: "clockw1",
      name: "Time Switch",
      icon: "/weapons/r&f2/timeswitch.png",
    },
    { code: "clockw2", name: "Time Bomb", icon: "/weapons/r&f2/timebomb.png" },
    //MM9
    {
      code: "concretew",
      name: "Concrete Shot",
      icon: "/weapons/mm9/megawuster.png",
    },
    {
      code: "tornadow",
      name: "Tornado Blow",
      icon: "/weapons/mm9/tornadoblow.png",
    },
    {
      code: "splashw",
      name: "Laser Trident",
      icon: "/weapons/mm9/lasertrident.png",
    },
    { code: "plugw", name: "Plug Ball", icon: "/weapons/mm9/plugball.png" },
    {
      code: "jewelw",
      name: "Jewel Satellite",
      icon: "/weapons/mm9/jewelsatellite.png",
    },
    {
      code: "hornetw",
      name: "Hornet Chaser",
      icon: "/weapons/mm9/hornetchaser.png",
    },
    {
      code: "magmaw",
      name: "Magma Bazooka",
      icon: "/weapons/mm9/magmabazooka.png",
    },
    {
      code: "galaxyw",
      name: "Black Hole Bomb",
      icon: "/weapons/mm9/blackholebomb.png",
    },
    //MM10
    {
      code: "bladew",
      name: "Triple Blade",
      icon: "/weapons/mm10/tripleblade.png",
    },
    {
      code: "pumpw",
      name: "Water Shield",
      icon: "/weapons/mm10/watershield.png",
    },
    {
      code: "commandow",
      name: "Commando Bomb",
      icon: "/weapons/mm10/commandobomb.png",
    },
    {
      code: "chillw",
      name: "Chill Spike",
      icon: "/weapons/mm10/chillspike.png",
    },
    {
      code: "sheepw",
      name: "Thunder Wool",
      icon: "/weapons/mm10/thunderwool.png",
    },
    {
      code: "strikew",
      name: "Rebound Striker",
      icon: "/weapons/mm10/reboundstriker.png",
    },
    {
      code: "nitrow",
      name: "Wheel Cutter",
      icon: "/weapons/mm10/wheelcutter.png",
    },
    {
      code: "solarw",
      name: "Solar Blaze",
      icon: "/weapons/mm10/solarblaze.png",
    },
    //MM11
    {
      code: "blockw",
      name: "Block Dropper",
      icon: "/weapons/mm11/blockdropper.png",
    },
    {
      code: "fusew",
      name: "Scramble Thunder",
      icon: "/weapons/mm11/scramblethunder.png",
    },
    {
      code: "blastw",
      name: "Chain Blast",
      icon: "/weapons/mm11/chainblast.png",
    },
    {
      code: "acidw",
      name: "Acid Barrier",
      icon: "/weapons/mm11/acidbarrier.png",
    },
    {
      code: "tundraw",
      name: "Tundra Storm",
      icon: "/weapons/mm11/tundrastorm.png",
    },
    {
      code: "torchw",
      name: "Blazing Torch",
      icon: "/weapons/mm11/blazingtorch.png",
    },
    {
      code: "impactw",
      name: "Pile Driver",
      icon: "/weapons/mm11/piledriver.png",
    },
    {
      code: "bouncew",
      name: "Bounce Ball",
      icon: "/weapons/mm11/bounceball.png",
    },
    //MMDOS
    { code: "sonicw", name: "Sonic Wave", icon: "/weapons/dos/sonicwave.png" },
    { code: "voltw", name: "Force Field", icon: "/weapons/dos/forcefield.png" },
    {
      code: "dynaw",
      name: "Nuclear Detonator",
      icon: "/weapons/dos/nucleardetonator.png",
    },
    //MMDOS3
    { code: "bitw", name: "Bit Cannon", icon: "/weapons/dos/bitcannon.png" },
    {
      code: "slicew",
      name: "Blade Launcher",
      icon: "/weapons/dos/bladelauncher.png",
    },
    { code: "petrolw", name: "Oil Stream", icon: "/weapons/dos/oilstream.png" },
    {
      code: "sharkw",
      name: "Shark Boomerang",
      icon: "/weapons/dos/sharkboomerang.png",
    },
    {
      code: "cascadew",
      name: "Water Shooter",
      icon: "/weapons/dos/watershooter.png",
    },
    { code: "solderw", name: "Torch Arm", icon: "/weapons/dos/torcharm.png" },
  ]);
  function damageDataTable2(robot, game, player, funct) {
    //funct 1 brings whole table. funct 2 just brings robot weakness
    var tempColumns;
    var tempRow;
    switch (game) {
      case "MM1":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
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
            tempRow = [
              {
                megaw: 3,
                cutw: 1,
                gutsw: 14,
                icew: 0,
                bombw: 2,
                firew: 3,
                elecw: 1,
                weapon: "cutw",
                weakness: ["megaw", "gutsw"],
              },
            ];
            break;
          case "guts":
            tempRow = [
              {
                megaw: 2,
                cutw: 1,
                gutsw: 1,
                icew: 0,
                bombw: 10,
                firew: 2,
                elecw: 1,
                weapon: "gutsw",
                weakness: ["megaw", "bombw"],
              },
            ];
            break;
          case "ice":
            tempRow = [
              {
                megaw: 1,
                cutw: 2,
                gutsw: "X",
                icew: 0,
                bombw: 4,
                firew: 1,
                elecw: 10,
                weapon: "icew",
                weakness: ["elecw"],
              },
            ];
            break;
          case "bomb":
            tempRow = [
              {
                megaw: 2,
                cutw: 2,
                gutsw: "X",
                icew: 0,
                bombw: 1,
                firew: 4,
                elecw: 2,
                weapon: "bombw",
                weakness: ["megaw", "firew"],
              },
            ];
            break;
          case "fire":
            tempRow = [
              {
                megaw: 2,
                cutw: 2,
                gutsw: "X",
                icew: 4,
                bombw: 1,
                firew: 1,
                elecw: 1,
                weapon: "firew",
                weakness: ["megaw", "icew"],
              },
            ];
            break;
          case "elec":
            tempRow = [
              {
                megaw: 1,
                cutw: 10,
                gutsw: 4,
                icew: 0,
                bombw: 2,
                firew: 1,
                elecw: 1,
                weapon: "elecw",
                weakness: ["cutw"],
              },
            ];
            break;
          case "buster":
            tempRow = [
              {
                megaw: 1,
                cutw: 3,
                gutsw: "X",
                icew: 1,
                bombw: 8,
                firew: 1,
                elecw: 1,
                weapon: "NONE",
                weakness: ["bombw", "cutw"],
                notes: "Wily Wars - MM1 Weapons",
              },
              {
                megaw: 1,
                cutw: 3,
                gutsw: "X",
                icew: 1,
                bombw: "X",
                firew: 1,
                elecw: 1,
                weapon: "NONE",
                weakness: ["cutw"],
                notes: "Wily Wars - MM1 Weapons (2nd Fight)",
              },
            ];
            break;
          case "water":
            tempRow = [
              {
                megaw: 1,
                cutw: 0,
                gutsw: "X",
                icew: 3,
                bombw: 3,
                firew: 1,
                elecw: 1,
                weapon: "NONE",
                weakness: ["icew", "bombw"],
                notes: "Wily Wars - MM1 Weapons",
              },
            ];
            break;
          case "storm":
            tempRow = [
              {
                megaw: 1,
                cutw: 1,
                gutsw: "X",
                icew: 1,
                bombw: 6,
                firew: 3,
                elecw: 1,
                weapon: "NONE",
                weakness: ["bombw", "firew"],
                notes: "Wily Wars - MM1 Weapons",
              },
            ];
            break;
        }
        break;
      case "MMPU":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
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
          {
            name: "oilw",
            field: "oilw",
            align: "center",
            sortable: false,
          },
          {
            name: "timew",
            field: "timew",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "cut":
            tempRow = [
              {
                megaw: "2:4",
                cutw: 1,
                gutsw: 6,
                icew: 3,
                bombw: 1,
                firew: 3,
                elecw: 3,
                time: "3:0",
                oil: "1:3",
                weapon: "cutw",
                weakness: ["megaw", "gutsw"],
              },
            ];
            break;
          case "guts":
            tempRow = [
              {
                megaw: "2:4",
                cutw: 1,
                gutsw: 1,
                icew: 3,
                bombw: 3,
                firew: 3,
                elecw: 3,
                time: "3:6",
                oil: "1:3",
                weapon: "gutsw",
                weakness: ["megaw", "timew"],
              },
            ];
            break;
          case "ice":
            tempRow = [
              {
                megaw: "2:4",
                cutw: 3,
                gutsw: 3,
                icew: 1,
                bombw: 6,
                firew: 1,
                elecw: 3,
                time: "3:0",
                oil: "1:3",
                weapon: "icew",
                weakness: ["megaw", "bombw"],
              },
            ];
            break;
          case "bomb":
            tempRow = [
              {
                megaw: "2:4",
                cutw: 6,
                gutsw: 3,
                icew: 1,
                bombw: 1,
                firew: 3,
                elecw: 3,
                time: "3:0",
                oil: "1:3",
                weapon: "bombw",
                weakness: ["megaw", "cutw"],
              },
            ];
            break;
          case "fire":
            tempRow = [
              {
                megaw: "2:4",
                cutw: 3,
                gutsw: 3,
                icew: 6,
                bombw: 3,
                firew: 1,
                elecw: 3,
                time: "3:0",
                oil: "1:1",
                weapon: "firew",
                weakness: ["megaw", "icew"],
              },
            ];
            break;
          case "elec":
            tempRow = [
              {
                megaw: "2:4",
                cutw: 3,
                gutsw: 3,
                icew: 3,
                bombw: 3,
                firew: 3,
                elecw: 1,
                time: "1:0",
                oil: "2:6",
                weapon: "elecw",
                weakness: ["megaw", "oilw"],
              },
            ];
            break;
          case "time":
            tempRow = [
              {
                megaw: "2:4",
                cutw: 3,
                gutsw: 3,
                icew: 3,
                bombw: 1,
                firew: 3,
                elecw: 6,
                time: "1:0",
                oil: "1:3",
                weapon: "timew",
                weakness: ["megaw", "elecw"],
              },
            ];
            break;
          case "oil":
            tempRow = [
              {
                megaw: "2:4",
                cutw: 3,
                gutsw: 3,
                icew: 3,
                bombw: 3,
                firew: 6,
                elecw: 1,
                time: "3:0",
                oil: "1:1",
                weapon: "oilw",
                weakness: ["megaw", "firew"],
              },
            ];
            break;
        }
        break;
      case "MM2":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "metalw",
            field: "metalw",
            align: "center",
            sortable: false,
          },
          {
            name: "airw",
            field: "airw",
            align: "center",
            sortable: false,
          },
          {
            name: "bubblew",
            field: "bubblew",
            align: "center",
            sortable: false,
          },
          {
            name: "quickw",
            field: "quickw",
            align: "center",
            sortable: false,
          },
          {
            name: "crashw",
            field: "crashw",
            align: "center",
            sortable: false,
          },
          {
            name: "flashw",
            field: "flashw",
            align: "center",
            sortable: false,
          },
          {
            name: "heatw",
            field: "heatw",
            align: "center",
            sortable: false,
          },
          {
            name: "woodw",
            field: "woodw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "metal":
            tempRow = [
              {
                megaw: 1,
                metalw: 14,
                airw: 0,
                bubblew: 0,
                quickw: 4,
                crashw: 0,
                flashw: 0,
                heatw: "1:3:4",
                woodw: 0,
                weapon: "metalw",
                weakness: ["quickw", "metalw"],
              },
            ];
            break;
          case "air":
            tempRow = [
              {
                megaw: 2,
                metalw: 0,
                airw: 0,
                bubblew: 0,
                quickw: 2,
                crashw: 0,
                flashw: 0,
                heatw: "2:6:6",
                woodw: 8,
                weapon: "airw",
                weakness: ["megaw", "woodw"],
              },
            ];
            break;
          case "bubble":
            tempRow = [
              {
                megaw: 1,
                metalw: 4,
                airw: 0,
                bubblew: "+",
                quickw: 2,
                crashw: 2,
                flashw: 0,
                heatw: "0:0:0",
                woodw: 0,
                weapon: "bubblew",
                weakness: ["metalw"],
              },
            ];
            break;
          case "quick":
            tempRow = [
              {
                megaw: 2,
                metalw: 0,
                airw: 2,
                bubblew: 0,
                quickw: 0,
                crashw: 4,
                flashw: 14,
                heatw: "2:6:10",
                woodw: 0,
                weapon: "quickw",
                weakness: ["megaw", "flashw", "crashw", "heatw"],
              },
            ];
            break;
          case "crash":
            tempRow = [
              {
                megaw: 1,
                metalw: 0,
                airw: 10,
                bubblew: 1,
                quickw: 1,
                crashw: 0,
                flashw: 0,
                heatw: "1:3:6",
                woodw: 0,
                weapon: "crashw",
                weakness: ["airw"],
              },
            ];
            break;
          case "flash":
            tempRow = [
              {
                megaw: 2,
                metalw: 4,
                airw: 0,
                bubblew: 2,
                quickw: 0,
                crashw: 3,
                flashw: "+",
                heatw: "2:6:6",
                woodw: 0,
                weapon: "flashw",
                weakness: ["megaw", "metalw"],
              },
            ];
            break;
          case "heat":
            tempRow = [
              {
                megaw: 2,
                metalw: 1,
                airw: 2,
                bubblew: 6,
                quickw: 2,
                crashw: "+",
                flashw: 0,
                heatw: "+:+:+",
                woodw: 0,
                weapon: "heatw",
                weakness: ["megaw", "bubblew"],
              },
            ];
            break;
          case "wood":
            tempRow = [
              {
                megaw: 1,
                metalw: 2,
                airw: 4,
                bubblew: 0,
                quickw: 0,
                crashw: 2,
                flashw: 0,
                heatw: "1:3:14",
                woodw: "+",
                weapon: "woodw",
                weakness: ["heatw", "airw"],
              },
            ];
            break;
          case "buster":
            tempRow = [
              {
                megaw: 1,
                metalw: 1,
                airw: 4,
                bubblew: 4,
                quickw: 2,
                crashw: 1,
                flashw: "X",
                heatw: "1:3:9",
                woodw: 1,
                weapon: "NONE",
                weakness: ["airw", "bubblew"],
                notes: "Wily Wars - MM2 Weapons",
              },
              {
                megaw: 1,
                metalw: 1,
                airw: 4,
                bubblew: 0,
                quickw: 2,
                crashw: 1,
                flashw: 0,
                heatw: "1:2:3",
                woodw: 4,
                weapon: "NONE",
                weakness: ["airw", "woodw"],
                notes: "Wily Wars - MM2 Weapons (2nd Fight)",
              },
            ];
            break;
          case "water":
            tempRow = [
              {
                megaw: 1,
                metalw: 0,
                airw: 0,
                bubblew: 1,
                quickw: 1,
                crashw: 1,
                flashw: 0,
                heatw: "1:3:3",
                woodw: 1,
                weapon: "NONE",
                weakness: ["heatw"],
                notes: "Wily Wars - MM2 Weapons",
              },
            ];
            break;
          case "storm":
            tempRow = [
              {
                megaw: 1,
                metalw: 2,
                airw: 0,
                bubblew: 0,
                quickw: 1,
                crashw: 2,
                flashw: 0,
                heatw: "2:3:6",
                woodw: 0,
                weapon: "NONE",
                weakness: ["heatw"],
                notes: "Wily Wars - MM2 Weapons",
              },
            ];
            break;
        }
        break;
      case "MM3":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "needlew",
            field: "needlew",
            align: "center",
            sortable: false,
          },
          {
            name: "magnetw",
            field: "magnetw",
            align: "center",
            sortable: false,
          },
          {
            name: "geminiw",
            field: "geminiw",
            align: "center",
            sortable: false,
          },
          {
            name: "hardw",
            field: "hardw",
            align: "center",
            sortable: false,
          },
          {
            name: "topw",
            field: "topw",
            align: "center",
            sortable: false,
          },
          {
            name: "snakew",
            field: "snakew",
            align: "center",
            sortable: false,
          },
          {
            name: "sparkw",
            field: "sparkw",
            align: "center",
            sortable: false,
          },
          {
            name: "shadoww",
            field: "shadoww",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "needle":
            tempRow = [
              {
                megaw: 1,
                needlew: 4,
                magnetw: 1,
                geminiw: 7,
                hardw: 0,
                topw: 1,
                snakew: 1,
                sparkw: 0,
                shadoww: 2,
                weapon: "needlew",
                weakness: ["geminiw"],
              },
            ];
            break;
          case "magnet":
            tempRow = [
              {
                megaw: 2,
                needlew: 1,
                magnetw: 4,
                geminiw: 2,
                hardw: 2,
                topw: 1,
                snakew: 1,
                sparkw: 7,
                shadoww: 7,
                weapon: "magnetw",
                weakness: ["megaw", "sparkw", "shadoww"],
              },
            ];
            break;
          case "gemini":
            tempRow = [
              {
                megaw: 1,
                needlew: 1,
                magnetw: 2,
                geminiw: 4,
                hardw: 2,
                topw: 2,
                snakew: 5,
                sparkw: 1,
                shadoww: 2,
                weapon: "geminiw",
                weakness: ["snakew"],
              },
            ];
            break;
          case "hard":
            tempRow = [
              {
                megaw: 1,
                needlew: 0,
                magnetw: 4,
                geminiw: 1,
                hardw: 4,
                topw: 0,
                snakew: 0,
                sparkw: 0,
                shadoww: 0,
                weapon: "hardw",
                weakness: ["magnetw"],
              },
            ];
            break;
          case "top":
            tempRow = [
              {
                megaw: 2,
                needlew: 2,
                magnetw: 1,
                geminiw: 0,
                hardw: 7,
                topw: 4,
                snakew: 1,
                sparkw: 1,
                shadoww: 1,
                weapon: "topw",
                weakness: ["megaw", "hardw"],
              },
            ];
            break;
          case "snake":
            tempRow = [
              {
                megaw: 1,
                needlew: 4,
                magnetw: 0,
                geminiw: 1,
                hardw: 2,
                topw: 2,
                snakew: 4,
                sparkw: 1,
                shadoww: 2,
                weapon: "snakew",
                weakness: ["needlew"],
              },
            ];
            break;
          case "spark":
            tempRow = [
              {
                megaw: 1,
                needlew: 2,
                magnetw: 0,
                geminiw: 1,
                hardw: 2,
                topw: 1,
                snakew: 0,
                sparkw: 4,
                shadoww: 4,
                weapon: "sparkw",
                weakness: ["shadoww"],
              },
            ];
            break;
          case "shadow":
            tempRow = [
              {
                megaw: 1,
                needlew: 1,
                magnetw: 1,
                geminiw: 1,
                hardw: 2,
                topw: 7,
                snakew: 1,
                sparkw: 1,
                shadoww: 4,
                weapon: "shadoww",
                weakness: ["topw"],
              },
            ];
            break;
          case "metal":
            tempRow = [
              {
                megaw: 1,
                needlew: 0,
                magnetw: 4,
                geminiw: 1,
                hardw: 4,
                topw: 0,
                snakew: 0,
                sparkw: 2,
                shadoww: 2,
                weapon: "NONE",
                weakness: ["magnetw", "hardw"],
                notes: "Doc Robot - Spark Man 1",
              },
            ];
            break;
          case "quick":
            tempRow = [
              {
                megaw: 1,
                needlew: 1,
                magnetw: 2,
                geminiw: 4,
                hardw: 1,
                topw: 1,
                snakew: 4,
                sparkw: 1,
                shadoww: 2,
                weapon: "NONE",
                weakness: ["geminiw", "snakew"],
                notes: "Doc Robot - Spark Man 2",
              },
            ];
            break;
          case "air":
            tempRow = [
              {
                megaw: 2,
                needlew: 1,
                magnetw: 4,
                geminiw: 2,
                hardw: 2,
                topw: 1,
                snakew: 1,
                sparkw: 4,
                shadoww: 0,
                weapon: "NONE",
                weakness: ["megaw", "magnetw", "sparkw"],
                notes: "Doc Robot - Needle Man 1",
              },
            ];
            break;
          case "crash":
            tempRow = [
              {
                megaw: 2,
                needlew: 2,
                magnetw: 1,
                geminiw: 0,
                hardw: 7,
                topw: 4,
                snakew: 1,
                sparkw: 1,
                shadoww: 1,
                weapon: "NONE",
                weakness: ["megaw", "hardw", "topw"],
                notes: "Doc Robot - Needle Man 2",
              },
            ];
            break;
          case "flash":
            tempRow = [
              {
                megaw: 1,
                needlew: 4,
                magnetw: 1,
                geminiw: 4,
                hardw: 0,
                topw: 1,
                snakew: 1,
                sparkw: 0,
                shadoww: 2,
                weapon: "NONE",
                weakness: ["needlew", "geminiw"],
                notes: "Doc Robot - Gemini Man 1",
              },
            ];
            break;
          case "bubble":
            tempRow = [
              {
                megaw: 1,
                needlew: 2,
                magnetw: 0,
                geminiw: 1,
                hardw: 2,
                topw: 1,
                snakew: 0,
                sparkw: 4,
                shadoww: 4,
                weapon: "NONE",
                weakness: ["sparkw", "shadoww"],
                notes: "Doc Robot - Gemini Man 2",
              },
            ];
            break;
          case "wood":
            tempRow = [
              {
                megaw: 1,
                needlew: 4,
                magnetw: 0,
                geminiw: 1,
                hardw: 2,
                topw: 2,
                snakew: 4,
                sparkw: 1,
                shadoww: 2,
                weapon: "NONE",
                weakness: ["needlew", "snakew"],
                notes: "Doc Robot - Shadow Man 1",
              },
            ];
            break;
          case "heat":
            tempRow = [
              {
                megaw: 1,
                needlew: 2,
                magnetw: 1,
                geminiw: 1,
                hardw: 2,
                topw: 7,
                snakew: 1,
                sparkw: 1,
                shadoww: 4,
                weapon: "NONE",
                weakness: ["topw", "shadoww"],
                notes: "Doc Robot - Shadow Man 2",
              },
            ];
            break;
          case "buster":
            tempRow = [
              {
                megaw: 1,
                needlew: 2,
                magnetw: 1,
                geminiw: 1,
                hardw: 8,
                topw: 0,
                snakew: 0,
                sparkw: 0,
                shadoww: 1,
                weapon: "NONE",
                weakness: ["hardw"],
                notes: "Wily Wars - MM3 Weapons",
              },
              {
                megaw: 1,
                needlew: 2,
                magnetw: 4,
                geminiw: 1,
                hardw: 6,
                topw: 0,
                snakew: 0,
                sparkw: 0,
                shadoww: 1,
                weapon: "NONE",
                weakness: ["hardw", "magnetw"],
                notes: "Wily Wars - MM3 Weapons (2nd Fight)",
              },
            ];
            break;
          case "water":
            tempRow = [
              {
                megaw: 1,
                needlew: 1,
                magnetw: 1,
                geminiw: 1,
                hardw: 1,
                topw: 0,
                snakew: 2,
                sparkw: 1,
                shadoww: 1,
                weapon: "NONE",
                weakness: ["snakew"],
                notes: "Wily Wars - MM3 Weapons",
              },
            ];
            break;
          case "storm":
            tempRow = [
              {
                megaw: 1,
                needlew: 1,
                magnetw: 1,
                geminiw: 2,
                hardw: 1,
                topw: 0,
                snakew: 0,
                sparkw: 2,
                shadoww: 2,
                weapon: "NONE",
                weakness: ["geminiw", "sparkw", "shadoww"],
                notes: "Wily Wars - MM3 Weapons",
              },
            ];
            break;
        }
        break;
      case "MM4":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "brightw",
            field: "brightw",
            align: "center",
            sortable: false,
          },
          {
            name: "toadw",
            field: "toadw",
            align: "center",
            sortable: false,
          },
          {
            name: "drillw",
            field: "drillw",
            align: "center",
            sortable: false,
          },
          {
            name: "pharaohw1",
            field: "pharaohw1",
            align: "center",
            sortable: false,
          },
          {
            name: "ringw",
            field: "ringw",
            align: "center",
            sortable: false,
          },
          {
            name: "dustw",
            field: "dustw",
            align: "center",
            sortable: false,
          },
          {
            name: "divew",
            field: "divew",
            align: "center",
            sortable: false,
          },
          {
            name: "skullw",
            field: "skullw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "bright":
            tempRow = [
              {
                megaw: "1:3",
                brightw: 0,
                toadw: 4,
                drillw: "1:1",
                pharaohw1: "1:3",
                ringw: 1,
                dustw: 1,
                divew: 1,
                skullw: 2,
                weapon: "brightw",
                weakness: ["toadw"],
              },
            ];
            break;
          case "toad":
            tempRow = [
              {
                megaw: "1:3",
                brightw: 0,
                toadw: 1,
                drillw: "4:4",
                pharaohw1: "1:3",
                ringw: 1,
                dustw: 1,
                divew: 1,
                skullw: 1,
                weapon: "toadw",
                weakness: ["drillw"],
              },
            ];
            break;
          case "drill":
            tempRow = [
              {
                megaw: "1:3",
                brightw: 0,
                toadw: 1,
                drillw: "1:1",
                pharaohw1: "1:3",
                ringw: 1,
                dustw: 1,
                divew: 3,
                skullw: 1,
                weapon: "drillw",
                weakness: ["divew"],
              },
            ];
            break;
          case "pharaoh":
            tempRow = [
              {
                megaw: "1:3",
                brightw: "YES",
                toadw: 2,
                drillw: "1:1",
                pharaohw1: "1:3",
                ringw: 1,
                dustw: 2,
                divew: 1,
                skullw: 1,
                weapon: "pharaohw1",
                weakness: ["brightw"],
              },
            ];
            break;
          case "ring":
            tempRow = [
              {
                megaw: "1:3",
                brightw: 0,
                toadw: 1,
                drillw: "1:1",
                pharaohw1: "2:6",
                ringw: 1,
                dustw: 1,
                divew: 1,
                skullw: 1,
                weapon: "ringw",
                weakness: ["pharaohw1"],
              },
            ];
            break;
          case "dust":
            tempRow = [
              {
                megaw: "1:3",
                brightw: 0,
                toadw: 1,
                drillw: "1:1",
                pharaohw1: "1:3",
                ringw: 4,
                dustw: 1,
                divew: 1,
                skullw: 1,
                weapon: "dustw",
                weakness: ["ringw"],
              },
            ];
            break;
          case "dive":
            tempRow = [
              {
                megaw: "1:3",
                brightw: 0,
                toadw: 1,
                drillw: "1:1",
                pharaohw1: "1:3",
                ringw: 1,
                dustw: 3,
                divew: 1,
                skullw: 4,
                weapon: "divew",
                weakness: ["skullw"],
              },
            ];
            break;
          case "skull":
            tempRow = [
              {
                megaw: "1:3",
                brightw: 0,
                toadw: 2,
                drillw: "1:1",
                pharaohw1: "0:0",
                ringw: 1,
                dustw: 4,
                divew: 1,
                skullw: 1,
                weapon: "skullw",
                weakness: ["dustw"],
              },
            ];
            break;
        }
        break;
      case "MM5":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "gravityw",
            field: "gravityw",
            align: "center",
            sortable: false,
          },
          {
            name: "wavew",
            field: "wavew",
            align: "center",
            sortable: false,
          },
          {
            name: "stonew",
            field: "stonew",
            align: "center",
            sortable: false,
          },
          {
            name: "gyrow",
            field: "gyrow",
            align: "center",
            sortable: false,
          },
          {
            name: "starw",
            field: "starw",
            align: "center",
            sortable: false,
          },
          {
            name: "chargew",
            field: "chargew",
            align: "center",
            sortable: false,
          },
          {
            name: "napalmw",
            field: "napalmw",
            align: "center",
            sortable: false,
          },
          {
            name: "crystalw",
            field: "crystalw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "gravity":
            tempRow = [
              {
                megaw: "1:3",
                gravityw: 0,
                wavew: 1,
                stonew: 1,
                gyrow: 1,
                starw: 4,
                chargew: 0,
                napalmw: 1,
                crystalw: 1,
                weapon: "gravityw",
                weakness: ["starw"],
              },
            ];
            break;
          case "wave":
            tempRow = [
              {
                megaw: "1:3",
                gravityw: 0,
                wavew: 1,
                stonew: 1,
                gyrow: 1,
                starw: 1,
                chargew: 4,
                napalmw: 1,
                crystalw: 1,
                weapon: "wavew",
                weakness: ["chargew"],
              },
            ];
            break;
          case "stone":
            tempRow = [
              {
                megaw: "1:3",
                gravityw: 1,
                wavew: 1,
                stonew: 1,
                gyrow: 1,
                starw: 1,
                chargew: 0,
                napalmw: 4,
                crystalw: 1,
                weapon: "stonew",
                weakness: ["napalmw"],
              },
            ];
            break;
          case "gyro":
            tempRow = [
              {
                megaw: "1:3",
                gravityw: 4,
                wavew: 1,
                stonew: 1,
                gyrow: 1,
                starw: 1,
                chargew: 1,
                napalmw: 1,
                crystalw: 1,
                weapon: "gyrow",
                weakness: ["gravityw"],
              },
            ];
            break;
          case "star":
            tempRow = [
              {
                megaw: "1:3",
                gravityw: 0,
                wavew: 4,
                stonew: 1,
                gyrow: 1,
                starw: 1,
                chargew: 0,
                napalmw: 1,
                crystalw: 1,
                weapon: "starw",
                weakness: ["wavew"],
              },
            ];
            break;
          case "charge":
            tempRow = [
              {
                megaw: "1:3",
                gravityw: 0,
                wavew: 1,
                stonew: 4,
                gyrow: 1,
                starw: 1,
                chargew: 0,
                napalmw: 1,
                crystalw: 1,
                weapon: "chargew",
                weakness: ["stonew"],
              },
            ];
            break;
          case "napalm":
            tempRow = [
              {
                megaw: "1:3",
                gravityw: 0,
                wavew: 1,
                stonew: 1,
                gyrow: 1,
                starw: 1,
                chargew: 0,
                napalmw: 1,
                crystalw: 3,
                weapon: "napalmw",
                weakness: ["crystalw"],
              },
            ];
            break;
          case "crystal":
            tempRow = [
              {
                megaw: "1:3",
                gravityw: 1,
                wavew: 1,
                stonew: 1,
                gyrow: 4,
                starw: 1,
                chargew: 1,
                napalmw: 1,
                crystalw: 1,
                weapon: "crystalw",
                weakness: ["gyrow"],
              },
            ];
            break;
        }
        break;
      case "MM6":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "blizzardw",
            field: "blizzardw",
            align: "center",
            sortable: false,
          },
          {
            name: "centaurw",
            field: "centaurw",
            align: "center",
            sortable: false,
          },
          {
            name: "flamew",
            field: "flamew",
            align: "center",
            sortable: false,
          },
          {
            name: "knightw",
            field: "knightw",
            align: "center",
            sortable: false,
          },
          {
            name: "plantw",
            field: "plantw",
            align: "center",
            sortable: false,
          },
          {
            name: "tomahawkw",
            field: "tomahawkw",
            align: "center",
            sortable: false,
          },
          {
            name: "windw",
            field: "windw",
            align: "center",
            sortable: false,
          },
          {
            name: "yamatow",
            field: "yamatow",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "blizzard":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 1,
                centaurw: 0,
                flamew: 4,
                knightw: 1,
                plantw: 0,
                tomahawkw: 1,
                windw: 1,
                yamatow: 1,
                weapon: "blizzardw",
                weakness: ["flamew"],
              },
            ];
            break;
          case "centaur":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 1,
                centaurw: 0,
                flamew: 1,
                knightw: 4,
                plantw: 0,
                tomahawkw: 1,
                windw: 1,
                yamatow: 1,
                weapon: "centaurw",
                weakness: ["knightw"],
              },
            ];
            break;
          case "flame":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 1,
                centaurw: 0,
                flamew: 1,
                knightw: 1,
                plantw: 0,
                tomahawkw: 1,
                windw: 4,
                yamatow: 1,
                weapon: "flamew",
                weakness: ["windw"],
              },
            ];
            break;
          case "knight":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 1,
                centaurw: 0,
                flamew: 1,
                knightw: 1,
                plantw: 0,
                tomahawkw: 1,
                windw: 1,
                yamatow: 4,
                weapon: "knightw",
                weakness: ["yamatow"],
              },
            ];
            break;
          case "plant":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 4,
                centaurw: 0,
                flamew: 2,
                knightw: 1,
                plantw: 0,
                tomahawkw: 1,
                windw: 1,
                yamatow: 1,
                weapon: "plantw",
                weakness: ["blizzardw"],
              },
            ];
            break;
          case "tomahawk":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 1,
                centaurw: 0,
                flamew: 1,
                knightw: 1,
                plantw: 4,
                tomahawkw: 1,
                windw: 1,
                yamatow: 1,
                weapon: "tomahawkw",
                weakness: ["plantw"],
              },
            ];
            break;
          case "wind":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 1,
                centaurw: 4,
                flamew: 1,
                knightw: 1,
                plantw: 0,
                tomahawkw: 1,
                windw: 1,
                yamatow: 1,
                weapon: "windw",
                weakness: ["centaurw"],
              },
            ];
            break;
          case "yamato":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 1,
                centaurw: 0,
                flamew: 1,
                knightw: 1,
                plantw: 0,
                tomahawkw: 4,
                windw: 1,
                yamatow: 1,
                weapon: "yamatow",
                weakness: ["tomahawkw"],
              },
            ];
            break;
        }
        break;
      case "MMI":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
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
            name: "elecw",
            field: "elecw",
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
            name: "firew",
            field: "firew",
            align: "center",
            sortable: false,
          },
          {
            name: "flashw",
            field: "flashw",
            align: "center",
            sortable: false,
          },
          {
            name: "quickw",
            field: "quickw",
            align: "center",
            sortable: false,
          },
          {
            name: "bubblew",
            field: "bubblew",
            align: "center",
            sortable: false,
          },
          {
            name: "heatw",
            field: "heatw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "cut":
            tempRow = [
              {
                megaw: 1,
                cutw: "X",
                elecw: 1,
                icew: 0,
                firew: 2,
                flashw: "X",
                quickw: "X",
                bubblew: "X",
                heatw: "X",
                weapon: "cutw",
                weakness: ["firew"],
              },
            ];
            break;
          case "elec":
            tempRow = [
              {
                megaw: 1,
                cutw: 8,
                elecw: "X",
                icew: 0,
                firew: 1,
                flashw: "X",
                quickw: "X",
                bubblew: "X",
                heatw: "X",
                weapon: "elecw",
                weakness: ["cutw"],
              },
            ];
            break;
          case "ice":
            tempRow = [
              {
                megaw: 1,
                cutw: 2,
                elecw: 8,
                icew: "X",
                firew: 1,
                flashw: "X",
                quickw: "X",
                bubblew: "X",
                heatw: "X",
                weapon: "icew",
                weakness: ["elecw"],
              },
            ];
            break;
          case "fire":
            tempRow = [
              {
                megaw: 1,
                cutw: 2,
                elecw: 1,
                icew: 4,
                firew: "X",
                flashw: "X",
                quickw: "X",
                bubblew: "X",
                heatw: "X",
                weapon: "firew",
                weakness: ["icew"],
              },
            ];
            break;
          case "flash":
            tempRow = [
              {
                megaw: 1,
                cutw: 1,
                elecw: 0,
                icew: 2,
                firew: 1,
                flashw: "X",
                quickw: 0,
                bubblew: 1,
                heatw: "1:2:4",
                weapon: "flashw",
                weakness: ["icew"],
              },
            ];
            break;
          case "quick":
            tempRow = [
              {
                megaw: 1,
                cutw: 0,
                elecw: 0,
                icew: 1,
                firew: 1,
                flashw: 9,
                quickw: "X",
                bubblew: 0,
                heatw: "2:4:10",
                weapon: "quickw",
                weakness: ["flashw", "heatw"],
              },
            ];
            break;
          case "bubble":
            tempRow = [
              {
                megaw: 1,
                cutw: 1,
                elecw: 0,
                icew: 1,
                firew: 0,
                flashw: 0,
                quickw: 2,
                bubblew: "X",
                heatw: "0:0:0",
                weapon: "bubblew",
                weakness: ["quickw"],
              },
            ];
            break;
          case "heat":
            tempRow = [
              {
                megaw: 1,
                cutw: 0,
                elecw: 0,
                icew: 0,
                firew: 0,
                flashw: 0,
                quickw: 2,
                bubblew: 4,
                heatw: "X",
                weapon: "heatw",
                weakness: ["bubblew"],
              },
            ];
            break;
          case "enker":
            tempRow = [
              {
                megaw: 1,
                cutw: 0,
                elecw: 0,
                icew: 0,
                firew: 0,
                flashw: 0,
                quickw: 0,
                bubblew: 0,
                heatw: "0:0:0",
                weapon: "enkerw",
                weakness: ["megaw"],
                notes: "Only buster can damage him at all.",
              },
            ];
            break;
        }
        break;
      case "MMII":  
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "metalw",
            field: "metalw",
            align: "center",
            sortable: false,
          },
          {
            name: "airw",
            field: "airw",
            align: "center",
            sortable: false,
          },
          {
            name: "crashw",
            field: "crashw",
            align: "center",
            sortable: false,
          },
          {
            name: "woodw",
            field: "woodw",
            align: "center",
            sortable: false,
          },
          {
            name: "needlew",
            field: "needlew",
            align: "center",
            sortable: false,
          },
          {
            name: "magnetw",
            field: "magnetw",
            align: "center",
            sortable: false,
          },
          {
            name: "hardw",
            field: "hardw",
            align: "center",
            sortable: false,
          },
          {
            name: "topw",
            field: "topw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "metal":
            tempRow = [
              {
                megaw: 1,
                metalw: "X",
                airw: 0,
                crashw: 5,
                woodw: 0,
                needlew: "X",
                magnetw: "X",
                hardw: "X",
                topw: "X",
                weapon: "metalw",
                weakness: ["crashw"],
              },
            ];
            break;
          case "air":
            tempRow = [
              {
                megaw: 1,
                metalw: 0,
                airw: "X",
                crashw: 0,
                woodw: 7,
                needlew: "X",
                magnetw: "X",
                hardw: "X",
                topw: "X",
                weapon: "airw",
                weakness: ["woodw"],
              },
            ];
            break;
          case "crash":
            tempRow = [
              {
                megaw: 1,
                metalw: 0,
                airw: 2,
                crashw: "X",
                woodw: 0,
                needlew: "X",
                magnetw: "X",
                hardw: "X",
                topw: "X",
                weapon: "crashw",
                weakness: ["airw"],
              },
            ];
            break;
          case "wood":
            tempRow = [
              {
                megaw: 1,
                metalw: 5,
                airw: 1,
                crashw: 2,
                woodw: "X",
                needlew: "X",
                magnetw: "X",
                hardw: "X",
                topw: "X",
                weapon: "woodw",
                weakness: ["metalw"],
              },
            ];
            break;
          case "needle":
            tempRow = [
              {
                megaw: 1,
                metalw: 0,
                airw: 3,
                crashw: 1,
                woodw: 0,
                needlew: "X",
                magnetw: 1,
                hardw: 0,
                topw: 5,
                weapon: "needlew",
                weakness: ["airw", "topw"],
              },
            ];
            break;
          case "magnet":
            tempRow = [
              {
                megaw: 1,
                metalw: 2,
                airw: 0,
                crashw: 1,
                woodw: 0,
                needlew: 3,
                magnetw: "X",
                hardw: 2,
                topw: 1,
                weapon: "magnetw",
                weakness: ["needlew"],
              },
            ];
            break;
          case "hard":
            tempRow = [
              {
                megaw: 1,
                metalw: 1,
                airw: 0,
                crashw: 1,
                woodw: 0,
                needlew: 0,
                magnetw: 4,
                hardw: "X",
                topw: 0,
                weapon: "hardw",
                weakness: ["magnetw"],
              },
            ];
            break;
          case "top":
            tempRow = [
              {
                megaw: 1,
                metalw: 0,
                airw: 1,
                crashw: 0,
                woodw: 0,
                needlew: 2,
                magnetw: 1,
                hardw: 4,
                topw: "X",
                weapon: "topw",
                weakness: ["hardw"],
              },
            ];
            break;
          case "quint":
            tempRow = [
              {
                megaw: 1,
                metalw: 2,
                airw: 2,
                crashw: 4,
                woodw: 2,
                needlew: 2,
                magnetw: 2,
                hardw: 5,
                topw: 2,
                weapon: "quintw",
                weakness: ["hardw", "crashw"],
              },
            ];
            break;
        }
        break;
      case "MMIII":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "shadoww",
            field: "shadoww",
            align: "center",
            sortable: false,
          },
          {
            name: "sparkw",
            field: "sparkw",
            align: "center",
            sortable: false,
          },
          {
            name: "snakew",
            field: "snakew",
            align: "center",
            sortable: false,
          },
          {
            name: "geminiw",
            field: "geminiw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "shadow":
            tempRow = [
              {
                megaw: 1,
                needlew: 1,
                magnetw: 1,
                geminiw: 1,
                hardw: 2,
                topw: 7,
                snakew: 1,
                sparkw: 1,
                shadoww: 4,
                weapon: "shadoww",
                weakness: ["topw"],
              },
            ];
            break;
          case "spark":
            tempRow = [
              {
                megaw: 1,
                needlew: 2,
                magnetw: 0,
                geminiw: 1,
                hardw: 2,
                topw: 1,
                snakew: 0,
                sparkw: 4,
                shadoww: 4,
                weapon: "sparkw",
                weakness: ["shadoww"],
              },
            ];
            break;
          case "snake":
            tempRow = [
              {
                megaw: 1,
                needlew: 4,
                magnetw: 0,
                geminiw: 1,
                hardw: 2,
                topw: 2,
                snakew: 4,
                sparkw: 1,
                shadoww: 2,
                weapon: "snakew",
                weakness: ["needlew"],
              },
            ];
            break;
          case "gemini":
            tempRow = [
              {
                megaw: 1,
                needlew: 1,
                magnetw: 2,
                geminiw: 4,
                hardw: 2,
                topw: 2,
                snakew: 5,
                sparkw: 1,
                shadoww: 2,
                weapon: "geminiw",
                weakness: ["snakew"],
              },
            ];
            break;
        }
        break;
      case "MMIV":
        break;
      case "MMV":
        break;
      case "MM7":
        break;
      case "MM8":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
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
            tempRow = [
              {
                megaw: "2:3:4",
                tenguw1: "2:1",
                astrow1: 0,
                swordw: 2,
                clownw: 1,
                searchw: 1,
                frostw: 6,
                grenadew: 1,
                aquaw: 1,
                weapon: "tenguw1",
                weakness: ["megaw", "frostw"],
              },
            ];
            break;
          case "cut":
            tempRow = [
              {
                megaw: "2:3:4",
                tenguw1: "2:3",
                astrow1: 6,
                swordw: 4,
                clownw: 4,
                searchw: 3,
                frostw: 4,
                grenadew: 3,
                aquaw: 4,

                weapon: "NONE",
                weakness: ["megaw", "astrow1"],
              },
            ];
            break;
        }
        break;
      case "MM&B1":
        tempColumns = [
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
            tempRow = [
              {
                megaw: "1:3",
                bassw: "1:2",
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
              },
            ];
            break;
        }
        switch (player) {
          case "megaw":
            tempColumns.splice(0, 0, {
              name: "megaw",
              field: "megaw",
              align: "start",
              sortable: false,
            });
            break;
          case "bass":
            tempColumns.splice(0, 0, {
              name: "bassw",
              field: "bassw",
              align: "start",
              sortable: false,
            });
            break;
        }
        break;
      case "MMP1":
        break;
      case "MMP2":
        break;
      case "MM9":
        break;
      case "MM10":
        break;
      case "MM11":
        break;
      case "MM1D":
        break;
      case "MM3D":
        break;
      case "MM&B2":
        break;
      case "MMT2":
        break;
      case "MMT3":
        break;
      case "MMGG":
        break;
    }
    var arrayWeaknesses = [];
    switch (funct) {
      case 1:
        var tempObj = { col: tempColumns, row: tempRow };
        return tempObj;
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
      case 4:
        if (tempRow.hasOwnProperty("notes")) {
          return tempRow.notes;
        } else {
          return "";
        }
    }
  }

  return { damageDataTable2, specialWeapons };
}
