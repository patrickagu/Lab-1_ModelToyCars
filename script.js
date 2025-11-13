// ToyCar constructor takes individual parameters for each property
function ToyCar(
  brand,
  model,
  year,
  scale,
  color,
  finish,
  materialBody,
  hasRubberTires,
  openingParts,
  sku,
  series,
  packaging,
  lengthInches,
  weightGrams,
  price
) {
  // Identity
  this.brand = brand;
  this.model = model;
  this.year = Number(year);
  this.scale = scale;

  // Appearance & materials
  this.color = color;
  this.finish = finish;
  this.materialBody = materialBody;
  this.hasRubberTires = hasRubberTires; // true or false
  this.openingParts = Number(openingParts);

  // Packaging & identifiers
  this.sku = sku;
  this.series = series;
  this.packaging = packaging;

  // Dimensions & price
  this.lengthInches = Number(lengthInches);
  this.weightGrams = Number(weightGrams);
  this.price = Number(price);

  // readable display name
  this.displayName = this.year + " " + this.model + " (" + this.scale + ")";
}

