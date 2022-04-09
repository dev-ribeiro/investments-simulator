const simulate = {
    calcYield: function (c, i, t) { return c * (i / 100) * t },
    calcAmount: function (c, i, t) { return c * (1 + ((i / 100) * t)) }
}

module.exports = { simulate }