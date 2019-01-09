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
              coefficients: 0.9592,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#8B1A1A",
              y: 0.9592,
              name: "Religion: Jewish"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.4955,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.4955,
              name: "Politics: Missing"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.279,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.279,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "year",
              B: "2014",
              coefficients: 0.2146,
              sign: "NEG",
              var: "trstep",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2014",
              col: "#C4C4C4",
              y: 0.2146,
              name: "Year: 2014"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.1743,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.1743,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.1604,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.1604,
              name: "Income: Low Income"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.1511,
              sign: "NEG",
              var: "trstep",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.1511,
              name: "Year: 2010"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.1502,
              sign: "NEG",
              var: "trstep",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.1502,
              name: "Year: 2016"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.1066,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.1066,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.105,
              sign: "NEG",
              var: "trstep",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.105,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "Age_group",
              B: "53-66 years old",
              coefficients: 0.0898,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 53-66 years old",
              col: "#C4C4C4",
              y: 0.0898,
              name: "Age Group: 53-66 years old"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.0685,
              sign: "NEG",
              var: "trstep",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.0685,
              name: "Year: 2012"
            },
            {
              A: "religiousDenom",
              B: "Eastern Orthodox",
              coefficients: 0.0664,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#C4C4C4",
              y: 0.0664,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "Gender",
              B: "Male",
              coefficients: 0.0604,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Male",
              col: "#C4C4C4",
              y: 0.0604,
              name: "Gender: Male"
            },
            {
              A: "Education",
              B: "Low Education",
              coefficients: 0.0593,
              sign: "NEG",
              var: "trstep",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Low Education",
              col: "#C4C4C4",
              y: 0.0593,
              name: "Education: Low Education"
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
        text: "Decreases Probability of Trust in European Parliament",
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
