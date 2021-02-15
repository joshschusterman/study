from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/decision", methods=["GET", "POST"])
def decision():
    # check for invalid (missing) name input
    if not request.form.get("name"):
        name = "sir/madam"
    else: 
        name = request.form.get("name")
    # check to see if options forms left empty, custom response if so
    if not request.form.get("first_option") and not request.form.get("second_option"):
        num = random.randint(0, 1)
        first_option = "think of something to do"
        second_option = "think of something to do"
        return render_template("decision.html", name=name, num=num, first_option=first_option, second_option=second_option)
    # check to see if only one option was given, custom response if so
    elif not request.form.get("first_option") or not request.form.get("second_option"):
        num = random.randint(0, 1)
        first_option = "come up with another option (you only entered one)"
        second_option = "come up with another option (you only entered one)"
        return render_template("decision.html", name=name, num=num, first_option=first_option, second_option=second_option)

    # generate random number to determine 'heads or tails'
    num = random.randint(0, 1)
    first_option = request.form.get("first_option")
    second_option = request.form.get("second_option")

    # assign values from forms (user inputs) and send to variables in html(jinja2)
    return render_template("decision.html", name=name, num=num, first_option=first_option, second_option=second_option)
