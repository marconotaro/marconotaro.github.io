## geocoding function using OSM Nominatim API
## details: http://wiki.openstreetmap.org/wiki/Nominatim

# to use jsonlite: we need to install curl pkg. curl require 'libcurl4-openssl-dev' -> sudo apt install libcurl4-openssl-dev

start <- proc.time();

library(jsonlite);
library(dplyr);
options(digits="10");

## get lat and lng
get_latlon <- function(address=NULL){
  if(suppressWarnings(is.null(address)))
    return(data.frame())
  tryCatch(
    d <- jsonlite::fromJSON( 
      gsub('\\@addr\\@', gsub('\\s+', '\\%20', address), 'http://nominatim.openstreetmap.org/search/@addr@?format=json&limit=1')
  ), error= function(c) return(data.frame()));
  if(length(d) == 0) return(data.frame());
  return(data.frame(lat=as.numeric(d$lat), lon=as.numeric(d$lon)));
}

#input cities (main)
spots <- c(
  ## German
  "Heidelberg", "Baden-Baden", "Berlin", "Potsdam", "Trier",
  ## France
  "Paris", "Mont Saint Michel", "Strasbourg", 
  ## Italy
  "Milan", "Bergamo", "Verona", "Siena (Italy)", "Trento", "Florence", "Turin", "Como", "Rome", "Venice", "Pavia", 
  "Cagliari", "Catanzaro", "Lecco", "Genoa", "Naples (Italy)", "Ancona", "Bologna",
  ## Irlan + England
  "Dublin", "Cambridge", 
  ## Greece
  "Corfu",
  ## Australia
  "Sydney", "Canberra", "Wollongong", "Cronulla", 
  ## Switzerland
  "Zurich", "Basel", "Saint Moritz",
  ## Spain
  "Granada (Andalusia)", "Cordova", "Sevilla", "Barcelona",
  ## Gran Canaria (Spain)
  "Gran Canaria", "Fuerteventura", "Lanzarote",
  ## Poland
  "Wieliczka"
);
cat("tot. spots: ", length(spots),"\n");

## compute nominatim_osm across spots
df <- lapply(spots, function(spot){
  api_output <- get_latlon(spot);
  if(nrow(api_output)==0 & ncol(api_output)==0){
    stop(paste(spot, "is no more (T_T) ... probably the name has been changed on nominatim ... manually inspect `nominatim.openstreetmap.org` to find the real name ... good luck ;)"))
  };
  return(data.frame(spot=spot, api_output));
});

## create dataframe   
df <- df %>% bind_rows() %>% data.frame();

## save on file
ff <- file("../js/json.city.js", "w");
writeLines("var spots=", con=ff, sep="");
df %>% toJSON(pretty=2, digits=NA) %>% writeLines(ff); ## Json convert, NA means  max precision
close(ff);

end <- proc.time() - start;
cat("ELAPSED: ", end["elapsed"], "\n");

