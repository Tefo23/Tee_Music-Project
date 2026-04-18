from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", title="Welcome to TeeMusic Recording Studio")

@app.route("/about")
def about():
    return render_template("about.html", title="About | TeeMusic Recording Studio")

@app.route("/services")
def services():
    return render_template("services.html", title="Services | TeeMusic Recording Studio")

@app.route("/artists")
def artists():
    return render_template("artists.html", title="Artists | TeeMusic Recording Studio")
    
@app.route("/bookings")
def bookings():
    return render_template("bookings.html", title="Bookings | TeeMusic Recording Studio")

if __name__ == "__main__":
    app.run(debug=True)
