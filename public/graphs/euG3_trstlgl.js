$(function () {
  $('#container').highcharts({
      title: {
        text: "Trust in Legal System in Europe (10-point Scale)"
      },
      yAxis: {
        title: {
          text: "Average Trust in Legal System"
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
              avg: 7.26,
              countrycode: "DK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DK.png",
              col: "#CDB5CD",
              y: 7.26,
              color: "#CDB5CD",
              name: "Denmark"
            },
            {
              cntry: "Finland",
              avg: 6.95,
              countrycode: "FI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FI.png",
              col: "#C4C4C4",
              y: 6.95,
              color: "#C4C4C4",
              name: "Finland"
            },
            {
              cntry: "Norway",
              avg: 6.71,
              countrycode: "NO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NO.png",
              col: "#C4C4C4",
              y: 6.71,
              color: "#C4C4C4",
              name: "Norway"
            },
            {
              cntry: "Turkey",
              avg: 6.36,
              countrycode: "TR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/TR.png",
              col: "#C4C4C4",
              y: 6.36,
              color: "#C4C4C4",
              name: "Turkey"
            },
            {
              cntry: "Switzerland",
              avg: 6.35,
              countrycode: "CH",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CH.png",
              col: "#C4C4C4",
              y: 6.35,
              color: "#C4C4C4",
              name: "Switzerland"
            },
            {
              cntry: "Luxembourg",
              avg: 6.17,
              countrycode: "LU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LU.png",
              col: "#C4C4C4",
              y: 6.17,
              color: "#C4C4C4",
              name: "Luxembourg"
            },
            {
              cntry: "Sweden",
              avg: 6.16,
              countrycode: "SE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SE.png",
              col: "#C4C4C4",
              y: 6.16,
              color: "#C4C4C4",
              name: "Sweden"
            },
            {
              cntry: "Austria",
              avg: 6.02,
              countrycode: "AT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AT.png",
              col: "#C4C4C4",
              y: 6.02,
              color: "#C4C4C4",
              name: "Austria"
            },
            {
              cntry: "Iceland",
              avg: 5.88,
              countrycode: "IS",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IS.png",
              col: "#C4C4C4",
              y: 5.88,
              color: "#C4C4C4",
              name: "Iceland"
            },
            {
              cntry: "Netherlands",
              avg: 5.86,
              countrycode: "NL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NL.png",
              col: "#C4C4C4",
              y: 5.86,
              color: "#C4C4C4",
              name: "Netherlands"
            },
            {
              cntry: "Germany",
              avg: 5.75,
              countrycode: "DE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DE.png",
              col: "#C4C4C4",
              y: 5.75,
              color: "#C4C4C4",
              name: "Germany"
            },
            {
              cntry: "Cyprus",
              avg: 5.65,
              countrycode: "CY",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CY.png",
              col: "#C4C4C4",
              y: 5.65,
              color: "#C4C4C4",
              name: "Cyprus"
            },
            {
              cntry: "Israel",
              avg: 5.58,
              countrycode: "IL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IL.png",
              col: "#C4C4C4",
              y: 5.58,
              color: "#C4C4C4",
              name: "Israel"
            },
            {
              cntry: "United Kingdom",
              avg: 5.32,
              countrycode: "GB",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GB.png",
              col: "#C4C4C4",
              y: 5.32,
              color: "#C4C4C4",
              name: "United Kingdom"
            },
            {
              cntry: "Ireland",
              avg: 5.23,
              countrycode: "IE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IE.png",
              col: "#C4C4C4",
              y: 5.23,
              color: "#C4C4C4",
              name: "Ireland"
            },
            {
              cntry: "Estonia",
              avg: 5.19,
              countrycode: "EE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/EE.png",
              col: "#C4C4C4",
              y: 5.19,
              color: "#C4C4C4",
              name: "Estonia"
            },
            {
              cntry: "Greece",
              avg: 5.04,
              countrycode: "GR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GR.png",
              col: "#C4C4C4",
              y: 5.04,
              color: "#C4C4C4",
              name: "Greece"
            },
            {
              cntry: "France",
              avg: 4.98,
              countrycode: "FR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FR.png",
              col: "#C4C4C4",
              y: 4.98,
              color: "#C4C4C4",
              name: "France"
            },
            {
              cntry: "Belgium",
              avg: 4.86,
              countrycode: "BE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BE.png",
              col: "#C4C4C4",
              y: 4.86,
              color: "#C4C4C4",
              name: "Belgium"
            },
            {
              cntry: "Italy",
              avg: 4.73,
              countrycode: "IT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IT.png",
              col: "#C4C4C4",
              y: 4.73,
              color: "#C4C4C4",
              name: "Italy"
            },
            {
              cntry: "Hungary",
              avg: 4.62,
              countrycode: "HU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HU.png",
              col: "#C4C4C4",
              y: 4.62,
              color: "#C4C4C4",
              name: "Hungary"
            },
            {
              cntry: "Spain",
              avg: 4.29,
              countrycode: "ES",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/ES.png",
              col: "#C4C4C4",
              y: 4.29,
              color: "#C4C4C4",
              name: "Spain"
            },
            {
              cntry: "Czechia",
              avg: 4.27,
              countrycode: "CZ",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CZ.png",
              col: "#C4C4C4",
              y: 4.27,
              color: "#C4C4C4",
              name: "Czechia"
            },
            {
              cntry: "Lithuania",
              avg: 4.19,
              countrycode: "LT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LT.png",
              col: "#C4C4C4",
              y: 4.19,
              color: "#C4C4C4",
              name: "Lithuania"
            },
            {
              cntry: "Latvia",
              avg: 4,
              countrycode: "LV",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LV.png",
              col: "#C4C4C4",
              y: 4,
              color: "#C4C4C4",
              name: "Latvia"
            },
            {
              cntry: "Russian Federation",
              avg: 3.92,
              countrycode: "RU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RU.png",
              col: "#C4C4C4",
              y: 3.92,
              color: "#C4C4C4",
              name: "Russian Federation"
            },
            {
              cntry: "Portugal",
              avg: 3.84,
              countrycode: "PT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PT.png",
              col: "#C4C4C4",
              y: 3.84,
              color: "#C4C4C4",
              name: "Portugal"
            },
            {
              cntry: "Slovakia",
              avg: 3.82,
              countrycode: "SK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SK.png",
              col: "#C4C4C4",
              y: 3.82,
              color: "#C4C4C4",
              name: "Slovakia"
            },
            {
              cntry: "Romania",
              avg: 3.8,
              countrycode: "RO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RO.png",
              col: "#C4C4C4",
              y: 3.8,
              color: "#C4C4C4",
              name: "Romania"
            },
            {
              cntry: "Slovenia",
              avg: 3.73,
              countrycode: "SI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SI.png",
              col: "#C4C4C4",
              y: 3.73,
              color: "#C4C4C4",
              name: "Slovenia"
            },
            {
              cntry: "Poland",
              avg: 3.7,
              countrycode: "PL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PL.png",
              col: "#C4C4C4",
              y: 3.7,
              color: "#C4C4C4",
              name: "Poland"
            },
            {
              cntry: "Albania",
              avg: 3.54,
              countrycode: "AL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AL.png",
              col: "#C4C4C4",
              y: 3.54,
              color: "#C4C4C4",
              name: "Albania"
            },
            {
              cntry: "Croatia",
              avg: 3.19,
              countrycode: "HR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HR.png",
              col: "#C4C4C4",
              y: 3.19,
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
              avg: 2.37,
              countrycode: "BG",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BG.png",
              col: "#C4C4C4",
              y: 2.37,
              color: "#C4C4C4",
              name: "Bulgaria"
            }
          ],
          type: "bar",
          name: "AverageTrust in Legal System:"
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
