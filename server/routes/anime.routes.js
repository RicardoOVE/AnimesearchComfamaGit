const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/search', async (req, res) => {
    if (!("q" in req.query)) {
        res.status(400).json({message: "'q' required in query parameters"})
        return

    }
    const query = req.query.q

    try {

        const responsePromise = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=15`)
        const response = await responsePromise.json()
        let animes = addScoreReviews(response.data)
        res.status(200).json(animes)

    } catch (e) {
        throw Error(e)
    }

})

const addScoreReviews = (animes) => {
    return animes.map((anime) => {
        anime.scoreReview = getScoreReview(anime.score)
        return anime
    })
}

const getScoreReview = (score) => {
    if (score == null) {
        return "No score found"
    }
    if (score >= 0 && score <= 4) {
        return "I do not recommend it"
    } else if (score > 4 && score <= 7) {
        return "You may have fun!"
    } else if (score > 7) {
        return "Great, this is one of the best anime!"
    } else {
        return "Score is negative"
    }

}
module.exports = router;
