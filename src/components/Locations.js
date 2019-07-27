import React from 'react';
import { Link } from "react-router-dom";
import slugify from 'slugify';

const Locations = (props) => {

    let { myLocations, weight } = props;
    let myLocationsShort = ["Banovići", "Banja Luka", "Bihać", "Bijeljina", "Bileća", "Bos. Brod", "Bos. Dubica", "Bos. Gradiška", "Bos. Grahovo", "Bos. Krupa", "Bos. Novi", "Bos. Petrovac", "Bos. Šamac", "Bratunac", "Brčko", "Breza", "Bugojno", "Busovača", "Bužim", "Cazin", "Čajniče", "Čapljina", "Čelić", "Čelinac", "Čitluk", "Derventa", "Doboj", "Donji Vakuf", "Drvar", "Foča", "Fojnica", "Gacko", "Glamoč", "Goražde", "Gornji Vakuf", "Gračanica", "Gradačac", "Grude", "Hadžići", "Han-Pijesak", "Hlivno", "Ilijaš", "Jablanica", "Jajce", "Kakanj", "Kalesija", "Kalinovik", "Kiseljak", "Kladanj", "Ključ", "Konjic", "Kotor-Varoš", "Kreševo", "Kupres", "Laktaši", "Lopare", "Lukavac", "Ljubinje", "Ljubuški", "Maglaj", "Modriča", "Mostar", "Mrkonjić-Grad", "Neum", "Nevesinje", "Novi Travnik", "Odžak", "Olovo", "Orašje", "Pale", "Posušje", "Prijedor", "Prnjavor", "Prozor", "Rogatica", "Rudo", "Sanski Most", "Sarajevo", "Skender-Vakuf", "Sokolac", "Srbac", "Srebrenica", "Srebrenik", "Stolac", "Šekovići", "Šipovo", "Široki Brijeg", "Teslić", "Tešanj", "Tomislav-Grad", "Travnik", "Trebinje", "Trnovo", "Tuzla", "Ugljevik", "Vareš", "Velika Kladuša", "Visoko", "Višegrad", "Vitez", "Vlasenica", "Zavidovići", "Zenica", "Zvornik", "Žepa", "Žepče", "Živinice", "Bijelo Polje", "Gusinje", "Nova Varoš", "Novi Pazar", "Plav", "Pljevlja", "Priboj", "Prijepolje", "Rožaje", "Sjenica", "Tutin"];

    return (
        <ul>
            {myLocations.map((location, index) => {
                return (
                    <li key={index}>
                        <Link
                            className={`location-${weight[index]}`}
                            to={`/${slugify(location, {
                                replacement: "-",
                                remove: null,
                                lower: true,
                            })}`}
                        >
                            {myLocationsShort[index]}
                        </Link>
                    </li>
                );
            })}
        </ul>

    );
};

export default Locations;