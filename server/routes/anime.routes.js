module.exports = (app) => {
    app.get("/api", (req, res) =>{
        res.json({message:"Test from the backend"})
    })

    

    /*
    app.get("/api/:searchTitle", (req, res) =>{
        let searchTitle = req.params.searchTitle;
        const response = Fetch(`https://api.jikan.moe/v4/anime?q=${searchTitle}&limit=15`)
            .then(res => {
                const keys = Object.keys(res.data) 
            });
        res.json(keys)
        
    })
    */

}