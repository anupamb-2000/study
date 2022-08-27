from flask import Blueprint, render_template, request, jsonify
from . import db
from .models import Category

views = Blueprint('views', __name__)

@views.route('/batches', methods=['GET'])
def batches():
    batches = []
    return render_template('batches.html', batches=batches)

@views.route('/categories', methods=['GET', 'POST'])
def categories():
    if request.method == 'POST':
        categoryId = request.form.get('categoryId')
        categoryName = request.form.get('categoryName')
        categoryStatus = bool(request.form.get('categoryStatus'))
        categoryComments = request.form.get('categoryComments')
        print(categoryId, categoryName, categoryStatus, categoryComments)
        new_category = Category(categoryId=categoryId, categoryName=categoryName, categoryStatus=categoryStatus, categoryComments=categoryComments)
        db.session.add(new_category)
        db.session.commit()
        
    categories = Category.query.all()
    return render_template('categories.html', categories=categories)

@views.route('/categories/<categoryId>', methods=['DELETE'])
def deleteCategory(categoryId):
    category = Category.query.get(categoryId)
    if category:
        db.session.delete(category)
        db.session.commit()
    return jsonify({})

@views.route('/categories/<searchBy>/<searchConstraint>')
def searchCategory(searchBy, searchConstraint):
    if searchBy == 'id':
        categories = Category.query.filter(Category.categoryId.like("%"+searchConstraint+"%")).all()
    elif searchBy == 'name':
        categories = Category.query.filter(Category.categoryName.like("%"+searchConstraint+"%")).all()
    return render_template('categories.html', categories=categories)

@views.route('/qualifications')
def qualifications():
    return render_template('qualification.html')