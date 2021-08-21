# EnergyPlus Comparison

Comparison of the regressions between v9.2 and v9.5 of EnergyPlus. Want to determine the impact of the solar absorptance bug fix on annual energy results.

Data scrapers were created in a Jupyter Notebook. There is a notebook for each city. The process includes:

* Documents necessary energy conversions (summary CSV does this...but not using the summary using the output CSV that has all the reporting data).
* Holds variable for gas and elec pricing.
* Combines all EnergyPlus default CSV files in defined directory.
* Grabs the wanted columns from the merged dataframe. Renamed columns. Cleaned data if necessary.
* Gets the annual energy data
    * Uses the pricing variable to convert to costs.
    * Combines the annual data and costs into grouped dataframe.
    * Exports annual data to CSV.

* All CSVs brought into Tableau for graphing/charting.

