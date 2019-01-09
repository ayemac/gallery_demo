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
              coefficients: 0.7083,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 0.7083,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.6767,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.6767,
              name: "Politics: Missing"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.4521,
              sign: "NEG",
              var: "trstprl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.4521,
              name: "Year: 2010"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.4472,
              sign: "NEG",
              var: "trstprl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.4472,
              name: "Year: 2012"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.4439,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.4439,
              name: "Religion: Jewish"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.3334,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.3334,
              name: "Income: Low Income"
            },
            {
              A: "religiousDenom",
              B: "Roman Catholic",
              coefficients: 0.2874,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Roman Catholic",
              col: "#C4C4C4",
              y: 0.2874,
              name: "Religion: Roman Catholic"
            },
            {
              A: "union",
              B: "Former Member",
              coefficients: 0.1787,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Former Member",
              col: "#C4C4C4",
              y: 0.1787,
              name: "Union Member: Former Member"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.1647,
              sign: "NEG",
              var: "trstprl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.1647,
              name: "Year: 2008"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.131,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.131,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.1164,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.1164,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.0997,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.0997,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.08,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.08,
              name: "Income: Missing"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.0663,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.0663,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "Age_group",
              B: "29-41 years old",
              coefficients: 0.0584,
              sign: "NEG",
              var: "trstprl",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 29-41 years old",
              col: "#C4C4C4",
              y: 0.0584,
              name: "Age Group: 29-41 years old"
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
        text: "Decreases Probability of Trust in Parliament",
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
