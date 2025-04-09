from flask import Blueprint, jsonify

main_routes = Blueprint('main_routes', __name__)

@main_routes.route('/api/menu', methods=['GET'])
def get_menu():
    menu_items = [
        {
            "id": 1,
            "name": "Masala Dosa",
            "description": "Crispy rice crepe with spiced potato filling",
            "price": 8.99
        },
        {
            "id": 2,
            "name": "Idli Sambar",
            "description": "Steamed rice cakes with lentil soup",
            "price": 7.99
        }
    ]
    return jsonify(menu_items)