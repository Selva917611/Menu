from flask import Blueprint, jsonify, request

routes = Blueprint('routes', __name__)
main_routes = Blueprint('main', __name__)

# Sample menu items
menu_items = [
    {"id": 1, "name": "Idli", "price": 30},
    {"id": 2, "name": "Dosa", "price": 50},
    {"id": 3, "name": "Sambar", "price": 20},
    {"id": 4, "name": "Vada", "price": 25},
]

@routes.route('/menu', methods=['GET'])
def get_menu():
    return jsonify(menu_items)

@routes.route('/order', methods=['POST'])
def create_order():
    order_data = request.json
    # Here you would typically process the order
    return jsonify({"message": "Order created successfully", "order": order_data}), 201

@main_routes.route('/')
def home():
    return {'message': 'Welcome to the Restaurant API'}

@main_routes.route('/menu')
def get_menu():
    return {'items': []}