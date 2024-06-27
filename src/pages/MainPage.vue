<template>
  <q-card>
    <q-card-section>
      <q-table flat bordered dark class="my-sticky-header-table" hide-bottom virtual-scroll auto-width wrap-cells
        :rows-per-page-options="[0]" :columns="rmTableColumns" :rows="robotMastersFltrdLst">
        <template v-slot:top>
          <q-select v-model="game" :options="games" option-label="title" option-value="code" input-debounce="0" dark
            outlined dense />
          <div class="radios">
            <q-radio v-model="playerSwitch" val="mega" label="Mega Man" />
            <q-radio v-model="playerSwitch" val="bass" label="Bass" />
          </div>
        </template>
        <template v-slot:body-cell-gamelist="props">
          <q-td :props="props">
            <q-select v-model="props.row.gameSl" :options="nameReturn(props.row.games, 1)" option-label="title"
              option-value="code" fill-input input-debounce="0" dark map-options outlined dense
              v-if="props.row.games.length > 1"></q-select>
            <div v-else>{{ nameReturn(props.row.gameSl, 2) }}</div>
          </q-td>
        </template>
        <template v-slot:body-cell-weapon="props">
          <q-td :props="props">
            <div>{{ damageDataTable(props.row.code, props.row.gameSl, playerSwitch, 3) }}</div>
          </q-td>
        </template>
        <template v-slot:body-cell-weakness="props">
          <q-td :props="props">
            <div>{{ damageDataTable(props.row.code, props.row.gameSl, playerSwitch, 2) }}</div>
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>

