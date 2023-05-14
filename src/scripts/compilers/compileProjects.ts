import { sportData } from "../../data/general/Sport";
import { removeDuplicates } from "../formatters/removeDuplicates";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const compileProjects = () => {
    const islands: any[] = [];
    const munros: any[] = [];
    const munroTops: any[] = [];
    const corbetts: any[] = [];
    const corbettTops: any[] = [];
    const grahams: any[] = [];
    const subTwos: any[] = [];
    const donalds: any[] = [];

    const islands2023: any[] = [];
    const munros2023: any[] = [];
    const munroTops2023: any[] = [];
    const corbetts2023: any[] = [];
    const corbettTops2023: any[] = [];
    const grahams2023: any[] = [];
    const subTwos2023: any[] = [];
    const donalds2023: any[] = [];

    const islands2022: any[] = [];
    const munros2022: any[] = [];
    const munroTops2022: any[] = [];
    const corbetts2022: any[] = [];
    const corbettTops2022: any[] = [];
    const grahams2022: any[] = [];
    const subTwos2022: any[] = [];
    const donalds2022: any[] = [];

    const islands2021: any[] = [];
    const munros2021: any[] = [];
    const munroTops2021: any[] = [];
    const corbetts2021: any[] = [];
    const corbettTops2021: any[] = [];
    const grahams2021: any[] = [];
    const subTwos2021: any[] = [];
    const donalds2021: any[] = [];

    const islands2020: any[] = [];
    const munros2020: any[] = [];
    const munroTops2020: any[] = [];
    const corbetts2020: any[] = [];
    const corbettTops2020: any[] = [];
    const grahams2020: any[] = [];
    const subTwos2020: any[] = [];
    const donalds2020: any[] = [];

    const projects: any[] = [];
    projects.push({
        2023: sportData[2023].projects,
        2022: sportData[2022].projects,
        2021: sportData[2021].projects,
        2020: sportData[2020].projects
    });

    const projectsN: any[] = [];
    projectsN.push({
        'total': (
            sportData[2023].projects.length
            + sportData[2022].projects.length
            + sportData[2021].projects.length
            + sportData[2020].projects.length
        ),
        2023: sportData[2023].projects.length,
        2022: sportData[2022].projects.length,
        2021: sportData[2021].projects.length,
        2020: sportData[2020].projects.length
    });

    var totalProjectMiles2023: number = 0;
    var totalProjectMiles2022: number = 0;
    var totalProjectMiles2021: number = 0;
    var totalProjectMiles2020: number = 0;

    var totalProjectElev2023: number = 0;
    var totalProjectElev2022: number = 0;
    var totalProjectElev2021: number = 0;
    var totalProjectElev2020: number = 0;

    for (var i in sportData[2023].projects) {
        totalProjectMiles2023 = totalProjectMiles2023 + sportData[2023].projects[i].dist;
        totalProjectElev2023 = totalProjectElev2023 + sportData[2023].projects[i].elev;
        for (var j in sportData[2023].projects[i].islands) {
            islands2023.push(sportData[2023].projects[i].islands[j]);
        }
        for (var j in sportData[2023].projects[i].munros) {
            munros2023.push(sportData[2023].projects[i].munros[j]);
        }
        for (var j in sportData[2023].projects[i].munroTops) {
            munroTops2023.push(sportData[2023].projects[i].munroTops[j]);
        }
        for (var j in sportData[2023].projects[i].corbetts) {
            corbetts2023.push(sportData[2023].projects[i].corbetts[j]);
        }
        for (var j in sportData[2023].projects[i].corbettTops) {
            corbettTops2023.push(sportData[2023].projects[i].corbettTops[j]);
        }
        for (var j in sportData[2023].projects[i].grahams) {
            grahams2023.push(sportData[2023].projects[i].grahams[j]);
        }
        for (var j in sportData[2023].projects[i].subTwos) {
            subTwos2023.push(sportData[2023].projects[i].subTwos[j]);
        }
        for (var j in sportData[2023].projects[i].donalds) {
            donalds2023.push(sportData[2023].projects[i].donalds[j]);
        }
    }

    for (var x in islands2023) {
        islands.push(islands2023[x]);
    }
    for (var x in munros2023) {
        munros.push(munros2023[x]);
    }
    for (var x in munroTops2023) {
        munroTops.push(munroTops2023[x]);
    }
    for (var x in corbetts2023) {
        corbetts.push(corbetts2023[x]);
    }
    for (var x in corbettTops2023) {
        corbettTops.push(corbettTops2023[x]);
    }
    for (var x in grahams2023) {
        grahams.push(grahams2023[x]);
    }
    for (var x in subTwos2023) {
        subTwos.push(subTwos2023[x]);
    }
    for (var x in donalds2023) {
        donalds.push(donalds2023[x]);
    }

    for (var i in sportData[2022].projects) {
        totalProjectMiles2022 = totalProjectMiles2022 + sportData[2022].projects[i].dist;
        totalProjectElev2022 = totalProjectElev2022 + sportData[2022].projects[i].elev;
        for (var j in sportData[2022].projects[i].islands) {
            islands2022.push(sportData[2022].projects[i].islands[j]);
        }
        for (var j in sportData[2022].projects[i].munros) {
            munros2022.push(sportData[2022].projects[i].munros[j]);
        }
        for (var j in sportData[2022].projects[i].munroTops) {
            munroTops2022.push(sportData[2022].projects[i].munroTops[j]);
        }
        for (var j in sportData[2022].projects[i].corbetts) {
            corbetts2022.push(sportData[2022].projects[i].corbetts[j]);
        }
        for (var j in sportData[2022].projects[i].corbettTops) {
            corbettTops2022.push(sportData[2022].projects[i].corbettTops[j]);
        }
        for (var j in sportData[2022].projects[i].grahams) {
            grahams2022.push(sportData[2022].projects[i].grahams[j]);
        }
        for (var j in sportData[2022].projects[i].subTwos) {
            subTwos2022.push(sportData[2022].projects[i].subTwos[j]);
        }
        for (var j in sportData[2022].projects[i].donalds) {
            donalds2022.push(sportData[2022].projects[i].donalds[j]);
        }
    }

    for (var x in islands2022) {
        islands.push(islands2022[x]);
    }
    for (var x in munros2022) {
        munros.push(munros2022[x]);
    }
    for (var x in munroTops2022) {
        munroTops.push(munroTops2022[x]);
    }
    for (var x in corbetts2022) {
        corbetts.push(corbetts2022[x]);
    }
    for (var x in corbettTops2022) {
        corbettTops.push(corbettTops2022[x]);
    }
    for (var x in grahams2022) {
        grahams.push(grahams2022[x]);
    }
    for (var x in subTwos2022) {
        subTwos.push(subTwos2022[x]);
    }
    for (var x in donalds2022) {
        donalds.push(donalds2022[x]);
    }

    for (var i in sportData[2021].projects) {
        totalProjectMiles2021 = totalProjectMiles2021 + sportData[2021].projects[i].dist;
        totalProjectElev2021 = totalProjectElev2021 + sportData[2021].projects[i].elev;
        for (var j in sportData[2021].projects[i].islands) {
            islands2021.push(sportData[2021].projects[i].islands[j]);
        }
        for (var j in sportData[2021].projects[i].munros) {
            munros2021.push(sportData[2021].projects[i].munros[j]);
        }
        for (var j in sportData[2021].projects[i].munroTops) {
            munroTops2021.push(sportData[2021].projects[i].munroTops[j]);
        }
        for (var j in sportData[2021].projects[i].corbetts) {
            corbetts2021.push(sportData[2021].projects[i].corbetts[j]);
        }
        for (var j in sportData[2021].projects[i].corbettTops) {
            corbettTops2021.push(sportData[2021].projects[i].corbettTops[j]);
        }
        for (var j in sportData[2021].projects[i].grahams) {
            grahams2021.push(sportData[2021].projects[i].grahams[j]);
        }
        for (var j in sportData[2021].projects[i].subTwos) {
            subTwos2021.push(sportData[2021].projects[i].subTwos[j]);
        }
        for (var j in sportData[2021].projects[i].donalds) {
            donalds2021.push(sportData[2021].projects[i].donalds[j]);
        }
    }

    for (var x in islands2021) {
        islands.push(islands2021[x]);
    }
    for (var x in munros2021) {
        munros.push(munros2021[x]);
    }
    for (var x in munroTops2021) {
        munroTops.push(munroTops2021[x]);
    }
    for (var x in corbetts2021) {
        corbetts.push(corbetts2021[x]);
    }
    for (var x in corbettTops2021) {
        corbettTops.push(corbettTops2021[x]);
    }
    for (var x in grahams2021) {
        grahams.push(grahams2021[x]);
    }
    for (var x in subTwos2021) {
        subTwos.push(subTwos2021[x]);
    }
    for (var x in donalds2021) {
        donalds.push(donalds2021[x]);
    }

    for (var i in sportData[2020].projects) {
        totalProjectMiles2020 = totalProjectMiles2020 + sportData[2020].projects[i].dist;
        totalProjectElev2020 = totalProjectElev2020 + sportData[2020].projects[i].elev;
        for (var j in sportData[2020].projects[i].islands) {
            islands2020.push(sportData[2020].projects[i].islands[j]);
        }
        for (var j in sportData[2020].projects[i].munros) {
            munros2020.push(sportData[2020].projects[i].munros[j]);
        }
        for (var j in sportData[2020].projects[i].munroTops) {
            munroTops2020.push(sportData[2020].projects[i].munroTops[j]);
        }
        for (var j in sportData[2020].projects[i].corbetts) {
            corbetts2020.push(sportData[2020].projects[i].corbetts[j]);
        }
        for (var j in sportData[2020].projects[i].corbettTops) {
            corbettTops2020.push(sportData[2020].projects[i].corbettTops[j]);
        }
        for (var j in sportData[2020].projects[i].grahams) {
            grahams2020.push(sportData[2020].projects[i].grahams[j]);
        }
        for (var j in sportData[2020].projects[i].subTwos) {
            subTwos2020.push(sportData[2020].projects[i].subTwos[j]);
        }
        for (var j in sportData[2020].projects[i].donalds) {
            donalds2020.push(sportData[2020].projects[i].donalds[j]);
        }
    }

    for (var x in islands2020) {
        islands.push(islands2020[x]);
    }
    for (var x in munros2020) {
        munros.push(munros2020[x]);
    }
    for (var x in munroTops2020) {
        munroTops.push(munroTops2020[x]);
    }
    for (var x in corbetts2020) {
        corbetts.push(corbetts2020[x]);
    }
    for (var x in corbettTops2020) {
        corbettTops.push(corbettTops2020[x]);
    }
    for (var x in grahams2020) {
        grahams.push(grahams2020[x]);
    }
    for (var x in subTwos2020) {
        subTwos.push(subTwos2020[x]);
    }
    for (var x in donalds2020) {
        donalds.push(donalds2020[x]);
    }

    const islandData: any[] = [];
    islandData.push({
        islands: islands.sort(),
        islandsUnq: removeDuplicates(islands).sort(),
        islandsN: islands.length,
        islandsUnqN: removeDuplicates(islands).length,
        islands2023: islands2023.sort(),
        islands2022: islands2022.sort(),
        islands2021: islands2021.sort(),
        islands2020: islands2020.sort(),
        islands2023N: islands2023.length,
        islands2022N: islands2022.length,
        islands2021N: islands2021.length,
        islands2020N: islands2020.length
    });

    const munroData: any[] = [];
    munroData.push({
        munros: munros.sort(),
        munrosUnq: removeDuplicates(munros).sort(),
        munrosN: munros.length,
        munrosUnqN: removeDuplicates(munros).length,
        munros2023: munros2023.sort(),
        munros2022: munros2022.sort(),
        munros2021: munros2021.sort(),
        munros2020: munros2020.sort(),
        munros2023N: munros2023.length,
        munros2022N: munros2022.length,
        munros2021N: munros2021.length,
        munros2020N: munros2020.length
    });

    const munroTopData: any[] = [];
    munroTopData.push({
        munroTops: munroTops.sort(),
        munroTopsUnq: removeDuplicates(munroTops).sort(),
        munroTopsN: munroTops.length,
        munroTopsUnqN: removeDuplicates(munroTops).length,
        munroTops2023: munroTops2023.sort(),
        munroTops2022: munroTops2022.sort(),
        munroTops2021: munroTops2021.sort(),
        munroTops2020: munroTops2020.sort(),
        munroTops2023N: munroTops2023.length,
        munroTops2022N: munroTops2022.length,
        munroTops2021N: munroTops2021.length,
        munroTops2020N: munroTops2020.length
    });

    const corbettData: any[] = [];
    corbettData.push({
        corbetts: corbetts.sort(),
        corbettsUnq: removeDuplicates(corbetts).sort(),
        corbettsN: corbetts.length,
        corbettsUnqN: removeDuplicates(corbetts).length,
        corbetts2023: corbetts2023.sort(),
        corbetts2022: corbetts2022.sort(),
        corbetts2021: corbetts2021.sort(),
        corbetts2020: corbetts2020.sort(),
        corbetts2023N: corbetts2023.length,
        corbetts2022N: corbetts2022.length,
        corbetts2021N: corbetts2021.length,
        corbetts2020N: corbetts2020.length
    });

    const corbettTopData: any[] = [];
    corbettTopData.push({
        corbettTops: corbettTops.sort(),
        corbettTopsUnq: removeDuplicates(corbettTops).sort(),
        corbettTopsN: corbettTops.length,
        corbettTopsUnqN: removeDuplicates(corbettTops).length,
        corbettTops2023: corbettTops2023.sort(),
        corbettTops2022: corbettTops2022.sort(),
        corbettTops2021: corbettTops2021.sort(),
        corbettTops2020: corbettTops2020.sort(),
        corbettTops2023N: corbettTops2023.length,
        corbettTops2022N: corbettTops2022.length,
        corbettTops2021N: corbettTops2021.length,
        corbettTops2020N: corbettTops2020.length
    });

    const grahamData: any[] = [];
    grahamData.push({
        grahams: grahams.sort(),
        grahamsUnq: removeDuplicates(grahams).sort(),
        grahamsN: grahams.length,
        grahamsUnqN: removeDuplicates(grahams).length,
        grahams2023: grahams2023.sort(),
        grahams2022: grahams2022.sort(),
        grahams2021: grahams2021.sort(),
        grahams2020: grahams2020.sort(),
        grahams2023N: grahams2023.length,
        grahams2022N: grahams2022.length,
        grahams2021N: grahams2021.length,
        grahams2020N: grahams2020.length
    });

    const subTwoData: any[] = [];
    subTwoData.push({
        subTwos: subTwos.sort(),
        subTwosUnq: removeDuplicates(subTwos).sort(),
        subTwosN: subTwos.length,
        subTwosUnqN: removeDuplicates(subTwos).length,
        subTwos2023: subTwos2023.sort(),
        subTwos2022: subTwos2022.sort(),
        subTwos2021: subTwos2021.sort(),
        subTwos2020: subTwos2020.sort(),
        subTwos2023N: subTwos2023.length,
        subTwos2022N: subTwos2022.length,
        subTwos2021N: subTwos2021.length,
        subTwos2020N: subTwos2020.length
    });

    const donaldData: any[] = [];
    donaldData.push({
        donalds: donalds.sort(),
        donaldsUnq: removeDuplicates(donalds).sort(),
        donaldsN: donalds.length,
        donaldsUnqN: removeDuplicates(donalds).length,
        donalds2023: donalds2023.sort(),
        donalds2022: donalds2022.sort(),
        donalds2021: donalds2021.sort(),
        donalds2020: donalds2020.sort(),
        donalds2023N: donalds2023.length,
        donalds2022N: donalds2022.length,
        donalds2021N: donalds2021.length,
        donalds2020N: donalds2020.length
    });

    const projectsMiles: any[] = [];
    projectsMiles.push({
        'total': (
            toMiles(
                totalProjectMiles2023
                + totalProjectMiles2022
                + totalProjectMiles2021
                + totalProjectMiles2020
            )
        ),
        2023: toMiles(totalProjectMiles2023),
        2022: toMiles(totalProjectMiles2022),
        2021: toMiles(totalProjectMiles2021),
        2020: toMiles(totalProjectMiles2020)
    });

    const projectsElev: any[] = [];
    projectsElev.push({
        'total': (
            toFeet(
                totalProjectElev2023
                + totalProjectElev2022
                + totalProjectElev2021
                + totalProjectElev2020
            )
        ),
        2023: toFeet(totalProjectElev2023),
        2022: toFeet(totalProjectElev2022),
        2021: toFeet(totalProjectElev2021),
        2020: toFeet(totalProjectElev2020)
    });

    return {
        projects,
        projectsN,
        projectsMiles,
        projectsElev,
        islandData,
        munroData,
        munroTopData,
        corbettData,
        corbettTopData,
        grahamData,
        subTwoData,
        donaldData
    };
};

export default compileProjects;

console.log(compileProjects());
