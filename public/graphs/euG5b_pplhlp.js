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
              coefficients: 0.9001,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 0.9001,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.3682,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.3682,
              name: "Religion: Islamic"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.2974,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.2974,
              name: "Politics: Missing"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.2375,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.2375,
              name: "Income: Low Income"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.1556,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.1556,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.1376,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.1376,
              name: "Year: 2008"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.1229,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.1229,
              name: "Year: 2002"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.1044,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.1044,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.0899,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.0899,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "religiousDenom",
              B: "Roman Catholic",
              coefficients: 0.0804,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Roman Catholic",
              col: "#C4C4C4",
              y: 0.0804,
              name: "Religion: Roman Catholic"
            },
            {
              A: "Age_group",
              B: "29-41 years old",
              coefficients: 0.0787,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 29-41 years old",
              col: "#C4C4C4",
              y: 0.0787,
              name: "Age Group: 29-41 years old"
            },
            {
              A: "year",
              B: "2004",
              coefficients: 0.0768,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2004",
              col: "#C4C4C4",
              y: 0.0768,
              name: "Year: 2004"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.0715,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.0715,
              name: "Income: Missing"
            },
            {
              A: "Gender",
              B: "Male",
              coefficients: 0.0709,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Male",
              col: "#C4C4C4",
              y: 0.0709,
              name: "Gender: Male"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.0699,
              sign: "NEG",
              var: "pplhlp",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.0699,
              name: "Religious Strength: Not at all religious"
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
        text: "Decreases Probability of Helpfulness",
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
