# models.py

class Vehicle:
    def __init__(self, brand, speed, fuel):
        self.brand = brand
        self.speed = speed
        self.fuel = fuel

    def move(self):
        return f"{self.brand} is moving"

    def __str__(self):
        return f"{self.brand}, speed: {self.speed}, fuel: {self.fuel}"


class Car(Vehicle):
    def __init__(self, brand, speed, fuel, doors):
        super().__init__(brand, speed, fuel)
        self.doors = doors

    def move(self):
        return f"Car {self.brand} drives on road"


class Bike(Vehicle):
    def __init__(self, brand, speed, fuel, type_bike):
        super().__init__(brand, speed, fuel)
        self.type_bike = type_bike

    def move(self):
        return f"Bike {self.brand} rides fast"