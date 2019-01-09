library(flowtypeR)
library(dplyr)
library(widgetframe)
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

#Import data
outcome<-import("../data/outcomes.csv") 
metadata<- import("../data/ESS_Meta.xlsx", sheet = "Use")
metadata2<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
yrdata<-import("../data/demo_flat.rds")%>%select(-cntry)
why<-plyr::join(outcome, yrdata, by = "Unique_ID")


###VARIABLE
nov <- "happy"


many<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")

#####Make graphs of all continuous variables frequencies
cwd<-getwd()
toMake<- dplyr::filter(many, DataType == "10-point")

for (nov in toMake$var){
data<-select(why,nov,  year , cntry, pspwght,Unique_ID)
meta<- metadata%>%filter(var == nov)
meta2<- metadata2%>%filter(var == nov)

#############GRAPH 1 - euG!

##Frequency
data$nocFctr<- factor(data[[nov]], levels=c("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"))

fqData<- data%>%dplyr::group_by(nocFctr)%>%summarise(n= n())
fqData<-fqData %>% 
  mutate(mode = if_else(n == max(fqData$n),"#68228B",  "#030303"))%>%filter(!is.na(nocFctr))
height<-300

freq <- hchart(fqData,"column", name = "Frequency", colorByPoint = TRUE, hcaes(x = "nocFctr", y = "n"))%>%
  hc_plotOptions(bar = list( dataLabels = list(enabled = TRUE, 
                                               format = '{point.y}'), 
                             enableMouseTracking = TRUE), 
                 animation=TRUE) %>% 
hc_yAxis(title = list(text =  ""))  %>%
  hc_xAxis(title= list(text =paste0( "Distribution of ", meta2$title , " (10-point scale)"))) %>%
  hc_legend(enabled=FALSE)  %>%
  hc_size(height=height)%>%
  hc_add_theme(hc_theme_tufte())%>%
  hc_colors(fqData$mode)%>%
  hc_tooltip(crosshairs= list(enabled= TRUE,
                              color=c("#f7f2e6")),
             backgroundColor = bgcolor,
             shared = TRUE,
             borderWidth = 1,
             headerFormat = paste0(meta2$title, " Level:  {point.x}<br>"))%>%
  hc_chart(backgroundColor = "transparent")

html_path<-paste0(cwd,paste0("/euG1_", nov, ".html"))
saveWidget(frameableWidget(freq),html_path,  selfcontained = FALSE, libdir = "lib")
export_hc(freq,paste0("euG1_", nov) )

thumb_path<-paste0(cwd,paste0("/euG1_", nov, ".png"))

#width = 600
#height = 400
delay = 1.5

#Width based on highchart size
webshot::webshot(paste0("file://",html_path), 
                 thumb_path, selector="div#htmlwidget_container",
                 vwidth = height*1.5, 
                 vheight = height,
                 delay = delay)


}



##Generate metadata for variables
dic<- import("dictionary.xlsx")
newdf<- data.frame(toMake$var)
newdf$graphPng<-paste0("euG1_", newdf$toMake.var, ".png")
newdf$html<-paste0("euG1_", newdf$toMake.var, ".html")
newdf$graph<- "euG1"
newdf$js<- paste0("euG1_", newdf$toMake.var, ".js")

names(newdf)[1]<- "graphID"

export(newdf, "meta.csv")

##Make BINARY variable graphs
meta<- dplyr::filter(many, DataType == "Binary")
nov<-"volunteer"

for (nov in meta$var){
  meta_single<- meta%>%filter(var == nov)
  data<-select(why,meta_single$original,  year , cntry, pspwght,Unique_ID)
  meta2<- metadata2%>%filter(var == nov)
  
  #############GRAPH 1 - euG!
  
  ##Frequency
  data$fctr <-factor(data[[meta_single$original]])
  highs<- as.list(str_split(meta_single$high, "_")[[1]])
  
  fqData<- data%>%dplyr::group_by(fctr)%>%summarise(n= n())
  fqData<-fqData %>% 
    mutate(mode = if_else(fctr %in% highs,"#68228B",  "#030303"))%>%filter(!is.na(fctr))
  
  
  freq <- hchart(fqData,"column", name = "Frequency", colorByPoint = TRUE, hcaes(x = "fctr", y = "n"))%>%
    hc_plotOptions(bar = list( dataLabels = list(enabled = TRUE, 
                                                 format = '{point.y}'), 
                               enableMouseTracking = TRUE), 
                   animation=TRUE) %>% 
    hc_yAxis(title = list(text =  ""))  %>%
    hc_xAxis(title= list(text =paste0( "Distribution of ", meta2$title ))) %>%
    hc_legend(enabled=FALSE)  %>%
    hc_size(height=300)%>%
    hc_add_theme(hc_theme_tufte())%>%
    hc_colors(fqData$mode)%>%
    hc_tooltip(crosshairs= list(enabled= TRUE,
                                color=c("#f7f2e6")),
               backgroundColor = bgcolor,
               shared = TRUE,
               borderWidth = 1,
               headerFormat = paste0(meta2$title, " Level:  {point.x}<br>"))
  
  library(widgetframe)
  saveWidget(frameableWidget(freq), paste0("euG1_", nov, ".html"),  selfcontained = TRUE)
}



