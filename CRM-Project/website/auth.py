from flask import Blueprint, render_template, request, jsonify, url_for, redirect
from .models import Users
from werkzeug.security import generate_password_hash, check_password_hash
from .models import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        print(email)
        user = Users().query.filter_by(userEmail=email).first()
        print(user)
        if user:
            if check_password_hash(user.userPassword, password):
                print('Logged in successfully!')
                login_user(user, remember=True)
                return redirect(url_for('views.dashboard'))
            else:
                print('Incorrect password')
        else:
            print('User does not exist')
    return render_template('login.html', user=current_user)


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

@auth.route('/register', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        first_name = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
        roleId = 1
        phone = request.form.get('phone')
        country = request.form.get('country')
        state = request.form.get('state')
        city = request.form.get('city')
        user = Users().query.filter_by(userEmail=email).first()
        if user:
            print('Email already exists.')
        elif len(email) < 4:
            print('Email must be greater than 3 characters.')
        elif len(first_name) < 2:
            print('Firstname must be greater than 1 characters.')
        elif password1 != password2:
            print('Passwords don\'t match.')
        elif len(password1) < 7:
            print('Password must be at least 7 characters.')
        else:
            new_user = Users(userEmail=email, userName=first_name, userPassword=generate_password_hash(password1, method='sha256'), userRoleId = roleId, userPhone = phone, userCountry = country, userState = state, userCity = city)
            db.session.add(new_user)
            db.session.commit()
            # login_user(new_user, remember=True)
            print('Account created!')
            return redirect(url_for('views.dashboard'))
    return render_template('register.html', user=current_user)