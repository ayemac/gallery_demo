$(function () {
  $('#container').highcharts({
      title: {
        text: "Immigration Good for Country in Europe (10-point Scale)"
      },
      yAxis: {
        title: {
          text: "Average Immigration Good for Country"
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
              cntry: "Iceland",
              avg: 6.71,
              countrycode: "IS",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IS.png",
              col: "#CDB5CD",
              y: 6.71,
              color: "#CDB5CD",
              name: "Iceland"
            },
            {
              cntry: "Sweden",
              avg: 6.29,
              countrycode: "SE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SE.png",
              col: "#C4C4C4",
              y: 6.29,
              color: "#C4C4C4",
              name: "Sweden"
            },
            {
              cntry: "Albania",
              avg: 5.98,
              countrycode: "AL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AL.png",
              col: "#C4C4C4",
              y: 5.98,
              color: "#C4C4C4",
              name: "Albania"
            },
            {
              cntry: "Poland",
              avg: 5.67,
              countrycode: "PL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PL.png",
              col: "#C4C4C4",
              y: 5.67,
              color: "#C4C4C4",
              name: "Poland"
            },
            {
              cntry: "Denmark",
              avg: 5.63,
              countrycode: "DK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DK.png",
              col: "#C4C4C4",
              y: 5.63,
              color: "#C4C4C4",
              name: "Denmark"
            },
            {
              cntry: "Ireland",
              avg: 5.55,
              countrycode: "IE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IE.png",
              col: "#C4C4C4",
              y: 5.55,
              color: "#C4C4C4",
              name: "Ireland"
            },
            {
              cntry: "Bulgaria",
              avg: 5.49,
              countrycode: "BG",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BG.png",
              col: "#C4C4C4",
              y: 5.49,
              color: "#C4C4C4",
              name: "Bulgaria"
            },
            {
              cntry: "Luxembourg",
              avg: 5.49,
              countrycode: "LU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LU.png",
              col: "#C4C4C4",
              y: 5.49,
              color: "#C4C4C4",
              name: "Luxembourg"
            },
            {
              cntry: "Finland",
              avg: 5.47,
              countrycode: "FI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FI.png",
              col: "#C4C4C4",
              y: 5.47,
              color: "#C4C4C4",
              name: "Finland"
            },
            {
              cntry: "Switzerland",
              avg: 5.34,
              countrycode: "CH",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CH.png",
              col: "#C4C4C4",
              y: 5.34,
              color: "#C4C4C4",
              name: "Switzerland"
            },
            {
              cntry: "Norway",
              avg: 5.2,
              countrycode: "NO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NO.png",
              col: "#C4C4C4",
              y: 5.2,
              color: "#C4C4C4",
              name: "Norway"
            },
            {
              cntry: "Spain",
              avg: 5.13,
              countrycode: "ES",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/ES.png",
              col: "#C4C4C4",
              y: 5.13,
              color: "#C4C4C4",
              name: "Spain"
            },
            {
              cntry: "Netherlands",
              avg: 5.12,
              countrycode: "NL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NL.png",
              col: "#C4C4C4",
              y: 5.12,
              color: "#C4C4C4",
              name: "Netherlands"
            },
            {
              cntry: "Romania",
              avg: 5.09,
              countrycode: "RO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RO.png",
              col: "#C4C4C4",
              y: 5.09,
              color: "#C4C4C4",
              name: "Romania"
            },
            {
              cntry: "Germany",
              avg: 5,
              countrycode: "DE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DE.png",
              col: "#C4C4C4",
              y: 5,
              color: "#C4C4C4",
              name: "Germany"
            },
            {
              cntry: "Israel",
              avg: 4.93,
              countrycode: "IL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IL.png",
              col: "#C4C4C4",
              y: 4.93,
              color: "#C4C4C4",
              name: "Israel"
            },
            {
              cntry: "Lithuania",
              avg: 4.91,
              countrycode: "LT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LT.png",
              col: "#C4C4C4",
              y: 4.91,
              color: "#C4C4C4",
              name: "Lithuania"
            },
            {
              cntry: "Croatia",
              avg: 4.8,
              countrycode: "HR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HR.png",
              col: "#C4C4C4",
              y: 4.8,
              color: "#C4C4C4",
              name: "Croatia"
            },
            {
              cntry: "United Kingdom",
              avg: 4.77,
              countrycode: "GB",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GB.png",
              col: "#C4C4C4",
              y: 4.77,
              color: "#C4C4C4",
              name: "United Kingdom"
            },
            {
              cntry: "Belgium",
              avg: 4.65,
              countrycode: "BE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BE.png",
              col: "#C4C4C4",
              y: 4.65,
              color: "#C4C4C4",
              name: "Belgium"
            },
            {
              cntry: "France",
              avg: 4.64,
              countrycode: "FR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FR.png",
              col: "#C4C4C4",
              y: 4.64,
              color: "#C4C4C4",
              name: "France"
            },
            {
              cntry: "Slovenia",
              avg: 4.54,
              countrycode: "SI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SI.png",
              col: "#C4C4C4",
              y: 4.54,
              color: "#C4C4C4",
              name: "Slovenia"
            },
            {
              cntry: "Slovakia",
              avg: 4.51,
              countrycode: "SK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SK.png",
              col: "#C4C4C4",
              y: 4.51,
              color: "#C4C4C4",
              name: "Slovakia"
            },
            {
              cntry: "Estonia",
              avg: 4.48,
              countrycode: "EE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/EE.png",
              col: "#C4C4C4",
              y: 4.48,
              color: "#C4C4C4",
              name: "Estonia"
            },
            {
              cntry: "Austria",
              avg: 4.44,
              countrycode: "AT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AT.png",
              col: "#C4C4C4",
              y: 4.44,
              color: "#C4C4C4",
              name: "Austria"
            },
            {
              cntry: "Ukraine",
              avg: 4.41,
              countrycode: "UA",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/UA.png",
              col: "#C4C4C4",
              y: 4.41,
              color: "#C4C4C4",
              name: "Ukraine"
            },
            {
              cntry: "Latvia",
              avg: 4.3,
              countrycode: "LV",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LV.png",
              col: "#C4C4C4",
              y: 4.3,
              color: "#C4C4C4",
              name: "Latvia"
            },
            {
              cntry: "Portugal",
              avg: 4.2,
              countrycode: "PT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PT.png",
              col: "#C4C4C4",
              y: 4.2,
              color: "#C4C4C4",
              name: "Portugal"
            },
            {
              cntry: "Czechia",
              avg: 4.11,
              countrycode: "CZ",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CZ.png",
              col: "#C4C4C4",
              y: 4.11,
              color: "#C4C4C4",
              name: "Czechia"
            },
            {
              cntry: "Cyprus",
              avg: 4.09,
              countrycode: "CY",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CY.png",
              col: "#C4C4C4",
              y: 4.09,
              color: "#C4C4C4",
              name: "Cyprus"
            },
            {
              cntry: "Hungary",
              avg: 3.99,
              countrycode: "HU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HU.png",
              col: "#C4C4C4",
              y: 3.99,
              color: "#C4C4C4",
              name: "Hungary"
            },
            {
              cntry: "Italy",
              avg: 3.91,
              countrycode: "IT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IT.png",
              col: "#C4C4C4",
              y: 3.91,
              color: "#C4C4C4",
              name: "Italy"
            },
            {
              cntry: "Turkey",
              avg: 3.62,
              countrycode: "TR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/TR.png",
              col: "#C4C4C4",
              y: 3.62,
              color: "#C4C4C4",
              name: "Turkey"
            },
            {
              cntry: "Russian Federation",
              avg: 3.38,
              countrycode: "RU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RU.png",
              col: "#C4C4C4",
              y: 3.38,
              color: "#C4C4C4",
              name: "Russian Federation"
            },
            {
              cntry: "Greece",
              avg: 3.22,
              countrycode: "GR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GR.png",
              col: "#C4C4C4",
              y: 3.22,
              color: "#C4C4C4",
              name: "Greece"
            }
          ],
          type: "bar",
          name: "AverageImmigration Good for Country:"
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: ""
        }
      },
      subtitle: {
        text: "(0 = Worse place to live, 10 = Better place to live) ESS 2002-2016",
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
