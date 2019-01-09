library(flowtypeR)
library(dplyr)
pacman::p_load(highcharter,
               ggplot2,
               plotly,
               ggeffects,
               htmltools,
               viridisLite,
               readr,
               DT,
               katexR,
               data.table,
               broom, 
               tidyverse,
               sjPlot,
               sjmisc,
               shiny,
               reshape2,
               viridis,
               hrbrthemes,
               crosstalk,
               manipulateWidget, rio)


#Define Background color 
bgcolor <- "#ffffff"
col<-c("#030303", "#030303", "#030303", "#050505", "#030303", "#030303", "#030303", "#9370DB", "#030303", "#030303", "#030303")
highlightCol<- c("#8A2BE2")
library(widgetframe)

#Import data
metadata<- import("../data/ESS_Meta.xlsx", sheet = "Use")
demo_meta<- import("../data/ESS_Meta.xlsx", sheet = "demographics")
demo_meta<- demo_meta%>%select(-demo)

properNames <- unique(demo_meta%>%select(category, displayName))

metadata2<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
regData<-import("../data/regressionData.csv")
regData <- filter(regData, x != "Missing" & id != "cntry")
###VARIABLE
nov <- "happy"

many<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
toMake<- dplyr::filter(many, DataType == "10-point")

for (nov in toMake$var){

#############GRAPH 2 - euG2
meta<- filter(metadata2, var == nov)
tbl<- filter(regData, var == nov)


tbl<- left_join(tbl, properNames, by = c("id" = "category"))
lapply(split(tbl, tbl$id), function(tbl) {
  
cwd<-getwd()
html_path<-paste0(cwd,paste0("/euG6_", nov,"_",unique(tbl$id), ".html"))
widge<-frameableWidget(
  hchart(tbl, "line", hcaes(x = "x" , 
                            y = "predicted"))%>%
    hc_add_series(tbl, 
                  "errorbar", 
                  hcaes(x = "x", 
                        low = "round(conf.low, 2)",  
                        high = "round(conf.high, 2)",
                        #                      color = "#030303"), 
                  ),   showInLegend = FALSE)%>%
    hc_exporting(enabled = FALSE)%>%
    hc_title(text =as.character(tags$h4(unique(tbl$displayName),tags$br())),
             align = "center")%>%
    hc_legend(enabled = FALSE)%>%
    hc_xAxis(title=list(text=""))%>%  
    hc_yAxis(title = list(text = "Predicted Happiness (10 Point Scale)"))%>%
    hc_size(height = 200, width = 300)%>%
    hc_colors(c("#030303"))%>%
    hc_plotOptions( animation=TRUE) %>% 
    hc_tooltip(crosshairs= list(enabled= TRUE, 
                                color=c("#f7f2e6")), 
               backgroundColor = "#f0f0f0",
               valueDecimals=2,
               shared = TRUE, 
               borderWidth = 1, 
               headerFormat = paste0("Predicted " , meta$title) ,
               pointFormat = ": {point.y}")%>%hc_chart(backgroundColor="transparent"))

  
saveWidget(widge,html_path, selfcontained = FALSE, libdir = "lib")
export_hc(widge,paste0("euG6_", nov, "_", unique(tbl$id)) )
thumb_path<-paste0(cwd,paste0("/euG6_", nov,"_",unique(tbl$id), ".png"))
  width = 300
  height = 300
  delay = 1.0
  webshot::webshot(paste0("file://",html_path), 
                   thumb_path, 
                   vwidth = width,
                   vheight = height, 
                   delay = delay)
})
}

 


meta6<- list()
for (nov in toMake$var){
  dfs<- lapply(unique(demo_meta$category), function(demo) {
    html_path<-paste0(paste0("euG6_", nov,"_",demo, ".html"))
    js_path<-paste0(paste0("euG6_", nov,"_",demo, ".js"))
    thumb_path<-paste0(paste0("euG6_", nov,"_",demo, ".png"))
    html<- c( html_path)
    graphPng<- c( thumb_path)
    js<- c( js_path)
    df<- data.frame(html, graphPng, js)
    df$graph<- "euG6"  
    df$graphID<- nov
    df
  })
  many<- do.call(rbind, dfs)
  meta6[[nov]]<-many
}

meta6<-do.call(rbind,meta6)
export(meta6, "meta6.csv")
