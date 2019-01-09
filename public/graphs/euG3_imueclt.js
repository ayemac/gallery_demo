$(function () {
  $('#container').highcharts({
      title: {
        text: "Immigration Good for Culture in Europe (10-point Scale)"
      },
      yAxis: {
        title: {
          text: "Average Immigration Good for Culture"
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
              cntry: "Finland",
              avg: 7.07,
              countrycode: "FI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FI.png",
              col: "#CDB5CD",
              y: 7.07,
              color: "#CDB5CD",
              name: "Finland"
            },
            {
              cntry: "Sweden",
              avg: 7.06,
              countrycode: "SE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SE.png",
              col: "#C4C4C4",
              y: 7.06,
              color: "#C4C4C4",
              name: "Sweden"
            },
            {
              cntry: "Iceland",
              avg: 6.9,
              countrycode: "IS",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IS.png",
              col: "#C4C4C4",
              y: 6.9,
              color: "#C4C4C4",
              name: "Iceland"
            },
            {
              cntry: "Luxembourg",
              avg: 6.87,
              countrycode: "LU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LU.png",
              col: "#C4C4C4",
              y: 6.87,
              color: "#C4C4C4",
              name: "Luxembourg"
            },
            {
              cntry: "Poland",
              avg: 6.28,
              countrycode: "PL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PL.png",
              col: "#C4C4C4",
              y: 6.28,
              color: "#C4C4C4",
              name: "Poland"
            },
            {
              cntry: "Albania",
              avg: 6.23,
              countrycode: "AL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AL.png",
              col: "#C4C4C4",
              y: 6.23,
              color: "#C4C4C4",
              name: "Albania"
            },
            {
              cntry: "Netherlands",
              avg: 6.11,
              countrycode: "NL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NL.png",
              col: "#C4C4C4",
              y: 6.11,
              color: "#C4C4C4",
              name: "Netherlands"
            },
            {
              cntry: "Switzerland",
              avg: 6.1,
              countrycode: "CH",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CH.png",
              col: "#C4C4C4",
              y: 6.1,
              color: "#C4C4C4",
              name: "Switzerland"
            },
            {
              cntry: "Spain",
              avg: 6.01,
              countrycode: "ES",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/ES.png",
              col: "#C4C4C4",
              y: 6.01,
              color: "#C4C4C4",
              name: "Spain"
            },
            {
              cntry: "Germany",
              avg: 5.95,
              countrycode: "DE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DE.png",
              col: "#C4C4C4",
              y: 5.95,
              color: "#C4C4C4",
              name: "Germany"
            },
            {
              cntry: "Denmark",
              avg: 5.87,
              countrycode: "DK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/DK.png",
              col: "#C4C4C4",
              y: 5.87,
              color: "#C4C4C4",
              name: "Denmark"
            },
            {
              cntry: "Norway",
              avg: 5.78,
              countrycode: "NO",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/NO.png",
              col: "#C4C4C4",
              y: 5.78,
              color: "#C4C4C4",
              name: "Norway"
            },
            {
              cntry: "Belgium",
              avg: 5.71,
              countrycode: "BE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BE.png",
              col: "#C4C4C4",
              y: 5.71,
              color: "#C4C4C4",
              name: "Belgium"
            },
            {
              cntry: "Ireland",
              avg: 5.68,
              countrycode: "IE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IE.png",
              col: "#C4C4C4",
              y: 5.68,
              color: "#C4C4C4",
              name: "Ireland"
            },
            {
              cntry: "Bulgaria",
              avg: 5.67,
              countrycode: "BG",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/BG.png",
              col: "#C4C4C4",
              y: 5.67,
              color: "#C4C4C4",
              name: "Bulgaria"
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
              cntry: "Portugal",
              avg: 5.32,
              countrycode: "PT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/PT.png",
              col: "#C4C4C4",
              y: 5.32,
              color: "#C4C4C4",
              name: "Portugal"
            },
            {
              cntry: "Israel",
              avg: 5.25,
              countrycode: "IL",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IL.png",
              col: "#C4C4C4",
              y: 5.25,
              color: "#C4C4C4",
              name: "Israel"
            },
            {
              cntry: "Estonia",
              avg: 5.23,
              countrycode: "EE",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/EE.png",
              col: "#C4C4C4",
              y: 5.23,
              color: "#C4C4C4",
              name: "Estonia"
            },
            {
              cntry: "France",
              avg: 5.23,
              countrycode: "FR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/FR.png",
              col: "#C4C4C4",
              y: 5.23,
              color: "#C4C4C4",
              name: "France"
            },
            {
              cntry: "Croatia",
              avg: 5.17,
              countrycode: "HR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HR.png",
              col: "#C4C4C4",
              y: 5.17,
              color: "#C4C4C4",
              name: "Croatia"
            },
            {
              cntry: "Austria",
              avg: 5.15,
              countrycode: "AT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/AT.png",
              col: "#C4C4C4",
              y: 5.15,
              color: "#C4C4C4",
              name: "Austria"
            },
            {
              cntry: "Slovakia",
              avg: 5.12,
              countrycode: "SK",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SK.png",
              col: "#C4C4C4",
              y: 5.12,
              color: "#C4C4C4",
              name: "Slovakia"
            },
            {
              cntry: "United Kingdom",
              avg: 5.12,
              countrycode: "GB",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GB.png",
              col: "#C4C4C4",
              y: 5.12,
              color: "#C4C4C4",
              name: "United Kingdom"
            },
            {
              cntry: "Slovenia",
              avg: 5.1,
              countrycode: "SI",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/SI.png",
              col: "#C4C4C4",
              y: 5.1,
              color: "#C4C4C4",
              name: "Slovenia"
            },
            {
              cntry: "Lithuania",
              avg: 4.97,
              countrycode: "LT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LT.png",
              col: "#C4C4C4",
              y: 4.97,
              color: "#C4C4C4",
              name: "Lithuania"
            },
            {
              cntry: "Hungary",
              avg: 4.94,
              countrycode: "HU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/HU.png",
              col: "#C4C4C4",
              y: 4.94,
              color: "#C4C4C4",
              name: "Hungary"
            },
            {
              cntry: "Italy",
              avg: 4.81,
              countrycode: "IT",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/IT.png",
              col: "#C4C4C4",
              y: 4.81,
              color: "#C4C4C4",
              name: "Italy"
            },
            {
              cntry: "Latvia",
              avg: 4.78,
              countrycode: "LV",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/LV.png",
              col: "#C4C4C4",
              y: 4.78,
              color: "#C4C4C4",
              name: "Latvia"
            },
            {
              cntry: "Ukraine",
              avg: 4.71,
              countrycode: "UA",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/UA.png",
              col: "#C4C4C4",
              y: 4.71,
              color: "#C4C4C4",
              name: "Ukraine"
            },
            {
              cntry: "Czechia",
              avg: 4.2,
              countrycode: "CZ",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CZ.png",
              col: "#C4C4C4",
              y: 4.2,
              color: "#C4C4C4",
              name: "Czechia"
            },
            {
              cntry: "Turkey",
              avg: 3.74,
              countrycode: "TR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/TR.png",
              col: "#C4C4C4",
              y: 3.74,
              color: "#C4C4C4",
              name: "Turkey"
            },
            {
              cntry: "Cyprus",
              avg: 3.63,
              countrycode: "CY",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/CY.png",
              col: "#C4C4C4",
              y: 3.63,
              color: "#C4C4C4",
              name: "Cyprus"
            },
            {
              cntry: "Russian Federation",
              avg: 3.62,
              countrycode: "RU",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/RU.png",
              col: "#C4C4C4",
              y: 3.62,
              color: "#C4C4C4",
              name: "Russian Federation"
            },
            {
              cntry: "Greece",
              avg: 3.47,
              countrycode: "GR",
              flagicon: "https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/GR.png",
              col: "#C4C4C4",
              y: 3.47,
              color: "#C4C4C4",
              name: "Greece"
            }
          ],
          type: "bar",
          name: "AverageImmigration Good for Culture:"
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: ""
        }
      },
      subtitle: {
        text: "(0 = Cultural life undermined, 10 = Cultural life enriched) ESS 2002-2016",
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
