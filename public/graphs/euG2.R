

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
outcome<-import("../data/outcomes.csv")%>%select(-cntry)
metadata<- import("../data/ESS_Meta.xlsx", sheet = "Use")
metadata2<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
yrdata<-import("../data/demo_flat.rds")
why<-plyr::join(outcome, yrdata, by = "Unique_ID")


urlico <- "url(https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/%s.png)"
library(countrycode)

###VARIABLE
nov <- "happy"


many<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
toMake<- dplyr::filter(many, DataType == "10-point")

for (nov in toMake$var){
data<-select(why,nov,  year , cntry, pspwght,Unique_ID)

library(widgetframe)
#############GRAPH 2 - euG2
meta<- filter(metadata2, var == nov)
##Data table with sparkline
names(data)[names(data)== nov] <- "nov"
test <- dplyr::filter(data,!is.na(nov))
names(test)[names(test)=="cntry"] <- "Country"
test1 <- test %>%group_by( Country, year)%>%dplyr::summarise(mean = round(mean(nov), 2),
                                                             obs = n())%>%
  complete(year)
test1<- filter(test1, !is.na(Country))
test1[is.na(test1)] <- 0
sparkline_df_2 <- test1 %>%
  # mutate(Year = as.character((year), labels = test1$year)) %>%  
#  group_by(Country) %>% 
 # complete(year = test1$year, fill = list(obs = 0)) %>%
#  as.data.frame() %>%
  group_by(Country) %>%
  dplyr::summarize(`Average` = round(mean(mean[mean!=0]),2),
                   `Sample Size` = sum(obs),
            Years = paste0(mean, collapse = ",")) 

sparkline_df2_spread <-dcast(sparkline_df_2, Country +`Average` + `Sample Size` ~ .)
names(sparkline_df2_spread)[names(sparkline_df2_spread)=="Average"] <- paste0("Avg. ", meta$title)
names(sparkline_df2_spread)[names(sparkline_df2_spread)=="."] <- paste0( meta$title, " Trend")

sparkline_df2_spread <- sparkline_df2_spread %>% 
  mutate(countrycode = countrycode(Country, origin = "country.name", destination = "iso2c")) %>% 
  mutate(flagicon = sprintf(urlico, countrycode),
         flagicon = str_replace_all(flagicon, "url\\(|\\)", ""),
         Country = paste0( '<img src="', flagicon, '"></img>&nbsp;&nbsp; ',Country) )
sparkline_df2_spread <-select(sparkline_df2_spread , -countrycode, -flagicon)

colDefs <- list(list(className = 'dt-center',targets = c(3), render = JS("function(data, type, full){ return '<span class=spark>' + data + '</span>' }")))
bar_string <- "type: 'bar',colorMap: ['#CFCFCF', '#A8A8A8', '#A1A1A1', '#A6A6A6', '#757575', '#6E6E6E', '#666666', '#666666'], width: 50, height: 25,  highlightColor: '#3768c6', tooltipFormat: '{{offset:levels}} : {{value}}', tooltipValueLookups: { levels: { '0': '2002', '1': '2004', '2': '2006', '3': '2008', '4': '2010', '5': '2012', '6': '2014' , '7': '2016' }}"  
sl_bar <- JS(sprintf("function (oSettings, json) { $('.spark:not(:has(canvas))').sparkline('html', {%s})}", bar_string)) 

d2 <- datatable(sparkline_df2_spread, escape = FALSE,
                rownames = FALSE, caption = HTML(paste0('<br><span style="font-family: Georgia;font-size:20px;
                                                        border-bottom: 1px solid #3768c6;">', meta$title, ' by Year</span><br>')),
                options = list(columnDefs = colDefs, 
                               pageLength = 6, 
                               fnDrawCallback = sl_bar,
                               
                               dom = 'Bfrtip',
                               buttons = c('copy', 'csv', 'excel', 'pdf', 'print')),
                extensions = c('Buttons','Responsive'),
                width = "100%")

d2$dependencies <- append(d2$dependencies, htmlwidgets:::getDependency("sparkline"))

d2


html_path<-paste0(cwd,paste0("/euG2_", nov, ".html"))

library(widgetframe)
saveWidget(frameableWidget(d2),html_path,  selfcontained = FALSE, libdir = "lib")

cwd<-getwd()
thumb_path<-paste0(cwd,paste0("/euG2_", nov, ".png"))

width = 600
height = 300
delay = 1.5

webshot::webshot(paste0("file://",html_path), 
                 thumb_path, 
                 vwidth = width, 
                 vheight = height,
                 delay = delay)

d2 <- datatable(sparkline_df2_spread, escape = TRUE,
                width = "100%")
}


##Generate metadata for variables
dic<- import("dictionary.xlsx")
newdf<- data.frame(toMake$var)
newdf$graphPng<-paste0("euG2_", newdf$toMake.var, ".png")
newdf$js<-paste0("euG2_", newdf$toMake.var, ".js")
newdf$html<-paste0("euG2_", newdf$toMake.var, ".html")
newdf$graph<- "euG2"
names(newdf)[1]<- "graphID"
export(newdf, "meta2.csv")

 


