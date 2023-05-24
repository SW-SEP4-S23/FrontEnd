export default function plantFormInputValidation(input) {
    const errors = {};

    // Validate plant name
    if (!input.plantName) {
      errors.plantName = 'Plantenavn er påkrævet';
    }

    // Validate optimal temperature
    if (!input.optimalTemp) {
      errors.optimalTemp = 'Optimal temperatur er påkrævet';
    } else if (isNaN(input.optimalTemp)) {
      errors.optimalTemp = 'Optimal temperatur må ikke indeholde bogstaver';
    }

    // Validate optimal humidity
    if (!input.optimalHumidity) {
      errors.optimalHumidity = 'Optimal luftfugtighed er påkrævet';
    } else if (isNaN(input.optimalHumidity)) {
      errors.optimalHumidity = 'Optimal luftfugtighed må ikke indeholde bogstaver';
    }

    // Validate optimal CO2
    if (!input.optimalCo2) {
      errors.optimalCo2 = 'Optimal CO2 er påkrævet';
    } else if (isNaN(input.optimalCo2)) {
      errors.optimalCo2 = 'Optimal CO2 må ikke indeholde bogstaver';
    }

    // Validate stock
    if (!input.stock) {
      errors.stock = 'Lagerbeholdning er påkrævet';
    } else if (isNaN(input.stock)) {
      errors.stock = 'Lagerbeholdning må ikke indeholde tegn eller bogstaver';
    }

    return errors;
}