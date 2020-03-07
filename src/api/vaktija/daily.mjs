import { differences, vaktija } from "../../data/vaktija.json";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";

export const daily = (
  location = 77,
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  day = new Date().getDate()
) => {
  if (moment([year, month - 1, day]).isValid()) {
    return {
      vakat: vaktija.months[month - 1].days[day - 1].vakat.map((v, i) =>
        moment([year, month - 1, day])
          .add(3, "h")
          .tz("Europe/Sarajevo")
          .isDST()
          ? moment
              .duration(
                v + differences[location].months[month - 1].vakat[i] + 3600,
                "s"
              )
              .format("HH:mm")
          : moment
              .duration(
                v + differences[location].months[month - 1].vakat[i],
                "s"
              )
              .format("HH:mm")
      )
    };
  }
};
