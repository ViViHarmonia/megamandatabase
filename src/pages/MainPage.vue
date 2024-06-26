<template></template>
<script setup>
import { ref } from "vue";
const games = ref([
  { name: "Mega Man", code: "MM1" },
  { name: "Mega Man 2", code: "MM2" },
  { name: "Mega Man 3", code: "MM3" },
  { name: "Mega Man 4", code: "MM4" },
  { name: "Mega Man 5", code: "MM5" },
  { name: "Mega Man 6", code: "MM6" },
  { name: "Mega Man 7", code: "MM7" },
  { name: "Mega Man 8", code: "MM8" },
  { name: "Mega Man 9", code: "MM9" },
  { name: "Mega Man 10", code: "MM10" },
  { name: "Mega Man 11", code: "MM11" },
  { name: "Mega Man: Dr. Wily's Revenge", code: "MMI" },
  { name: "Mega Man II", code: "MMII" },
  { name: "Mega Man III", code: "MMIII" },
  { name: "Mega Man IV", code: "MMIV" },
  { name: "Mega Man V", code: "MMV" },
  { name: "Mega Man & Bass", code: "MM&B1" },
  { name: "Rockman & Forte: Mirai Kara no Chōsensha", code: "MM&B2" },
  { name: "Mega Man (DOS)", code: "MM1D" },
  { name: "Mega Man 3 (DOS)", code: "MM3D" },
  { name: "Mega Man: The Power Battle", code: "MMP1" },
  { name: "Mega Man 2: The Power Fighters", code: "MMP2" },
  { name: "Mega Man Powered Up", code: "MMPU" },
])
const robotMasters = ref([
  { name: "Cut Man", code: "cut", games: ["MM1", "MMI", "MM8", "MMPU", "MMP1", "MMP2"], gameSl: "MM1", icon: "" },
  { name: "Tengu Man", code: "tengu", games: ["MM8", "MM&B1"], gameSl: "MM8", icon: "" },
  { name: "Dangan Man", code: "bullet", games: ["MM&B2"], gameSl: "MM&B2", icon: "" },
])
const specialWeapons = ref([
  { code: "cutw", name: "Rolling Cutter", icon: "" },
  { code: "elecw", name: "Thunder Beam", icon: "" },
  { code: "icew", name: "Ice Slasher", icon: "" },
  { code: "bombw", name: "Hyper Bomb", icon: "" },
  { code: "firew", name: "Fire Storm", icon: "" },
  { code: "gutsw", name: "Super Arm", icon: "" },
  { code: "tenguw1", name: "Tornado Hold", icon: "" },
  { code: "tenguw2", name: "Tengu Blade", icon: "" },
  { code: "bulletw1", name: "Rockn Vulcan", icon: "" },
  { code: "bulletw2", name: "Forte Vulcan", icon: "" },
])
const wpnColumns = ref([])
const rbtRow = ref({})
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
            weakness: "gutsw"
          }
          break
        case 'guts': break
        case 'ice': break
        case 'bomb': break
        case 'fire': break
        case 'elec': break
      }
      break
    case 'MM2': break
    case 'MM3': break
    case 'MM4': break
    case 'MM5': break
    case 'MM6': break
    case 'MM7': break
    case 'MM8': break
    case 'MM9': break
    case 'MM10': break
    case 'MM11': break
    case 'MMI': break
    case 'MMII': break
    case 'MMIII': break
    case 'MMIV': break
    case 'MMV': break
    case 'MM&B1': break
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
  }
}
</script>
