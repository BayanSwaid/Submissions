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
    const title = req.query.title,
        year = req.query.year,
        rating = req.query.rating;
    if (year && title) {

        if (rating) {
            if (year.length == 4 && !isNaN(year)) {
                movies.push({
                    title: title,
                    year: year,
                    rating: rating
                });
                res.json({
                    status: 200,
                    data: movies
                });
            } else {
                res.json({
                    status: 403,
                    error: true,
                    message: 'you cannot create a movie with wrong year!'
                });
            }
        } else {
            movies.push({
                title: title,
                year: year,
                rating: 4
            });
            res.json({
                status: 200,
                data: movies
            });

        }

    } else {
        res.json({
            status: 403,
            error: true,
            message: 'you cannot create a movie without providing a title and a year'
        });
    }
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
            data: movies.sort((a, b) => a.title.localeCompare(b.title))
        });
});
app.get("/movie/get/id/:id", (req, res) => {
    var index = parseInt(req.params.id);
    if (index < movies.length) {
        res.json({
            status: 200,
            data: movies[index]
        });
    } else {
        res.status(404).json({
            status: 404,
            error: true,
            message: 'the movie +' + index + ' does not exist'
        });
    }
});

app.get("/movie/edit/:e_id", (req, res) => {
    var editId = parseInt(req.params.e_id);
    var title = req.query.title, rating = req.query.rating;
    if(title){
        movies[editId].title = title;
    }
    if(rating){
        movies[editId].rating = rating;

    }
    res.json({
        status: 200,
        data: movies
    });
});
app.get("/movie/delete/:d_id", (req, res) => {
    const id = parseInt(req.params.d_id);
    if (id < movies.length) {
        movies[id] = null;
        res.json({
            status: 200,
            data: movies
        });
    } else {
        res.json({
            status: 404,
            error: true,
            message: 'the movie ' + id + ' does not exist'
        });
    }
});
app.listen(2000, () => console.log("Server is listening to port 2000"));