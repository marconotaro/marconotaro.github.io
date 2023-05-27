## geocoding function using OSM Nominatim API
## http://wiki.openstreetmap.org/wiki/Nominatim

start <- proc.time()

library(jsonlite)
library(dplyr)
library(here)
options(digits = "10")

## get latitude and longitude
getLatLon <- function(address=NULL){
  if(suppressWarnings(is.null(address)))
    return(data.frame())
  tryCatch(
    d <- fromJSON(
      gsub('\\@addr\\@', gsub('\\s+', '\\%20', address), 'http://nominatim.openstreetmap.org/search/@addr@?format=json&extratags=1&limit=1')
    ),
    error = function(c) return(data.frame())
  )
  if(length(d) == 0)
    return(data.frame())
  if(is.null(d$extratags$ele)){
    return(
      data.frame(
        lat = as.numeric(d$lat),
        lon = as.numeric(d$lon),
        ele = NA
      )
    )
  }else{
    return(
      data.frame(
        lat = as.numeric(d$lat),
        lon = as.numeric(d$lon),
        ele = as.numeric(d$extratags$ele)
      )
    )
  }
}

## urban places
citySpots <- c(
  ## German
  "Heidelberg", "Baden-Baden", "Berlin", "Potsdam", "Trier",
  ## France
  "Paris", "Mont Saint Michel", "Strasbourg", "Chamonix-Mont-Blanc",
  ## Italy
  "Milan", "Bergamo", "Verona", "Siena (Italy)", "Trento", "Florence", "Turin", "Como", "Rome", "Venice", "Pavia",
  "Cagliari", "Catanzaro", "Lecco", "Genoa", "Naples (Italy)", "Ancona", "Bologna", "CastelSardo",
  ## Irlan + England
  "Dublin", "Cambridge",
  ## Greece
  "Corfu",
  ## Australia
  "Sydney", "Canberra", "Wollongong", "Cronulla",
  ## Switzerland
  "Zurich", "Basel", "Saint Moritz", "Sion",
  ## Spain
  "Granada (Andalusia)", "Guadix", "Cordova", "Sevilla", "Barcelona",
  ## Gran Canaria (Spain)
  "Gran Canaria", "Fuerteventura", "Lanzarote",
  ## Poland
  "Wieliczka",
  ## Switzerland
  "Lauterbrunnen", "Flims", "Stoss", "Rigi", "Davos", "Innerarosa", "Montreux", "St. Gallen",
  ## United Kingdom
  "London"
)
cat("tot. city spots: ", length(citySpots),"\n")


## natural places
natureSpots <- c(
  ## Italy -- Bergamo
  "Rifugio Mario Merelli al Coca", "Rifugio Antonio Baroni al Brunone", "Rifugio Laghi Gemelli",  "Rifugio Antonio Curò",
  "Rifugio Alpe Corte", "Rifugio Barbellino", "Rifugio Cesare Benigni", "Rifugio Luigi Albani", "Rifugio Fratelli Calvi",
  "Rifugio Gherardi", "Rifugio Magnolini", "Rifugio Resegone", "Rifugio Nani Tagliaferri", "Pizzo dei Tre Signori",
  "Lago Branchino", "Lago Moro", "Lago della Malgina",
  ## Italy -- Trentino/Val d'Aosta
  "Punta Helbronner", "Rifugio Guido Larcher al Cevedale", "Passo Forcola", "Rifugio Nuvolau", "Rifugio Scoiattoli",
  ## Italy - Sardinia
  "Costa Rei", "Villasimius", "Asinara Sardegna", "La Maddalena",
  ## Switzerland
  "Schilthorn", "Rheinfall (Switzerland)", "Grosser Aletschgletscher", "Pizolhütte", "Suls-Lobhornhütte", "Caumasee", "Sardonahütte",
  "Lenzerheide", "Linthal (Switzerland)", "Muttseehütte", "Limmerensee", "Oeschinensee", "Chrüzhütte", "Brunnihütte", "Gelmersee", "Jöriseen",
  "Trifthütte (Oberland)","Hoher Kasten 2", "Berggasthaus Staubern", "Saxerlücke", "Fählensee", "Berggasthaus Aescher-Wildkirchli",
  "Ebenalp (Appenzell)", "Seealpsee", "Laax", "Stn. Crap Masegn", "Linthal (Switzerland)", "Les Pléiades", "Rochers-de-Naye", "Lac Souterrain",
  "Lammerenhutte", "Wildstrubelgletscher", "Zermatt", "Zmutt", "Matterhorn Glacier Paradise",
  ## France
  "Aiguille du Midi",
  ## Azores
  "Flores (Azores)", "Corvo", "Faial", "Sao Miguel",
  ## Dublin
  "Cliffs of Moher",
  ## Spain
  "Cofete", "Parque Nacional de Timanfaya ", "Roque Nublo", "Dunas de Maspalomas", "Parque Natural de Corralejo", "Lobos Island",
  ## Greek
  "Paleokastritsa", "Yaliskari", "Sidari (Corfù)",
  ## Australia
  "Blue Mountains National Park", "Stanwell Park"
)
cat("tot. nature spots: ", length(natureSpots),"\n")

## compute nominatim_osm across spots
dfCity <- lapply(citySpots, function(spot){
  api_output <- getLatLon(spot)
  if(nrow(api_output) == 0 & ncol(api_output) == 0){
    stop(paste(spot, "is no more (T_T) ... probably the name has been changed on nominatim ... manually inspect `nominatim.openstreetmap.org` to find the real name ... good luck )"))
  }
  return(data.frame(spot = spot, api_output))
})

dfNature <- lapply(natureSpots, function(spot){
  api_output <- getLatLon(spot)
  if(nrow(api_output) == 0 & ncol(api_output) == 0){
    stop(paste(spot, "is no more (T_T) ... probably the name has been changed on nominatim ... manually inspect `nominatim.openstreetmap.org` to find the real name ... good luck )"))
  }
  return(data.frame(spot = spot, api_output))
})

dfCity <- dfCity %>%
  bind_rows() %>%
  data.frame()

dfNature <- dfNature %>%
  bind_rows() %>%
  data.frame()

## save spots in a json format
ff <- file(here::here("js/json.spots.js"), "w")

writeLines("var citySpots = ", con = ff, sep = "")
dfCity %>%
  toJSON(pretty = 2, digits = NA) %>%  ## Json convert, NA means  max precision
  writeLines(ff)

writeLines("var natureSpots = ", con = ff, sep = "")
dfNature %>%
  toJSON(pretty = 2, digits = NA) %>%  ## Json convert, NA means  max precision
  writeLines(ff)

close(ff)

end <- proc.time() - start
cat("elapsed: ", end["elapsed"], "\n")
