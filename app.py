from flask import Flask, render_template
# from flask import Markup

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('ahome.html')

@app.route('/chart1') 
def chart1():
    return render_template('chart1.html') 

@app.route('/chart2') 
def chart2():
    return render_template('chart2.html') 

@app.route('/chart3') 
def chart3():
    return render_template('chart3.html') 

@app.route('/chart4') 
def chart4():
    return render_template('chart4.html') 

@app.route('/chart5') 
def chart5():
    return render_template('chart5.html') 

@app.route('/chart6') 
def chart6():
    return render_template('chart6.html') 

@app.route('/chart7') 
def chart7():
    return render_template('chart7.html') 

@app.route('/chart8') 
def chart8():
    return render_template('chart8.html') 

@app.route('/chart9') 
def chart9():
    return render_template('chart9.html') 

@app.route('/chart10') 
def chart10():
    return render_template('chart10.html') 

@app.route('/under_the_hood')
def under_the_hood():
    return render_template('under_the_hood.html')

@app.route('/meet_the_team')
def meet_the_team():
    return render_template('meet_the_team.html')
    

if __name__ == "__main__":
    app.run(debug=True)
