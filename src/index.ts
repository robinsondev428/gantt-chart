import type { Plugin } from "vue"
import dayjs from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isBetween from "dayjs/plugin/isBetween"
import customParseFormat from "dayjs/plugin/customParseFormat"

import GGanttChart from "./components/GGanttChart.vue"
import GGanttRow from "./components/GGanttRow.vue"

export function extendDayjs() {
  dayjs.extend(isSameOrBefore)
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isBetween)
  dayjs.extend(customParseFormat)
}

export { GGanttChart, GGanttRow }

export const ganttastic: Plugin = {
  install(app, options?) {
    extendDayjs()
    app.component("GGanttChart", GGanttChart)
    app.component("GGanttRow", GGanttRow)
  }
}

export default ganttastic