</template>
<script setup>
import { onMounted, ref, watch } from "vue";
const game = ref("ALL")
const games = ref([
  { title: "ALL", code: "ALL" },
  { title: "Mega Man", code: "MM1" },
  { title: "Mega Man 2", code: "MM2" },
  { title: "Mega Man 3", code: "MM3" },
  { title: "Mega Man 4", code: "MM4" },
  { title: "Mega Man 5", code: "MM5" },
  { title: "Mega Man 6", code: "MM6" },
  { title: "Mega Man 7", code: "MM7" },
  { title: "Mega Man 8", code: "MM8" },
  { title: "Mega Man 9", code: "MM9" },
  { title: "Mega Man 10", code: "MM10" },
  { title: "Mega Man 11", code: "MM11" },
  { title: "Mega Man: Dr. Wily's Revenge", code: "MMI" },
  { title: "Mega Man II", code: "MMII" },
  { title: "Mega Man III", code: "MMIII" },
  { title: "Mega Man IV", code: "MMIV" },
  { title: "Mega Man V", code: "MMV" },
  { title: "Mega Man & Bass", code: "MM&B1" },
  { title: "Rockman & Forte: Mirai Kara no Chōsensha", code: "MM&B2" },
  { title: "Mega Man (DOS)", code: "MM1D" },
  { title: "Mega Man 3 (DOS)", code: "MM3D" },
  { title: "Mega Man: The Power Battle", code: "MMP1" },
  { title: "Mega Man 2: The Power Fighters", code: "MMP2" },
  { title: "Mega Man Powered Up", code: "MMPU" },
  { title: "Mega Man (Game Gear)", code: "MMGG" },
  { title: "Mega Man 2 (Tiger)", code: "MMT2" },
  { title: "Mega Man 3 (Tiger)", code: "MMT3" },
])
const robotMastersFltrdLst = ref([])
const robotMasters = ref([
  { name: "Cut Man", code: "cut", games: ["MM1", "MMI", "MM8", "MMPU", "MMP1", "MMP2"], gameSl: "MM1", icon: "/robots/Cutmugshot.png", wpn: {}, wkn: {} },
  { name: "Tengu Man", code: "tengu", games: ["MM8", "MM&B1"], gameSl: "MM8", icon: "/robots/Tengumugshot.png", wpn: {}, wkn: {} },
  { name: "Dangan Man", code: "bullet", games: ["MM&B2"], gameSl: "MM&B2", icon: "/robots/Dangamug.png", wpn: {}, wkn: {} },
])
const rmTableColumns = ref([
  {
    name: "name",
    label: "Designation",
    field: "name",
    align: "start",
    sortable: false,
  },
  {
    name: "icon",
    label: "Portrait",
    field: "icon",
    align: "start",
    sortable: false,
  },
  {
    name: "gamelist",
    label: "Games",
    field: "games",
    align: "start",
    sortable: false,
  },
  {
    name: "weapon",
    label: "Weapon Get",
    field: "weapon",
    align: "start",
    sortable: false,
  },
  {
    name: "weakness",
    label: "Weak To",
    field: "weakness",
    align: "start",
    sortable: false,
  },
])
const specialWeapons = ref([

  { code: "PLACE", name: "PLACEHOLDERNAME", icon: "" },
  { code: "mega", name: "Mega/Rock Buster", icon: "" },
  { code: "cutw", name: "Rolling Cutter", icon: "" },
  { code: "elecw", name: "Thunder Beam", icon: "" },
  { code: "icew", name: "Ice Slasher", icon: "" },
  { code: "bombw", name: "Hyper Bomb", icon: "" },
  { code: "firew", name: "Fire Storm", icon: "" },
  { code: "gutsw", name: "Super Arm", icon: "" },

  { code: "tenguw1", name: "Tornado Hold", icon: "" },
  { code: "astrow1", name: "Astro Crush", icon: "" },
  { code: "swordw", name: "Flame Sword", icon: "" },
  { code: "clownw", name: "Thunder Claw", icon: "" },
  { code: "searchw", name: "Homing Sniper", icon: "" },
  { code: "frostw", name: "Ice Wave", icon: "" },
  { code: "grenadew", name: "Flash Bomb", icon: "" },
  { code: "aquaw", name: "Water Balloon", icon: "" },

  { code: "coldw", name: "Ice Wall", icon: "" },
  { code: "burnerw", name: "Wave Burner", icon: "" },
  { code: "piratew", name: "Remote Mine", icon: "" },
  { code: "groundw", name: "Spread Drill", icon: "" },
  { code: "tenguw2", name: "Tengu Blade", icon: "" },
  { code: "magicw", name: "Magic Card", icon: "" },
  { code: "astrow2", name: "Copy Vision", icon: "" },
  { code: "dynamow", name: "Lightning Bolt", icon: "" },

  { code: "bulletw1", name: "Rock'n Vulcan", icon: "" },
  { code: "bulletw2", name: "Forte Vulcan", icon: "" },
  { code: "stovew1", name: "Flame Shower", icon: "" },
  { code: "stovew2", name: "Flame Mixer", icon: "" },
  { code: "airconw1", name: "Barrier Wind", icon: "" },
  { code: "airconw2", name: "Forte Cyclone", icon: "" },
  { code: "monkw1", name: "Doppel Crash", icon: "" },
  { code: "monkw2", name: "Doppler Attack", icon: "" },
  { code: "clockw1", name: "Time Switch", icon: "" },
  { code: "clockw2", name: "Time Bomb", icon: "" },


  { code: "bass", name: "Bass/Forte Buster", icon: "" },
])
const playerSwitch = ref("mega")
//false equals mega, true equals bass
const wpnColumns = ref([])
const rbtRow = ref({})
function dataFill() {
  if (game.value == "ALL") {
    robotMastersFltrdLst.value = robotMasters.value
  } else {
    for (var i = 0; i < robotMasters.value.length; i++) {
      for (var j = 0; j < robotMasters.value[i].games.length; j++) {
        if (robotMasters.value[i].games[j] == game.value) {
          robotMasters.value[i].game = game.value
          robotMastersFltrdLst.value.push(robotMasters.value[i])
        }
      }
    }
  }
}
function nameReturn(gamesChar, func) {
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
function damageDataTable(robot, game, player, funct) {
  //funct 1 brings whole table. funct 2 just brings robot weakness
  var tempColumns
  var tempRow
  switch (game) {
    case 'MM1':
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
      ]
      switch (robot) {
        case 'cut':
          tempRow = {
            buster: 3,
            cutw: 1,
            gutsw: 14,
            icew: 0,
            bombw: 2,
            firew: 3,
            elecw: 1,
            weapon: "cutw",
            weakness: "gutsw"
          }
          break
        case 'guts':
          tempRow = {
            buster: 2,
            cutw: 1,
            gutsw: 1,
            icew: 0,
            bombw: 10,
            firew: 2,
            elecw: 1,
            weapon: "gutsw",
            weakness: "bombw"
          }
          break
        case 'ice':
          tempRow = {
            buster: 1,
            cutw: 2,
            gutsw: 'X',
            icew: 0,
            bombw: 4,
            firew: 1,
            elecw: 10,
            weapon: "icew",
            weakness: "elecw"
          }
          break
        case 'bomb':
          tempRow = {
            buster: 2,
            cutw: 2,
            gutsw: 'X',
            icew: 0,
            bombw: 1,
            firew: 4,
            elecw: 2,
            weapon: "bombw",
            weakness: "firew"
          }
          break
        case 'fire':
          tempRow = {
            buster: 2,
            cutw: 2,
            gutsw: 'X',
            icew: 4,
            bombw: 1,
            firew: 1,
            elecw: 1,
            weapon: "firew",
            weakness: "icew"
          }
          break
        case 'elec':
          tempRow = {
            buster: 1,
            cutw: 10,
            gutsw: 4,
            icew: 0,
            bombw: 2,
            firew: 1,
            elecw: 1,
            weapon: "elecw",
            weakness: "cutw"
          }
          break
      }
      break
    case 'MM2': break
    case 'MM3': break
    case 'MM4': break
    case 'MM5': break
    case 'MM6': break
    case 'MM7': break
    case 'MM8':
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
      ]
      switch (robot) {
        case 'tengu':
          tempRow = {
            buster: '2:3:4',
            tenguw1: '2:1',
            astrow1: 0,
            swordw: 2,
            clownw: 1,
            searchw: 1,
            frostw: 6,
            grenadew: 1,
            aquaw: 1,
            weapon: "tenguw1",
            weakness: "frostw"
          }
          break
        case 'cut':
          tempRow = {
            buster: '2:3:4',
            tenguw1: '2:3',
            astrow1: 6,
            swordw: 4,
            clownw: 4,
            searchw: 3,
            frostw: 4,
            grenadew: 3,
            aquaw: 4,

            weapon: "NONE",
            weakness: "astrow"
          }
          break
      }
      break
    case 'MM9': break
    case 'MM10': break
    case 'MM11': break
    case 'MMI': break
    case 'MMII': break
    case 'MMIII': break
    case 'MMIV': break
    case 'MMV': break
    case 'MM&B1':
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
      ]
      switch (robot) {
        case 'tengu':
          tempRow = {
            megab: '1:3',
            bassb: '1:2',
            coldw: 1,
            burnerw: 1,
            piratew: 1,
            groundw: '6:4:3',
            tenguw2: "1:1:1",
            magicw: 1,
            astrow2: 1,
            dynamow: 1,
            weapon: "tenguw2",
            weakness: 'groundw',
          }
          break
      }
      switch (player) {
        case 'mega':
          tempRow.buster = tempRow.megab
          break
        case 'bass':
          tempRow.buster = tempRow.bassb
          break
      }
      break
    case 'MM&B2': break
    case 'MM1D': break
    case 'MM3D': break
    case 'MMP1': break
    case 'MMP2': break
    case 'MMPU': break
  }
  switch (funct) {
    case 1:
      wpnColumns.value = tempColumns
      rbtRow.value = tempRow
      break
    case 2:
      for (var i = 0; i < specialWeapons.value.length; i++) {
        if (specialWeapons.value[i].code == tempRow.weakness) {
          return specialWeapons.value[i]
        }
      }
      break
    case 3:
      if (tempRow.weapon == "NONE") {
        return tempRow.weapon
      }
      for (var i = 0; i < specialWeapons.value.length; i++) {
        if (specialWeapons.value[i].code == tempRow.weapon) {
          return specialWeapons.value[i]
        }
      }
      break
  }
}
watch(game, (newValue, oldValue) => {
  // Cuando count cambie, actualizamos el valor de double
  dataFill();
});

onMounted(async () => {
  dataFill()
})
</script>
<style>
.my-sticky-header-table {
  height: 500px;
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
