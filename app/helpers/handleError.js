const error = (req, res, err) => {
    const { status, message, errors } = err;
    res.status(status || 500);
    res.send( { message: message });
}

module.exports = {
    error
}