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
            tempRow = {
              megaw: 3,
              cutw: 1,
              gutsw: 14,
              icew: 0,
              bombw: 2,
              firew: 3,
              elecw: 1,
              weapon: "cutw",
              weakness: ["megaw", "gutsw"],
            };
            break;
          case "guts":
            tempRow = {
              megaw: 2,
              cutw: 1,
              gutsw: 1,
              icew: 0,
              bombw: 10,
              firew: 2,
              elecw: 1,
              weapon: "gutsw",
              weakness: ["megaw", "bombw"],
            };
            break;
          case "ice":
            tempRow = {
              megaw: 1,
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
              megaw: 2,
              cutw: 2,
              gutsw: "X",
              icew: 0,
              bombw: 1,
              firew: 4,
              elecw: 2,
              weapon: "bombw",
              weakness: ["megaw", "firew"],
            };
            break;
          case "fire":
            tempRow = {
              megaw: 2,
              cutw: 2,
              gutsw: "X",
              icew: 4,
              bombw: 1,
              firew: 1,
              elecw: 1,
              weapon: "firew",
              weakness: ["megaw", "icew"],
            };
            break;
          case "elec":
            tempRow = {
              megaw: 1,
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
            tempRow = {
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
            };
            break;
          case "guts":
            tempRow = {
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
            };
            break;
          case "ice":
            tempRow = {
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
            };
            break;
          case "bomb":
            tempRow = {
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
            };
            break;
          case "fire":
            tempRow = {
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
            };
            break;
          case "elec":
            tempRow = {
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
            };
            break;
          case "time":
            tempRow = {
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
            };
            break;
          case "oil":
            tempRow = {
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
            };
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
            tempRow = {
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
            };
            break;
          case "air":
            tempRow = {
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
            };
            break;
          case "bubble":
            tempRow = {
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
            };
            break;
          case "quick":
            tempRow = {
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
            };
            break;
          case "crash":
            tempRow = {
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
            };
            break;
          case "flash":
            tempRow = {
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
            };
            break;
          case "heat":
            tempRow = {
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
            };
            break;
          case "wood":
            tempRow = {
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
            };
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
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
            };
            break;
          case "magnet":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
            };
            break;
          case "gemini":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
            };
            break;
          case "hard":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
            };
          case "top":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
            };
            break;
          case "snake":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
            };
            break;
          case "spark":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
            };
            break;
          case "shadow":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
            };
            break;
          case "metal":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
              notes: "Doc Robot - Spark Man 1",
            };
            break;
          case "quick":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
              notes: "Doc Robot - Spark Man 2",
            };
            break;
          case "air":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
              notes: "Doc Robot - Needle Man 1",
            };
            break;
          case "crash":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
              notes: "Doc Robot - Needle Man 2",
            };
            break;
          case "flash":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
              notes: "Doc Robot - Gemini Man 1",
            };
            break;
          case "bubble":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
              notes: "Doc Robot - Gemini Man 2",
            };
            break;
          case "wood":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
              notes: "Doc Robot - Shadow Man 1",
            };
            break;
          case "heat":
            tempRow = {
              megaw: 0,
              needlew: 0,
              magnetw: 0,
              geminiw: 0,
              hardw: 0,
              topw: 0,
              snakew: 0,
              sparkw: 0,
              shadoww: 0,
              weapon: "",
              weakness: [],
              notes: "Doc Robot - Shadow Man 2",
            };
            break;
        }
        break;
      case "MM4":
        break;
      case "MM5":
        break;
      case "MM6":
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
            tempRow = {
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
            };
            break;
          case "cut":
            tempRow = {
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
            };
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
            tempRow = {
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
            };
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
