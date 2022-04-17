const express = require("express");
const { getAdLibData } = require("../helpers/getAdLibData");
const { getToken } = require("../helpers/getToken");

const router = express.Router();

router.get("/", async (req, res) => {
    let result = await getToken();

    return res.json(result);
});

router.get('/getData', async(req, res) => {
    let result = await getAdLibData(req.query.url, req.query.token);

    return res.json(result);
});

module.exports = router;