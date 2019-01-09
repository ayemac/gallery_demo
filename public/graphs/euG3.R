##Graph 3 - Bar Chart of Overall Country Means 
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
library(widgetframe)

urlico <- "url(https://raw.githubusercontent.com/tugmaks/flags/2d15d1870266cf5baefb912378ecfba418826a79/flags/flags-iso/flat/24/%s.png)"
library(countrycode)
ttvars <- c("cntry", "avg")
tt <- tooltip_table(
  ttvars,
  sprintf("{point.%s}", ttvars)
  #img = tags$img(src="{point.flagicon}",style = "text-align: center;"
  )
tt<-str_replace_all(tt, "<th>cntry", "" )

tt<- paste0("<img src=\"{point.flagicon}\" />", tt)
tt<- str_replace(tt, "<table>",
                 "<table style=\"padding-bottom: 5px\"/>")


many<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
toMake<- dplyr::filter(many, DataType == "10-point")

for (nov in toMake$var){
data<-select(why,nov,  year , cntry, pspwght,Unique_ID)
meta<- filter(metadata2, var == nov)
names(data)[names(data)== nov] <- "nov"

tt<- str_replace(tt, "<th>avg", paste0("<th>", meta$title, ":"))

d1 <- data %>% group_by(cntry)%>%
dplyr::summarise(avg = round(weighted.mean(nov,pspwght , na.rm = TRUE), digits = 2))%>%
arrange( desc(avg))
d1<- filter(d1, !is.na(cntry))


dgames <- d1 %>% 
  mutate(countrycode = countrycode(cntry, origin = "country.name", destination = "iso2c")) %>% 
  mutate(flagicon = sprintf(urlico, countrycode),
         flagicon = str_replace_all(flagicon, "url\\(|\\)", ""))
dgames$col <- c("#C4C4C4")

##Accent Color
dgames$col[[1]]<- "#CDB5CD"
height<-600
cont <- hchart(dgames, "bar", name=paste0("Average", meta$title,":"), hcaes(x="cntry", color = "col", y="avg"))%>%
 hc_title(text = paste0(meta$title," in Europe (10-point Scale)") )%>%
  hc_subtitle(text = paste0("(0 = ", meta$low, ", 10 = ",meta$high, ") ESS 2002-2016"),style = list(color = "#2b908f", fontWeight = "bold"))%>%
  hc_plotOptions(bar = list( dataLabels = list(enabled = TRUE, format = '{point.y}'), enableMouseTracking = TRUE), animation=TRUE) %>%
  hc_yAxis(title = list(text =paste0( "Average ", meta$title)),labels = list(format = "{value}"),min=4 )  %>%
  hc_xAxis(title= list(text = "")) %>%
  hc_legend(enabled=TRUE, layout = "horizontal", verticalAlign = "bottom",
            floating =FALSE, align = "center", style=list(fontsize="14px"))  %>%
  hc_size(height=height)%>%
  hc_add_theme(hc_theme_tufte())%>%
   hc_colors(dgames$col)%>%
  hc_tooltip(
    headerFormat = as.character(tags$b("{point.potato}")),
    pointFormat = tt,
    backgroundColor = "#fff",
    useHTML = TRUE,
    shadow = FALSE,
    shape = "square" )%>%
  hc_chart(backgroundColor = "transparent")



html_path<-paste0(cwd,paste0("/euG3_", nov, ".html"))

library(widgetframe)
saveWidget(frameableWidget(cont),html_path,  selfcontained = FALSE, libdir = "lib")
export_hc(cont,paste0("euG3_", nov) )

cwd<-getwd()
thumb_path<-paste0(cwd,paste0("/euG3_", nov, ".png"))

#width = 600
#height = 400
delay = 1

webshot::webshot(paste0("file://",html_path), 
                 thumb_path, selector="div#htmlwidget_container",
                 vwidth = height*1.5, 
                 vheight = height,
                 delay = delay)


}

##Generate metadata for variables
dic<- import("dictionary.xlsx")
newdf<- data.frame(toMake$var)
newdf$graphPng<-paste0("euG3_", newdf$toMake.var, ".png")
newdf$html<-paste0("euG3_", newdf$toMake.var, ".html")
newdf$graph<- "euG3"
newdf$js<- paste0("euG3_", newdf$toMake.var, ".js")
names(newdf)[1]<- "graphID"
export(newdf, "meta3.csv")
