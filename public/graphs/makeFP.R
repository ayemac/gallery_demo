

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

#Import data
outcome<-import("../data/outcomes.rds")%>%select(-cntry)
metadata<- import("../data/ESS_Meta.xlsx", sheet = "Use")
metadata2<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
yrdata<-import("../data/demo_flat.rds")
why<-plyr::join(outcome, yrdata, by = "Unique_ID")

###VARIABLE
nov <- "happy"


many<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
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


freq <- hchart(fqData,"column", name = "Frequency", colorByPoint = TRUE, hcaes(x = "nocFctr", y = "n"))%>%
  hc_plotOptions(bar = list( dataLabels = list(enabled = TRUE, 
                                               format = '{point.y}'), 
                             enableMouseTracking = TRUE), 
                 animation=TRUE) %>% 
hc_yAxis(title = list(text =  ""))  %>%
  hc_xAxis(title= list(text =paste0( "Distribution of ", meta2$title , " (10-point scale)"))) %>%
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

#############GRAPH 2 - euG2

##Data table with sparkline
test <- filter(data, nov != "NA" )%>%select(cntry, year)
names(test)[names(test)=="cntry"] <- "Country"
test1 <- test %>%group_by(Country, year)%>%dplyr::summarise(obs = n())
sparkline_df_2 <- test1 %>%
  # mutate(Year = as.character((year), labels = test1$year)) %>%  
  group_by(Country) %>% 
  complete(year = test1$year, fill = list(obs = 0)) %>%
  as.data.frame() %>%
  group_by(Country) %>%
  dplyr::summarize(`Sample Size` = sum(obs),
            Years = paste0(obs, collapse = ",")) 

sparkline_df2_spread <- dcast(sparkline_df_2, Country + `Sample Size` ~ .)
names(sparkline_df2_spread)[names(sparkline_df2_spread)=="."] <- "# Responses per Year"
colDefs <- list(list(className = 'dt-center',targets = c(2), render = JS("function(data, type, full){ return '<span class=spark>' + data + '</span>' }")))
bar_string <- "type: 'bar',colorMap: ['#CFCFCF', '#A8A8A8', '#A1A1A1', '#A6A6A6', '#757575', '#6E6E6E', '#666666'], width: 50, height: 25,  highlightColor: '#68228B', tooltipFormat: '{{offset:levels}} : {{value}}', tooltipValueLookups: { levels: { '0': '2002', '1': '2004', '2': '2006', '3': '2008', '4': '2010', '5': '2012', '6': '2014' }}"  
sl_bar <- JS(sprintf("function (oSettings, json) { $('.spark:not(:has(canvas))').sparkline('html', {%s})}", bar_string)) 

d2 <- datatable(data.table(sparkline_df2_spread), 
                rownames = FALSE, 
                options = list(columnDefs = colDefs, 
                               pageLength = 6,
                               fnDrawCallback = sl_bar),
                width = "100%")

d2$dependencies <- append(d2$dependencies, htmlwidgets:::getDependency("sparkline"))
saveWidget(frameableWidget(d2), paste0("euG2_", nov, ".html"),  selfcontained = TRUE)




d1 <- data %>% group_by(cntry)%>% 
  dplyr::summarise(avg = round(weighted.mean(nov,pspwght , na.rm = TRUE), digits = 2))%>%
  arrange( desc(avg))

cont <- hchart(d1, "bar", name="Average Happiness:", hcaes(x="cntry", y="avg"))%>%
  hc_title(text = "Happiness in Europe (10-point Scale)") %>%
  hc_subtitle(text = "Source: European Social Survey (ESS 2002-2014)",
              style = list(color = "#2b908f", fontWeight = "bold"))%>%
  hc_plotOptions(bar = list( dataLabels = list(enabled = TRUE, format = '{point.y}'), enableMouseTracking = TRUE), animation=TRUE) %>% 
  hc_yAxis(title = list(text = "Average Happiness"),labels = list(format = "{value}"),min=4 )  %>%
  hc_xAxis(title= list(text = "")) %>%
  hc_legend(enabled=TRUE, layout = "horizontal", verticalAlign = "bottom",
            floating =FALSE, align = "center", style=list(fontsize="14px"))  %>%
  hc_size(height=600, width = 400)%>%
  hc_add_theme(hc_theme_tufte())%>%
  hc_colors("black")%>%
  hc_chart(backgroundColor = bgcolor)%>%
  hc_tooltip(crosshairs= list(enabled= TRUE, 
                              color=c("#f7f2e6")), 
             backgroundColor = "#f0f0f0",
             valueDecimals=2,
             shared = TRUE, 
             borderWidth = 1, 
             headerFormat = "Average Happiness" ,
             pointFormat = ": {point.y}")
}
