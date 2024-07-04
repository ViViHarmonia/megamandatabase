import { ref } from "vue";
export function useDamageDataTable() {
  const specialWeapons = ref([
    //base
    { code: "nullw", name: "None", icon: "/weapons/base/none.png" },
    {
      code: "megaw",
      name: "Mega/Rock Buster",
      icon: "/weapons/base/megabuster.png",
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
    //MM7
    {
      code: "freezew",
      name: "Freeze Cracker",
      icon: "/weapons/mm7/freezecracker.png",
    },
    { code: "junkw", name: "Junk Shield", icon: "/weapons/mm7/junkshield.png" },
    {
      code: "burstw",
      name: "Danger Wrap",
      icon: "/weapons/mm7/dangerwrap.png",
    },
    {
      code: "cloudw",
      name: "Thunder Bolt",
      icon: "/weapons/mm7/thunderbolt.png",
    },
    { code: "springw", name: "Wild Coil", icon: "/weapons/mm7/wildcoil.png" },
    { code: "slashw", name: "Slash Claw", icon: "/weapons/mm7/slashclaw.png" },
    {
      code: "shadew",
      name: "Noise Crush",
      icon: "/weapons/mm7/noisecrush.png",
    },
    {
      code: "turbow",
      name: "Scorch Wheel",
      icon: "/weapons/mm7/scorchwheel.png",
    },
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
      icon: "/weapons/mm9/concreteshot.png",
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
    //console.log(robot + ", " + game + ", " + player + ", " + funct);
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
        }
        break;
      case "WW1":
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
          case "buster1":
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
              },
            ];
            break;
          case "buster2":
            tempRow = [
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
              },
            ];
            break;
        }
        break;
      case "WW2":
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
          case "buster1":
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
              },
            ];
            break;
          case "buster2":
            tempRow = [
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
              },
            ];
            break;
        }
        break;
      case "WW3":
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
          case "buster1":
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
              },
            ];
            break;
          case "buster2":
            tempRow = [
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
            name: "centaurw1",
            field: "centaurw1",
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
                centaurw1: 0,
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
                centaurw1: 0,
                flamew: 1,
                knightw: 4,
                plantw: 0,
                tomahawkw: 1,
                windw: 1,
                yamatow: 1,
                weapon: "centaurw1",
                weakness: ["knightw"],
              },
            ];
            break;
          case "flame":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 1,
                centaurw1: 0,
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
                centaurw1: 0,
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
                centaurw1: 0,
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
                centaurw1: 0,
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
                centaurw1: 4,
                flamew: 1,
                knightw: 1,
                plantw: 0,
                tomahawkw: 1,
                windw: 1,
                yamatow: 1,
                weapon: "windw",
                weakness: ["centaurw1"],
              },
            ];
            break;
          case "yamato":
            tempRow = [
              {
                megaw: "1:3",
                blizzardw: 1,
                centaurw1: 0,
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
          {
            name: "drillw",
            field: "drillw",
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
          case "shadow":
            tempRow = [
              {
                megaw: "1:3",
                shadoww: "X",
                sparkw: 1,
                snakew: 1,
                geminiw: 3,
                dustw: "X",
                skullw: "X",
                divew: "X",
                drillw: "X",
                weapon: "shadoww",
                weakness: ["geminiw"],
              },
            ];
            break;
          case "spark":
            tempRow = [
              {
                megaw: "1:3",
                shadoww: 3,
                sparkw: "X",
                snakew: 0,
                geminiw: 1,
                dustw: "X",
                skullw: "X",
                divew: "X",
                drillw: "X",
                weapon: "sparkw",
                weakness: ["shadoww"],
              },
            ];
            break;
          case "snake":
            tempRow = [
              {
                megaw: "1:3",
                shadoww: 2,
                sparkw: 3,
                snakew: "X",
                geminiw: 1,
                dustw: "X",
                skullw: "X",
                divew: "X",
                drillw: "X",
                weapon: "snakew",
                weakness: ["sparkw"],
              },
            ];
            break;
          case "gemini":
            tempRow = [
              {
                megaw: "1:3",
                shadoww: 2,
                sparkw: 1,
                snakew: 3,
                geminiw: "X",
                dustw: "X",
                skullw: "X",
                divew: "X",
                drillw: "X",
                weapon: "geminiw",
                weakness: ["snakew"],
              },
            ];
            break;
          case "dust":
            tempRow = [
              {
                megaw: "1:3",
                shadoww: 1,
                sparkw: 1,
                snakew: 1,
                geminiw: 1,
                dustw: "X",
                skullw: 1,
                divew: 1,
                drillw: 2,
                weapon: "dustw",
                weakness: ["drillw"],
              },
            ];
            break;
          case "skull":
            tempRow = [
              {
                megaw: "1:3",
                shadoww: 1,
                sparkw: 0,
                snakew: 1,
                geminiw: 1,
                dustw: 3,
                skullw: "X",
                divew: 1,
                drillw: 1,
                weapon: "skullw",
                weakness: ["dustw"],
              },
            ];
            break;
          case "dive":
            tempRow = [
              {
                megaw: "1:3",
                shadoww: 1,
                sparkw: 0,
                snakew: 1,
                geminiw: 1,
                dustw: 3,
                skullw: 3,
                divew: "X",
                drillw: 1,
                weapon: "divew",
                weakness: ["skullw", "dustw"],
              },
            ];
            break;
          case "drill":
            tempRow = [
              {
                megaw: "1:3",
                shadoww: 1,
                sparkw: 0,
                snakew: 1,
                geminiw: 1,
                dustw: 1,
                skullw: 1,
                divew: 3,
                drillw: "X",
                weapon: "drillw",
                weakness: ["divew"],
              },
            ];
            break;
          case "punk":
            tempRow = [
              {
                megaw: "1:3",
                shadoww: 0,
                sparkw: 0,
                snakew: 0,
                geminiw: 0,
                dustw: 0,
                skullw: 0,
                divew: 0,
                drillw: 0,
                weapon: "punkw",
                weakness: ["megaw"],
                notes: "Only buster can damage him at all.",
              },
            ];
            break;
        }
        break;
      case "MMIV":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "toadw",
            field: "toadw",
            align: "center",
            sortable: false,
          },
          {
            name: "brightw",
            field: "brightw",
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
            name: "crystalw",
            field: "crystalw",
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
            name: "stonew",
            field: "stonew",
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
            name: "balladew",
            field: "balladew",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "toad":
            tempRow = [
              {
                megaw: "1:3",
                toadw: 2,
                brightw: "X",
                pharaohw1: "1:3",
                ringw: 2,
                crystalw: 1,
                napalmw: 2,
                stonew: 1,
                chargew: 1,
                balladew: 1,
                weapon: "toadw",
                weakness: ["ringw", "toadw", "napalmw"],
              },
            ];
            break;
          case "bright":
            tempRow = [
              {
                megaw: "1:3",
                toadw: 6,
                brightw: "X",
                pharaohw1: "1:3",
                ringw: 1,
                crystalw: 1,
                napalmw: 1,
                stonew: 2,
                chargew: 1,
                balladew: 1,
                weapon: "brightw",
                weakness: ["toadw"],
              },
            ];
            break;
          case "pharaoh":
            tempRow = [
              {
                megaw: "1:3",
                toadw: 2,
                brightw: "YES",
                pharaohw1: "1:3",
                ringw: 1,
                crystalw: 2,
                napalmw: 1,
                stonew: 1,
                chargew: 1,
                balladew: 1,
                weapon: "pharaohw1",
                weakness: ["brightw", "crystalw"],
              },
            ];
            break;
          case "ring":
            tempRow = [
              {
                megaw: "1:3",
                toadw: 2,
                brightw: "X",
                pharaohw1: "2:6",
                ringw: 1,
                crystalw: 1,
                napalmw: 1,
                stonew: 1,
                chargew: 2,
                balladew: 1,
                weapon: "ringw",
                weakness: ["pharaohw1", "chargew"],
              },
            ];
            break;
          case "crystal":
            tempRow = [
              {
                megaw: "1:3",
                toadw: 2,
                brightw: "X",
                pharaohw1: "1:3",
                ringw: 2,
                crystalw: 1,
                napalmw: 1,
                stonew: 1,
                chargew: 3,
                balladew: 1,
                weapon: "crystalw",
                weakness: ["chargew", "ringw"],
              },
            ];
            break;
          case "napalm":
            tempRow = [
              {
                megaw: "1:3",
                toadw: 2,
                brightw: "X",
                pharaohw1: "2:6",
                ringw: 1,
                crystalw: 3,
                napalmw: 1,
                stonew: 1,
                chargew: 1,
                balladew: 1,
                weapon: "napalmw",
                weakness: ["crystalw", "pharaohw1"],
              },
            ];
            break;
          case "stone":
            tempRow = [
              {
                megaw: "1:3",
                toadw: 2,
                brightw: "X",
                pharaohw1: "1:3",
                ringw: 1,
                crystalw: 1,
                napalmw: 3,
                stonew: 1,
                chargew: 1,
                balladew: 2,
                weapon: "stonew",
                weakness: ["napalmw", "balladew"],
              },
            ];
            break;
          case "charge":
            tempRow = [
              {
                megaw: "1:3",
                toadw: "2 x 2",
                brightw: "X",
                pharaohw1: "1:3",
                ringw: 1,
                crystalw: 1,
                napalmw: 1,
                stonew: 4,
                chargew: 1,
                balladew: 1,
                weapon: "chargew",
                weakness: ["stonew", "toadw"],
              },
            ];
            break;
          case "ballade":
            tempRow = [
              {
                megaw: "1:3",
                toadw: 2,
                brightw: "X",
                pharaohw1: "1:3",
                ringw: 1,
                crystalw: 1,
                napalmw: 1,
                stonew: 2,
                chargew: 1,
                balladew: "X",
                weapon: "balladew",
                weakness: ["stonew", "megaw"],
                notes: "1st fight pre-Stone. Get B.Cracker post 2nd fight. ",
              },
            ];
            break;
        }
        break;
      case "MMV":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "mercuryw",
            field: "mercuryw",
            align: "center",
            sortable: false,
          },
          {
            name: "venusw",
            field: "venusw",
            align: "center",
            sortable: false,
          },
          {
            name: "marsw",
            field: "marsw",
            align: "center",
            sortable: false,
          },
          {
            name: "neptunew",
            field: "neptunew",
            align: "center",
            sortable: false,
          },
          {
            name: "jupiterw",
            field: "jupiterw",
            align: "center",
            sortable: false,
          },
          {
            name: "saturnw",
            field: "saturnw",
            align: "center",
            sortable: false,
          },
          {
            name: "uranusw",
            field: "uranusw",
            align: "center",
            sortable: false,
          },
          {
            name: "plutow",
            field: "plutow",
            align: "center",
            sortable: false,
          },
          {
            name: "terraw",
            field: "terraw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "mercury":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 1,
                marsw: 1,
                jupiterw: 1,
                saturnw: 5,
                uranusw: "X",
                plutow: 1,
                neptunew: 2,
                terraw: 1,
                weapon: "mercuryw",
                weakness: ["saturnw"],
              },
            ];
            break;
          case "venus":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 0,
                marsw: 3,
                jupiterw: 1,
                saturnw: 0,
                uranusw: "X",
                plutow: 2,
                neptunew: 1,
                terraw: 1,
                weapon: "venusw",
                weakness: ["marsw"],
              },
            ];
            break;
          case "mars":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 1,
                marsw: 0,
                jupiterw: 2,
                saturnw: 0,
                uranusw: "X",
                plutow: 1,
                neptunew: 3,
                terraw: 1,
                weapon: "marsw",
                weakness: ["neptunew"],
              },
            ];
            break;
          case "jupiter":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 3,
                marsw: 1,
                jupiterw: 0,
                saturnw: 0,
                uranusw: "X",
                plutow: 2,
                neptunew: 2,
                terraw: 1,
                weapon: "jupiterw",
                weakness: ["venusw"],
              },
            ];
            break;
          case "saturn":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 0,
                marsw: 2,
                jupiterw: 4,
                saturnw: 0,
                uranusw: 0,
                plutow: 0,
                neptunew: 0,
                terraw: 0,
                weapon: "saturnw",
                weakness: ["jupiterw"],
              },
            ];
            break;
          case "uranus":
            tempRow = [
              {
                megaw: "1:1:1",
                mercuryw: 0,
                venusw: 0,
                marsw: 0,
                jupiterw: 0,
                saturnw: 0,
                uranusw: 0,
                plutow: 5,
                neptunew: 0,
                terraw: 1,
                weapon: "uranusw",
                weakness: ["plutow"],
              },
            ];
            break;
          case "pluto":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 3,
                venusw: 1,
                marsw: 1,
                jupiterw: 2,
                saturnw: 0,
                uranusw: "X",
                plutow: 0,
                neptunew: 1,
                terraw: 1,
                weapon: "plutow",
                weakness: ["mercuryw"],
              },
            ];
            break;
          case "neptune":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 1,
                marsw: 2,
                jupiterw: 1,
                saturnw: 0,
                uranusw: "X",
                plutow: 1,
                neptunew: 0,
                terraw: 3,
                weapon: "neptunew",
                weakness: ["terraw"],
              },
            ];
            break;
          case "terra":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 0,
                marsw: 1,
                jupiterw: 1,
                saturnw: 0,
                uranusw: 4,
                plutow: 1,
                neptunew: 2,
                terraw: "X",
                weapon: "terraw",
                weakness: ["uranusw"],
              },
            ];
            break;
          case "enker":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 0,
                marsw: 0,
                jupiterw: 0,
                saturnw: 0,
                uranusw: "X",
                plutow: 0,
                neptunew: 0,
                terraw: 0,
                weapon: "NONE",
                weakness: ["megaw"],
                notes: "Only buster can damage him at all.",
              },
            ];
            break;
          case "quint":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 1,
                marsw: 3,
                jupiterw: 1,
                saturnw: 0,
                uranusw: "X",
                plutow: 0,
                neptunew: 1,
                terraw: 1,
                weapon: "NONE",
                weakness: ["marsw"],
              },
            ];
            break;
          case "punk":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 3,
                marsw: 1,
                jupiterw: 1,
                saturnw: 0,
                uranusw: "X",
                plutow: 1,
                neptunew: 4,
                terraw: 1,
                weapon: "NONE",
                weakness: ["neptunew", "venusw"],
              },
            ];
            break;
          case "ballade":
            tempRow = [
              {
                megaw: "1:2:3",
                mercuryw: 0,
                venusw: 3,
                marsw: 3,
                jupiterw: 1,
                saturnw: 0,
                uranusw: "X",
                plutow: 2,
                neptunew: 2,
                terraw: 1,
                weapon: "NONE",
                weakness: ["venusw", "marsw"],
              },
            ];
            break;
        }
        break;
      case "MM7":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "freezew",
            field: "freezew",
            align: "center",
            sortable: false,
          },
          {
            name: "junkw",
            field: "junkw",
            align: "center",
            sortable: false,
          },
          {
            name: "burstw",
            field: "burstw",
            align: "center",
            sortable: false,
          },
          {
            name: "cloudw",
            field: "cloudw",
            align: "center",
            sortable: false,
          },
          {
            name: "springw",
            field: "springw",
            align: "center",
            sortable: false,
          },
          {
            name: "slashw",
            field: "slashw",
            align: "center",
            sortable: false,
          },
          {
            name: "shadew",
            field: "shadew",
            align: "center",
            sortable: false,
          },
          {
            name: "turbow",
            field: "turbow",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "freeze":
            tempRow = [
              {
                megaw: "1:1:2",
                freezew: "+4:+4",
                junkw: "4:4",
                burstw: "1:1:1",
                cloudw: "1:1",
                springw: "1:1",
                slashw: 1,
                shadew: "1:1",
                turbow: 3,
                weapon: "freezew",
                weakness: ["junkw", "turbow"],
              },
            ];
            break;
          case "junk":
            tempRow = [
              {
                megaw: "1:1:2",
                freezew: "1:1",
                junkw: "0:0",
                burstw: "1:1:1",
                cloudw: "4:4",
                springw: "1:1",
                slashw: 2,
                shadew: "1:2",
                turbow: 0,
                weapon: "junkw",
                weakness: ["cloudw"],
              },
            ];
            break;
          case "burst":
            tempRow = [
              {
                megaw: "1:1:2",
                freezew: "4:3",
                junkw: "1:1",
                burstw: "0:0:0",
                cloudw: "1:1",
                springw: "1:1",
                slashw: 1,
                shadew: "1:2",
                turbow: 4,
                weapon: "burstw",
                weakness: ["turbow", "freezew"],
              },
            ];
            break;
          case "cloud":
            tempRow = [
              {
                megaw: "1:1:2",
                freezew: "1:1",
                junkw: "0:0",
                burstw: "4:4:4",
                cloudw: "2:2",
                springw: "1:1",
                slashw: 1,
                shadew: "1:2",
                turbow: 1,
                weapon: "cloudw",
                weakness: ["burstw"],
              },
            ];
            break;
          case "spring":
            tempRow = [
              {
                megaw: "1:1:2",
                freezew: "1:1",
                junkw: "1:1",
                burstw: "1:1:1",
                cloudw: "0:0",
                springw: "0:0",
                slashw: 4,
                shadew: "1:2",
                turbow: 1,
                weapon: "springw",
                weakness: ["slashw"],
              },
            ];
            break;
          case "slash":
            tempRow = [
              {
                megaw: "1:1:2",
                freezew: "6:4",
                junkw: "1:1",
                burstw: "0:0:0",
                cloudw: "1:1",
                springw: "1:1",
                slashw: 1,
                shadew: "1:2",
                turbow: 4,
                weapon: "slashw",
                weakness: ["freezew", "turbow"],
              },
            ];
            break;
          case "shade":
            tempRow = [
              {
                megaw: "1:1:2",
                freezew: "1:1",
                junkw: "1:1",
                burstw: "1:1:1",
                cloudw: "1:1",
                springw: "3:6",
                slashw: 1,
                shadew: "0:0",
                turbow: 1,
                weapon: "shadew",
                weakness: ["springw"],
              },
            ];
            break;
          case "turbo":
            tempRow = [
              {
                megaw: "1:1:2",
                freezew: "1:1",
                junkw: "1:1",
                burstw: "1:1:1",
                cloudw: "0:0",
                springw: "1:1",
                slashw: 1,
                shadew: "3:6",
                turbow: 0,
                weapon: "turbow",
                weakness: ["shadew"],
              },
            ];
            break;
        }
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
          case "astro":
            tempRow = [
              {
                megaw: "1:1:3",
                tenguw1: "1:1",
                astrow1: 0,
                swordw: 1,
                clownw: 1,
                searchw: 3,
                frostw: 1,
                grenadew: 2,
                aquaw: 1,
                weapon: "astrow1",
                weakness: ["searchw"],
              },
            ];
            break;
          case "sword":
            tempRow = [
              {
                megaw: "1:1:3",
                tenguw1: "1:1",
                astrow1: 0,
                swordw: 1,
                clownw: 1,
                searchw: 1,
                frostw: 2,
                grenadew: 1,
                aquaw: 4,
                weapon: "swordw",
                weakness: ["aquaw"],
              },
            ];
            break;
          case "clown":
            tempRow = [
              {
                megaw: "1:2:3",
                tenguw1: "1:4",
                astrow1: 0,
                swordw: 1,
                clownw: 1,
                searchw: 1,
                frostw: 1,
                grenadew: 1,
                aquaw: 1,
                weapon: "clownw",
                weakness: ["tenguw1"],
              },
            ];
            break;
          case "search":
            tempRow = [
              {
                megaw: "1:1:3",
                tenguw1: "1:1",
                astrow1: 0,
                swordw: 4,
                clownw: 1,
                searchw: 1,
                frostw: 1,
                grenadew: 1,
                aquaw: 1,
                weapon: "searchw",
                weakness: ["swordw"],
              },
            ];
            break;
          case "frost":
            tempRow = [
              {
                megaw: "1:2:3",
                tenguw1: "1:1",
                astrow1: 0,
                swordw: 3,
                clownw: 1,
                searchw: 0,
                frostw: 0,
                grenadew: 3,
                aquaw: 0,
                weapon: "frostw",
                weakness: ["grenadew", "swordw"],
              },
            ];
            break;
          case "grenade":
            tempRow = [
              {
                megaw: "1:2:3",
                tenguw1: "1:1",
                astrow1: 0,
                swordw: 1,
                clownw: 4,
                searchw: 1,
                frostw: 1,
                grenadew: 2,
                aquaw: 1,
                weapon: "grenadew",
                weakness: ["clownw"],
              },
            ];
            break;
          case "aqua":
            tempRow = [
              {
                megaw: "1:1:2",
                tenguw1: "1:1",
                astrow1: 8,
                swordw: 1,
                clownw: 1,
                searchw: 1,
                frostw: 1,
                grenadew: 1,
                aquaw: 0,
                weapon: "aquaw",
                weakness: ["astrow1"],
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
                notes: "Only available in Sega Saturn as miniboss",
              },
            ];
            break;
          case "wood":
            tempRow = [
              {
                megaw: "1:2:3",
                tenguw1: "1:1",
                astrow1: 4,
                swordw: 4,
                clownw: 2,
                searchw: "X",
                frostw: 2,
                grenadew: 1,
                aquaw: 0,
                weapon: "NONE",
                weakness: ["swordw", "astrow1"],
                notes: "Only available in Sega Saturn as miniboss",
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
          case "astro":
            tempRow = [
              {
                megaw: "1:3",
                bassw: "1:2",
                coldw: 0,
                burnerw: 1,
                piratew: 1,
                groundw: "1:0:0",
                tenguw2: "0:0:0",
                magicw: 2,
                astrow2: 0,
                dynamow: 1,
                weapon: "astrow2",
                weakness: ["magicw"],
              },
            ];
            break;
          case "cold":
            tempRow = [
              {
                megaw: "1:3",
                bassw: "1:2",
                coldw: "+3",
                burnerw: 2,
                piratew: 1,
                groundw: "1:1:1",
                tenguw2: "1:1:1",
                magicw: 1,
                astrow2: 1,
                dynamow: 3,
                weapon: "coldw",
                weakness: ["dynamow"],
              },
            ];
            break;
          case "burner":
            tempRow = [
              {
                megaw: "1:3",
                bassw: "1:2",
                coldw: "3:8",
                burnerw: 0,
                piratew: 1,
                groundw: "1:1:1",
                tenguw2: "1:1:1",
                magicw: 0,
                astrow2: 1,
                dynamow: 1,
                weapon: "burnerw",
                weakness: ["coldw"],
              },
            ];
            break;
          case "pirate":
            tempRow = [
              {
                megaw: "1:3",
                bassw: "1:2",
                coldw: 1,
                burnerw: "3:4",
                piratew: 1,
                groundw: "1:1:1",
                tenguw2: "1:2:2",
                magicw: 1,
                astrow2: 0,
                dynamow: 2,
                weapon: "piratew",
                weakness: ["burnerw"],
              },
            ];
            break;
          case "ground":
            tempRow = [
              {
                megaw: "1:3",
                bassw: "1:2",
                coldw: 1,
                burnerw: 1,
                piratew: 4,
                groundw: "0:0:0",
                tenguw2: "1:0:1",
                magicw: 1,
                astrow2: 0,
                dynamow: 1,
                weapon: "groundw",
                weakness: ["piratew"],
              },
            ];
            break;
          case "magic":
            tempRow = [
              {
                megaw: "1:3",
                bassw: "1:2",
                coldw: 0,
                burnerw: 2,
                piratew: 1,
                groundw: "2:1:1",
                tenguw2: "4:3:4",
                magicw: 1,
                astrow2: 1,
                dynamow: 2,
                weapon: "magicw",
                weakness: ["tenguw2"],
              },
            ];
            break;
          case "dynamo":
            tempRow = [
              {
                megaw: "1:3",
                bassw: "1:2",
                coldw: 1,
                burnerw: 1,
                piratew: 1,
                groundw: "1:1:0",
                tenguw2: "0:0:2",
                magicw: 1,
                astrow2: 2,
                dynamow: 0,
                weapon: "dynamow",
                weakness: ["astrow2"],
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
      case "MMP1-1":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "gutsw",
            field: "gutsw",
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
            name: "heatw",
            field: "heatw",
            align: "center",
            sortable: false,
          },
          {
            name: "cutw",
            field: "cutw",
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
            name: "crashw",
            field: "crashw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "guts":
            tempRow = [
              {
                megaw: "1:4:10:16",
                gutsw: "X",
                woodw: "1:8",
                heatw: "3:4:4:6",
                cutw: 3,
                icew: 3,
                crashw: "12:8",
                weapon: "gutsw",
                weakness: ["crashw"],
              },
            ];
            break;
          case "wood":
            tempRow = [
              {
                megaw: "1:4:10:16",
                gutsw: 6,
                woodw: "X",
                heatw: "6:8:8:12",
                cutw: 3,
                icew: 3,
                crashw: "6:4",
                weapon: "woodw",
                weakness: ["heatw"],
              },
            ];
            break;
          case "heat":
            tempRow = [
              {
                megaw: "1:4:10:16",
                gutsw: 6,
                woodw: "1:8",
                heatw: "X",
                cutw: 3,
                icew: 6,
                crashw: "6:4",
                weapon: "heatw",
                weakness: ["icew"],
              },
            ];
            break;
          case "cut":
            tempRow = [
              {
                megaw: "1:4:10:16",
                gutsw: 6,
                woodw: "2:16",
                heatw: "3:4:4:6",
                cutw: "X",
                icew: 3,
                crashw: "6:4",
                weapon: "cutw",
                weakness: ["woodw"],
              },
            ];
            break;
          case "ice":
            tempRow = [
              {
                megaw: "1:4:10:16",
                gutsw: 12,
                woodw: "1:8",
                heatw: "3:4:4:6",
                cutw: 3,
                icew: "X",
                crashw: "6:4",
                weapon: "icew",
                weakness: ["gutsw"],
              },
            ];
            break;
          case "crash":
            tempRow = [
              {
                megaw: "1:4:10:16",
                gutsw: 6,
                woodw: "1:8",
                heatw: "3:4:4:6",
                cutw: 6,
                icew: 3,
                crashw: "X",
                weapon: "crashw",
                weakness: ["cutw"],
              },
            ];
            break;
        }
        break;
      case "MMP1-2":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "napalmw",
            field: "napalmw",
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
            name: "gyrow",
            field: "gyrow",
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
            name: "dustw",
            field: "dustw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "napalm":
            tempRow = [
              {
                megaw: "1:4:10:16",
                napalmw: "X",
                plantw: "1:8",
                gyrow: 4,
                magnetw: 4,
                geminiw: 8,
                dustw: "6:3",
                weapon: "napalmw",
                weakness: ["geminiw"],
              },
            ];
            break;
          case "plant":
            tempRow = [
              {
                megaw: "1:4:10:16",
                napalmw: "3:2",
                plantw: "X",
                gyrow: 8,
                magnetw: 4,
                geminiw: 4,
                dustw: "6:3",
                weapon: "plantw",
                weakness: ["gyrow"],
              },
            ];
            break;
          case "gyro":
            tempRow = [
              {
                megaw: "1:4:10:16",
                napalmw: "6:4",
                plantw: "1:8",
                gyrow: "X",
                magnetw: 4,
                geminiw: 4,
                dustw: "6:3",
                weapon: "gyrow",
                weakness: ["napalmw"],
              },
            ];
            break;
          case "magnet":
            tempRow = [
              {
                megaw: "1:4:10:16",
                napalmw: "3:2",
                plantw: "1:8",
                gyrow: 8,
                magnetw: "X",
                geminiw: 4,
                dustw: "6:3",
                weapon: "magnetw",
                weakness: ["gyrow"],
              },
            ];
            break;
          case "gemini":
            tempRow = [
              {
                megaw: "1:4:10:16",
                napalmw: "3:2",
                plantw: "1:8",
                gyrow: 4,
                magnetw: 4,
                geminiw: "X",
                dustw: "6:3",
                weapon: "geminiw",
                weakness: ["snakew"],
              },
            ];
            break;
          case "dust":
            tempRow = [
              {
                megaw: "1:4:10:16",
                napalmw: "6:4",
                plantw: "1:8",
                gyrow: 4,
                magnetw: 4,
                geminiw: 4,
                dustw: "X",
                weapon: "dustw",
                weakness: ["napalmw"],
              },
            ];
            break;
        }
        break;
      case "MMP1-3":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "turbow",
            field: "turbow",
            align: "center",
            sortable: false,
          },
          {
            name: "slashw",
            field: "slashw",
            align: "center",
            sortable: false,
          },
          {
            name: "cloudw",
            field: "cloudw",
            align: "center",
            sortable: false,
          },
          {
            name: "shadew",
            field: "shadew",
            align: "center",
            sortable: false,
          },
          {
            name: "freezew",
            field: "freezew",
            align: "center",
            sortable: false,
          },
          {
            name: "junkw",
            field: "junkw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "turbo":
            tempRow = [
              {
                megaw: "1:4:10:16",
                turbow: "X",
                slashw: 6,
                cloudw: "6:6",
                shadew: "8:16",
                freezew: "3:3",
                junkw: "1:6",
                weapon: "turbow",
                weakness: ["shadew"],
              },
            ];
            break;
          case "slash":
            tempRow = [
              {
                megaw: "1:4:10:16",
                turbow: 4,
                slashw: "X",
                cloudw: "6:6",
                shadew: "4:8",
                freezew: "6:6",
                junkw: "1:6",
                weapon: "slashw",
                weakness: ["freezew"],
              },
            ];
            break;
          case "cloud":
            tempRow = [
              {
                megaw: "1:4:10:16",
                turbow: 8,
                slashw: 6,
                cloudw: "X",
                shadew: "4:8",
                freezew: "3:3",
                junkw: "1:6",
                weapon: "cloudw",
                weakness: ["turbow"],
              },
            ];
            break;
          case "shade":
            tempRow = [
              {
                megaw: "1:4:10:16",
                turbow: 4,
                slashw: 12,
                cloudw: "6:6",
                shadew: "X",
                freezew: "3:3",
                junkw: "1:6",
                weapon: "shadew",
                weakness: ["slashw"],
              },
            ];
            break;
          case "freeze":
            tempRow = [
              {
                megaw: "1:4:10:16",
                turbow: 4,
                slashw: 6,
                cloudw: "6:6",
                shadew: "4:8",
                freezew: "X",
                junkw: "2:12",
                weapon: "freezew",
                weakness: ["junkw"],
              },
            ];
            break;
          case "junk":
            tempRow = [
              {
                megaw: "1:4:10:16",
                turbow: 4,
                slashw: 6,
                cloudw: "12:12",
                shadew: "4:8",
                freezew: "3:3",
                junkw: "X",
                weapon: "junkw",
                weakness: ["cloudw"],
              },
            ];
            break;
        }
        break;
      case "MMP2-A":
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
            name: "plantw",
            field: "plantw",
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
            name: "centaurw2",
            field: "centaurw2",
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
          case "shadow":
            tempRow = [
              {
                megaw: "1:4:6:8",
                shadoww: "X",
                plantw: "1:6",
                gyrow: 3,
                centaurw2: 6,
                bubblew: 4,
                heatw: "2:4:3",
                weapon: "shadoww",
                weakness: ["centaurw2"],
              },
            ];
            break;
          case "plant":
            tempRow = [
              {
                megaw: "1:4:6:8",
                shadoww: 3,
                plantw: "X",
                gyrow: 3,
                centaurw2: 3,
                bubblew: 4,
                heatw: "4:8:6",
                weapon: "plantw",
                weakness: ["heatw"],
              },
            ];
            break;
          case "gyro":
            tempRow = [
              {
                megaw: "1:4:6:8",
                shadoww: 3,
                plantw: "2:12",
                gyrow: "X",
                centaurw2: 3,
                bubblew: 4,
                heatw: "2:4:3",
                weapon: "gyrow",
                weakness: ["plantw"],
              },
            ];
            break;
          case "centaur":
            tempRow = [
              {
                megaw: "1:4:6:8",
                shadoww: 3,
                plantw: "1:6",
                gyrow: 6,
                centaurw2: "X",
                bubblew: 4,
                heatw: "2:4:3",
                weapon: "centaurw2",
                weakness: ["gyrow"],
              },
            ];
            break;
          case "bubble":
            tempRow = [
              {
                megaw: "1:4:6:8",
                shadoww: 6,
                plantw: "1:6",
                gyrow: 3,
                centaurw2: 3,
                bubblew: "X",
                heatw: "2:4:3",
                weapon: "bubblew",
                weakness: ["shadoww"],
              },
            ];
            break;
          case "heat":
            tempRow = [
              {
                megaw: "1:4:6:8",
                shadoww: 3,
                plantw: "1:6",
                gyrow: 3,
                centaurw2: 3,
                bubblew: 8,
                heatw: "X",
                weapon: "heatw",
                weakness: ["bubblew"],
              },
            ];
            break;
        }
        break;
      case "MMP2-B":
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
            name: "stonew",
            field: "stonew",
            align: "center",
            sortable: false,
          },
          {
            name: "shadew",
            field: "shadew",
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
            name: "divew",
            field: "divew",
            align: "center",
            sortable: false,
          },
          {
            name: "slashw",
            field: "slashw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "cut":
            tempRow = [
              {
                megaw: "1:4:6:8",
                cutw: "X",
                stonew: 6,
                shadew: "3:6",
                elecw: 4,
                divew: 3,
                slashw: 12,
                weapon: "cutw",
                weakness: ["slashw"],
              },
            ];
            break;
          case "stone":
            tempRow = [
              {
                megaw: "1:4:6:8",
                cutw: 3,
                stonew: "X",
                shadew: "6:12",
                elecw: 4,
                divew: 3,
                slashw: 6,
                weapon: "stonew",
                weakness: ["shadew"],
              },
            ];
            break;
          case "shade":
            tempRow = [
              {
                megaw: "1:4:6:8",
                cutw: 6,
                stonew: 6,
                shadew: "X",
                elecw: 4,
                divew: 3,
                slashw: 6,
                weapon: "shadew",
                weakness: ["cutw"],
              },
            ];
            break;
          case "elec":
            tempRow = [
              {
                megaw: "1:4:6:8",
                cutw: 3,
                stonew: 12,
                shadew: "3:6",
                elecw: "X",
                divew: 3,
                slashw: 6,
                weapon: "elecw",
                weakness: ["stonew"],
              },
            ];
            break;
          case "dive":
            tempRow = [
              {
                megaw: "1:4:6:8",
                cutw: 3,
                stonew: 6,
                shadew: "3:6",
                elecw: 8,
                divew: "X",
                slashw: 6,
                weapon: "divew",
                weakness: ["elecw"],
              },
            ];
            break;
          case "slash":
            tempRow = [
              {
                megaw: "1:4:6:8",
                cutw: 3,
                stonew: 6,
                shadew: "3:6",
                elecw: 4,
                divew: 6,
                slashw: "X",
                weapon: "slashw",
                weakness: ["divew"],
              },
            ];
            break;
        }
        break;
      case "MMP2-C":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "gutsw",
            field: "gutsw",
            align: "center",
            sortable: false,
          },
          {
            name: "pharaohw2",
            field: "pharaohw2",
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
            name: "quickw",
            field: "quickw",
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
            name: "napalmw",
            field: "napalmw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "guts":
            tempRow = [
              {
                megaw: "1:4:6:8",
                gutsw: "X",
                pharaohw2: 4,
                airw: 3,
                quickw: 3,
                geminiw: 4,
                napalmw: "6:2",
                weapon: "gutsw",
                weakness: ["napalmw"],
              },
            ];
            break;
          case "pharaoh":
            tempRow = [
              {
                megaw: "1:4:6:8",
                gutsw: 6,
                pharaohw2: "X",
                airw: 3,
                quickw: 6,
                geminiw: 4,
                napalmw: "3:1",
                weapon: "pharaohw2",
                weakness: ["quickw"],
              },
            ];
            break;
          case "air":
            tempRow = [
              {
                megaw: "1:4:6:8",
                gutsw: 12,
                pharaohw2: 4,
                airw: "X",
                quickw: 3,
                geminiw: 4,
                napalmw: "3:1",
                weapon: "airw",
                weakness: ["gutsw"],
              },
            ];
            break;
          case "quick":
            tempRow = [
              {
                megaw: "1:4:6:8",
                gutsw: 6,
                pharaohw2: 4,
                airw: 6,
                quickw: "X",
                geminiw: 4,
                napalmw: "3:1",
                weapon: "quickw",
                weakness: ["airw"],
              },
            ];
            break;
          case "gemini":
            tempRow = [
              {
                megaw: "1:4:6:8",
                gutsw: 6,
                pharaohw2: 8,
                airw: 3,
                quickw: 3,
                geminiw: "X",
                napalmw: "3:1",
                weapon: "geminiw",
                weakness: ["pharaohw2"],
              },
            ];
            break;
          case "napalm":
            tempRow = [
              {
                megaw: "1:4:6:8",
                gutsw: 6,
                pharaohw2: 4,
                airw: 3,
                quickw: 3,
                geminiw: 8,
                napalmw: "X",
                weapon: "napalmw",
                weakness: ["geminiw"],
              },
            ];
            break;
        }
        break;
      case "MM9":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "concretew",
            field: "concretew",
            align: "center",
            sortable: false,
          },
          {
            name: "tornadow",
            field: "tornadow",
            align: "center",
            sortable: false,
          },
          {
            name: "splashw",
            field: "splashw",
            align: "center",
            sortable: false,
          },
          {
            name: "plugw",
            field: "plugw",
            align: "center",
            sortable: false,
          },
          {
            name: "jewelw",
            field: "jewelw",
            align: "center",
            sortable: false,
          },
          {
            name: "hornetw",
            field: "hornetw",
            align: "center",
            sortable: false,
          },
          {
            name: "magmaw",
            field: "magmaw",
            align: "center",
            sortable: false,
          },
          {
            name: "galaxyw",
            field: "galaxyw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "concrete":
            tempRow = [
              {
                megaw: 1,
                concretew: 1,
                tornadow: 1,
                splashw: 3,
                plugw: 1,
                jewelw: 1,
                hornetw: 1,
                magmaw: "1:1",
                galaxyw: 1,
                weapon: "concretew",
                weakness: ["splashw"],
              },
            ];
            break;
          case "tornado":
            tempRow = [
              {
                megaw: 1,
                concretew: 1,
                tornadow: 1,
                splashw: 1,
                plugw: 3,
                jewelw: 1,
                hornetw: 1,
                magmaw: "1:1",
                galaxyw: 1,
                weapon: "tornadow",
                weakness: ["plugw"],
              },
            ];
            break;
          case "splash":
            tempRow = [
              {
                megaw: 2,
                concretew: 1,
                tornadow: 1,
                splashw: 2,
                plugw: 1,
                jewelw: 1,
                hornetw: 4,
                magmaw: "1:1",
                galaxyw: 1,
                weapon: "splashw",
                weakness: ["megaw", "hornetw"],
              },
            ];
            break;
          case "plug":
            tempRow = [
              {
                megaw: 1,
                concretew: 1,
                tornadow: 1,
                splashw: 1,
                plugw: 1,
                jewelw: 4,
                hornetw: 1,
                magmaw: "1:1",
                galaxyw: 1,
                weapon: "plugw",
                weakness: ["jewelw"],
              },
            ];
            break;
          case "jewel":
            tempRow = [
              {
                megaw: 1,
                concretew: 1,
                tornadow: 1,
                splashw: 1,
                plugw: 1,
                jewelw: 2,
                hornetw: 1,
                magmaw: "1:1",
                galaxyw: 5,
                weapon: "jewelw",
                weakness: ["galaxyw"],
              },
            ];
            break;
          case "hornet":
            tempRow = [
              {
                megaw: 1,
                concretew: 1,
                tornadow: 1,
                splashw: 1,
                plugw: 1,
                jewelw: 1,
                hornetw: 1,
                magmaw: "2:4",
                galaxyw: 1,
                weapon: "hornetw",
                weakness: ["magmaw"],
              },
            ];
            break;
          case "magma":
            tempRow = [
              {
                megaw: 1,
                concretew: 1,
                tornadow: 6,
                splashw: 1,
                plugw: 1,
                jewelw: 1,
                hornetw: 1,
                magmaw: "1:1",
                galaxyw: 1,
                weapon: "magmaw",
                weakness: ["tornadow"],
              },
            ];
            break;
          case "galaxy":
            tempRow = [
              {
                megaw: 1,
                concretew: 4,
                tornadow: 1,
                splashw: 1,
                plugw: 1,
                jewelw: 1,
                hornetw: 1,
                magmaw: "1:1",
                galaxyw: 1,
                weapon: "galaxyw",
                weakness: ["concretew"],
              },
            ];
            break;
        }
        break;
      case "MM10":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "bladew",
            field: "bladew",
            align: "center",
            sortable: false,
          },
          {
            name: "pumpw",
            field: "pumpw",
            align: "center",
            sortable: false,
          },
          {
            name: "commandow",
            field: "commandow",
            align: "center",
            sortable: false,
          },
          {
            name: "chillw",
            field: "chillw",
            align: "center",
            sortable: false,
          },
          {
            name: "sheepw",
            field: "sheepw",
            align: "center",
            sortable: false,
          },
          {
            name: "strikew",
            field: "strikew",
            align: "center",
            sortable: false,
          },
          {
            name: "nitrow",
            field: "nitrow",
            align: "center",
            sortable: false,
          },
          {
            name: "solarw",
            field: "solarw",
            align: "center",
            sortable: false,
          },
          {
            name: "enkerw",
            field: "enkerw",
            align: "center",
            sortable: false,
          },
          {
            name: "punkw",
            field: "punkw",
            align: "center",
            sortable: false,
          },
          {
            name: "balladew",
            field: "balladew",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "blade":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "2:5",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 1,
                solarw: 1,
                enkerw: 1,
                punkw: 1,
                balladew: 1,
                weapon: "bladew",
                weakness: ["commandow"],
              },
            ];
            break;
          case "pump":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:2",
                chillw: "1:1",
                sheepw: "1:5",
                strikew: 1,
                nitrow: 1,
                solarw: 1,
                enkerw: 2,
                punkw: 2,
                balladew: 1,
                weapon: "pumpw",
                weakness: ["sheepw"],
              },
            ];
            break;
          case "commando":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 4,
                solarw: 1,
                enkerw: "X",
                punkw: 1,
                balladew: 1,
                weapon: "commandow",
                weakness: ["nitrow"],
              },
            ];
            break;
          case "chill":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 1,
                solarw: 3,
                enkerw: 1,
                punkw: 2,
                balladew: 1,
                weapon: "chillw",
                weakness: ["solarw"],
              },
            ];
            break;
          case "sheep":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: "3-8",
                nitrow: 1,
                solarw: 1,
                enkerw: 1,
                punkw: 1,
                balladew: 1,
                weapon: "sheepw",
                weakness: ["strikew"],
              },
            ];
            break;
          case "strike":
            tempRow = [
              {
                bladew: 4,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 2,
                solarw: 1,
                enkerw: 2,
                punkw: 1,
                balladew: 1,
                weapon: "strikew",
                weakness: ["bladew"],
              },
            ];
            break;
          case "nitro":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:2",
                chillw: "1:5",
                sheepw: "1:2",
                strikew: 1,
                nitrow: 1,
                solarw: 1,
                enkerw: 1,
                punkw: 1,
                balladew: 1,
                weapon: "nitrow",
                weakness: ["chillw"],
              },
            ];
            break;
          case "solar":
            tempRow = [
              {
                bladew: 1,
                pumpw: 6,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 1,
                solarw: 1,
                enkerw: "X",
                punkw: 1,
                balladew: 1,
                weapon: "solarw",
                weakness: ["pumpw"],
              },
            ];
            break;
          case "enker":
            tempRow = [
              {
                bladew: 0,
                pumpw: 0,
                commandow: "0:0",
                chillw: "0:0",
                sheepw: "0:0",
                strikew: 0,
                nitrow: 0,
                solarw: 0,
                enkerw: 1,
                punkw: 0,
                balladew: 3,
                weapon: "enkerw",
                weakness: ["balladew"],
              },
            ];
            break;
          case "punk":
            tempRow = [
              {
                bladew: 0,
                pumpw: 0,
                commandow: "0:0",
                chillw: "0:0",
                sheepw: "0:0",
                strikew: 0,
                nitrow: 0,
                solarw: 0,
                enkerw: 3,
                punkw: 0,
                balladew: 0,
                weapon: "punkw",
                weakness: ["enkerw"],
              },
            ];
            break;
          case "ballade":
            tempRow = [
              {
                bladew: 0,
                pumpw: 0,
                commandow: "0:0",
                chillw: "0:0",
                sheepw: "0:0",
                strikew: 0,
                nitrow: 0,
                solarw: 0,
                enkerw: "X",
                punkw: 3,
                balladew: 0,
                weapon: "balladew",
                weakness: ["punkw"],
              },
            ];
            break;
          case "elec":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 4,
                solarw: 1,
                enkerw: "X",
                punkw: 1,
                balladew: 1,
                weapon: "NONE",
                weakness: ["nitrow"],
                notes: "Weapons Archive",
              },
            ];
            break;
          case "wood":
            tempRow = [
              {
                bladew: 4,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 2,
                solarw: 1,
                enkerw: "X",
                punkw: 1,
                balladew: 1,
                weapon: "NONE",
                weakness: ["bladew"],
                notes: "Weapons Archive",
              },
            ];
            break;
          case "gemini":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 4,
                solarw: 1,
                enkerw: "X",
                punkw: 1,
                balladew: 1,
                weapon: "NONE",
                weakness: ["nitrow"],
                notes: "Weapons Archive",
              },
            ];
            break;
          case "ring":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 1,
                solarw: 3,
                enkerw: "X",
                punkw: 2,
                balladew: 1,
                weapon: "NONE",
                weakness: ["solarw"],
                notes: "Weapons Archive",
              },
            ];
            break;
          case "napalm":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: "3-8",
                nitrow: 1,
                solarw: 1,
                enkerw: "X",
                punkw: 1,
                balladew: 1,
                weapon: "NONE",
                weakness: ["strikew"],
                notes: "Weapons Archive",
              },
            ];
            break;
          case "flame":
            tempRow = [
              {
                bladew: 1,
                pumpw: 6,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 1,
                solarw: 1,
                enkerw: 4,
                punkw: 1,
                balladew: 1,
                weapon: "NONE",
                weakness: ["pumpw", "enkerw"],
                notes: "Weapons Archive",
              },
            ];
            break;
          case "slash":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:2",
                chillw: "1:5",
                sheepw: "1:2",
                strikew: 1,
                nitrow: 1,
                solarw: 1,
                enkerw: "X",
                punkw: 1,
                balladew: 1,
                weapon: "NONE",
                weakness: ["chillw"],
                notes: "Weapons Archive",
              },
            ];
            break;
          case "frost":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "2:5",
                chillw: "1:1",
                sheepw: "1:1",
                strikew: 1,
                nitrow: 1,
                solarw: 1,
                enkerw: "X",
                punkw: 1,
                balladew: 1,
                weapon: "NONE",
                weakness: ["commandow"],
                notes: "Weapons Archive",
              },
            ];
            break;
          case "tornado":
            tempRow = [
              {
                bladew: 1,
                pumpw: 1,
                commandow: "1:1",
                chillw: "1:1",
                sheepw: "1:5",
                strikew: 1,
                nitrow: 1,
                solarw: 1,
                enkerw: "X",
                punkw: 1,
                balladew: 1,
                weapon: "NONE",
                weakness: ["sheepw"],
                notes: "Weapons Archive",
              },
            ];
            break;
        }
        tempRow.megaw = 1;
        tempRow.bassw = 1;
        tempRow.bluesw = "1:3";
        break;
      case "MM11":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "blockw",
            field: "blockw",
            align: "center",
            sortable: false,
          },
          {
            name: "fusew",
            field: "fusew",
            align: "center",
            sortable: false,
          },
          {
            name: "blastw",
            field: "blastw",
            align: "center",
            sortable: false,
          },
          {
            name: "acidw",
            field: "acidw",
            align: "center",
            sortable: false,
          },
          {
            name: "tundraw",
            field: "tundraw",
            align: "center",
            sortable: false,
          },
          {
            name: "torchw",
            field: "torchw",
            align: "center",
            sortable: false,
          },
          {
            name: "impactw",
            field: "impactw",
            align: "center",
            sortable: false,
          },
          {
            name: "bouncew",
            field: "bouncew",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "block":
            tempRow = [
              {
                blockw: "1:1",
                fusew: "1:2:1:2",
                blastw: "4:5:8:11:10",
                acidw: "1:1:1:1",
                tundraw: "4:4",
                torchw: "2:2",
                impactw: "2+2:2+3",
                bouncew: "1:1",
                weapon: "blockw",
                weakness: ["blastw"],
              },
            ];
            break;
          case "fuse":
            tempRow = [
              {
                blockw: "2:2",
                fusew: "1:1:1:1",
                blastw: "1:2:4:6:5",
                acidw: "1:2:1:2",
                tundraw: "1:1",
                torchw: "2:2",
                impactw: "2+2:2+3",
                bouncew: "4:4",
                weapon: "fusew",
                weakness: ["bouncew"],
              },
            ];
            break;
          case "blast":
            tempRow = [
              {
                blockw: "1:1",
                fusew: "1:2:1:2",
                blastw: "1:2:3:4:4",
                acidw: "1:2:1:2",
                tundraw: "4:4",
                torchw: "6:6",
                impactw: "2+2:2+3",
                bouncew: "1:1",
                weapon: "blastw",
                weakness: ["torchw"],
              },
            ];
            break;
          case "acid":
            tempRow = [
              {
                blockw: "5:5",
                fusew: "1:2:1:2",
                blastw: "1:2:4:6:5",
                acidw: "1:1:1:1",
                tundraw: "4:4",
                torchw: "2:2",
                impactw: "2+2:2+3",
                bouncew: "1:1",
                weapon: "acidw",
                weakness: ["blockw"],
              },
            ];
            break;
          case "tundra":
            tempRow = [
              {
                blockw: "2:2",
                fusew: "4:4:5:8",
                blastw: "1:2:4:6:5",
                acidw: "1:2:1:2",
                tundraw: "1:1",
                torchw: "2:2",
                impactw: "2+2:2+3",
                bouncew: "1:1",
                weapon: "tundraw",
                weakness: ["fusew"],
              },
            ];
            break;
          case "torch":
            tempRow = [
              {
                blockw: "2:2",
                fusew: "1:2:1:2",
                blastw: "1:1:1:2:2",
                acidw: "1:2:1:2",
                tundraw: "6:9",
                torchw: "1:1",
                impactw: "2+2:2+3",
                bouncew: "1:1",
                weapon: "torchw",
                weakness: ["tundraw"],
              },
            ];
            break;
          case "impact":
            tempRow = [
              {
                blockw: "2:2",
                fusew: "1:2:1:2",
                blastw: "1:2:4:6:5",
                acidw: "4:4:3:6",
                tundraw: "4:4",
                torchw: "2:2",
                impactw: "1+1:1+1",
                bouncew: "1:1",
                weapon: "impactw",
                weakness: ["acidw"],
              },
            ];
            break;
          case "bounce":
            tempRow = [
              {
                blockw: "2:2",
                fusew: "1:X:1:1",
                blastw: "1:2:4:6:5",
                acidw: "1:2:1:2",
                tundraw: "4:4",
                torchw: "2:2",
                impactw: "4+4:4+6",
                bouncew: "1:1",
                weapon: "bouncew",
                weakness: ["impactw"],
              },
            ];
            break;
        }
        tempRow.megaw = "1:3:5:8";
        break;
      case "MM1D":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "sonicw",
            field: "sonicw",
            align: "center",
            sortable: false,
          },
          {
            name: "voltw",
            field: "voltw",
            align: "center",
            sortable: false,
          },
          {
            name: "dynaw",
            field: "dynaw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "sonic":
            tempRow = [
              {
                megaw: 1,
                dynaw: 16,
                sonicw: 0,
                voltw: 2,
                weapon: "sonicw",
                weakness: ["dynaw"],
              },
            ];
            break;
          case "volt":
            tempRow = [
              {
                megaw: 1,
                dynaw: 2,
                sonicw: 6,
                voltw: 0,
                weapon: "voltw",
                weakness: ["sonicw"],
              },
            ];
            break;
          case "dyna":
            tempRow = [
              {
                megaw: 2,
                dynaw: 0,
                sonicw: 1,
                voltw: 6,
                weapon: "dynaw",
                weakness: ["megaw", "voltw"],
              },
            ];
            break;
        }
        break;
      case "MM3D":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "bitw",
            field: "bitw",
            align: "center",
            sortable: false,
          },
          {
            name: "sharkw",
            field: "sharkw",
            align: "center",
            sortable: false,
          },
          {
            name: "cascadew",
            field: "cascadew",
            align: "center",
            sortable: false,
          },
          {
            name: "petrolw",
            field: "petrolw",
            align: "center",
            sortable: false,
          },
          {
            name: "slicew",
            field: "slicew",
            align: "center",
            sortable: false,
          },
          {
            name: "solderw",
            field: "solderw",
            align: "center",
            sortable: false,
          },
        ];
        switch (robot) {
          case "bit":
            tempRow = [
              {
                megaw: 1,
                bitw: 0,
                sharkw: 0,
                cascadew: 6,
                petrolw: 0,
                slicew: 3,
                solderw: 8,
                weapon: "bitw",
                weakness: ["solderw"],
              },
            ];
            break;
          case "shark":
            tempRow = [
              {
                megaw: 1,
                bitw: 6,
                sharkw: 0,
                cascadew: 4,
                petrolw: 8,
                slicew: 0,
                solderw: 0,
                weapon: "sharkw",
                weakness: ["petrolw"],
              },
            ];
            break;
          case "cascade":
            tempRow = [
              {
                megaw: 1,
                bitw: 3,
                sharkw: 8,
                cascadew: 0,
                petrolw: 4,
                slicew: 4,
                solderw: 6,
                weapon: "cascadew",
                weakness: ["sharkw"],
              },
            ];
            break;
          case "petrol":
            tempRow = [
              {
                megaw: 1,
                bitw: 0,
                sharkw: 3,
                cascadew: 6,
                petrolw: 0,
                slicew: 8,
                solderw: 0,
                weapon: "petrolw",
                weakness: ["slicew"],
              },
            ];
            break;
          case "slice":
            tempRow = [
              {
                megaw: 1,
                bitw: 8,
                sharkw: 6,
                cascadew: 0,
                petrolw: 3,
                slicew: 0,
                solderw: 4,
                weapon: "slicew",
                weakness: ["bitw"],
              },
            ];
            break;
          case "solder":
            tempRow = [
              {
                megaw: 1,
                bitw: 0,
                sharkw: 4,
                cascadew: 8,
                petrolw: 0,
                slicew: 3,
                solderw: 0,
                weapon: "solderw",
                weakness: ["cascadew"],
              },
            ];
            break;
        }
        break;
      case "MM&B2":
        switch (player) {
          case "mega":
            tempColumns = [
              {
                name: "megaw",
                field: "megaw",
                align: "start",
                sortable: false,
              },
              {
                name: "changew",
                field: "changew",
                align: "center",
                sortable: false,
              },
            ];
            break;
          case "bass":
            break;
        }

        break;
      case "MMT2":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "changew",
            field: "changew",
            align: "center",
            sortable: false,
          },
        ];
        break;
      case "MMT3":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "changew",
            field: "changew",
            align: "center",
            sortable: false,
          },
        ];
        break;
      case "MMGG":
        tempColumns = [
          {
            name: "megaw",
            field: "megaw",
            align: "start",
            sortable: false,
          },
          {
            name: "changew",
            field: "changew",
            align: "center",
            sortable: false,
          },
        ];
        break;
    }
    var arrayWeaknesses = [];
    switch (funct) {
      case 1:
        var tempObj = { col: tempColumns, row: tempRow };
        return tempObj;
      case 2:
        if (tempRow[0].weakness == "NONE") {
          arrayWeaknesses.push(specialWeapons.value[0]);
          return arrayWeaknesses;
        }
        for (var i = 0; i < tempRow[0].weakness.length; i++) {
          for (var j = 0; j < specialWeapons.value.length; j++) {
            if (specialWeapons.value[j].code == tempRow[0].weakness[i]) {
              arrayWeaknesses.push(specialWeapons.value[j]);
            }
          }
        }
        return arrayWeaknesses;
      case 3:
        if (tempRow[0].weapon == "NONE") {
          return specialWeapons.value[0];
        }
        for (var i = 0; i < specialWeapons.value.length; i++) {
          if (specialWeapons.value[i].code == tempRow[0].weapon) {
            return specialWeapons.value[i];
          }
        }
        break;
      case 4:
        if (tempRow[0].hasOwnProperty("notes")) {
          return tempRow[0].notes;
        } else {
          return "";
        }
    }
  }

  return { damageDataTable2, specialWeapons };
}
