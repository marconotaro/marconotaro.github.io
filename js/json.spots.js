var citySpots = [
  {
    "spot": "Heidelberg",
    "lat": 49.4093582,
    "lon": 8.694724,
    "ele": 114
  },
  {
    "spot": "Baden-Baden",
    "lat": 48.7580777,
    "lon": 8.2415239
  },
  {
    "spot": "Berlin",
    "lat": 52.5170365,
    "lon": 13.3888599,
    "ele": 35
  },
  {
    "spot": "Potsdam",
    "lat": 52.4009309,
    "lon": 13.0591397,
    "ele": 32
  },
  {
    "spot": "Trier",
    "lat": 49.7596208,
    "lon": 6.6441878,
    "ele": 137
  },
  {
    "spot": "Paris",
    "lat": 48.8534951,
    "lon": 2.3483915
  },
  {
    "spot": "Mont Saint Michel",
    "lat": 48.6359541,
    "lon": -1.51145995495951
  },
  {
    "spot": "Strasbourg",
    "lat": 48.584614,
    "lon": 7.7507127
  },
  {
    "spot": "Chamonix-Mont-Blanc",
    "lat": 45.9246705,
    "lon": 6.8727506
  },
  {
    "spot": "Milan",
    "lat": 45.4641943,
    "lon": 9.1896346,
    "ele": 119
  },
  {
    "spot": "Bergamo",
    "lat": 45.7566557,
    "lon": 9.75421920086225
  },
  {
    "spot": "Verona",
    "lat": 45.4384958,
    "lon": 10.9924122
  },
  {
    "spot": "Siena (Italy)",
    "lat": 43.1672254,
    "lon": 11.4671811613391
  },
  {
    "spot": "Trento",
    "lat": 46.1029536,
    "lon": 11.1297424941688
  },
  {
    "spot": "Florence",
    "lat": 43.7698712,
    "lon": 11.2555757,
    "ele": 50
  },
  {
    "spot": "Turin",
    "lat": 45.0677551,
    "lon": 7.6824892,
    "ele": 239
  },
  {
    "spot": "Como",
    "lat": 45.9394759,
    "lon": 9.14941014540895
  },
  {
    "spot": "Rome",
    "lat": 41.8933203,
    "lon": 12.4829321,
    "ele": 21
  },
  {
    "spot": "Venice",
    "lat": 45.4371908,
    "lon": 12.3345898,
    "ele": 1
  },
  {
    "spot": "Pavia",
    "lat": 45.03685465,
    "lon": 9.13782508282603
  },
  {
    "spot": "Cagliari",
    "lat": 39.2171994,
    "lon": 9.113311,
    "ele": 23
  },
  {
    "spot": "Catanzaro",
    "lat": 38.82996035,
    "lon": 16.4315568762783
  },
  {
    "spot": "Lecco",
    "lat": 45.9005485,
    "lon": 9.41202482143963
  },
  {
    "spot": "Genoa",
    "lat": 44.40726,
    "lon": 8.9338624,
    "ele": 20
  },
  {
    "spot": "Naples (Italy)",
    "lat": 40.8358846,
    "lon": 14.2487679,
    "ele": 17
  },
  {
    "spot": "Ancona",
    "lat": 43.4801204,
    "lon": 13.2187906091518
  },
  {
    "spot": "Bologna",
    "lat": 44.4938203,
    "lon": 11.3426327,
    "ele": 54
  },
  {
    "spot": "CastelSardo",
    "lat": 40.910466,
    "lon": 8.718313
  },
  {
    "spot": "Dublin",
    "lat": 53.3498006,
    "lon": -6.2602964,
    "ele": 20
  },
  {
    "spot": "Cambridge",
    "lat": 52.2055314,
    "lon": 0.1186637
  },
  {
    "spot": "Corfu",
    "lat": 39.623657,
    "lon": 19.9234355
  },
  {
    "spot": "Sydney",
    "lat": -33.8698439,
    "lon": 151.2082848
  },
  {
    "spot": "Canberra",
    "lat": -35.2975906,
    "lon": 149.1012676
  },
  {
    "spot": "Wollongong",
    "lat": -34.4278083,
    "lon": 150.893054
  },
  {
    "spot": "Cronulla",
    "lat": -34.0575259,
    "lon": 151.1523851
  },
  {
    "spot": "Zurich",
    "lat": 47.3744489,
    "lon": 8.5410422,
    "ele": 408
  },
  {
    "spot": "Basel",
    "lat": 47.5581077,
    "lon": 7.5878261,
    "ele": 260
  },
  {
    "spot": "Saint Moritz",
    "lat": 46.4978958,
    "lon": 9.8392428,
    "ele": 1822
  },
  {
    "spot": "Sion",
    "lat": 43.73903,
    "lon": 0.00822
  },
  {
    "spot": "Granada (Andalusia)",
    "lat": 37.1734995,
    "lon": -3.5995337,
    "ele": 684
  },
  {
    "spot": "Guadix",
    "lat": 37.3006914,
    "lon": -3.1351956,
    "ele": 913
  },
  {
    "spot": "Cordova",
    "lat": 37.8845813,
    "lon": -4.7760138,
    "ele": 106
  },
  {
    "spot": "Sevilla",
    "lat": 37.3886303,
    "lon": -5.9953403,
    "ele": 11
  },
  {
    "spot": "Barcelona",
    "lat": 41.3828939,
    "lon": 2.1774322,
    "ele": 13
  },
  {
    "spot": "Gran Canaria",
    "lat": 27.9580004,
    "lon": -15.6062305376665
  },
  {
    "spot": "Fuerteventura",
    "lat": 28.40037685,
    "lon": -14.0048697135422
  },
  {
    "spot": "Lanzarote",
    "lat": 29.03970805,
    "lon": -13.6362916086041
  },
  {
    "spot": "Wieliczka",
    "lat": 49.9823773,
    "lon": 20.0602114
  },
  {
    "spot": "Lauterbrunnen",
    "lat": 46.5939043,
    "lon": 7.9078016
  },
  {
    "spot": "Flims",
    "lat": 46.8368188,
    "lon": 9.2864461,
    "ele": 1081
  },
  {
    "spot": "Stoss",
    "lat": 47.3608471,
    "lon": 9.4948877,
    "ele": 943
  },
  {
    "spot": "Rigi",
    "lat": 47.0567184,
    "lon": 8.4853157,
    "ele": 1797.52
  },
  {
    "spot": "Davos",
    "lat": 46.796198,
    "lon": 9.8236892,
    "ele": 1560
  },
  {
    "spot": "Innerarosa",
    "lat": 46.7743471,
    "lon": 9.6594006,
    "ele": 1820
  },
  {
    "spot": "Montreux",
    "lat": 46.4310831,
    "lon": 6.9129921,
    "ele": 390
  },
  {
    "spot": "St. Gallen",
    "lat": 47.4250593,
    "lon": 9.3765878,
    "ele": 675
  },
  {
    "spot": "London",
    "lat": 51.5073359,
    "lon": -0.12765,
    "ele": 15
  }
]

