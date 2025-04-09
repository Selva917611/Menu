class MenuItem:
    def __init__(self, id, name, description, price):
        self.id = id
        self.name = name
        self.description = description
        self.price = price

class Order:
    def __init__(self, id, items, total_price):
        self.id = id
        self.items = items  # List of MenuItem
        self.total_price = total_price

# This file is intentionally left blank.