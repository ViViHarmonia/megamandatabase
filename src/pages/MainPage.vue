<template>
  <q-card>
    <q-card-section>
      <q-table flat bordered dark class="my-sticky-header-table" virtual-scroll auto-width wrap-cells
        :rows-per-page-options="[0]" :columns="rmTableColumns" :rows="robotMastersFltrdLst" card-class="text-white"
        :card-class="{ tableBodyColorMega: playerSwitch == 'mega', tableBodyColorBass: playerSwitch == 'bass' }">
        <template v-slot:top>
          <q-select v-model="game" :options="games" option-label="title" option-value="code" input-debounce="0" dark
            outlined dense emit-value />
          <div class="radios">
            <q-radio v-model="playerSwitch" val="mega" label="Mega Man" />
            <q-radio v-model="playerSwitch" val="bass" label="Bass" />
          </div>
        </template>
        <template v-slot:body-cell-icon="props">
          <q-td :props="props">
            <q-avatar rounded size="48px">
              <img :src="props.row.icon" />
            </q-avatar>
          </q-td>
        </template>
        <template v-slot:body-cell-gamelist="props">
          <q-td :props="props">
            <q-select v-model="props.row.gameSl" :options="gameFormatName(props.row.games, 1)" option-label="title"
              option-value="code" fill-input input-debounce="0" dark map-options outlined dense emit-value
              v-if="props.row.games.length > 1"></q-select>
            <div v-else>{{ gameFormatName(props.row.gameSl, 2) }}</div>
          </q-td>
        </template>
        <template v-slot:body-cell-weapon="props">
          <q-td :props="props">
            <div style="display: flex; align-items: center; gap: 10px;">
              <q-avatar rounded size="24px">
                <img :src="damageDataTable(props.row.code, props.row.gameSl, playerSwitch, 3).icon" />
              </q-avatar>
              <span>{{ damageDataTable(props.row.code, props.row.gameSl, playerSwitch, 3).name }}</span>
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-weakness="props">
          <q-td :props="props">
            <div style="display: flex; align-items: center; gap: 10px;"
              v-for="weakness in damageDataTable(props.row.code, props.row.gameSl, playerSwitch, 2)">
              <q-avatar rounded size="24px">
                <img :src="weakness.icon" />
              </q-avatar>
              <span>{{ weakness.name }}</span>
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn :class="{ actionbtn: playerSwitch == 'mega', actionbtnBass: playerSwitch == 'bass', }"
              @click="openDamageTable(props.row.code, props.row.gameSl)">Display</q-btn>
          </q-td>
        </template>
        <template v-slot:body-cell-notes="props">
          <q-td :props="props">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span>{{ damageDataTable(props.row.code, props.row.gameSl, playerSwitch, 4) }}</span>
            </div>
          </q-td>
        </template>
        <template v-slot:bottom>
          <div style="width: 100%; display:flex; justify-content: center;">
            <div style="width: 80%">
              <q-table v-show="damageShowSwitch" flat bordered :rows="rbtRow" :columns="wpnColumns" hide-bottom
                wrap-cells row-key="name" separator="cell">
                <template v-slot:header="props">
                  <q-tr :props="props">
                    <q-th v-for="col in props.cols" :key="col.name" :props="props" class="text-white">
                      <div style="display:flex; flex-direction: column; align-items: center; gap: 5px;">
                        <span>{{ damageDTIconRetrieve(col.field).name }}</span>
                        <q-avatar rounded size="24px">
                          <img :src="damageDTIconRetrieve(col.field).icon" />
                        </q-avatar>
                      </div>
                    </q-th>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </div>
        </template>
      </q-table>
    </q-card-section>
  </q-card>

