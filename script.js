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

// Instance methods on the prototype
ToyCar.prototype.summary = function () {
  return (
    this.displayName +
    " — " +
    this.color +
    " " +
    this.finish +
    " • " +
    this.materialBody +
    " • $" +
    this.price.toFixed(2)
  );
};

ToyCar.prototype.updateColor = function (newColor) {
  if (newColor && newColor.trim().length > 0) {
    this.color = newColor.trim();
  }
};

ToyCar.prototype.updatePrice = function (newPrice) {
  const p = Number(newPrice);
  if (!isNaN(p) && p >= 0) {
    this.price = p;
  }
};


