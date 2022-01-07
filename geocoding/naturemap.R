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
      gsub('\\@addr\\@', gsub('\\s+', '\\%20', address), 'http://nominatim.openstreetmap.org/search/@addr@?format=json&extratags=1&limit=1')
    ), error= function(c) return(data.frame())
  );
  if(length(d) == 0) return(data.frame());
  if(is.null(d$extratags$ele)){
    return(data.frame(lat=as.numeric(d$lat), lon=as.numeric(d$lon), ele=NA));
  }else{
    return(data.frame(lat=as.numeric(d$lat), lon=as.numeric(d$lon), ele=as.numeric(d$extratags$ele)));
  }
}

#input natural places
## to be continued
spots <- c(
  ## Italy -- Bergamo
  "Rifugio Mario Merelli al Coca", "Rifugio Antonio Baroni al Brunone", "Rifugio Laghi Gemelli",  "Rifugio Antonio Curò",
  "Rifugio Alpe Corte", "Rifugio Barbellino", "Rifugio Cesare Benigni", "Rifugio Luigi Albani", "Rifugio Fratelli Calvi",
  "Rifugio Gherardi", "Rifugio Magnolini", "Rifugio Resegone", "Rifugio Nani Tagliaferri", "Pizzo dei Tre Signori",
  "Lago Branchino", "Lago Moro", "Lago della Malgina",
  ## Italy -- Trentino/Val d'Aosta
  "Punta Helbronner", "Rifugio Guido Larcher al Cevedale", "Passo Forcola", "Rifugio Nuvolau", "Rifugio Scoiattoli",
  ## Italy - Sardinia
  "Costa Rei", "Villasimius", "CastelSardo", "Asinara Sardegna", "La Maddalena",
  ## Switzerland
  "Lauterbrunnen", "Schilthorn", "Rheinfall (Switzerland)", "Grosser Aletschgletscher", "Stoss", "Rigi", "Pizolhütte",
  "Suls-Lobhornhütte", "Flims", "Caumasee", "Sardonahütte", "Lenzerheide", "Innerarosa", "Davos", "Linthal (Switzerland)",
  "Muttseehütte", "Limmerensee", "Oeschinensee", "Chrüzhütte", "Brunnihütte", "Gelmersee", "Jöriseen", "Trifthütte (Oberland)",
  "Hoher Kasten Bergstation", "Berggasthaus Staubern", "Saxerlücke", "Fählensee", "Berggasthaus Aescher-Wildkirchli",
  "Ebenalp (Appenzell)", "Seealpsee", "Laax", "Stn. Crap Masegn",
  ## Dublin
  "Cliffs of Moher",
  ## Spain
  "Cofete", "Parque Nacional de Timanfaya ", "Roque Nublo", "Dunas de Maspalomas", "Parque Natural de Corralejo", "Lobos Island",
  ## Greek
  "Paleokastritsa", "Yaliskari", "Sidari (Corfù)",
  ## Australia
  "Blue Mountains National Park", "Stanwell Park"
);
cat("tot. spots: ", length(spots),"\n");

## compute nominatim_osm across natural places
df <- lapply(spots, function(spot){
  api_output <- get_latlon(spot);
  if(nrow(api_output)==0 & ncol(api_output)==0){
    stop(paste(spot, "is no more (T_T) ... probably the name has been changed on nominatim ... manually inspect `nominatim.openstreetmap.org` to find the real name ... good luck ;)"))
  };
  return(data.frame(spot=spot, api_output));
})


## create dataframe
df <- df %>% bind_rows() %>% data.frame();
df$ele[which(df$ele<=500)] <- NA ## set to NA altitude less than 500
df$ele <- round(df$ele,0);
i <- which(!is.na(df$ele));
df$ele[i] <- prettyNum(df$ele[i], big.mark=',', preserve.width="none");

## save on file
ff <- file("../js/json.nature.js", "w");
writeLines("var spots=", con=ff, sep="");
df %>% toJSON(pretty=2, digits=8, na='null') %>% writeLines(ff); ## Json convert, NA means  max precision
close(ff);

end <- proc.time() - start;
cat("ELAPSED: ", end["elapsed"], "\n");