</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useDamageDataTable } from 'src/composables/useDamageDataTable'
const { damageDataTable2, specialWeapons } = useDamageDataTable()
const game = ref("MM1")
const games = ref([
  { title: "ALL", code: "ALL", rms: ["yes"], },
  { title: "Mega Man", code: "MM1", rms: ["cut", "elec", "ice", "fire", "bomb", "guts"], },
  { title: "Mega Man Powered Up", code: "MMPU", rms: ["cut", "bomb", "ice", "fire", "oil", "elec", "time", "guts"], },
  { title: "Mega Man 2", code: "MM2", rms: ["metal", "flash", "bubble", "heat", "wood", "air", "crash", "quick"], },
  { title: "Mega Man 3", code: "MM3", rms: ["top", "shadow", "spark", "magnet", "hard", "snake", "needle", "gemini", "metal", "quick", "air", "crash", "flash", "bubble", "wood", "heat"], },
  { title: "MM: The Wily Wars (MM1)", code: "WW1", rms: ["buster1", "buster2", "water", "storm"], },
  { title: "MM: The Wily Wars (MM2)", code: "WW2", rms: ["buster1", "buster2", "water", "storm"], },
  { title: "MM: The Wily Wars (MM3)", code: "WW3", rms: ["buster1", "buster2", "water", "storm"], },
  { title: "Mega Man 4", code: "MM4", rms: ["toad", "bright", "pharaoh", "ring", "dust", "skull", "dive", "drill"], },
  { title: "Mega Man 5", code: "MM5", rms: ["gravity", "gyro", "crystal", "napalm", "stone", "charge", "wave", "star"], },
  { title: "Mega Man 6", code: "MM6", rms: ["centaur", "wind", "flame", "blizzard", "plant", "tomahawk", "yamato", "knight"], },
  { title: "Mega Man: Dr. Wily's Revenge", code: "MMI", rms: ["cut", "elec", "ice", "fire", "flash", "quick", "bubble", "heat", "enker"], },
  { title: "Mega Man II", code: "MMII", rms: ["metal", "wood", "air", "crash", "needle", "magnet", "hard", "top", "quint"], },
  { title: "Mega Man III", code: "MMIII", rms: ["shadow", "spark", "snake", "gemini", "drill", "dust", "skull", "dive", "punk"], },
  { title: "Mega Man IV", code: "MMIV", rms: ["toad", "bright", "pharaoh", "ring", "crystal", "napalm", "stone", "charge", "ballade"], },
  { title: "Mega Man V", code: "MMV", rms: ["mercury", "neptune", "mars", "venus", "jupiter", "saturn", "pluto", "uranus", "terra", "enker", "quint", "punk", "ballade"], },
  { title: "Mega Man 7", code: "MM7", rms: ["burst", "cloud", "junk", "freeze", "slash", "spring", "shade", "turbo"], },
  { title: "Mega Man 8", code: "MM8", rms: ["tengu", "clown", "grenade", "frost", "aqua", "sword", "search", "astro", "cut", "wood"], },
  { title: "Mega Man & Bass", code: "MM&B1", rms: ["cold", "burner", "pirate", "ground", "tengu", "magic", "astro", "dynamo"], },
  { title: "MM: The Power Battle (MM1-2)", code: "MMP1-1", rms: ["cut", "crash", "guts", "ice", "heat", "wood"], },
  { title: "MM: The Power Battle (MM3-6)", code: "MMP1-2", rms: ["gemini", "napalm", "gyro", "dust", "plant", "magnet"], },
  { title: "MM: The Power Battle (MM7)", code: "MMP1-3", rms: ["freeze", "slash", "shade", "turbo", "cloud", "junk"], },
  { title: "MM2: The Power Fighters (Search for Wily)", code: "MMP2-A", rms: ["centaur", "shadow", "bubble", "heat", "plant", "gyro"], },
  { title: "MM2: The Power Fighters (Rescue Roll)", code: "MMP2-B", rms: ["elec", "dive", "slash", "cut", "shade", "stone"], },
  { title: "MM2: The Power Fighters (Recover Parts)", code: "MMP2-C", rms: ["air", "quick", "pharaoh", "gemini", "napalm", "guts"], },
  { title: "Mega Man 9", code: "MM9", rms: ["splash", "concrete", "galaxy", "jewel", "plug", "tornado", "magma", "hornet"], },
  { title: "Mega Man 10", code: "MM10", rms: ["sheep", "pump", "solar", "chill", "nitro", "commando", "blade", "strike", "elec", "wood", "gemini", "ring", "napalm", "flame", "slash", "frost", "tornado", "enker", "punk", "ballade"], },
  { title: "Mega Man 11", code: "MM11", rms: ["block", "acid", "impact", "bounce", "fuse", "tundra", "torch", "blast"], },
  { title: "Mega Man (DOS)", code: "MM1D", rms: ["dyna", "sonic", "volt"], },
  { title: "Mega Man 3 (DOS)", code: "MM3D", rms: ["slice", "petrol", "shark", "cascade", "solder", "bit"], },
  { title: "Rockman & Forte: Mirai Kara no Chōsensha", code: "MM&B2", rms: ["bullet", "stove", "fan", "monk", "clock", "compass"], },
  { title: "Mega Man (Game Gear)", code: "MMGG", rms: ["star", "bright", "napalm", "stone", "wave", "toad"], },
  //DONE ^^ / UNDONE vv
  /*
  { title: "Mega Man 2 (Tiger)", code: "MMT2", rms: [""], },
  { title: "Mega Man 3 (Tiger)", code: "MMT3", rms: [""], },
   */
])
const playerChars = ref([
  { code: "mega", name: "Mega Man" }
])
const robotMastersFltrdLst = ref([])
const robotMasters = ref([
  //MM1
  { name: "Cut Man", code: "cut", games: ["MM1", "MMPU", "MMI", "MM8", "MMP1-1", "MMP2-B"], gameSl: "MM1", icon: "/robots/MM1PU/cut.png" }, //mm8 is secret sega saturn boss
  { name: "Guts Man", code: "guts", games: ["MM1", "MMPU", "MMP1-1", "MMP2-C"], gameSl: "MM1", icon: "/robots/MM1PU/guts.png" },
  { name: "Ice Man", code: "ice", games: ["MM1", "MMPU", "MMI", "MMP1-1"], gameSl: "MM1", icon: "/robots/MM1PU/ice.png" },
  { name: "Bomb Man", code: "bomb", games: ["MM1", "MMPU"], gameSl: "MM1", icon: "/robots/MM1PU/bomb.png" },
  { name: "Fire Man", code: "fire", games: ["MM1", "MMPU", "MMI"], gameSl: "MM1", icon: "/robots/MM1PU/fire.png" },
  { name: "Elec Man", code: "elec", games: ["MM1", "MMPU", "MMI", "MMP2-B", "MM10"], gameSl: "MM1", icon: "/robots/MM1PU/elec.png" }, //mm10 is weapons archive
  //MMPU
  { name: "Oil Man", code: "oil", games: ["MMPU"], gameSl: "MMPU", icon: "/robots/MM1PU/oil.png" },
  { name: "Time Man", code: "time", games: ["MMPU"], gameSl: "MMPU", icon: "/robots/MM1PU/time.png" },
  //MM2
  { name: "Metal Man", code: "metal", games: ["MM2", "MM3", "MMII", "MMT2"], gameSl: "MM2", icon: "/robots/MM2/metal.png" },//mm3 doc robot
  { name: "Air Man", code: "air", games: ["MM2", "MM3", "MMII", "MMP2-C", "MMT2"], gameSl: "MM2", icon: "/robots/MM2/air.png" },//mm3 doc robot
  { name: "Bubble Man", code: "bubble", games: ["MM2", "MM3", "MMI", "MMP2-A", "MMT2"], gameSl: "MM2", icon: "/robots/MM2/bubble.png" },//mm3 doc robot
  { name: "Quick Man", code: "quick", games: ["MM2", "MM3", "MMI", "MMP2-C", "MMT2"], gameSl: "MM2", icon: "/robots/MM2/quick.png" },//mm3 doc robot
  { name: "Crash Man", code: "crash", games: ["MM2", "MM3", "MMII", "MMP1-1"], gameSl: "MM2", icon: "/robots/MM2/crash.png" },//mm3 doc robot
  { name: "Flash Man", code: "flash", games: ["MM2", "MM3", "MMI", "MMT2"], gameSl: "MM2", icon: "/robots/MM2/flash.png" },//mm3 doc robot
  { name: "Heat Man", code: "heat", games: ["MM2", "MM3", "MMI", "MMP1-1", "MMP2-A", "MMT2"], gameSl: "MM2", icon: "/robots/MM2/heat.png" },//mm3 doc robot
  { name: "Wood Man", code: "wood", games: ["MM2", "MM3", "MMII", "MM8", "MMP1-1", "MM10"], gameSl: "MM2", icon: "/robots/MM2/wood.png" },//mm10 weapons archive, mm3 doc robot, mm8 secret sega saturn boss
  //MM3
  { name: "Needle Man", code: "needle", games: ["MM3", "MMII", "MMT3"], gameSl: "MM3", icon: "/robots/MM3/needle.png" },
  { name: "Magnet Man", code: "magnet", games: ["MM3", "MMII", "MMP1-2", "MMT3"], gameSl: "MM3", icon: "/robots/MM3/magnet.png" },
  { name: "Gemini Man", code: "gemini", games: ["MM3", "MMIII", "MMP1-2", "MMP2-C", "MM10", "MMT3"], gameSl: "MM3", icon: "/robots/MM3/gemini.png" },//mm10 is weapons archive
  { name: "Hard Man", code: "hard", games: ["MM3", "MMII"], gameSl: "MM3", icon: "/robots/MM3/hard.png" },
  { name: "Top Man", code: "top", games: ["MM3", "MMII"], gameSl: "MM3", icon: "/robots/MM3/top.png" },
  { name: "Snake Man", code: "snake", games: ["MM3", "MMIII", "MMT3"], gameSl: "MM3", icon: "/robots/MM3/snake.png" },
  { name: "Spark Man", code: "spark", games: ["MM3", "MMIII", "MMT3"], gameSl: "MM3", icon: "/robots/MM3/spark.png" },
  { name: "Shadow Man", code: "shadow", games: ["MM3", "MMIII", "MMP2-A", "MMT3"], gameSl: "MM3", icon: "/robots/MM3/shadow.png" },
  //MM4
  { name: "Bright Man", code: "bright", games: ["MM4", "MMIV", "MMGG"], gameSl: "MM4", icon: "/robots/MM4/bright.png" },
  { name: "Toad Man", code: "toad", games: ["MM4", "MMIV", "MMGG"], gameSl: "MM4", icon: "/robots/MM4/toad.png" },
  { name: "Drill Man", code: "drill", games: ["MM4", "MMIII"], gameSl: "MM4", icon: "/robots/MM4/drill.png" },
  { name: "Pharaoh Man", code: "pharaoh", games: ["MM4", "MMIV", "MMP2-C"], gameSl: "MM4", icon: "/robots/MM4/pharaoh.png" },
  { name: "Ring Man", code: "ring", games: ["MM4", "MMIV", "MM10"], gameSl: "MM4", icon: "/robots/MM4/ring.png" },//mm10 is weapons archive
  { name: "Dust Man", code: "dust", games: ["MM4", "MMIII", "MMP1-2"], gameSl: "MM4", icon: "/robots/MM4/dust.png" },
  { name: "Dive Man", code: "dive", games: ["MM4", "MMIII", "MMP2-B"], gameSl: "MM4", icon: "/robots/MM4/dive.png" },
  { name: "Skull Man", code: "skull", games: ["MM4", "MMIII"], gameSl: "MM4", icon: "/robots/MM4/skull.png" },
  //MM5
  { name: "Gravity Man", code: "gravity", games: ["MM5"], gameSl: "MM5", icon: "/robots/MM5/gravity.png" },
  { name: "Wave Man", code: "wave", games: ["MM5", "MMGG"], gameSl: "MM5", icon: "/robots/MM5/wave.png" },
  { name: "Stone Man", code: "stone", games: ["MM5", "MMIV", "MMP2-B", "MMGG"], gameSl: "MM5", icon: "/robots/MM5/stone.png" },
  { name: "Gyro Man", code: "gyro", games: ["MM5", "MMP1-2", "MMP2-A"], gameSl: "MM5", icon: "/robots/MM5/gyro.png" },
  { name: "Star Man", code: "star", games: ["MM5", "MMGG"], gameSl: "MM5", icon: "/robots/MM5/star.png" },
  { name: "Charge Man", code: "charge", games: ["MM5", "MMIV"], gameSl: "MM5", icon: "/robots/MM5/charge.png" },
  { name: "Napalm Man", code: "napalm", games: ["MM5", "MMIV", "MMP1-2", "MMP2-C", "MM10", "MMGG"], gameSl: "MM5", icon: "/robots/MM5/napalm.png" },//mm10 is weapons archive
  { name: "Crystal Man", code: "crystal", games: ["MM5", "MMIV"], gameSl: "MM5", icon: "/robots/MM5/crystal.png" },
  //MM6
  { name: "Blizzard Man", code: "blizzard", games: ["MM6"], gameSl: "MM6", icon: "/robots/MM6/blizzard.png" },
  { name: "Centaur Man", code: "centaur", games: ["MM6", "MMP2-A"], gameSl: "MM6", icon: "/robots/MM6/centaur.png" },
  { name: "Flame Man", code: "flame", games: ["MM6", "MM10"], gameSl: "MM6", icon: "/robots/MM6/flame.png" },//mm10 is weapons archive
  { name: "Knight Man", code: "knight", games: ["MM6"], gameSl: "MM6", icon: "/robots/MM6/knight.png" },
  { name: "Plant Man", code: "plant", games: ["MM6", "MMP1-2", "MMP2-A"], gameSl: "MM6", icon: "/robots/MM6/plant.png" },
  { name: "Tomahawk Man", code: "tomahawk", games: ["MM6"], gameSl: "MM6", icon: "/robots/MM6/tomahawk.png" },
  { name: "Wind Man", code: "wind", games: ["MM6"], gameSl: "MM6", icon: "/robots/MM6/wind.png" },
  { name: "Yamato Man", code: "yamato", games: ["MM6"], gameSl: "MM6", icon: "/robots/MM6/yamato.png" },
  //MMWW, MMI,II,III,IV
  { name: "Buster Rod G", code: "buster1", games: ["WW1", "WW2", "WW3"], gameSl: "WW1", icon: "/robots/MMWWGB-V/buster.png" },
  { name: "Buster Rod G (2nd Fight)", code: "buster2", games: ["WW1", "WW2", "WW3"], gameSl: "WW1", icon: "/robots/MMWWGB-V/buster.png" },
  { name: "Mega Water S", code: "water", games: ["WW1", "WW2", "WW3"], gameSl: "WW1", icon: "/robots/MMWWGB-V/water.png" },
  { name: "Hyper Storm H", code: "storm", games: ["WW1", "WW2", "WW3"], gameSl: "WW1", icon: "/robots/MMWWGB-V/storm.png" },
  { name: "Enker", code: "enker", games: ["MMI", "MMV", "MM10"], gameSl: "MMI", icon: "/robots/MMWWGB-V/enker.png" },
  { name: "Quint", code: "quint", games: ["MMII", "MMV"], gameSl: "MMII", icon: "/robots/MMWWGB-V/quint.png" },
  { name: "Punk", code: "punk", games: ["MMIII", "MMV", "MM10"], gameSl: "MMIII", icon: "/robots/MMWWGB-V/punk.png" },
  { name: "Ballade", code: "ballade", games: ["MMIV", "MMV", "MM10"], gameSl: "MMIV", icon: "/robots/MMWWGB-V/ballade.png" },
  //MMV
  { name: "Terra", code: "terra", games: ["MMV"], gameSl: "MMV", icon: "/robots/MMV/terra.png" },
  { name: "Mercury", code: "mercury", games: ["MMV"], gameSl: "MMV", icon: "/robots/MMV/mercury.png" },
  { name: "Venus", code: "venus", games: ["MMV"], gameSl: "MMV", icon: "/robots/MMV/venus.png" },
  { name: "Mars", code: "mars", games: ["MMV"], gameSl: "MMV", icon: "/robots/MMV/mars.png" },
  { name: "Jupiter", code: "jupiter", games: ["MMV"], gameSl: "MMV", icon: "/robots/MMV/jupiter.png" },
  { name: "Saturn", code: "saturn", games: ["MMV"], gameSl: "MMV", icon: "/robots/MMV/saturn.png" },
  { name: "Uranus", code: "uranus", games: ["MMV"], gameSl: "MMV", icon: "/robots/MMV/uranus.png" },
  { name: "Pluto", code: "pluto", games: ["MMV"], gameSl: "MMV", icon: "/robots/MMV/pluto.png" },
  { name: "Neptune", code: "neptune", games: ["MMV"], gameSl: "MMV", icon: "/robots/MMV/neptune.png" },
  //MM7
  { name: "Freeze Man", code: "freeze", games: ["MM7", "MMP1-3"], gameSl: "MM7", icon: "/robots/MM7/freeze.png" },
  { name: "Junk Man", code: "junk", games: ["MM7", "MMP1-3"], gameSl: "MM7", icon: "/robots/MM7/junk.png" },
  { name: "Burst Man", code: "burst", games: ["MM7"], gameSl: "MM7", icon: "/robots/MM7/burst.png" },
  { name: "Cloud Man", code: "cloud", games: ["MM7", "MMP1-3"], gameSl: "MM7", icon: "/robots/MM7/cloud.png" },
  { name: "Spring Man", code: "spring", games: ["MM7"], gameSl: "MM7", icon: "/robots/MM7/spring.png" },
  { name: "Slash Man", code: "slash", games: ["MM7", "MMP1-3", "MMP2-B", "MM10"], gameSl: "MM7", icon: "/robots/MM7/slash.png" },//mm10 is weapons archive
  { name: "Shade Man", code: "shade", games: ["MM7", "MMP1-3", "MMP2-B"], gameSl: "MM7", icon: "/robots/MM7/shade.png" },
  { name: "Turbo Man", code: "turbo", games: ["MM7", "MMP1-3"], gameSl: "MM7", icon: "/robots/MM7/turbo.png" },
  //MM8 & MM&B
  { name: "Tengu Man", code: "tengu", games: ["MM8", "MM&B1"], gameSl: "MM8", icon: "/robots/MM8/tengu.png" },
  { name: "Astro Man", code: "astro", games: ["MM8", "MM&B1"], gameSl: "MM8", icon: "/robots/MM8/astro.png" },
  //MM8
  { name: "Sword Man", code: "sword", games: ["MM8"], gameSl: "MM8", icon: "/robots/MM8/sword.png" },
  { name: "Clown Man", code: "clown", games: ["MM8"], gameSl: "MM8", icon: "/robots/MM8/clown.png" },
  { name: "Search Man", code: "search", games: ["MM8"], gameSl: "MM8", icon: "/robots/MM8/search.png" },
  { name: "Frost Man", code: "frost", games: ["MM8", "MM10"], gameSl: "MM8", icon: "/robots/MM8/frost.png" },//mm10 is weapons archive
  { name: "Grenade Man", code: "grenade", games: ["MM8"], gameSl: "MM8", icon: "/robots/MM8/grenade.png" },
  { name: "Aqua Man", code: "aqua", games: ["MM8"], gameSl: "MM8", icon: "/robots/MM8/aqua.png" },
  //MM&B1
  { name: "Dynamo Man", code: "dynamo", games: ["MM&B1"], gameSl: "MM&B1", icon: "/robots/MMandB/dynamo.png" },
  { name: "Cold Man", code: "cold", games: ["MM&B1"], gameSl: "MM&B1", icon: "/robots/MMandB/cold.png" },
  { name: "Ground Man", code: "ground", games: ["MM&B1"], gameSl: "MM&B1", icon: "/robots/MMandB/ground.png" },
  { name: "Pirate Man", code: "pirate", games: ["MM&B1"], gameSl: "MM&B1", icon: "/robots/MMandB/pirate.png" },
  { name: "Burner Man", code: "burner", games: ["MM&B1"], gameSl: "MM&B1", icon: "/robots/MMandB/burner.png" },
  { name: "Magic Man", code: "magic", games: ["MM&B1"], gameSl: "MM&B1", icon: "/robots/MMandB/magic.png" },
  //MM9
  { name: "Concrete Man", code: "concrete", games: ["MM9"], gameSl: "MM9", icon: "/robots/MM9/concrete.png" },
  { name: "Tornado Man", code: "tornado", games: ["MM9", "MM10"], gameSl: "MM9", icon: "/robots/MM9/tornado.png" },//mm10 is weapons archive
  { name: "Splash Woman", code: "splash", games: ["MM9"], gameSl: "MM9", icon: "/robots/MM9/splash.png" },
  { name: "Plug Man", code: "plug", games: ["MM9"], gameSl: "MM9", icon: "/robots/MM9/plug.png" },
  { name: "Jewel Man", code: "jewel", games: ["MM9"], gameSl: "MM9", icon: "/robots/MM9/jewel.png" },
  { name: "Hornet Man", code: "hornet", games: ["MM9"], gameSl: "MM9", icon: "/robots/MM9/hornet.png" },
  { name: "Magma Man", code: "magma", games: ["MM9"], gameSl: "MM9", icon: "/robots/MM9/magma.png" },
  { name: "Galaxy Man", code: "galaxy", games: ["MM9"], gameSl: "MM9", icon: "/robots/MM9/galaxy.png" },
  //MM10
  { name: "Blade Man", code: "blade", games: ["MM10"], gameSl: "MM10", icon: "/robots/MM10/blade.png" },
  { name: "Pump Man", code: "pump", games: ["MM10"], gameSl: "MM10", icon: "/robots/MM10/pump.png" },
  { name: "Commando Man", code: "commando", games: ["MM10"], gameSl: "MM10", icon: "/robots/MM10/commando.png" },
  { name: "Chill Man", code: "chill", games: ["MM10"], gameSl: "MM10", icon: "/robots/MM10/chill.png" },
  { name: "Sheep Man", code: "sheep", games: ["MM10"], gameSl: "MM10", icon: "/robots/MM10/sheep.png" },
  { name: "Strike Man", code: "strike", games: ["MM10"], gameSl: "MM10", icon: "/robots/MM10/strike.png" },
  { name: "Nitro Man", code: "nitro", games: ["MM10"], gameSl: "MM10", icon: "/robots/MM10/nitro.png" },
  { name: "Solar Man", code: "solar", games: ["MM10"], gameSl: "MM10", icon: "/robots/MM10/solar.png" },
  //MM11
  { name: "Block Man", code: "block", games: ["MM11"], gameSl: "MM11", icon: "/robots/MM11/block.png" },
  { name: "Fuse Man", code: "fuse", games: ["MM11"], gameSl: "MM11", icon: "/robots/MM11/fuse.png" },
  { name: "Blast Man", code: "blast", games: ["MM11"], gameSl: "MM11", icon: "/robots/MM11/blast.png" },
  { name: "Acid Man", code: "acid", games: ["MM11"], gameSl: "MM11", icon: "/robots/MM11/acid.png" },
  { name: "Tundra Man", code: "tundra", games: ["MM11"], gameSl: "MM11", icon: "/robots/MM11/tundra.png" },
  { name: "Torch Man", code: "torch", games: ["MM11"], gameSl: "MM11", icon: "/robots/MM11/torch.png" },
  { name: "Impact Man", code: "impact", games: ["MM11"], gameSl: "MM11", icon: "/robots/MM11/impact.png" },
  { name: "Bounce Man", code: "bounce", games: ["MM11"], gameSl: "MM11", icon: "/robots/MM11/bounce.png" },
  //MMDOS
  { name: "Sonic Man", code: "sonic", games: ["MM1D"], gameSl: "MM1D", icon: "/robots/MMDOS/sonic.png" },
  { name: "Volt Man", code: "volt", games: ["MM1D"], gameSl: "MM1D", icon: "/robots/MMDOS/volt.png" },
  { name: "Dyna Man", code: "dyna", games: ["MM1D"], gameSl: "MM1D", icon: "/robots/MMDOS/dyna.png" },
  //MMDOS3
  { name: "Bit Man", code: "bit", games: ["MM3D"], gameSl: "MM3D", icon: "/robots/MMDOS/bit.png" },
  { name: "Blade Man (DOS)", code: "slice", games: ["MM3D"], gameSl: "MM3D", icon: "/robots/MMDOS/slice.png" },
  { name: "Oil Man (DOS)", code: "petrol", games: ["MM3D"], gameSl: "MM3D", icon: "/robots/MMDOS/petrol.png" },
  { name: "Shark Man", code: "shark", games: ["MM3D"], gameSl: "MM3D", icon: "/robots/MMDOS/shark.png" },
  { name: "Wave Man (DOS)", code: "cascade", games: ["MM3D"], gameSl: "MM3D", icon: "/robots/MMDOS/cascade.png" },
  { name: "Torch Man (DOS)", code: "solder", games: ["MM3D"], gameSl: "MM3D", icon: "/robots/MMDOS/solder.png" },
  //MM&B2
  { name: "Dangan Man", code: "bullet", games: ["MM&B2"], gameSl: "MM&B2", icon: "/robots/R&F2/bullet.png" },
  { name: "Konro Man", code: "stove", games: ["MM&B2"], gameSl: "MM&B2", icon: "/robots/R&F2/stove.png" },
  { name: "Aircon Man", code: "fan", games: ["MM&B2"], gameSl: "MM&B2", icon: "/robots/R&F2/fan.png" },
  { name: "Komuso Man", code: "monk", games: ["MM&B2"], gameSl: "MM&B2", icon: "/robots/R&F2/monk.png" },
  { name: "Clock Men", code: "clock", games: ["MM&B2"], gameSl: "MM&B2", icon: "/robots/R&F2/clock.png" },
  { name: "Compass Man", code: "compass", games: ["MM&B2"], gameSl: "MM&B2", icon: "/robots/R&F2/compass.png" },

])
const rmTableColumns = ref([
  {
    name: "icon",
    label: "Portrait",
    field: "icon",
    align: "center",
    sortable: false,
  },
  {
    name: "name",
    label: "Designation",
    field: "name",
    align: "center",
    sortable: false,
  },
  {
    name: "gamelist",
    label: "Games",
    field: "games",
    align: "center",
    sortable: false,
  },
  {
    name: "weapon",
    label: "Weapon Get",
    field: "weapon",
    align: "center",
    sortable: false,
  },
  {
    name: "weakness",
    label: "Weak To",
    field: "weakness",
    align: "center",
    sortable: false,
  },
  {
    name: "action",
    label: "Damage (Full)",
    field: "action",
    align: "center",
    sortable: false,
  },

  {
    name: "notes",
    label: "Notes",
    field: "notes",
    align: "center",
    sortable: false,
  },
])
const playerSwitch = ref("mega")
const damageDataTempRobot = ref("")
const damageDataTempGame = ref("")
const damageShowSwitch = ref(false)
const wpnColumns = ref([])
const rbtRow = ref([])
function damageDataTable(robot, game, player, funct) { return damageDataTable2(robot, game, player, funct) };
function dataFill() {
  robotMastersFltrdLst.value = [];
  if (game.value == "ALL") {
    robotMastersFltrdLst.value = robotMasters.value
  } else {
    var tempArrayChar
    for (var i = 0; i < games.value.length; i++) {
      if (games.value[i].code == game.value) {
        tempArrayChar = games.value[i].rms
      }
    }
    for (var j = 0; j < tempArrayChar.length; j++) {
      for (var i = 0; i < robotMasters.value.length; i++) {
        if (robotMasters.value[i].code == tempArrayChar[j]) {
          robotMasters.value[i].gameSl = game.value
          robotMastersFltrdLst.value.push(robotMasters.value[i])
        }
      }
    }
  }
}
function damageDTIconRetrieve(headerWpnCode) {
  console.log(headerWpnCode)
  for (var i = 0; i < specialWeapons.value.length; i++) {
    if (specialWeapons.value[i].code == headerWpnCode) {
      console.log(specialWeapons.value[i])
      return specialWeapons.value[i];
    }
  }
}
function gameFormatName(gamesChar, func) {
  switch (func) {
    case 1:
      var tempListGames = []
      for (var i = 0; i < gamesChar.length; i++) {
        for (var j = 0; j < games.value.length; j++) {
          if (games.value[j].code == gamesChar[i]) {
            tempListGames.push(games.value[j])
          }
        }
      }
      return tempListGames
    case 2:
      for (var i = 0; i < games.value.length; i++) {
        if (games.value[i].code == gamesChar) {
          return games.value[i].title
        }
      }
  }

}
function openDamageTable(robot, game) {
  wpnColumns.value = []
  rbtRow.value = []
  damageDataTempRobot.value = robot
  damageDataTempGame.value = game
  var tempStorage = damageDataTable(robot, game, playerSwitch.value, 1)
  console.log(tempStorage)
  wpnColumns.value = tempStorage.col
  rbtRow.value = tempStorage.row
  damageShowSwitch.value = true
}

watch(game, (newValue, oldValue) => {
  // Cuando count cambie, actualizamos el valor de double
  dataFill();
  damageShowSwitch.value = false
});
watch(playerSwitch, (newValue, oldValue) => {
  if (damageShowSwitch.value == true) {
    openDamageTable(damageDataTempRobot.value, damageDataTempGame.value)
  }
})

onMounted(async () => {
  dataFill()
})
</script>
<style>
.my-sticky-header-table {
  height: 620px;
}

.actionbtn {
  background-color: #1a41c4;
}

.actionbtnBass {
  background-color: #c46a04;
}

.tableBodyColorMega {
  background-color: #46a5f3;
}

.tableBodyColorBass {
  background-color: #383c49;
}

.q-table__top,
.q-table__bottom,
thead tr:first-child th {
  background-color: #1a41c4;
}


thead tr th {
  position: sticky;
  z-index: 1;
}

thead tr:first-child th {
  top: 0;
}

.q-table--loading thead tr:last-child th {
  top: 48px;
}

tbody {
  scroll-margin-top: 48px;
}
</style>
