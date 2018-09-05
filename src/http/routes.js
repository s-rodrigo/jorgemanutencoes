const Contact = require('../mongoose/schemas/contact');
const User = require('../mongoose/schemas/user');
const Release = require('../mongoose/schemas/release');

const routes = server => {

    /*
    * Login
    */

    //Confirm email and senha for access
    server.post('/login', (req, resp, next) => {
        let user = req.body;
        User.findOne({email: user.email, password: user.password}, (err, user) => {
            if (err) return console.error(err);
            resp.send(user);
            next();
        });
    });

    /*
    * Users
    */ 

    //Register new user
    server.post('/user', (req, resp, next) => {
        let user = new User(req.body);
        user.save(req.body);
        resp.send(req.body);
        next();
    });

    //Update user
    server.put('/user/:id', (req, resp, next) => {
        let data = req.body;
        User.findOneAndUpdate({_id: req.params.id}, data, (err, user) => {
            if (err) return console.error(err);
            resp.send(data);
            next();
        });
    });

    //Verify if user exists
    server.get('/user/:email', (req, resp, next) => {
        let user = req.params.email;
        
        User.find({email: user}, (err, user) => {
            if (err) return console.error(err);
            resp.send(user);
            next();
        });
    });

    /*
    * Contacts
    */

    //Register new contact
    server.post('/contact', (req, resp, next) => {
        let contact = new Contact(req.body);

        contact.save(req.body);
        resp.send(req.body);
        next();
    });

    //Get a contact
    server.get('/contact/:id', (req, resp, next) => {     
        Contact.find({ _id: req.params.id  }, (err, contact) => {
            if (err) return console.error(err);
            resp.send(contact);
          });
        next();
    });

    //Update a contact
    server.put('/contact/:id', (req, resp, next) => {
        let data = req.body;

        Contact.findOneAndUpdate({ _id: req.params.id  }, data , (err, contact) => {
            if (err) return console.error(err);
            resp.send(data);
          });
        next();
    });

    //Get list
    server.get('/contacts/:parameter', (req, resp, next) => {     
        Contact.find({ name: { $regex: req.params.parameter, $options: 'i'}  }, (err, contacts) => {
            if (err) return console.error(err);
            resp.send(contacts);
          });
        next();
    });

    /*
    * Releases
    */

    //Create release
    server.post('/release', (req, resp, next) => {
        let release = new Release(req.body);

        release.save(req.body);
        resp.send(req.body);
        next();
    });

    //Get a or more release
    server.get('/release/:id', (req, resp, next) => {

        if(req.params.id){
            Release.findOne({ _id: req.params.id }, (err, release) => {
                if(err) return console.error(err);
                resp.send(release);
                next();
            });
        } else {
            Release.find((err, releases) => {
                if(err) return console.error(err);
                resp.send(releases);
                next();
            });
        }
    });

    //Alter a release
    server.put('/release/:id', (req, resp, next) => {
        let release = new Release(req.body);

        Release.findOneAndUpdate({ _id: req.params.id }, release, (err, release) => {
            if(err) return console.error(err);
            resp.send(release);
            next();
        });
    });

    //delete a release
    server.del('/release/:id', (req, resp, next) => {
        Release.findOneAndDelete({ _id: req.params.id}, (err, result) => {
           if(err) return console.error(err) 
            resp.send({msg: 'Excluido com sucesso.'});
            next();
        });
    });
}

module.exports = routes;