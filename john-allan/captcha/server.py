from flask import Flask
from flask import render_template
import json
from random import randint
from sage.all import *
from sage.matrix.constructor import random_echelonizable_matrix

app = Flask(__name__)

def make_question():
    answered = []
    questions = [
        "Find all irreducible polynomials in $\\mathbb{F}_{field_order}[x]$",
        "What is the solution to the matrix? _placeholder_",
        "What are the factors of _placeholder_?",
        "Find $\\#_placeholder_$ if $E : _placeholder2_$"
                 ]
    match randint(0, 2):
        case 0:
            extension = randint(4, 12) 
            R = GF(Integer(2))["x"]
            solution = []
            for p in R.polynomials(extension):
                if p.is_irreducible():
                    solution.append(p)
            return questions[0].replace("field_order", "2^{" + str(extension) + "}"), solution
        case 1:
            n = 4
            matrix_space = sage.matrix.matrix_space.MatrixSpace(QQ, n, n)
            A = random_echelonizable_matrix(matrix_space, rank=n, upper_bound=100)
            B = vector([QQ.random_element() for _ in range(n)])
            B_latex = "\\begin{bmatrix}" + "\\\\".join(latex(x) for x in B) + "\\end{bmatrix}"
            X = A.solve_right(B)
            matrix_elements = [f'x_{k}' for k in range(1, n + 1)]
            X_latex = "\\begin{bmatrix}" + "\\\\".join(matrix_elements) + "\\end{bmatrix}"
            A_latex = "\\begin{bmatrix}" + "\\\\".join("&".join(latex(x) for x in row) for row in A) + "\\end{bmatrix}"

            return questions[1].replace("_placeholder_", "$" + A_latex + X_latex + "=" + B_latex + "$"), X
        case 2:
            number = randint(10**12, 10**18)
            return questions[2].replace("_placeholder_", "$" + str(number) + "$"), factor(number)
        case 3:
            E = EllipticCurve([Integer(2), Integer(3)])
            #T = E.torsion_subgroup()
            #answer = [E(t) for t in T]
            return questions[3].replace("_placeholder_", "E(\\mathbb{Q})_{tors}").replace("_placeholder2_", latex(E)), "a" 

def check_answer(user_answer, answer):
    if user_answer.lower() == answer:
        return True
    return False

@app.route('/')
def index():
    question, solution = make_question()
    data = [question, solution]
    return render_template("index.html", data=data)

@app.route('/new')
def new():
    question, solution = make_question()
    data = [question, str(solution)]
    return data

app.run(debug=True)