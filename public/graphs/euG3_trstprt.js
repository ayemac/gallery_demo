$(function () {
  $('#container').highcharts({
      title: {
        text: "Trust in Political Parties in Europe (10-point Scale)"
      },
      yAxis: {
        title: {
          text: "Average Trust in Political Parties"
        },
        type: "linear",
        labels: {
          format: "{value}"
        },
        min: 4
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        series: {
          turboThreshold: 0,
          showInLegend: false,
          marker: {
            enabled: true
          }
        },
        treemap: {
          layoutAlgorithm: "squarified"
        },
        bubble: {
          minSize: 5,
          maxSize: 25
        },
        scatter: {
          marker: {
            symbol: "circle"
          }
        },
        bar: {
          dataLabels: {
            enabled: true,
            format: "{point.y}"
          },
          enableMouseTracking: true
        },
        animation: true
      },
      annotationsOptions: {
        enabledButtons: false
      },
      tooltip: {
        delayForDisplay: 10,
        headerFormat: "<b>{point.potato}<\/b>",
        pointFormat: "<img src=\"{point.flagicon}\" /><table style=\"padding-bottom: 5px\"/>\n  <tr>\n    <\/th>\n    <td>{point.cntry}<\/td>\n  <\/tr>\n  <tr>\n    <th>Support for the E.U.:<\/th>\n    <td>{point.avg}<\/td>\n  <\/tr>\n<\/table>",
        backgroundColor: "#fff",
        useHTML: true,
        shadow: false,
        shape: "square"
      },
      series: [
        {
          group: "group",
          data: [
            {
              cntry: "Denmark",
              avg: 5.35,
              countrycode: "DK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DK.png",
              col: "#CDB5CD",
              y: 5.35,
              color: "#CDB5CD",
              name: "Denmark"
            },
            {
              cntry: "Netherlands",
              avg: 5.1,
              countrycode: "NL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NL.png",
              col: "#C4C4C4",
              y: 5.1,
              color: "#C4C4C4",
              name: "Netherlands"
            },
            {
              cntry: "Luxembourg",
              avg: 4.97,
              countrycode: "LU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LU.png",
              col: "#C4C4C4",
              y: 4.97,
              color: "#C4C4C4",
              name: "Luxembourg"
            },
            {
              cntry: "Finland",
              avg: 4.86,
              countrycode: "FI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FI.png",
              col: "#C4C4C4",
              y: 4.86,
              color: "#C4C4C4",
              name: "Finland"
            },
            {
              cntry: "Switzerland",
              avg: 4.86,
              countrycode: "CH",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CH.png",
              col: "#C4C4C4",
              y: 4.86,
              color: "#C4C4C4",
              name: "Switzerland"
            },
            {
              cntry: "Norway",
              avg: 4.85,
              countrycode: "NO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NO.png",
              col: "#C4C4C4",
              y: 4.85,
              color: "#C4C4C4",
              name: "Norway"
            },
            {
              cntry: "Sweden",
              avg: 4.8,
              countrycode: "SE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SE.png",
              col: "#C4C4C4",
              y: 4.8,
              color: "#C4C4C4",
              name: "Sweden"
            },
            {
              cntry: "Iceland",
              avg: 4.13,
              countrycode: "IS",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IS.png",
              col: "#C4C4C4",
              y: 4.13,
              color: "#C4C4C4",
              name: "Iceland"
            },
            {
              cntry: "Belgium",
              avg: 4.11,
              countrycode: "BE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BE.png",
              col: "#C4C4C4",
              y: 4.11,
              color: "#C4C4C4",
              name: "Belgium"
            },
            {
              cntry: "United Kingdom",
              avg: 3.63,
              countrycode: "GB",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GB.png",
              col: "#C4C4C4",
              y: 3.63,
              color: "#C4C4C4",
              name: "United Kingdom"
            },
            {
              cntry: "Cyprus",
              avg: 3.6,
              countrycode: "CY",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CY.png",
              col: "#C4C4C4",
              y: 3.6,
              color: "#C4C4C4",
              name: "Cyprus"
            },
            {
              cntry: "Germany",
              avg: 3.59,
              countrycode: "DE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DE.png",
              col: "#C4C4C4",
              y: 3.59,
              color: "#C4C4C4",
              name: "Germany"
            },
            {
              cntry: "Austria",
              avg: 3.55,
              countrycode: "AT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AT.png",
              col: "#C4C4C4",
              y: 3.55,
              color: "#C4C4C4",
              name: "Austria"
            },
            {
              cntry: "Ireland",
              avg: 3.45,
              countrycode: "IE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IE.png",
              col: "#C4C4C4",
              y: 3.45,
              color: "#C4C4C4",
              name: "Ireland"
            },
            {
              cntry: "Estonia",
              avg: 3.35,
              countrycode: "EE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/EE.png",
              col: "#C4C4C4",
              y: 3.35,
              color: "#C4C4C4",
              name: "Estonia"
            },
            {
              cntry: "Romania",
              avg: 3.15,
              countrycode: "RO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RO.png",
              col: "#C4C4C4",
              y: 3.15,
              color: "#C4C4C4",
              name: "Romania"
            },
            {
              cntry: "France",
              avg: 3.14,
              countrycode: "FR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FR.png",
              col: "#C4C4C4",
              y: 3.14,
              color: "#C4C4C4",
              name: "France"
            },
            {
              cntry: "Russian Federation",
              avg: 3.13,
              countrycode: "RU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RU.png",
              col: "#C4C4C4",
              y: 3.13,
              color: "#C4C4C4",
              name: "Russian Federation"
            },
            {
              cntry: "Slovakia",
              avg: 3.08,
              countrycode: "SK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SK.png",
              col: "#C4C4C4",
              y: 3.08,
              color: "#C4C4C4",
              name: "Slovakia"
            },
            {
              cntry: "Israel",
              avg: 3.07,
              countrycode: "IL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IL.png",
              col: "#C4C4C4",
              y: 3.07,
              color: "#C4C4C4",
              name: "Israel"
            },
            {
              cntry: "Czechia",
              avg: 2.97,
              countrycode: "CZ",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CZ.png",
              col: "#C4C4C4",
              y: 2.97,
              color: "#C4C4C4",
              name: "Czechia"
            },
            {
              cntry: "Hungary",
              avg: 2.9,
              countrycode: "HU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HU.png",
              col: "#C4C4C4",
              y: 2.9,
              color: "#C4C4C4",
              name: "Hungary"
            },
            {
              cntry: "Turkey",
              avg: 2.88,
              countrycode: "TR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/TR.png",
              col: "#C4C4C4",
              y: 2.88,
              color: "#C4C4C4",
              name: "Turkey"
            },
            {
              cntry: "Spain",
              avg: 2.81,
              countrycode: "ES",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/ES.png",
              col: "#C4C4C4",
              y: 2.81,
              color: "#C4C4C4",
              name: "Spain"
            },
            {
              cntry: "Lithuania",
              avg: 2.78,
              countrycode: "LT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LT.png",
              col: "#C4C4C4",
              y: 2.78,
              color: "#C4C4C4",
              name: "Lithuania"
            },
            {
              cntry: "Slovenia",
              avg: 2.7,
              countrycode: "SI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SI.png",
              col: "#C4C4C4",
              y: 2.7,
              color: "#C4C4C4",
              name: "Slovenia"
            },
            {
              cntry: "Greece",
              avg: 2.44,
              countrycode: "GR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GR.png",
              col: "#C4C4C4",
              y: 2.44,
              color: "#C4C4C4",
              name: "Greece"
            },
            {
              cntry: "Albania",
              avg: 2.26,
              countrycode: "AL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AL.png",
              col: "#C4C4C4",
              y: 2.26,
              color: "#C4C4C4",
              name: "Albania"
            },
            {
              cntry: "Ukraine",
              avg: 2.25,
              countrycode: "UA",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/UA.png",
              col: "#C4C4C4",
              y: 2.25,
              color: "#C4C4C4",
              name: "Ukraine"
            },
            {
              cntry: "Poland",
              avg: 2.21,
              countrycode: "PL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PL.png",
              col: "#C4C4C4",
              y: 2.21,
              color: "#C4C4C4",
              name: "Poland"
            },
            {
              cntry: "Portugal",
              avg: 2.2,
              countrycode: "PT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PT.png",
              col: "#C4C4C4",
              y: 2.2,
              color: "#C4C4C4",
              name: "Portugal"
            },
            {
              cntry: "Italy",
              avg: 2.18,
              countrycode: "IT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IT.png",
              col: "#C4C4C4",
              y: 2.18,
              color: "#C4C4C4",
              name: "Italy"
            },
            {
              cntry: "Croatia",
              avg: 2.07,
              countrycode: "HR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HR.png",
              col: "#C4C4C4",
              y: 2.07,
              color: "#C4C4C4",
              name: "Croatia"
            },
            {
              cntry: "Bulgaria",
              avg: 1.81,
              countrycode: "BG",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BG.png",
              col: "#C4C4C4",
              y: 1.81,
              color: "#C4C4C4",
              name: "Bulgaria"
            },
            {
              cntry: "Latvia",
              avg: 1.66,
              countrycode: "LV",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LV.png",
              col: "#C4C4C4",
              y: 1.66,
              color: "#C4C4C4",
              name: "Latvia"
            }
          ],
          type: "bar",
          name: "AverageTrust in Political Parties:"
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: ""
        }
      },
      subtitle: {
        text: "(0 = No trust at all, 10 = Complete trust) ESS 2002-2016",
        style: {
          color: "#2b908f",
          fontWeight: "bold"
        }
      },
      legend: {
        enabled: true,
        layout: "horizontal",
        verticalAlign: "bottom",
        floating: false,
        align: "center",
        style: {
          fontsize: "14px"
        }
      },
      colors: ["#CDB5CD", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4"],
      chart: {
        backgroundColor: "transparent"
      }
    }
  );
});
