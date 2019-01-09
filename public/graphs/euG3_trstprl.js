$(function () {
  $('#container').highcharts({
      title: {
        text: "Trust in Parliament in Europe (10-point Scale)"
      },
      yAxis: {
        title: {
          text: "Average Trust in Parliament"
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
              avg: 6.06,
              countrycode: "DK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DK.png",
              col: "#CDB5CD",
              y: 6.06,
              color: "#CDB5CD",
              name: "Denmark"
            },
            {
              cntry: "Turkey",
              avg: 6.06,
              countrycode: "TR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/TR.png",
              col: "#C4C4C4",
              y: 6.06,
              color: "#C4C4C4",
              name: "Turkey"
            },
            {
              cntry: "Norway",
              avg: 5.91,
              countrycode: "NO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NO.png",
              col: "#C4C4C4",
              y: 5.91,
              color: "#C4C4C4",
              name: "Norway"
            },
            {
              cntry: "Switzerland",
              avg: 5.9,
              countrycode: "CH",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CH.png",
              col: "#C4C4C4",
              y: 5.9,
              color: "#C4C4C4",
              name: "Switzerland"
            },
            {
              cntry: "Sweden",
              avg: 5.86,
              countrycode: "SE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SE.png",
              col: "#C4C4C4",
              y: 5.86,
              color: "#C4C4C4",
              name: "Sweden"
            },
            {
              cntry: "Finland",
              avg: 5.79,
              countrycode: "FI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FI.png",
              col: "#C4C4C4",
              y: 5.79,
              color: "#C4C4C4",
              name: "Finland"
            },
            {
              cntry: "Luxembourg",
              avg: 5.74,
              countrycode: "LU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LU.png",
              col: "#C4C4C4",
              y: 5.74,
              color: "#C4C4C4",
              name: "Luxembourg"
            },
            {
              cntry: "Netherlands",
              avg: 5.31,
              countrycode: "NL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NL.png",
              col: "#C4C4C4",
              y: 5.31,
              color: "#C4C4C4",
              name: "Netherlands"
            },
            {
              cntry: "Iceland",
              avg: 4.98,
              countrycode: "IS",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IS.png",
              col: "#C4C4C4",
              y: 4.98,
              color: "#C4C4C4",
              name: "Iceland"
            },
            {
              cntry: "Austria",
              avg: 4.95,
              countrycode: "AT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AT.png",
              col: "#C4C4C4",
              y: 4.95,
              color: "#C4C4C4",
              name: "Austria"
            },
            {
              cntry: "Belgium",
              avg: 4.76,
              countrycode: "BE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BE.png",
              col: "#C4C4C4",
              y: 4.76,
              color: "#C4C4C4",
              name: "Belgium"
            },
            {
              cntry: "Cyprus",
              avg: 4.76,
              countrycode: "CY",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CY.png",
              col: "#C4C4C4",
              y: 4.76,
              color: "#C4C4C4",
              name: "Cyprus"
            },
            {
              cntry: "Germany",
              avg: 4.59,
              countrycode: "DE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DE.png",
              col: "#C4C4C4",
              y: 4.59,
              color: "#C4C4C4",
              name: "Germany"
            },
            {
              cntry: "Spain",
              avg: 4.39,
              countrycode: "ES",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/ES.png",
              col: "#C4C4C4",
              y: 4.39,
              color: "#C4C4C4",
              name: "Spain"
            },
            {
              cntry: "United Kingdom",
              avg: 4.37,
              countrycode: "GB",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GB.png",
              col: "#C4C4C4",
              y: 4.37,
              color: "#C4C4C4",
              name: "United Kingdom"
            },
            {
              cntry: "Estonia",
              avg: 4.26,
              countrycode: "EE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/EE.png",
              col: "#C4C4C4",
              y: 4.26,
              color: "#C4C4C4",
              name: "Estonia"
            },
            {
              cntry: "France",
              avg: 4.21,
              countrycode: "FR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FR.png",
              col: "#C4C4C4",
              y: 4.21,
              color: "#C4C4C4",
              name: "France"
            },
            {
              cntry: "Ireland",
              avg: 4.16,
              countrycode: "IE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IE.png",
              col: "#C4C4C4",
              y: 4.16,
              color: "#C4C4C4",
              name: "Ireland"
            },
            {
              cntry: "Israel",
              avg: 4.03,
              countrycode: "IL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IL.png",
              col: "#C4C4C4",
              y: 4.03,
              color: "#C4C4C4",
              name: "Israel"
            },
            {
              cntry: "Hungary",
              avg: 3.88,
              countrycode: "HU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HU.png",
              col: "#C4C4C4",
              y: 3.88,
              color: "#C4C4C4",
              name: "Hungary"
            },
            {
              cntry: "Romania",
              avg: 3.86,
              countrycode: "RO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RO.png",
              col: "#C4C4C4",
              y: 3.86,
              color: "#C4C4C4",
              name: "Romania"
            },
            {
              cntry: "Greece",
              avg: 3.75,
              countrycode: "GR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GR.png",
              col: "#C4C4C4",
              y: 3.75,
              color: "#C4C4C4",
              name: "Greece"
            },
            {
              cntry: "Russian Federation",
              avg: 3.7,
              countrycode: "RU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RU.png",
              col: "#C4C4C4",
              y: 3.7,
              color: "#C4C4C4",
              name: "Russian Federation"
            },
            {
              cntry: "Slovenia",
              avg: 3.62,
              countrycode: "SI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SI.png",
              col: "#C4C4C4",
              y: 3.62,
              color: "#C4C4C4",
              name: "Slovenia"
            },
            {
              cntry: "Slovakia",
              avg: 3.58,
              countrycode: "SK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SK.png",
              col: "#C4C4C4",
              y: 3.58,
              color: "#C4C4C4",
              name: "Slovakia"
            },
            {
              cntry: "Italy",
              avg: 3.57,
              countrycode: "IT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IT.png",
              col: "#C4C4C4",
              y: 3.57,
              color: "#C4C4C4",
              name: "Italy"
            },
            {
              cntry: "Czechia",
              avg: 3.53,
              countrycode: "CZ",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CZ.png",
              col: "#C4C4C4",
              y: 3.53,
              color: "#C4C4C4",
              name: "Czechia"
            },
            {
              cntry: "Portugal",
              avg: 3.46,
              countrycode: "PT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PT.png",
              col: "#C4C4C4",
              y: 3.46,
              color: "#C4C4C4",
              name: "Portugal"
            },
            {
              cntry: "Lithuania",
              avg: 3.15,
              countrycode: "LT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LT.png",
              col: "#C4C4C4",
              y: 3.15,
              color: "#C4C4C4",
              name: "Lithuania"
            },
            {
              cntry: "Poland",
              avg: 3.02,
              countrycode: "PL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PL.png",
              col: "#C4C4C4",
              y: 3.02,
              color: "#C4C4C4",
              name: "Poland"
            },
            {
              cntry: "Albania",
              avg: 2.93,
              countrycode: "AL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AL.png",
              col: "#C4C4C4",
              y: 2.93,
              color: "#C4C4C4",
              name: "Albania"
            },
            {
              cntry: "Croatia",
              avg: 2.65,
              countrycode: "HR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HR.png",
              col: "#C4C4C4",
              y: 2.65,
              color: "#C4C4C4",
              name: "Croatia"
            },
            {
              cntry: "Ukraine",
              avg: 2.48,
              countrycode: "UA",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/UA.png",
              col: "#C4C4C4",
              y: 2.48,
              color: "#C4C4C4",
              name: "Ukraine"
            },
            {
              cntry: "Bulgaria",
              avg: 2.12,
              countrycode: "BG",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BG.png",
              col: "#C4C4C4",
              y: 2.12,
              color: "#C4C4C4",
              name: "Bulgaria"
            },
            {
              cntry: "Latvia",
              avg: 1.94,
              countrycode: "LV",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LV.png",
              col: "#C4C4C4",
              y: 1.94,
              color: "#C4C4C4",
              name: "Latvia"
            }
          ],
          type: "bar",
          name: "AverageTrust in Parliament:"
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
