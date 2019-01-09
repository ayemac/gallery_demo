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
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.5916,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#458B74",
              y: 0.5916,
              name: "Age Group: 66+ years old"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.3889,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.3889,
              name: "Religion: Jewish"
            },
            {
              A: "religiousDenom",
              B: "Protestant",
              coefficients: 0.2595,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#C4C4C4",
              y: 0.2595,
              name: "Religion: Protestant"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.1959,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.1959,
              name: "Religious Strength: Very religious"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.1881,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.1881,
              name: "Politics: Political Right"
            },
            {
              A: "Age_group",
              B: "53-66 years old",
              coefficients: 0.1686,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 53-66 years old",
              col: "#C4C4C4",
              y: 0.1686,
              name: "Age Group: 53-66 years old"
            },
            {
              A: "Minority",
              B: "Non-Minority",
              coefficients: 0.1513,
              sign: "POS",
              var: "stfjb",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Non-Minority",
              col: "#C4C4C4",
              y: 0.1513,
              name: "Race: Non-Minority"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.1506,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.1506,
              name: "Income: High Income"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.1487,
              sign: "POS",
              var: "stfjb",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.1487,
              name: "Year: 2012"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.1303,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.1303,
              name: "Education: High Education"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.1139,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.1139,
              name: "Union Member: Current Member"
            },
            {
              A: "Politics",
              B: "Political Center",
              coefficients: 0.0793,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Center",
              col: "#C4C4C4",
              y: 0.0793,
              name: "Politics: Political Center"
            },
            {
              A: "Marital_Status",
              B: "Married",
              coefficients: 0.0487,
              sign: "POS",
              var: "stfjb",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Married",
              col: "#C4C4C4",
              y: 0.0487,
              name: "Marital Status: Married"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.0381,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.0381,
              name: "Income: Missing"
            },
            {
              A: "religiousDenom",
              B: "Roman Catholic",
              coefficients: 0.0303,
              sign: "POS",
              var: "stfjb",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Roman Catholic",
              col: "#C4C4C4",
              y: 0.0303,
              name: "Religion: Roman Catholic"
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
      subtitle: {
        text: "Increases Probability of Job Satisfaction",
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
      colors: ["#458B74", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4"],
      chart: {
        backgroundColor: "transparent"
      }
    }
  );
});
