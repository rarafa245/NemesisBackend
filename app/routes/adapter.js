const httpRequest = (req, res) => {
    return {
        req: req,
        res: res,
        parrams: req.query,
        body: req.body
    }
}

module.exports = httpRequest