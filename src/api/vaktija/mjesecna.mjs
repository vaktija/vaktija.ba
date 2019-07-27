import data from '../../data/vaktija.json';
import moment from "moment-hijri";
import "moment-duration-format";
import "moment/locale/bs";

const { razlika, vaktija } = data;

export const mjesecna = (
    lokacija = 77,
    godina = new Date().getFullYear(),
    mjesec = new Date().getMonth() + 1
) => {
    return {
        dan: vaktija.mjesec[mjesec - 1].dan
            .filter((d, i) => moment([godina, mjesec - 1, i + 1]).isValid())
            .map((d, j) => ({
                vakat: d.vakat
                    .map((v, i) => moment([godina, mjesec - 1, j + 1]).add(3, "h").isDST() ?
                        moment.duration(v + razlika[lokacija].mjesec[mjesec - 1].vakat[i] + 3600, "s").format("h:mm")
                        :
                        moment.duration(v + razlika[lokacija].mjesec[mjesec - 1].vakat[i], "s").format("h:mm")
                    )
            }))
    }
}
