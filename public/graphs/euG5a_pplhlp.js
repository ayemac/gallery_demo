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
              coefficients: 0.8565,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#458B74",
              y: 0.8565,
              name: "Religion: Protestant"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.3934,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.3934,
              name: "Union Member: Current Member"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.3465,
              sign: "POS",
              var: "pplhlp",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.3465,
              name: "Year: 2016"
            },
            {
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.2734,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#C4C4C4",
              y: 0.2734,
              name: "Age Group: 66+ years old"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.2707,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.2707,
              name: "Education: High Education"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.2521,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.2521,
              name: "Religion: Other Religion"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.2515,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.2515,
              name: "Income: High Income"
            },
            {
              A: "year",
              B: "2014",
              coefficients: 0.2199,
              sign: "POS",
              var: "pplhlp",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2014",
              col: "#C4C4C4",
              y: 0.2199,
              name: "Year: 2014"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.1758,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.1758,
              name: "Religion: Jewish"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.1712,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.1712,
              name: "Religious Strength: Very religious"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1477,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1477,
              name: "Marital Status: Never married"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.1319,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.1319,
              name: "Politics: Political Right"
            },
            {
              A: "Gender",
              B: "Female",
              coefficients: 0.1048,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Female",
              col: "#C4C4C4",
              y: 0.1048,
              name: "Gender: Female"
            },
            {
              A: "income",
              B: "Middle Income",
              coefficients: 0.0812,
              sign: "POS",
              var: "pplhlp",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Middle Income",
              col: "#C4C4C4",
              y: 0.0812,
              name: "Income: Middle Income"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.0743,
              sign: "POS",
              var: "pplhlp",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.0743,
              name: "Year: 2012"
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
        text: "Increases Probability of Helpfulness",
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