var natureSpots = [
  {
    "spot": "Rifugio Mario Merelli al Coca",
    "lat": 46.0546874,
    "lon": 10.00986065,
    "ele": 1892
  },
  {
    "spot": "Rifugio Antonio Baroni al Brunone",
    "lat": 46.062301,
    "lon": 9.96052260848631,
    "ele": 2295
  },
  {
    "spot": "Rifugio Laghi Gemelli",
    "lat": 45.9929728,
    "lon": 9.80353802678275,
    "ele": 1968
  },
  {
    "spot": "Rifugio Antonio Curò",
    "lat": 46.0618139,
    "lon": 10.0477313551544,
    "ele": 1915
  },
  {
    "spot": "Rifugio Alpe Corte",
    "lat": 45.9577783,
    "lon": 9.82397778634841,
    "ele": 1410
  },
  {
    "spot": "Rifugio Barbellino",
    "lat": 46.076584,
    "lon": 10.0796535932322,
    "ele": 2130
  },
  {
    "spot": "Rifugio Cesare Benigni",
    "lat": 46.02138105,
    "lon": 9.5619178,
    "ele": 2220
  },
  {
    "spot": "Rifugio Luigi Albani",
    "lat": 45.96607245,
    "lon": 10.0559939929468,
    "ele": 1939
  },
  {
    "spot": "Rifugio Fratelli Calvi",
    "lat": 46.02352815,
    "lon": 9.87701419958455,
    "ele": 2015
  },
  {
    "spot": "Rifugio Gherardi",
    "lat": 45.9257298,
    "lon": 9.5648360086755,
    "ele": 1650
  },
  {
    "spot": "Rifugio Magnolini",
    "lat": 45.8713508,
    "lon": 10.08204051196,
    "ele": 1612
  },
  {
    "spot": "Rifugio Resegone",
    "lat": 45.8560289,
    "lon": 9.4890884,
    "ele": 1265
  },
  {
    "spot": "Rifugio Nani Tagliaferri",
    "lat": 46.05539045,
    "lon": 10.1146943058521,
    "ele": 2328
  },
  {
    "spot": "Pizzo dei Tre Signori",
    "lat": 46.011533,
    "lon": 9.527442,
    "ele": 2553
  },
  {
    "spot": "Lago Branchino",
    "lat": 45.94978585,
    "lon": 9.8027895561076,
    "ele": 1787
  },
  {
    "spot": "Lago Moro",
    "lat": 45.8800251,
    "lon": 10.1574234499664,
    "ele": 382
  },
  {
    "spot": "Lago della Malgina",
    "lat": 46.08256055,
    "lon": 10.0594504663727,
    "ele": 2339
  },
  {
    "spot": "Punta Helbronner",
    "lat": 45.8458717,
    "lon": 6.9317558,
    "ele": 3462
  },
  {
    "spot": "Rifugio Guido Larcher al Cevedale",
    "lat": 46.4369195,
    "lon": 10.6660521969564,
    "ele": 2608
  },
  {
    "spot": "Passo Forcola",
    "lat": 46.4492425,
    "lon": 10.6519884,
    "ele": 3032
  },
  {
    "spot": "Rifugio Nuvolau",
    "lat": 46.4952253,
    "lon": 12.045702161024,
    "ele": 2575
  },
  {
    "spot": "Rifugio Scoiattoli",
    "lat": 46.50809505,
    "lon": 12.0468251003444,
    "ele": 2255
  },
  {
    "spot": "Costa Rei",
    "lat": 39.2560813,
    "lon": 9.575808,
    "ele": 4
  },
  {
    "spot": "Villasimius",
    "lat": 39.14314,
    "lon": 9.520854
  },
  {
    "spot": "Asinara Sardegna",
    "lat": 41.0523109,
    "lon": 8.25609173158468
  },
  {
    "spot": "La Maddalena",
    "lat": 41.2127826,
    "lon": 9.4066598
  },
  {
    "spot": "Schilthorn",
    "lat": 46.5572822,
    "lon": 7.8351745,
    "ele": 2973
  },
  {
    "spot": "Rheinfall (Switzerland)",
    "lat": 47.6778348,
    "lon": 8.6153284
  },
  {
    "spot": "Grosser Aletschgletscher",
    "lat": 46.45163235,
    "lon": 8.0775081486158
  },
  {
    "spot": "Pizolhütte",
    "lat": 46.97883665,
    "lon": 9.41713755242541,
    "ele": 2222
  },
  {
    "spot": "Suls-Lobhornhütte",
    "lat": 46.6184883,
    "lon": 7.8689998,
    "ele": 1955
  },
  {
    "spot": "Caumasee",
    "lat": 46.82021335,
    "lon": 9.29630272479419,
    "ele": 997
  },
  {
    "spot": "Sardonahütte",
    "lat": 46.91547395,
    "lon": 9.27541919083333,
    "ele": 2158
  },
  {
    "spot": "Lenzerheide",
    "lat": 46.727896,
    "lon": 9.5568344,
    "ele": 1476
  },
  {
    "spot": "Linthal (Switzerland)",
    "lat": 46.918987,
    "lon": 8.99714,
    "ele": 662
  },
  {
    "spot": "Muttseehütte",
    "lat": 46.85747595,
    "lon": 9.01878839295421,
    "ele": 2501
  },
  {
    "spot": "Limmerensee",
    "lat": 46.83461775,
    "lon": 9.01411511827087
  },
  {
    "spot": "Oeschinensee",
    "lat": 46.4984951,
    "lon": 7.72684294441997,
    "ele": 1578
  },
  {
    "spot": "Chrüzhütte",
    "lat": 46.87127475,
    "lon": 8.43687155,
    "ele": 1713
  },
  {
    "spot": "Brunnihütte",
    "lat": 46.841153,
    "lon": 8.4109691,
    "ele": 1860
  },
  {
    "spot": "Gelmersee",
    "lat": 46.61567185,
    "lon": 8.33147052038264,
    "ele": 1850
  },
  {
    "spot": "Jöriseen",
    "lat": 46.7794232,
    "lon": 9.970663
  },
  {
    "spot": "Trifthütte (Oberland)",
    "lat": 46.67791415,
    "lon": 8.37665860926157,
    "ele": 2525
  },
  {
    "spot": "Hoher Kasten 2",
    "lat": 47.2838155,
    "lon": 9.484975,
    "ele": 1791
  },
  {
    "spot": "Berggasthaus Staubern",
    "lat": 47.26061145,
    "lon": 9.45326006406946
  },
  {
    "spot": "Saxerlücke",
    "lat": 47.2472639,
    "lon": 9.4247692,
    "ele": 1649
  },
  {
    "spot": "Fählensee",
    "lat": 47.2518437,
    "lon": 9.41917861791215,
    "ele": 1447
  },
  {
    "spot": "Berggasthaus Aescher-Wildkirchli",
    "lat": 47.2833952,
    "lon": 9.4144537,
    "ele": 1454
  },
  {
    "spot": "Ebenalp (Appenzell)",
    "lat": 47.2842056,
    "lon": 9.4109863
  },
  {
    "spot": "Seealpsee",
    "lat": 47.2682729,
    "lon": 9.40076732478276,
    "ele": 1141
  },
  {
    "spot": "Laax",
    "lat": 46.806412,
    "lon": 9.2581267,
    "ele": 1016
  },
  {
    "spot": "Stn. Crap Masegn",
    "lat": 46.8422365,
    "lon": 9.1799574,
    "ele": 2472
  },
  {
    "spot": "Linthal (Switzerland)",
    "lat": 46.918987,
    "lon": 8.99714,
    "ele": 662
  },
  {
    "spot": "Les Pléiades",
    "lat": 46.4820859,
    "lon": 6.9092392,
    "ele": 1360
  },
  {
    "spot": "Rochers-de-Naye",
    "lat": 46.4318192,
    "lon": 6.976051,
    "ele": 2045
  },
  {
    "spot": "Lac Souterrain",
    "lat": 46.2569313,
    "lon": 7.4258954
  },
  {
    "spot": "Lammerenhutte",
    "lat": 46.40029365,
    "lon": 7.57448610197454,
    "ele": 2502
  },
  {
    "spot": "Wildstrubelgletscher",
    "lat": 46.40090925,
    "lon": 7.55446682727349
  },
  {
    "spot": "Zermatt",
    "lat": 46.0212076,
    "lon": 7.749254,
    "ele": 1608
  },
  {
    "spot": "Zmutt",
    "lat": 46.0064782,
    "lon": 7.7170895
  },
  {
    "spot": "Matterhorn Glacier Paradise",
    "lat": 45.9383473,
    "lon": 7.7292141
  },
  {
    "spot": "Aiguille du Midi",
    "lat": 45.8787077,
    "lon": 6.8874075,
    "ele": 3842
  },
  {
    "spot": "Flores (Azores)",
    "lat": 39.44789825,
    "lon": -31.1969010864094
  },
  {
    "spot": "Corvo",
    "lat": 39.69771415,
    "lon": -31.1052443560403
  },
  {
    "spot": "Faial",
    "lat": 38.5795831,
    "lon": -28.7096295478752
  },
  {
    "spot": "Sao Miguel",
    "lat": 37.80855645,
    "lon": -25.4731373912453
  },
  {
    "spot": "Cliffs of Moher",
    "lat": 52.9595033,
    "lon": -9.4441796
  },
  {
    "spot": "Cofete",
    "lat": 28.1023118,
    "lon": -14.3888189
  },
  {
    "spot": "Parque Nacional de Timanfaya ",
    "lat": 29.02164345,
    "lon": -13.7812358910893
  },
  {
    "spot": "Roque Nublo",
    "lat": 27.9708896,
    "lon": -15.6125928,
    "ele": 1813
  },
  {
    "spot": "Dunas de Maspalomas",
    "lat": 27.743883,
    "lon": -15.5828992727039
  },
  {
    "spot": "Parque Natural de Corralejo",
    "lat": 28.7026411,
    "lon": -13.8364422850612
  },
  {
    "spot": "Lobos Island",
    "lat": 28.7501766,
    "lon": -13.8217035,
    "ele": 11
  },
  {
    "spot": "Paleokastritsa",
    "lat": 39.6757716,
    "lon": 19.7119035
  },
  {
    "spot": "Yaliskari",
    "lat": 39.57664885,
    "lon": 19.8269651236169
  },
  {
    "spot": "Sidari (Corfù)",
    "lat": 39.792821,
    "lon": 19.7017291
  },
  {
    "spot": "Blue Mountains National Park",
    "lat": -33.6190685,
    "lon": 150.487633990821
  },
  {
    "spot": "Stanwell Park",
    "lat": -34.228928,
    "lon": 150.9881239
  }
]

