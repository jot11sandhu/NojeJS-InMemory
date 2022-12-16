const users =  [
  {
    "id": 1,
    "name": "user_A",
    "username": "user_A",
    "email": "user_A@gmail.com"
  },
  {
    "id": 2,
    "name": "user_B",
    "username": "user_B",
    "email": "user_B@gmail.com"
  },
  {
    "id": 3,
    "name": "user_C",
    "username": "user_C",
    "email": "user_C@gmail.com"
  }
]

var posts =  [
  {
    "id": 1,
    "title": "This is my post.",
    "body": "Hey there!",
    "userId": 1,
    "date": "2022-05-02T20:41:05.437Z"
  }
]

exports.create = (req, res) => {
    const post = {
      id: posts.length + 1,
      title: req.body.title,
      body: req.body.body,
      userId : req.body.userId,
      date: req.body.date,
      reactions: req.body.reactions
    };
    posts.push(post);
    res.send();
  };
  
  exports.findAll = (req, res) => {
        res.send(posts);
  };
  
  exports.update = (req, res) => {
    const id = req.params.id;
    const allPosts = posts.map(post => post);
    const index = allPosts.findIndex(post => post.id === parseInt(id));
    allPosts[index].title = req.body.title;
    allPosts[index].body = req.body.body;
    allPosts[index].userId = req.body.userId;
    allPosts[index].date = req.body.date;    
    posts = allPosts.map(post => post);
    res.send();
  };
  
  exports.delete = (req, res) => {
    const id = req.params.id;
    const index = posts.findIndex(post => post.id === id);
    posts.splice(index, 1);
    res.send();
  };

  exports.reactions = (req, res) => {
    const id = req.params.id;
    const allPosts = posts.map(post => post);
    const index = allPosts.findIndex(post => post.id === parseInt(id));
    allPosts[index].reactions = req.body.reactions;
    posts = allPosts.map(post => post);
    res.send();
  };

  exports.users = (req, res) => {    
    res.send(users);
  }
  
  exports.postsFindByUserId = (req, res) => {
    const id = req.query.userId;
    console.log(req.params);
    res.send(posts.filter(post => post.userId === parseInt(id)));
  }