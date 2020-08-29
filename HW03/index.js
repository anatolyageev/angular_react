const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const exphbs = require('express-handlebars')

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'calulatorAnswer',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

const urlencodedParser = bodyParser.urlencoded({ extended: false });

let operationsHendle = function (req) {

}

app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, './views', 'calculator.html'))
})

app.post('/calculator', urlencodedParser, (req, res) => {
    let num1 = + req.body.number1
    let num2 = + req.body.number2
    let oper = req.body.operation
    let result = 0
    switch (oper) {
        case "plus":
            result = num1 + num2;
            console.log("result plus" + result)
            break;
        case 'minus':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 == '0')
                error_result = "На ноль делить нельзя!";
            else
                result = num1 / num2;
            break;
    }

    res.render('result', { result })
})

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
    console.log(`Server running...${PORT}`)
})