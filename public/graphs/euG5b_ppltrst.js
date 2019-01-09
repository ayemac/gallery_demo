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
              B: "Islamic",
              coefficients: 0.775,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#8B1A1A",
              y: 0.775,
              name: "Religion: Islamic"
            },
            {
              A: "religiousDenom",
              B: "Eastern Orthodox",
              coefficients: 0.6312,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#C4C4C4",
              y: 0.6312,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.3686,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.3686,
              name: "Politics: Missing"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.3365,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.3365,
              name: "Income: Low Income"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.1422,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.1422,
              name: "Year: 2008"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.1338,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.1338,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.1327,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.1327,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "Education",
              B: "Low Education",
              coefficients: 0.1268,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Low Education",
              col: "#C4C4C4",
              y: 0.1268,
              name: "Education: Low Education"
            },
            {
              A: "religiousDenom",
              B: "Roman Catholic",
              coefficients: 0.1116,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Roman Catholic",
              col: "#C4C4C4",
              y: 0.1116,
              name: "Religion: Roman Catholic"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.1089,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.1089,
              name: "Income: Missing"
            },
            {
              A: "Marital_Status",
              B: "Widowed",
              coefficients: 0.0675,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Widowed",
              col: "#C4C4C4",
              y: 0.0675,
              name: "Marital Status: Widowed"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.0657,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.0657,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "Religion_Imp",
              B: "Somewhat Religious",
              coefficients: 0.0532,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Somewhat Religious",
              col: "#C4C4C4",
              y: 0.0532,
              name: "Religious Strength: Somewhat Religious"
            },
            {
              A: "Age_group",
              B: "29-41 years old",
              coefficients: 0.0491,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 29-41 years old",
              col: "#C4C4C4",
              y: 0.0491,
              name: "Age Group: 29-41 years old"
            },
            {
              A: "Minority",
              B: "Non-Minority",
              coefficients: 0.0432,
              sign: "NEG",
              var: "ppltrst",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Non-Minority",
              col: "#C4C4C4",
              y: 0.0432,
              name: "Race: Non-Minority"
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
        text: "Decreases Probability of Social Trust",
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
