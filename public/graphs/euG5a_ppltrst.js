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
              coefficients: 0.9328,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#458B74",
              y: 0.9328,
              name: "Religion: Protestant"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.5426,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.5426,
              name: "Education: High Education"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.4855,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.4855,
              name: "Union Member: Current Member"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.4029,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.4029,
              name: "Income: High Income"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.3053,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.3053,
              name: "Religion: Jewish"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.2472,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.2472,
              name: "Religious Strength: Very religious"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.2244,
              sign: "POS",
              var: "ppltrst",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.2244,
              name: "Year: 2016"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.2118,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.2118,
              name: "Religion: Other Religion"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.2026,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.2026,
              name: "Politics: Political Right"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.2023,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.2023,
              name: "Marital Status: Never married"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.1541,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.1541,
              name: "Politics: Political Left"
            },
            {
              A: "year",
              B: "2014",
              coefficients: 0.1532,
              sign: "POS",
              var: "ppltrst",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2014",
              col: "#C4C4C4",
              y: 0.1532,
              name: "Year: 2014"
            },
            {
              A: "prayerFreq",
              B: "Never Prays",
              coefficients: 0.1414,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Never Prays",
              col: "#C4C4C4",
              y: 0.1414,
              name: "Prayer Frequency: Never Prays"
            },
            {
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.1123,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#C4C4C4",
              y: 0.1123,
              name: "Age Group: 66+ years old"
            },
            {
              A: "income",
              B: "Middle Income",
              coefficients: 0.0821,
              sign: "POS",
              var: "ppltrst",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Middle Income",
              col: "#C4C4C4",
              y: 0.0821,
              name: "Income: Middle Income"
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
        text: "Increases Probability of Social Trust",
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
