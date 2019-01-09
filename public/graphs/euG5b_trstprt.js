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
              A: "Politics",
              B: "Missing",
              coefficients: 0.6675,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#8B1A1A",
              y: 0.6675,
              name: "Politics: Missing"
            },
            {
              A: "religiousDenom",
              B: "Eastern Orthodox",
              coefficients: 0.4319,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#C4C4C4",
              y: 0.4319,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.2932,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.2932,
              name: "Religion: Jewish"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.2824,
              sign: "NEG",
              var: "trstprt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.2824,
              name: "Year: 2010"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.2685,
              sign: "NEG",
              var: "trstprt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.2685,
              name: "Year: 2012"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.231,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.231,
              name: "Income: Low Income"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.1992,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.1992,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "religiousDenom",
              B: "Roman Catholic",
              coefficients: 0.1955,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Roman Catholic",
              col: "#C4C4C4",
              y: 0.1955,
              name: "Religion: Roman Catholic"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.1657,
              sign: "NEG",
              var: "trstprt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.1657,
              name: "Year: 2008"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.1591,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.1591,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.1576,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.1576,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.0843,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.0843,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.0827,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.0827,
              name: "Income: Missing"
            },
            {
              A: "Education",
              B: "Middle Education",
              coefficients: 0.0824,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: Middle Education",
              col: "#C4C4C4",
              y: 0.0824,
              name: "Education: Middle Education"
            },
            {
              A: "Minority",
              B: "Non-Minority",
              coefficients: 0.0749,
              sign: "NEG",
              var: "trstprt",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Non-Minority",
              col: "#C4C4C4",
              y: 0.0749,
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
        text: "Decreases Probability of Trust in Political Parties",
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
