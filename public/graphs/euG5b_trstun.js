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
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 1.4855,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#8B1A1A",
              y: 1.4855,
              name: "Religion: Jewish"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.5872,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.5872,
              name: "Politics: Missing"
            },
            {
              A: "religiousDenom",
              B: "Eastern Orthodox",
              coefficients: 0.4288,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#C4C4C4",
              y: 0.4288,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.1852,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.1852,
              name: "Income: Low Income"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.1574,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.1574,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.1573,
              sign: "NEG",
              var: "trstun",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.1573,
              name: "Year: 2010"
            },
            {
              A: "union",
              B: "Non-member",
              coefficients: 0.1441,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Non-member",
              col: "#C4C4C4",
              y: 0.1441,
              name: "Union Member: Non-member"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.1323,
              sign: "NEG",
              var: "trstun",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.1323,
              name: "Year: 2016"
            },
            {
              A: "Age_group",
              B: "53-66 years old",
              coefficients: 0.0926,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 53-66 years old",
              col: "#C4C4C4",
              y: 0.0926,
              name: "Age Group: 53-66 years old"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.0905,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.0905,
              name: "Income: Missing"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.0902,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.0902,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "year",
              B: "2014",
              coefficients: 0.0853,
              sign: "NEG",
              var: "trstun",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2014",
              col: "#C4C4C4",
              y: 0.0853,
              name: "Year: 2014"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.0767,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.0767,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "Age_group",
              B: "41-53 years old",
              coefficients: 0.0545,
              sign: "NEG",
              var: "trstun",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 41-53 years old",
              col: "#C4C4C4",
              y: 0.0545,
              name: "Age Group: 41-53 years old"
            },
            {
              A: "Marital_Status",
              B: "Widowed",
              coefficients: 0.0419,
              sign: "NEG",
              var: "trstun",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Widowed",
              col: "#C4C4C4",
              y: 0.0419,
              name: "Marital Status: Widowed"
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
        text: "Decreases Probability of Trust in United Nations",
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
