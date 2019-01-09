$(function () {
  $('#container').highcharts({
      title: {
        text: "Trust in Politicians in Europe (10-point Scale)"
      },
      yAxis: {
        title: {
          text: "Average Trust in Politicians"
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
              avg: 5.28,
              countrycode: "DK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DK.png",
              col: "#CDB5CD",
              y: 5.28,
              color: "#CDB5CD",
              name: "Denmark"
            },
            {
              cntry: "Netherlands",
              avg: 5.04,
              countrycode: "NL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NL.png",
              col: "#C4C4C4",
              y: 5.04,
              color: "#C4C4C4",
              name: "Netherlands"
            },
            {
              cntry: "Switzerland",
              avg: 5.03,
              countrycode: "CH",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CH.png",
              col: "#C4C4C4",
              y: 5.03,
              color: "#C4C4C4",
              name: "Switzerland"
            },
            {
              cntry: "Luxembourg",
              avg: 5.01,
              countrycode: "LU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LU.png",
              col: "#C4C4C4",
              y: 5.01,
              color: "#C4C4C4",
              name: "Luxembourg"
            },
            {
              cntry: "Finland",
              avg: 4.76,
              countrycode: "FI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FI.png",
              col: "#C4C4C4",
              y: 4.76,
              color: "#C4C4C4",
              name: "Finland"
            },
            {
              cntry: "Norway",
              avg: 4.74,
              countrycode: "NO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NO.png",
              col: "#C4C4C4",
              y: 4.74,
              color: "#C4C4C4",
              name: "Norway"
            },
            {
              cntry: "Sweden",
              avg: 4.68,
              countrycode: "SE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SE.png",
              col: "#C4C4C4",
              y: 4.68,
              color: "#C4C4C4",
              name: "Sweden"
            },
            {
              cntry: "Iceland",
              avg: 4.34,
              countrycode: "IS",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IS.png",
              col: "#C4C4C4",
              y: 4.34,
              color: "#C4C4C4",
              name: "Iceland"
            },
            {
              cntry: "Belgium",
              avg: 4.13,
              countrycode: "BE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BE.png",
              col: "#C4C4C4",
              y: 4.13,
              color: "#C4C4C4",
              name: "Belgium"
            },
            {
              cntry: "Cyprus",
              avg: 3.69,
              countrycode: "CY",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CY.png",
              col: "#C4C4C4",
              y: 3.69,
              color: "#C4C4C4",
              name: "Cyprus"
            },
            {
              cntry: "United Kingdom",
              avg: 3.58,
              countrycode: "GB",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GB.png",
              col: "#C4C4C4",
              y: 3.58,
              color: "#C4C4C4",
              name: "United Kingdom"
            },
            {
              cntry: "Germany",
              avg: 3.57,
              countrycode: "DE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DE.png",
              col: "#C4C4C4",
              y: 3.57,
              color: "#C4C4C4",
              name: "Germany"
            },
            {
              cntry: "Austria",
              avg: 3.53,
              countrycode: "AT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AT.png",
              col: "#C4C4C4",
              y: 3.53,
              color: "#C4C4C4",
              name: "Austria"
            },
            {
              cntry: "Ireland",
              avg: 3.48,
              countrycode: "IE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IE.png",
              col: "#C4C4C4",
              y: 3.48,
              color: "#C4C4C4",
              name: "Ireland"
            },
            {
              cntry: "Estonia",
              avg: 3.44,
              countrycode: "EE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/EE.png",
              col: "#C4C4C4",
              y: 3.44,
              color: "#C4C4C4",
              name: "Estonia"
            },
            {
              cntry: "France",
              avg: 3.24,
              countrycode: "FR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FR.png",
              col: "#C4C4C4",
              y: 3.24,
              color: "#C4C4C4",
              name: "France"
            },
            {
              cntry: "Russian Federation",
              avg: 3.14,
              countrycode: "RU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RU.png",
              col: "#C4C4C4",
              y: 3.14,
              color: "#C4C4C4",
              name: "Russian Federation"
            },
            {
              cntry: "Romania",
              avg: 3.06,
              countrycode: "RO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RO.png",
              col: "#C4C4C4",
              y: 3.06,
              color: "#C4C4C4",
              name: "Romania"
            },
            {
              cntry: "Slovakia",
              avg: 3.05,
              countrycode: "SK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SK.png",
              col: "#C4C4C4",
              y: 3.05,
              color: "#C4C4C4",
              name: "Slovakia"
            },
            {
              cntry: "Israel",
              avg: 3.03,
              countrycode: "IL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IL.png",
              col: "#C4C4C4",
              y: 3.03,
              color: "#C4C4C4",
              name: "Israel"
            },
            {
              cntry: "Hungary",
              avg: 3.02,
              countrycode: "HU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HU.png",
              col: "#C4C4C4",
              y: 3.02,
              color: "#C4C4C4",
              name: "Hungary"
            },
            {
              cntry: "Czechia",
              avg: 2.95,
              countrycode: "CZ",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CZ.png",
              col: "#C4C4C4",
              y: 2.95,
              color: "#C4C4C4",
              name: "Czechia"
            },
            {
              cntry: "Lithuania",
              avg: 2.95,
              countrycode: "LT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LT.png",
              col: "#C4C4C4",
              y: 2.95,
              color: "#C4C4C4",
              name: "Lithuania"
            },
            {
              cntry: "Spain",
              avg: 2.89,
              countrycode: "ES",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/ES.png",
              col: "#C4C4C4",
              y: 2.89,
              color: "#C4C4C4",
              name: "Spain"
            },
            {
              cntry: "Turkey",
              avg: 2.8,
              countrycode: "TR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/TR.png",
              col: "#C4C4C4",
              y: 2.8,
              color: "#C4C4C4",
              name: "Turkey"
            },
            {
              cntry: "Slovenia",
              avg: 2.72,
              countrycode: "SI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SI.png",
              col: "#C4C4C4",
              y: 2.72,
              color: "#C4C4C4",
              name: "Slovenia"
            },
            {
              cntry: "Greece",
              avg: 2.69,
              countrycode: "GR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GR.png",
              col: "#C4C4C4",
              y: 2.69,
              color: "#C4C4C4",
              name: "Greece"
            },
            {
              cntry: "Italy",
              avg: 2.51,
              countrycode: "IT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IT.png",
              col: "#C4C4C4",
              y: 2.51,
              color: "#C4C4C4",
              name: "Italy"
            },
            {
              cntry: "Poland",
              avg: 2.3,
              countrycode: "PL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PL.png",
              col: "#C4C4C4",
              y: 2.3,
              color: "#C4C4C4",
              name: "Poland"
            },
            {
              cntry: "Portugal",
              avg: 2.22,
              countrycode: "PT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PT.png",
              col: "#C4C4C4",
              y: 2.22,
              color: "#C4C4C4",
              name: "Portugal"
            },
            {
              cntry: "Ukraine",
              avg: 2.13,
              countrycode: "UA",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/UA.png",
              col: "#C4C4C4",
              y: 2.13,
              color: "#C4C4C4",
              name: "Ukraine"
            },
            {
              cntry: "Albania",
              avg: 1.94,
              countrycode: "AL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AL.png",
              col: "#C4C4C4",
              y: 1.94,
              color: "#C4C4C4",
              name: "Albania"
            },
            {
              cntry: "Croatia",
              avg: 1.9,
              countrycode: "HR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HR.png",
              col: "#C4C4C4",
              y: 1.9,
              color: "#C4C4C4",
              name: "Croatia"
            },
            {
              cntry: "Bulgaria",
              avg: 1.74,
              countrycode: "BG",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BG.png",
              col: "#C4C4C4",
              y: 1.74,
              color: "#C4C4C4",
              name: "Bulgaria"
            },
            {
              cntry: "Latvia",
              avg: 1.69,
              countrycode: "LV",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LV.png",
              col: "#C4C4C4",
              y: 1.69,
              color: "#C4C4C4",
              name: "Latvia"
            }
          ],
          type: "bar",
          name: "AverageTrust in Politicians:"
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
