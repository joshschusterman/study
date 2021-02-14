from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/decision", methods=["GET", "POST"])
def decision():
    if not request.form.get("name"):
        name = "sir/madam"
    else: 
        name = request.form.get("name")
    if not request.form.get("first_option") and not request.form.get("second_option"):
        num = random.randint(0, 1)
        first_option = "think of something to do"
        second_option = "think of something to do"
        return render_template("decision.html", name=name, num=num, first_option=first_option, second_option=second_option)

    num = random.randint(0, 1)
    first_option = request.form.get("first_option")
    second_option = request.form.get("second_option")
    return render_template("decision.html", name=name, num=num, first_option=first_option, second_option=second_option)
