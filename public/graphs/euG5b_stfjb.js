$(function () {
  $('#container').highcharts({
      title: {
        text: ""
      },
      yAxis: {
        title: {
          text: "Importance"
        },
        type: "linear",
        min: 0,
        max: 1
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
          colorByPoint: true,
          dataLabels: {
            enabled: true,
            format: "{point.y:.2f}"
          },
          enableMouseTracking: true
        }
      },
      annotationsOptions: {
        enabledButtons: false
      },
      tooltip: {
        delayForDisplay: 10,
        crosshairs: {
          enabled: true,
          color: "rgba(43,144,143,0.15)"
        },
        backgroundColor: "#f0f0f0",
        pointFormat: "{point.y:.2f}",
        shared: true,
        borderWidth: 1
      },
      series: [
        {
          group: "group",
          data: [
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.484,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#8B1A1A",
              y: 0.484,
              name: "Income: Low Income"
            },
            {
              A: "religiousDenom",
              B: "Eastern Orthodox",
              coefficients: 0.4729,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#C4C4C4",
              y: 0.4729,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.1904,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.1904,
              name: "Religion: Islamic"
            },
            {
              A: "prayerFreq",
              B: "Prays Sometimes",
              coefficients: 0.1874,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Sometimes",
              col: "#C4C4C4",
              y: 0.1874,
              name: "Prayer Frequency: Prays Sometimes"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.1853,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.1853,
              name: "Politics: Missing"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.1652,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.1652,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "union",
              B: "Former Member",
              coefficients: 0.1578,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Former Member",
              col: "#C4C4C4",
              y: 0.1578,
              name: "Union Member: Former Member"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.147,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.147,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "year",
              B: "2006",
              coefficients: 0.1466,
              sign: "NEG",
              var: "stfjb",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2006",
              col: "#C4C4C4",
              y: 0.1466,
              name: "Year: 2006"
            },
            {
              A: "Minority",
              B: "Minority",
              coefficients: 0.1436,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Minority",
              col: "#C4C4C4",
              y: 0.1436,
              name: "Race: Minority"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.1151,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.1151,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.0756,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.0756,
              name: "Politics: Political Left"
            },
            {
              A: "Age_group",
              B: "29-41 years old",
              coefficients: 0.0714,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 29-41 years old",
              col: "#C4C4C4",
              y: 0.0714,
              name: "Age Group: 29-41 years old"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.0602,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.0602,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "Age_group",
              B: "41-53 years old",
              coefficients: 0.0395,
              sign: "NEG",
              var: "stfjb",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 41-53 years old",
              col: "#C4C4C4",
              y: 0.0395,
              name: "Age Group: 41-53 years old"
            }
          ],
          type: "bar",
          name: "Importance"
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: ""
        }
      },
      colors: ["#8B1A1A", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4"],
      subtitle: {
        text: "Decreases Probability of Job Satisfaction",
        style: {
          color: "#2b908f",
          fontWeight: "normal",
          fontSize: "16px"
        }
      },
      legend: {
        enabled: false,
        layout: "horizontal",
        verticalAlign: "bottom",
        floating: false,
        align: "center",
        style: {
          fontsize: "14px"
        }
      },
      chart: {
        backgroundColor: "transparent"
      }
    }
  );
});
