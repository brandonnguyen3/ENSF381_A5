from flask import Flask, request, jsonify, redirect
from flask_cors import CORS 
import json
import os

app = Flask(__name__)
CORS(app)  

#User Registration API
users = []
@app.route('/registration', methods=['POST'])
def register_user():
    data = request.get_json()
    entered_username = data.get('username')
    entered_password = data.get('password')
    entered_email = data.get('email')

    # Check if username already exists
    for user in users:
        if user['username'] == entered_username:
            return jsonify({"error": "Username already exists"}), 400

    # If username doesn't exist, add user to the list
    users.append({
        'username': entered_username,
        'password': entered_password,
        'email': entered_email
    })

    return jsonify({"message": "User registered successfully"}), 201


# User Authentication API
@app.route('/authenticate', methods=['POST'])
def authenticate_user():
    data = request.get_json()
    entered_username = data.get('username')
    entered_password = data.get('password')

    # Validate username and password
    for user in users:
        if user['username'] == entered_username and user['password'] == entered_password:
            # Redirect user to Product page upon successful authentication
            return redirect('http://localhost:3000/products')
    
    # Display error message if username or password is incorrect
    return jsonify({"error": "Incorrect username or password"}), 401


# Product API
# Make a GET request to the API endpoint

products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 10.99,
        "image": 'images/product1.png'
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description for Product 2",
        "price": 20.99,
        "image": 'images/product2.jpg'
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3",
        "price": 10.99,
        "image": 'images/product3.jpg'
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description for Product 4",
        "price": 10.99,
        "image": 'images/product4.jpg'
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "Description for Product 5",
        "price": 10.99,
        "image": 'images/product5.jpg'
    },
    {
        "id": 6,
        "name": "Product 6",
        "description": "Description for Product 6",
        "price": 10.99,
        "image": 'images/product6.jpg'
    },
    {
        "id": 7,
        "name": "Product 7",
        "description": "Description for Product 7",
        "price": 10.99,
        "image": 'images/product7.jpg'
    },
    {
        "id": 8,
        "name": "Product 8",
        "description": "Description for Product 8",
        "price": 10.99,
        "image": 'images/product8.jpg'
    },
    {
        "id": 9,
        "name": "Product 9",
        "description": "Description for Product 9",
        "price": 10.99,
        "image": 'images/product9.jpg'
    },
    {
        "id": 10,
        "name": "Product 10",
        "description": "Description for Product 10",
        "price": 10.99,
        "image": 'images/product10.jpg'
    }
]

if __name__ == '__main__':
    app.run


    

