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
  
  
  };