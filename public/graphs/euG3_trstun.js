$(function () {
  $('#container').highcharts({
      title: {
        text: "Trust in United Nations in Europe (10-point Scale)"
      },
      yAxis: {
        title: {
          text: "Average Trust in United Nations"
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
              cntry: "Albania",
              avg: 7.22,
              countrycode: "AL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AL.png",
              col: "#CDB5CD",
              y: 7.22,
              color: "#CDB5CD",
              name: "Albania"
            },
            {
              cntry: "Norway",
              avg: 6.75,
              countrycode: "NO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NO.png",
              col: "#C4C4C4",
              y: 6.75,
              color: "#C4C4C4",
              name: "Norway"
            },
            {
              cntry: "Iceland",
              avg: 6.49,
              countrycode: "IS",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IS.png",
              col: "#C4C4C4",
              y: 6.49,
              color: "#C4C4C4",
              name: "Iceland"
            },
            {
              cntry: "Finland",
              avg: 6.48,
              countrycode: "FI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FI.png",
              col: "#C4C4C4",
              y: 6.48,
              color: "#C4C4C4",
              name: "Finland"
            },
            {
              cntry: "Denmark",
              avg: 6.43,
              countrycode: "DK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DK.png",
              col: "#C4C4C4",
              y: 6.43,
              color: "#C4C4C4",
              name: "Denmark"
            },
            {
              cntry: "Sweden",
              avg: 6.39,
              countrycode: "SE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SE.png",
              col: "#C4C4C4",
              y: 6.39,
              color: "#C4C4C4",
              name: "Sweden"
            },
            {
              cntry: "Ireland",
              avg: 5.61,
              countrycode: "IE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IE.png",
              col: "#C4C4C4",
              y: 5.61,
              color: "#C4C4C4",
              name: "Ireland"
            },
            {
              cntry: "Netherlands",
              avg: 5.58,
              countrycode: "NL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NL.png",
              col: "#C4C4C4",
              y: 5.58,
              color: "#C4C4C4",
              name: "Netherlands"
            },
            {
              cntry: "Romania",
              avg: 5.52,
              countrycode: "RO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RO.png",
              col: "#C4C4C4",
              y: 5.52,
              color: "#C4C4C4",
              name: "Romania"
            },
            {
              cntry: "Switzerland",
              avg: 5.4,
              countrycode: "CH",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CH.png",
              col: "#C4C4C4",
              y: 5.4,
              color: "#C4C4C4",
              name: "Switzerland"
            },
            {
              cntry: "Lithuania",
              avg: 5.28,
              countrycode: "LT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LT.png",
              col: "#C4C4C4",
              y: 5.28,
              color: "#C4C4C4",
              name: "Lithuania"
            },
            {
              cntry: "Estonia",
              avg: 5.27,
              countrycode: "EE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/EE.png",
              col: "#C4C4C4",
              y: 5.27,
              color: "#C4C4C4",
              name: "Estonia"
            },
            {
              cntry: "Luxembourg",
              avg: 5.24,
              countrycode: "LU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LU.png",
              col: "#C4C4C4",
              y: 5.24,
              color: "#C4C4C4",
              name: "Luxembourg"
            },
            {
              cntry: "Belgium",
              avg: 5.21,
              countrycode: "BE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BE.png",
              col: "#C4C4C4",
              y: 5.21,
              color: "#C4C4C4",
              name: "Belgium"
            },
            {
              cntry: "Hungary",
              avg: 5.21,
              countrycode: "HU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HU.png",
              col: "#C4C4C4",
              y: 5.21,
              color: "#C4C4C4",
              name: "Hungary"
            },
            {
              cntry: "Poland",
              avg: 5.13,
              countrycode: "PL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PL.png",
              col: "#C4C4C4",
              y: 5.13,
              color: "#C4C4C4",
              name: "Poland"
            },
            {
              cntry: "United Kingdom",
              avg: 5.13,
              countrycode: "GB",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GB.png",
              col: "#C4C4C4",
              y: 5.13,
              color: "#C4C4C4",
              name: "United Kingdom"
            },
            {
              cntry: "France",
              avg: 5,
              countrycode: "FR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FR.png",
              col: "#C4C4C4",
              y: 5,
              color: "#C4C4C4",
              name: "France"
            },
            {
              cntry: "Slovakia",
              avg: 4.97,
              countrycode: "SK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SK.png",
              col: "#C4C4C4",
              y: 4.97,
              color: "#C4C4C4",
              name: "Slovakia"
            },
            {
              cntry: "Czechia",
              avg: 4.9,
              countrycode: "CZ",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CZ.png",
              col: "#C4C4C4",
              y: 4.9,
              color: "#C4C4C4",
              name: "Czechia"
            },
            {
              cntry: "Italy",
              avg: 4.89,
              countrycode: "IT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IT.png",
              col: "#C4C4C4",
              y: 4.89,
              color: "#C4C4C4",
              name: "Italy"
            },
            {
              cntry: "Germany",
              avg: 4.88,
              countrycode: "DE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DE.png",
              col: "#C4C4C4",
              y: 4.88,
              color: "#C4C4C4",
              name: "Germany"
            },
            {
              cntry: "Spain",
              avg: 4.88,
              countrycode: "ES",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/ES.png",
              col: "#C4C4C4",
              y: 4.88,
              color: "#C4C4C4",
              name: "Spain"
            },
            {
              cntry: "Portugal",
              avg: 4.79,
              countrycode: "PT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PT.png",
              col: "#C4C4C4",
              y: 4.79,
              color: "#C4C4C4",
              name: "Portugal"
            },
            {
              cntry: "Bulgaria",
              avg: 4.74,
              countrycode: "BG",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BG.png",
              col: "#C4C4C4",
              y: 4.74,
              color: "#C4C4C4",
              name: "Bulgaria"
            },
            {
              cntry: "Austria",
              avg: 4.59,
              countrycode: "AT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AT.png",
              col: "#C4C4C4",
              y: 4.59,
              color: "#C4C4C4",
              name: "Austria"
            },
            {
              cntry: "Latvia",
              avg: 4.58,
              countrycode: "LV",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LV.png",
              col: "#C4C4C4",
              y: 4.58,
              color: "#C4C4C4",
              name: "Latvia"
            },
            {
              cntry: "Slovenia",
              avg: 4.55,
              countrycode: "SI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SI.png",
              col: "#C4C4C4",
              y: 4.55,
              color: "#C4C4C4",
              name: "Slovenia"
            },
            {
              cntry: "Cyprus",
              avg: 4.3,
              countrycode: "CY",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CY.png",
              col: "#C4C4C4",
              y: 4.3,
              color: "#C4C4C4",
              name: "Cyprus"
            },
            {
              cntry: "Croatia",
              avg: 3.95,
              countrycode: "HR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HR.png",
              col: "#C4C4C4",
              y: 3.95,
              color: "#C4C4C4",
              name: "Croatia"
            },
            {
              cntry: "Ukraine",
              avg: 3.92,
              countrycode: "UA",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/UA.png",
              col: "#C4C4C4",
              y: 3.92,
              color: "#C4C4C4",
              name: "Ukraine"
            },
            {
              cntry: "Russian Federation",
              avg: 3.86,
              countrycode: "RU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RU.png",
              col: "#C4C4C4",
              y: 3.86,
              color: "#C4C4C4",
              name: "Russian Federation"
            },
            {
              cntry: "Greece",
              avg: 3.74,
              countrycode: "GR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GR.png",
              col: "#C4C4C4",
              y: 3.74,
              color: "#C4C4C4",
              name: "Greece"
            },
            {
              cntry: "Israel",
              avg: 3.47,
              countrycode: "IL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IL.png",
              col: "#C4C4C4",
              y: 3.47,
              color: "#C4C4C4",
              name: "Israel"
            },
            {
              cntry: "Turkey",
              avg: 3.4,
              countrycode: "TR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/TR.png",
              col: "#C4C4C4",
              y: 3.4,
              color: "#C4C4C4",
              name: "Turkey"
            }
          ],
          type: "bar",
          name: "AverageTrust in United Nations:"
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
