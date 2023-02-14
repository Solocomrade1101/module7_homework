// Задание 5 модуль 7.5
class ElectricalAppliance {
   constructor(name, power) {
      this.name = name;
      this.power = power;
      this.isPlugged = 0;
   }
   plugIn() {
      console.log(this.name + " is plugged!")
      this.isPlugged = 1;
   }
   getPowerUsed() {
      return this.isPlugged ? this.power : 0
   }
}

class Lamps extends ElectricalAppliance {
   constructor(name, power, model, type) {
      super(name, power);
      this.type = type
      this.model = model
   }
}
class TVs extends ElectricalAppliance {
   constructor(name, power, matrixType) {
      super(name, power);
      this.matrixType = matrixType
   }
}
const lampa = new Lamps('lampa', 50, 'sumsung', "desk")
const tv = new TVs('tv', 2000, "OLED")

console.log(lampa.getPowerUsed() + tv.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());