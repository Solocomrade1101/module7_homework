// Задание 4 модуль 7.4
function ElectricalAppliance(name, power) {
   this.name = name;
   this.power = power;
   this.isPlugged = 0;
}

ElectricalAppliance.prototype.plugIn = function () {
   console.log(this.name + " is plugged!");
   this.isPlugged = 1;
}

ElectricalAppliance.prototype.getPowerUsed = function () {
   return this.isPlugged ? this.power : 0;
}


const lampa = new ElectricalAppliance('lampa', 60);
lampa.type = 'desktop'

const tv = new ElectricalAppliance('tv', 500);
tv.type = 'wall'

console.log(lampa.getPowerUsed() + tv.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());

tv.plugIn();
console.log(lampa.getPowerUsed() + tv.getPowerUsed());