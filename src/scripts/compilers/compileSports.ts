import { sportData } from "../../data/general/Sport";

export default function compileEvents() {
    const allSport: any[] = [];

    for (var z in sportData[2023].projects) {
        allSport.push(sportData[2023].projects[z]);
    }

    for (var y in sportData[2022].projects) {
        allSport.push(sportData[2022].projects[y]);
    }

    for (var x in sportData[2021].projects) {
        allSport.push(sportData[2021].projects[x]);
    }

    for (var w in sportData[2020].projects) {
        allSport.push(sportData[2020].projects[w]);
    }

    console.log('All Sport Events:\n', allSport);

    return allSport;
};