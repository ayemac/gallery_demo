##Collage 
library(collage)
library(magick)
vishal<- image_read('http://www.stern.nyu.edu/faculty/static/photos/vsingh.jpg')
karen<- image_read("/Users/uhuggins/Desktop/Screen Shot 2018-10-09 at 11.14.42 PM.png")
tigrou <- image_read("/Users/uhuggins/Desktop/images/Screen Shot 2018-08-03 at 5.05.33 PM.png" )
collage( tigrou, tiles = kittens, size = 10)
collage( tigrou, tiles = useR2017, size = 10)
rtiles <- tiles_mono(colors())
collage( tigrou, tiles = rtiles, size = 10)
collage( tigrou, tiles = emojis, size = 10)
collage( vishal, tiles = emojis, size = 2)

path  <- getwd()
files <- list.files( path, pattern= "png$", full.names = TRUE )
sample_tiles<- tiles(files, size = 25)
tiles_animals<- tiles_animals(size=10)
collage( tigrou, tiles = tiles_animals, size = 10)
  
ans<- tiles_animals(size = 25, what = "bebe,chats", pages)

snakes <- tiles_animals(what = "reptiles,serpent", pages = 1:2 )
collage( karen, tiles = snakes, size = 2)
