import { differences, vaktija } from "../../data/vaktija.json";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";

export const yearly = (location = 77, year = new Date().getFullYear()) => {
  return {
    months: vaktija.months.map((m, i) => ({
      days: m.days
        .filter((d, j) => moment([year, i, j + 1]).isValid())
        .map((d, k) => ({
          vakat: d.vakat.map((v, l) =>
            moment([year, i, k + 1])
              .add(3, "h")
              .tz("Europe/Sarajevo")
              .isDST()
              ? moment
                  .duration(
                    v + differences[location].months[i].vakat[l] + 3600,
                    "s"
                  )
                  .format("h:mm")
              : moment
                  .duration(v + differences[location].months[i].vakat[l], "s")
                  .format("h:mm")
          )
        }))
    }))
  };
};
