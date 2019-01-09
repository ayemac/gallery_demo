

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
library(widgetframe)

#Import data
metadata<- import("../data/ESS_Meta.xlsx", sheet = "Use")
demo_meta<- import("../data/ESS_Meta.xlsx", sheet = "demographics")
demo_meta<- demo_meta%>%select(-demo)

metadata2<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
varImpGLM<-import("../data/glmContVarIndividual.csv")

###VARIABLE
nov <- "happy"

many<- import("../data/ESS_Meta.xlsx", sheet = "variablesSmallSet")
toMake<- dplyr::filter(many, DataType == "10-point")

for (nov in toMake$var){

#############GRAPH 2 - euG2
meta<- filter(metadata2, var == nov)
df<- filter(varImpGLM, var == nov)
 

demo_meta<-unique(demo_meta)
df<-left_join(df, demo_meta, by =c("A" = "category"))
df$level<- paste0(df$displayName, ": ", df$B)
pos<- filter(df, sign == "POS")%>%arrange(desc(coefficients))%>%top_n(15, coefficients)

pos$col <- c("#C4C4C4")
##Accent Color
pos$col[[1]]<- "#458B74"

neg<- filter(df, sign == "NEG") %>%arrange(desc(coefficients))%>%top_n(15, coefficients)
neg$col <- c("#C4C4C4")
##Accent Color
neg$col[[1]]<- "#8B1A1A"

height<-450

posit<- hchart(pos, "bar", name = "Importance", hcaes(x = "level", y = "coefficients"))%>%
  hc_title(text = "") %>%
  hc_subtitle(text = paste0("Increases Probability of ", meta$title),
              style = list(color = "#2b908f", fontWeight = "normal", fontSize = "16px"))%>%
  hc_plotOptions(bar = list(colorByPoint=TRUE, dataLabels = list(enabled = TRUE, format = '{point.y:.2f}'), enableMouseTracking = TRUE)) %>% 
  hc_yAxis(min = 0, max = 1,title = list(text =  "Importance") )  %>%
  hc_xAxis(title= list(text = "")) %>%
  hc_legend(enabled=FALSE, layout = "horizontal", verticalAlign = "bottom",
            floating =FALSE, align = "center", style=list(fontsize="14px"))  %>%
  hc_size(height=height)%>%
  hc_colors(pos$col)%>%
  hc_tooltip(crosshairs= list(enabled= TRUE, 
                              color=hex_to_rgba("#2b908f", alpha = .15)), 
             backgroundColor = "#f0f0f0", pointFormat = '{point.y:.2f}',
             shared = TRUE, borderWidth = 1)%>%hc_chart(backgroundColor="transparent")


neggo<- hchart(neg, "bar", name = "Importance", hcaes(x = "level", y = "coefficients"))%>%
  hc_colors(neg$col)%>%
  hc_title(text = "") %>%
  hc_subtitle(text = paste0("Decreases Probability of ", meta$title),
              style = list(color = "#2b908f", fontWeight = "normal", fontSize = "16px"))%>%
  hc_plotOptions(bar = list( colorByPoint=TRUE,dataLabels = list(enabled = TRUE, format = '{point.y:.2f}'), enableMouseTracking = TRUE)) %>% 
  hc_yAxis(min = 0, max = 1, title = list(text =  "Importance") )  %>%
  hc_xAxis(title= list(text = "")) %>%
  hc_legend(enabled=FALSE, layout = "horizontal", verticalAlign = "bottom",
            floating =FALSE, align = "center", style=list(fontsize="14px"))  %>%
  hc_size(height=height)%>%
  hc_tooltip(crosshairs= list(enabled= TRUE, 
                              color=hex_to_rgba("#2b908f", alpha = .15)), 
             backgroundColor = "#f0f0f0", pointFormat = '{point.y:.2f}',
             shared = TRUE, borderWidth = 1)%>%hc_chart(backgroundColor="transparent")

both<- combineWidgets(posit, 
                      neggo, 
                      ncol  =2, 
                      footer = '<span style="font-family: Georgia;font-size:12px;float:right;
                                                        color: #2b908f;">(ESS 2002-2016)</span>',
title= paste0('<br><span style="font-family: Georgia;font-size:20px;
                                                        border-bottom: 1px solid #2b908f;">', paste0("Predictors of ",meta$title), ' by Year</span><br>'))
cwd<-getwd()
html_patha<-paste0(cwd,paste0("/euG5a_", nov, ".html"))
html_pathb<-paste0(cwd,paste0("/euG5b_", nov, ".html"))
saveWidget(frameableWidget(posit),html_patha,  selfcontained = FALSE, libdir = "lib")
export_hc(posit,paste0("euG5a_", nov) )
saveWidget(frameableWidget(neggo),html_pathb,  selfcontained = FALSE, libdir = "lib")
export_hc(neggo,paste0("euG5b_", nov) )
thumb_patha<-paste0(cwd,paste0("/euG5a_", nov, ".png"))
thumb_pathb<-paste0(cwd,paste0("/euG5b_", nov, ".png"))

delay =1

webshot::webshot(paste0("file://",html_patha), 
                 thumb_patha,  selector="div#htmlwidget_container",
                 vwidth = height*1.5, 
                 vheight = height,
                 delay = delay)

webshot::webshot(paste0("file://",html_pathb), 
                 thumb_pathb,  selector="div#htmlwidget_container",
                 vwidth = height*1.5, 
                 vheight = height,
                 delay = delay)
}

##Generate metadata for variables
dic<- import("dictionary.xlsx")
newdf<- data.frame(toMake$var)
newdf$graphPng<-paste0("euG5a_", newdf$toMake.var, ".png")
newdf$html<-paste0("euG5a_", newdf$toMake.var, ".html")
newdf$js<- paste0("euG5a_", newdf$toMake.var, ".js")
newdf$graph<- "euG5a"
names(newdf)[1]<- "graphID"

newdf1<- data.frame(toMake$var)
newdf1$graphPng<-paste0("euG5b_", newdf1$toMake.var, ".png")
newdf1$html<-paste0("euG5b_", newdf1$toMake.var, ".html")
newdf1$js<- paste0("euG5b_", newdf1$toMake.var, ".js")
newdf1$graph<- "euG5b"
names(newdf1)[1]<- "graphID"

df<- rbind(newdf, newdf1)
export(df, "meta5.csv")
