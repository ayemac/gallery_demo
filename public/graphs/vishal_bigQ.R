library(bigrquery)
project <- "ctznpub" # put your project ID here
sql <- "SELECT year, month, day, weight_pounds FROM [publicdata:samples.natality] LIMIT 5"
query_exec(sql, project = project)

