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
              coefficients: 0.9104,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#458B74",
              y: 0.9104,
              name: "Religion: Protestant"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.4694,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.4694,
              name: "Politics: Political Right"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.4315,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.4315,
              name: "Union Member: Current Member"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.384,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.384,
              name: "Religious Strength: Very religious"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.3751,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.3751,
              name: "Income: High Income"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.3091,
              sign: "POS",
              var: "trstplt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.3091,
              name: "Year: 2002"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.2776,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.2776,
              name: "Education: High Education"
            },
            {
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.2682,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#C4C4C4",
              y: 0.2682,
              name: "Age Group: 66+ years old"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.2262,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.2262,
              name: "Religion: Other Religion"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.1177,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.1177,
              name: "Politics: Political Left"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1176,
              sign: "POS",
              var: "trstplt",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1176,
              name: "Marital Status: Never married"
            },
            {
              A: "year",
              B: "2004",
              coefficients: 0.1094,
              sign: "POS",
              var: "trstplt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2004",
              col: "#C4C4C4",
              y: 0.1094,
              name: "Year: 2004"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.1029,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.1029,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.102,
              sign: "POS",
              var: "trstplt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.102,
              name: "Year: 2016"
            },
            {
              A: "prayerFreq",
              B: "Never Prays",
              coefficients: 0.0863,
              sign: "POS",
              var: "trstplt",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Never Prays",
              col: "#C4C4C4",
              y: 0.0863,
              name: "Prayer Frequency: Never Prays"
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
        text: "Increases Probability of Trust in Politicians",
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
