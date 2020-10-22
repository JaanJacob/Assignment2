module.exports = function(db, app) {


  //Login Route
    app.post("/api/checkLogin", function(req, res) {
      if (!req.body) {
        return res.sendStatus(400);
      }
  
      username = req.body.formName;
      password = req.body.formPass;  
  
      user = {};
      user.valid = null;
  
      console.log(username);
      console.log(password);
  
      const collection = db.collection("users");
  
      //Checks if username exits in the database. 
      collection.findOne({ name: username }, function(err, data) {
        if (!data) {
          return res.json(user);
        }
  
        if (password === 123) {
          user.valid = true;
          user.username = username;
          user.role = data.role;
          res.json(user);
        } else {
          user.valid = false;
          res.json(user);
        }
      });
    });
  //--------------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------------
  

  //Add user route
  app.post("/api/addUser", function(req, res) {
    user = {};

    if (!req.body) {
      return res.sendStatus(400);
    }

    valid = true;

    const collection = db.collection("users");

    user.username = req.body.name;
    user.role = req.body.role;
    user.email = req.body.email;

    //Check if the user already exists in the database with the same username, if not, add the user to the database
    collection.find({ name: user.username }).count((err, count) => {
      if (count == 0) {
        collection.insertOne(user);
        res.send(true);
      } else {
        res.send(false);
      }
    });
  });
  //---------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------

   //Delete user
   app.post("/api/deleteUser", function(req, res) {
    user = req.body.newUserName;

    const collection = db.collection("users");
    //Find the username passed in the request and delete the whole object in the database
    collection.deleteOne({ name: user });
    res.send(true);
  });
  //--------------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------------
  
    //Get user data
  //Return all users. 
  app.get("/api/allUsers", function(req, res) {
    const collection = db.collection("users");
    users = [];
    collection.find({}).toArray(function(err, data) {
      res.send(data);
    });
  });

  };