function cityTaxes(name, population, treasury) {
  let record = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      percentage /= 100;
      this.population *= percentage + 1;
    },
    applyRecession(percentage) {
      this.treasury *= percentage - 1;
    },
  };

  return record;
}
