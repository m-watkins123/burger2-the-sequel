
let db = require('../models/');



module.exports = (app) => {

 

    app.get("/", (req,res) => {

        db.Burger.findAll({}).then(function(data) {

            var hbsObject = {

               foods: data 

            }

            res.render("index", hbsObject);

        });

    });



 

  app.post('/', (req,res) => {

            console.log("This is the request", req.body);

        db.Burger.create({

            burger_name: req.body.burger_name,

            devoured: 0

        }).then((data) => {

            console.log('Posted!!');

            

            res.redirect('/');

        });

  });





     app.put('/:id', (req,res) => {

        db.Burger.update({

            devoured:1

        },

        {

            where: {

                id: req.params.id

            }

        }).then((data) => {

            console.log("Devoured!!!");

            res.redirect('/');

        });

     });

    

    app.delete('/:id', (req,res) => {

        db.Burger.destroy({

            where: {

                id: req.params.id

            }

        }).then((data) => {

            console.log("Destroyed!!!");

            res.redirect('/');

        });

    }); 

}


 router.delete('/:id', function(req, res) {
                 var condition = "id = " + req.params.id;

    console.log("condition", condition);

        

    food.deleteOne(condition, function() {

        res.redirect('/');
     });
 });

 module.exports = router;