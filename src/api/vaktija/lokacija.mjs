import data from '../../data/vaktija.json';

export const lokacija = () => {
    const { lokacija } = data;
    return {
        lokacija
    }
}
