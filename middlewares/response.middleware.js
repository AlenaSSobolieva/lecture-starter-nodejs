const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  if (res.err) {
    const message = res.err.message;

    if (message.includes("not found")) {
      return res.status(404).json({
        error: true,
        message,
      });
    }

    return res.status(400).json({
      error: true,
      message,
    });
  }

  return res.status(200).json(res.data);
};

export { responseMiddleware };

