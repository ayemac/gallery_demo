##Graph 4- Global Map
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


col<-c("#030303", "#030303", "#030303", "#050505", "#030303", "#030303", "#030303", "#9370DB", "#030303", "#030303", "#030303")
highlightCol<- c("#8A2BE2")

 
#Import data
outcome<-import("../data/outcomes.csv")%>%select(-cntry)
metadata<- import("../data/ESS_Meta.xlsx", sheet = "Use")
metadata2<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
yrdata<-import("../data/demo_flat.rds")
why<-plyr::join(outcome, yrdata, by = "Unique_ID")
library(widgetframe)
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

t4<- str_replace(tt, "<th>avg", paste0("<th>", meta$title, ":"))

d1 <- data %>% group_by(cntry)%>%
dplyr::summarise(avg = round(weighted.mean(nov,pspwght , na.rm = TRUE), digits = 2))%>%
arrange( desc(avg))
d1<- filter(d1, !is.na(cntry))


dgames <- d1 %>% 
  mutate(countrycode = countrycode(cntry, origin = "country.name", destination = "iso2c")) %>% 
  mutate(flagicon = sprintf(urlico, countrycode),
         flagicon = str_replace_all(flagicon, "url\\(|\\)", ""))


#Highcharter Map
n <- 4
stops <- data.frame(q = 0:n/n,
                    c = substring(viridis(n + 1), 0, 7),
                    stringsAsFactors = FALSE)
stops <- list_parse2(stops)

#mapdata <- get_data_from_map(download_map_data("custom/europe"))
height<-500

t4<- str_replace(tt, "<th>avg", paste0("<th>", meta$title, ":"))
map <- hcmap("custom/europe", data = dgames, value = "avg",
             joinBy = c("name", "cntry"), name = "Average Happiness",
             dataLabels = list(enabled = TRUE, format = '{point.name}'),
             borderColor = "#FAFAFA", borderWidth = 0.1,
             tooltip = list(valueDecimals = 2))%>%
  hc_subtitle(text = paste0("(0 = ", meta$low, ", 10 = ",meta$high, ") ESS 2002-2016"),style = list(color = "#2b908f", fontWeight = "bold"))%>%
  hc_colorAxis(stops = stops, max = max(dgames$avg)-1, min = min(dgames$avg)+1)%>%
  hc_title(text = paste0(meta$title, " in Europe"))%>%
  hc_legend(align = "right", verticalAlign = "top", floating = TRUE,
            layout = "vertical",  x = 0, y = 100) %>%
  hc_tooltip(
    headerFormat = as.character(tags$b("{point.potato}")),
    pointFormat = t4,
    backgroundColor = "#fff",
    useHTML = TRUE,
    shadow = FALSE,
    shape = "square" )%>%
  hc_chart(backgroundColor = "transparent")%>%hc_size(height = height)



cwd<-getwd()

html_path<-paste0(cwd,paste0("/euG4_", nov, ".html"))

saveWidget(frameableWidget(map),html_path,   selfcontained = FALSE, libdir = "lib")
thumb_path<-paste0(cwd,paste0("/eu4_", nov, ".png"))

#html_path<-paste0(cwd,paste0("/euG4_", nov, "_uncontrained.html"))
#saveWidget(frameableWidget(map),html_path,  selfcontained = FALSE, libdir = "lib")

export_hc(cont,paste0("euG4_", nov) )

#width = 300
#height = 300
delay = 1.0

webshot::webshot(paste0("file://",html_path), 
                 thumb_path,  selector="div#htmlwidget_container",
                 vwidth = height*1.5, 
                 vheight = height,
                 delay = delay)


}

##Generate metadata for variables
dic<- import("dictionary.xlsx")
newdf<- data.frame(toMake$var)
newdf$graphPng<-paste0("euG4_", newdf$toMake.var, ".png")
newdf$html<-paste0("euG4_", newdf$toMake.var, ".html")
newdf$graph<- "euG4"
newdf$js<- paste0("euG4_", newdf$toMake.var, ".js")
names(newdf)[1]<- "graphID"
export(newdf, "meta4.csv")
