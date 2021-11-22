const db = require('./database.js');
var bcrypt = require('bcryptjs');

const Controller = {};

Controller.getALL = (req, res, next) => {
  console.log(req.body);
  console.log('currently in the controller getALL');
  function formatData(SQL) {
    const obj = {}
    SQL.forEach((element) => {
      obj[element.name] = []
      const nameArray = element.names.split('#')
      const linkArray = element.links.split('#')
      const arrayObj = []
      for (let i = 0; i < nameArray.length; i++) {
        const nameLink = {}
        nameLink.name = nameArray[i]
        nameLink.link = linkArray[i]
        arrayObj.push(nameLink)
      }
      obj[element.name] = arrayObj;
    })
    return obj;
    //one object with all users presets
    //each key has an array of objects
    //each object has a name and link key
  }
  console.log('is the req.body showing', req.body.newPreset);
  let username;
  if (req.body.userInfo) username = [req.body.userInfo.username]
  else username = [req.body.newPreset[13]]
  console.log('is the req.body showing', req.body.newPreset);
  console.log('this is the username in an array-------->', username)
  let qString = "select presets.name, STRING_AGG(presetsongs.sound, '#') AS names, STRING_AGG(soundLinks.link, '#') AS links from presets Join presetsongs ON presets.name = presetsongs.presetName Join soundlinks ON presetsongs.sound = soundLinks.sound WHERE presetsongs.username = $1 OR presetsongs.username IS NULL Group BY presets.name"
  console.log('trying to get all with the parse')
  db.query(qString, username)
    .then(data => {
      //console.log(data.rows)
      res.locals.all = formatData(data.rows);
      //console.log(res.locals.all); -- front end NEEDS this format.
      return next();
    })
    .catch(err => {
      console.log('Error when trying to do the query for getting all')
      return next({
        log: 'Error in the Controller.getAll',
        message: { err: 'Controller.getAll: Error' }
      })
    })
}

Controller.savePrimary = (req, res, next) => {
  //unable to do multiple queries at the same time so I need to create
  //the primary key in the preset table for better username usage
  const testing = req.body.newPreset
  // why these index positions
  // index 0 is preset name
  // index 14 is username
  const names = [testing[0], testing[14]]
  let qString = "Insert INTO presets (name, username) Values ($1, $2)";
  db.query(qString, names)
    .then(() => {
      return next();
    })
    .catch(err => {
      console.log(err.message);
      return next({
        log: 'Error in Controller.savePrimary',
        message: { err: 'Controller.savePrimary' }
      });
    });
}

