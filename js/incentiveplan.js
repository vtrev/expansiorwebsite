document.addEventListener('DOMContentLoaded', function () {



    let generateTables = function (tablesData) {
        for (i = 0; i < tablesData.length; i++) {
            let tableElement = document.getElementById(`table${i}`);
            let tableTemplateSource = document.getElementById("table-template").innerHTML;
            let tableTemplate = Handlebars.compile(tableTemplateSource);
            let tableHTML = tableTemplate(tablesData[i]);
            console.log(tableHTML);
            tableElement.innerHTML = tableHTML;
        }
    }


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