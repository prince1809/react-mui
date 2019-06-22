function consoleError() {
  console.error = (...args) => {
    console.info(...args);
    throw new Error(...args);
  };
}

module.exports = consoleError;