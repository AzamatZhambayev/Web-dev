# main.py

from models import Car, Bike

vehicles = [
    Car("Toyota", 180, "Petrol", 4),
    Bike("Yamaha", 220, "Petrol", "Sport")
]

for v in vehicles:
    print(v)
    print(v.move())  # polymorphism