const express = require("express");
const app = express();
const movies = [{
        title: 'Jaws',
        year: 1975,
        rating: 8
    },
    {
        title: 'Avatar',
        year: 2009,
        rating: 7.8
    },
    {
        title: 'Brazil',
        year: 1985,
        rating: 8
    },
    {
        title: 'الإرهاب والكباب‎',
        year: 1992,
        rating: 6.2
    }
]
app.get("/", (req, res) => {
    res.send("OK");
});
app.get("/test", (req, res) => {
    res.json({
        status: 200,
        message: "ok"
    });
});
app.get("/time", (req, res) => {
    res.json({
        status: 200,
        message: new Date().getHours() + ":" + new Date().getMinutes()
    });
});
app.get("/hello/:ID", (req, res) => {
    res.json({
        status: 200,
        message: "hello " + req.params.ID
    });
});
app.get("/search", (req, res) => {
    if (req.query.s) {
        res.json({
            status: 200,
            message: "ok",
            data: req.query.s
        });
    } else {
        res.json({
            status: 500,
            error: true,
            message: "you have to provide a search"
        });
    }
});
app.get("/movie/add", (req, res) => {
    res.json({
        status: 200,
        message: "hello add"
    });
});
app.get("/movie/get", (req, res) => {
    res.json({
        status: 200,
        data: movies
    });
});
app.get("/movie/get/:ORDER", (req, res) => {
    var order = req.params.ORDER;
    if (order == 'by-date')
        res.json({
            status: 200,
            data: movies.sort((a, b) => a.year - b.year)
        });
    else if (order == 'by-rating')
        res.json({
            status: 200,
            data: movies.sort((a, b) => a.rating - b.rating)
        });
    else if (order == 'by-title')
        res.json({
            status: 200,
            data: movies.sort((a, b) => a.title - b.title)
        });
});
app.get("/movie/get/id/:id", (req, res) => {
    var index = parseInt(req.params.id);
    if(index < movies.length){
    res.json({
        status: 200,
        data: movies[index]
    });}
    else{
        res.json({status:404,
             error:true, 
             message:'the movie +' + index + ' does not exist'}
    );}
});

app.get("/movie/edit", (req, res) => {
    res.json({
        status: 200,
        message: "hello update"
    });
});
app.get("/movie/delete", (req, res) => {
    res.json({
        status: 200,
        message: "hello delete"
    });
});
app.listen(2000, () => console.log("Server is listening to port 2000"));