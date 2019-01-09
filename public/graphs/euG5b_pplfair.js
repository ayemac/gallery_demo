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
              B: "Eastern Orthodox",
              coefficients: 0.8406,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 0.8406,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.6338,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.6338,
              name: "Religion: Islamic"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.3196,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.3196,
              name: "Politics: Missing"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.2936,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.2936,
              name: "Income: Low Income"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.1217,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.1217,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.116,
              sign: "NEG",
              var: "pplfair",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.116,
              name: "Year: 2008"
            },
            {
              A: "Education",
              B: "Low Education",
              coefficients: 0.1085,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Low Education",
              col: "#C4C4C4",
              y: 0.1085,
              name: "Education: Low Education"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.1083,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.1083,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.1056,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.1056,
              name: "Income: Missing"
            },
            {
              A: "Age_group",
              B: "29-41 years old",
              coefficients: 0.1033,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 29-41 years old",
              col: "#C4C4C4",
              y: 0.1033,
              name: "Age Group: 29-41 years old"
            },
            {
              A: "Gender",
              B: "Male",
              coefficients: 0.0739,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Male",
              col: "#C4C4C4",
              y: 0.0739,
              name: "Gender: Male"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.0705,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.0705,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "Minority",
              B: "Minority",
              coefficients: 0.0551,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Minority",
              col: "#C4C4C4",
              y: 0.0551,
              name: "Race: Minority"
            },
            {
              A: "Age_group",
              B: "41-53 years old",
              coefficients: 0.0544,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 41-53 years old",
              col: "#C4C4C4",
              y: 0.0544,
              name: "Age Group: 41-53 years old"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.0439,
              sign: "NEG",
              var: "pplfair",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.0439,
              name: "Church Attendance: Never Attends Services"
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
        text: "Decreases Probability of Fairness",
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
