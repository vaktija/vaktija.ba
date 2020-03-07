import { differences, vaktija } from "../../data/vaktija.json";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";

export const monthly = (
  location = 77,
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1
) => {
  return {
    days: vaktija.months[month - 1].days
      .filter((d, i) => moment([year, month - 1, i + 1]).isValid())
      .map((d, j) => ({
        vakat: d.vakat.map((v, i) =>
          moment([year, month - 1, j + 1])
            .tz("Europe/Sarajevo")
            .add(3, "h")
            .isDST()
            ? moment
                .duration(
                  v + differences[location].months[month - 1].vakat[i] + 3600,
                  "s"
                )
                .format("h:mm")
            : moment
                .duration(
                  v + differences[location].months[month - 1].vakat[i],
                  "s"
                )
                .format("h:mm")
        )
      }))
  };
};
