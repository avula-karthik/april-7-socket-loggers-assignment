const express = require('express');
const logger = require('morgan');
const router = express.Router();
router.use(
    logger(
        'Custom msg is status :status & res code :res[content-length] & time taken :response-time ms '
    )
);
router.get('/', (req, res) => {
    res.json('response from server');
});
module.exports = router;
