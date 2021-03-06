document.addEventListener('DOMContentLoaded', function () {

    // //parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

    let generateTables = function (tablesData) {
        for (i = 0; i < tablesData.length; i++) {
            let tableElement = document.getElementById(`table${i}`);
            let tableTemplateSource = document.getElementById("table-template").innerHTML;
            let tableTemplate = Handlebars.compile(tableTemplateSource);
            let tableHTML = tableTemplate(tablesData[i]);
            tableElement.innerHTML = tableHTML;
        }
    }


    let moreFloeText = document.querySelector("#more-floe");
    let moreFloeButton = document.querySelector("#readmore-floe");

    moreFloeButton.addEventListener('click', () => {
        if (moreFloeButton.innerHTML === "Read more here") {
            moreFloeText.style.display = "inline-block";
            moreFloeButton.innerHTML = "Read less";
        } else {
            moreFloeButton.innerHTML = "Read more here";
            moreFloeText.style.display = "none";

        }
    })


    let moreBlazeText = document.querySelector("#more-blaze");
    let moreBlazeButton = document.querySelector("#readmore-blaze");
    console.log(moreBlazeButton);

    moreBlazeButton.addEventListener('click', () => {
        if (moreBlazeButton.innerHTML === "Read more here") {
            moreBlazeText.style.display = "inline-block";
            moreBlazeButton.innerHTML = "Read less";
        } else {
            moreBlazeButton.innerHTML = "Read more here";
            moreBlazeText.style.display = "none";

        }
    })

    let moreAsterText = document.querySelector("#more-aster");
    let moreAsterButton = document.querySelector("#readmore-aster");
    console.log(moreAsterButton);

    moreAsterButton.addEventListener('click', () => {
        if (moreAsterButton.innerHTML === "Read more here") {
            moreAsterText.style.display = "inline-block";
            moreAsterButton.innerHTML = "Read less";
        } else {
            moreAsterButton.innerHTML = "Read more here";
            moreAsterText.style.display = "none";

        }
    })

    let moreAblaziaText = document.querySelector("#more-ablazia");
    let moreAblaziaButton = document.querySelector("#readmore-ablazia");
    moreAblaziaButton.addEventListener('click', () => {
        if (moreAblaziaButton.innerHTML === "Read more here") {
            moreAblaziaText.style.display = "inline-block";
            moreAblaziaButton.innerHTML = "Read less";
        } else {
            moreAblaziaButton.innerHTML = "Read more here";
            moreAblaziaText.style.display = "none";

        }
    })



    let moreJasperText = document.querySelector("#more-jasper");
    let moreJasperButton = document.querySelector("#readmore-jasper");
    moreJasperButton.addEventListener('click', () => {
        if (moreJasperButton.innerHTML === "Read more here") {
            moreJasperText.style.display = "inline-block";
            moreJasperButton.innerHTML = "Read less";
        } else {
            moreJasperButton.innerHTML = "Read more here";
            moreJasperText.style.display = "none";

        }
    })

    let moreEnblastText = document.querySelector("#more-enblast");
    let moreEnblastButton = document.querySelector("#readmore-enblast");
    moreEnblastButton.addEventListener('click', () => {
        if (moreEnblastButton.innerHTML === "Read more here") {
            moreEnblastText.style.display = "inline-block";
            moreEnblastButton.innerHTML = "Read less";
        } else {
            moreEnblastButton.innerHTML = "Read more here";
            moreEnblastText.style.display = "none";

        }
    })

    let moreSiriusText = document.querySelector("#more-sirius");
    let moreSiriusButton = document.querySelector("#readmore-sirius");
    moreSiriusButton.addEventListener('click', () => {
        if (moreSiriusButton.innerHTML === "Read more here") {
            moreSiriusText.style.display = "inline-block";
            moreSiriusButton.innerHTML = "Read less";
        } else {
            moreSiriusButton.innerHTML = "Read more here";
            moreSiriusText.style.display = "none";

        }
    })








    generateTables([{
            incentivePerReferral: 3.04,
            ipl1: 9.12,
            ipl2: 27.36,
            ipl3: 82.08,
            ipl4: 246.24,
            ipl5: 738.72,
            income2: 36.48,
            income3: 118.56,
            income4: 364.80,
            income5: "1,103.52"
        }, {
            incentivePerReferral: 9.12,
            ipl1: 27.36,
            ipl2: 82.08,
            ipl3: 246.24,
            ipl4: 738.72,
            ipl5: "2, 216.16",
            income2: 109.44,
            income3: 355.68,
            income4: "1,094.40",
            income5: "3,310.56"
        }, {
            incentivePerReferral: 15.20,
            ipl1: 45.60,
            ipl2: 136.80,
            ipl3: 410.40,
            ipl4: "1,231.20",
            ipl5: "3,693.60",
            income2: 182.40,
            income3: 592.80,
            income4: "1,824.00",
            income5: "5,517.6"
        },
        {
            incentivePerReferral: 24.32,
            ipl1: 72.96,
            ipl2: 218.88,
            ipl3: 656.64,
            ipl4: "1,969.92",
            ipl5: "5,909.76",
            income2: 291.84,
            income3: 948.48,
            income4: "2,918.40",
            income5: "8,829.16"
        },
        {
            incentivePerReferral: 45.60,
            ipl1: 136.80,
            ipl2: 410.40,
            ipl3: "1,231.20",
            ipl4: "3,693.60",
            ipl5: "11,080.80",
            income2: 547.20,
            income3: "1,778.40",
            income4: "5,472.00",
            income5: "16,552.80",
        },
        {
            incentivePerReferral: 91.20,
            ipl1: 273.60,
            ipl2: 820.80,
            ipl3: "2,462.40",
            ipl4: "7,387.20",
            ipl5: "22,161.60",
            income2: "1, 094.40",
            income3: "3,556.80",
            income4: "10,944.00",
            income5: "33,105.60",
        },
        {
            incentivePerReferral: 152,
            ipl1: 456,
            ipl2: "1,368",
            ipl3: "4,104",
            ipl4: "12,312",
            ipl5: "36,936",
            income2: "1,824",
            income3: "5,928",
            income4: "18,240",
            income5: "55,176",
        }

    ])
});











// {
//     incentivePerReferral = ,
//         ipl1: ,
//         ipl2: ,
//         ipl3: ,
//         ipl4: ,
//         ipl5: ,
//         income2:,
//         income3:,
//         income4:,
//         income:5,
// }