Controller.savePreset = async (req, res, next) => {
  // check if preset already exists in DB
  let findPresetQuery = `SELECT * FROM presetsongs WHERE presetname = $1`
  const findPreset = await db.query(findPresetQuery, [req.body.newPreset[0]])

  // if existing preset exists in database, then update database
  // else, create new presetSongs 
  if (findPreset.rowCount > 0) {
    console.log('UPDATING PRESETS')
    // let updateString =  `UPDATE presetSongs SET sound = $2 WHERE presetname = $1 AND username = $14 AND index = 1;
    //   UPDATE presetSongs SET sound = $3 WHERE presetname = $1 AND username = $14 AND index = 2;
    //   UPDATE presetSongs SET sound = $4 WHERE presetname = $1 AND username = $14 AND index = 3;
    //   UPDATE presetSongs SET sound = $5 WHERE presetname = $1 AND username = $14 AND index = 4;
    //   UPDATE presetSongs SET sound = $6 WHERE presetname = $1 AND username = $14 AND index = 5;
    //   UPDATE presetSongs SET sound = $7 WHERE presetname = $1 AND username = $14 AND index = 6;
    //   UPDATE presetSongs SET sound = $8 WHERE presetname = $1 AND username = $14 AND index = 7;
    //   UPDATE presetSongs SET sound = $9 WHERE presetname = $1 AND username = $14 AND index = 8;
    //   UPDATE presetSongs SET sound = $10 WHERE presetname = $1 AND username = $14 AND index = 9;
    //   UPDATE presetSongs SET sound = $11 WHERE presetname = $1 AND username = $14 AND index = 10;
    //   UPDATE presetSongs SET sound = $12 WHERE presetname = $1 AND username = $14 AND index = 11;
    //   UPDATE presetSongs SET sound = $13 WHERE presetname = $1 AND username = $14 AND index = 12;
    // `
    let update = req.body.newPreset;
    update.pop();

    let updateString = `UPDATE presetSongs 
    SET sound = CASE index 
    WHEN 1 THEN $2 
    WHEN 2 THEN $3 
    WHEN 3 THEN $4 
    WHEN 4 THEN $5 
    WHEN 5 THEN $6 
    WHEN 6 THEN $7 
    WHEN 7 THEN $8 
    WHEN 8 THEN $9 
    WHEN 9 THEN $10 
    WHEN 10 THEN $11
    WHEN 11 THEN $12
    WHEN 12 THEN $13 END 
    WHERE index IN(1,2,3,4,5,6,7,8,9,10,11,12)
    AND presetname = $1`

    db.query(updateString, update)
    .then(() => {
      return next();
    })
    .catch(err => {
      console.log(err.message);
      return next({
        log: 'Error in Controller.savePreset - updating database',
        message: {err: 'Controller.savePreset - updating database'}
      });
    });
  } else {
    const testing = req.body.newPreset;
    console.log('CREATING NEW PRESETS')
    let qString =  "Insert INTO presetSongs Values ($1, $2, $14, 1), ($1, $3, $14, 2), ($1, $4, $14, 3), ($1, $5, $14, 4), ($1, $6, $14, 5), ($1, $7, $14, 6), ($1, $8, $14, 7), ($1, $9, $14, 8), ($1, $10, $14, 9), ($1, $11, $14, 10), ($1, $12, $14, 11), ($1, $13, $14, 12);"
    // qString += `'${arr.shift()}','`;
    // qString = qString + arr.join('#') + ')';
    db.query(qString, testing)
      .then(() => {
        return next();
      })
      .catch(err => {
        console.log(err.message);
        return next({
          log: 'Error in Controller.savePreset - creating in database',
          message: {err: 'Controller.savePreset - creating in database'}
        });
      });
  }
};


// how much of this works?
// Controller.login = (req, res, next) => {
//   const { username, password } = req.body.userInfo;
//   console.log({'username': username, 'password':password});
//   let qString =  "select * from users Where name = $1 AND password = $2"; //grab user presets while matching for username/pw
//   const hash = bcrypt.hashSync(password, 2);
//   console.log(hash);
//   db.query(qString, [username, hash])
//     .then((data) => {
//       console.log('login response data', data);
//       res.locals.loginStatus = true;
//       return next();
//     })
//     .catch(err => {
//       console.log(err.message);
//       return next({
//         log: 'Error in Controller.getGaffes',
//         message: {err: 'Controller.getGaffes: Error'}
//       });
//     });
// };

Controller.login = (req, res, next) => {
  const { username, password } = req.body.userInfo;
  console.log({'username': username, 'password':password});
  let qString =  "select * from users Where name = $1"; //grab user presets while matching for username/pw
  // const hash = bcrypt.hashSync(password, 2);
  // console.log(hash);
  db.query(qString, [username])
    .then(async (data) => {
      const hash = await data.rows[0].password;
      const eval = await bcrypt.compare(password, hash);
      if (eval) {
        res.locals.loginStatus = true;
        return next();
      } else throw 'Password is incorrect';
    })
    .catch(err => {
      console.log(err.message);
      return next({
        log: 'Error in Controller.getGaffes',
        message: {err: 'Controller.getGaffes: Error'}
      });
    });
};


Controller.verifyUser = (req, res, next) => {
  const { username } = req.body.allInfo;
  let verifyAvailable = "select * from users Where name = $1";
  db.query(verifyAvailable, [username])
  .then(response => {
    console.log(response);
    if (response.rows[0] !== undefined) throw 'Username is already taken!'
    else return next();
  })
  .catch(err => {
    console.log('error');
    return next({
      log: 'Error in Controller.signup',
      message: {err: `${err.message}`}
    });
  });
}

Controller.signup = async (req, res, next) => {
  console.log('this is the post request body', req.body.allInfo);
  const { username, password } = req.body.allInfo;
  let qString =  "Insert INTO users (name, password) Values ($1, $2);" 
  let hash = await bcrypt.hash(password, 10);
  db.query(qString, [username, hash])
  .then((response) => {
    console.log('promise response', response);
    return next();
  })
  .catch(err => {
    console.log(err.message);
    return next({
      log: 'Error in Controller.signup',
      message: {err: 'Controller.signup: Error'}
    });
 });  
};

module.exports = Controller;