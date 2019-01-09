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
              B: "Protestant",
              coefficients: 0.3612,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#8B1A1A",
              y: 0.3612,
              name: "Religion: Protestant"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.241,
              sign: "NEG",
              var: "euftf",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.241,
              name: "Year: 2016"
            },
            {
              A: "year",
              B: "2014",
              coefficients: 0.2357,
              sign: "NEG",
              var: "euftf",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2014",
              col: "#C4C4C4",
              y: 0.2357,
              name: "Year: 2014"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.143,
              sign: "NEG",
              var: "euftf",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.143,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.132,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.132,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "Education",
              B: "Low Education",
              coefficients: 0.1292,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Low Education",
              col: "#C4C4C4",
              y: 0.1292,
              name: "Education: Low Education"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.1267,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.1267,
              name: "Religion: Other Religion"
            },
            {
              A: "Politics",
              B: "Political Center",
              coefficients: 0.1233,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Center",
              col: "#C4C4C4",
              y: 0.1233,
              name: "Politics: Political Center"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.1225,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.1225,
              name: "Politics: Missing"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.1192,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.1192,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.1187,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.1187,
              name: "Union Member: Current Member"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.1069,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.1069,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "income",
              B: "Middle Income",
              coefficients: 0.1026,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Middle Income",
              col: "#C4C4C4",
              y: 0.1026,
              name: "Income: Middle Income"
            },
            {
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.061,
              sign: "NEG",
              var: "euftf",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#C4C4C4",
              y: 0.061,
              name: "Age Group: 66+ years old"
            },
            {
              A: "Marital_Status",
              B: "Widowed",
              coefficients: 0.0566,
              sign: "NEG",
              var: "euftf",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Widowed",
              col: "#C4C4C4",
              y: 0.0566,
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
        text: "Decreases Probability of Support for the E.U.",
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
