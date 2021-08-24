# EnergyPlus Comparison

Comparison of the regressions between v9.2 and v9.5 of EnergyPlus. Wanted to determine the impact of the solar absorptance bug fix on annual energy results.

Data scrapers were created in a Jupyter Notebook. There is a notebook for each city. The process includes:

* Documents necessary energy conversions (summary CSV does this...but not using the summary using the output CSV that has all the reporting data).
* Holds variable for gas and elec pricing.
* Holds variable for building size.
* Loops through all the files in a directory and combines all EnergyPlus default CSV files.
* Grabs the wanted columns from the merged dataframe. Renamed columns. Cleaned data if necessary.
* Gets the annual energy data:
  
    * Uses the pricing variable to convert energy to costs.
    * Combines the annual data and cost data into grouped dataframe.
    * Exports annual data to CSV.

Multivariable (U-factor and SHGC) regressions where done in a Jupyter Notebook. There is a notebook for each city. The process includes:

* Reading in the scraped and formatted data.
* Merging the data with the window performance attributes (U-factor and SHGC).
* Preparing the data for the regression.
* Using linear model from sklearn.

## Regressions for Annual EUI (kBtu/sf)

EnergyPlus v9.5<br>
`Intercept:` <br>
 `17.376122448979594`<br>
`Coefficients: `<br>
 `[6.20969388 5.57397959]`

 EnergyPlus v9.2<br>
`Intercept: `<br>
 `17.153469387755102`<br>
`Coefficients: `<br>
 `[6.46683673 5.19030612]`

 ## Regressions for Annual EUI Costs ($/sf)

 EnergyPlus v9.5<br>
`Intercept: `<br>
 `0.40591836734693876`<br>
`Coefficients: `<br>
` [0.07397959 0.25867347]`

 EnergyPlus v9.2<br>
`Intercept: `<br>
`0.3961224489795918`<br>
`Coefficients: `<br>
 `[0.08571429 0.24234694]`