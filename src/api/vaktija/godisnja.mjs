import data from '../../data/vaktija.json';
import moment from "moment-hijri";
import "moment-duration-format";
import "moment/locale/bs";

const { razlika, vaktija } = data;

export const godisnja = (
    lokacija = 77,
    godina = new Date().getFullYear()
) => {
    return {
        mjesec: vaktija.mjesec.map(
            (m, i) => ({
                dan: m.dan
                    .filter((d, j) => moment([godina, i, j + 1]).isValid())
                    .map((d, k) => ({
                        vakat: d.vakat
                            .map((v, l) => moment([godina, i, k + 1]).add(3, "h").isDST() ?
                                moment.duration(v + razlika[lokacija].mjesec[i].vakat[l] + 3600, "s").format("h:mm")
                                :
                                moment.duration(v + razlika[lokacija].mjesec[i].vakat[l], "s").format("h:mm")
                            )
                    }))
            })
        )
    }
}
