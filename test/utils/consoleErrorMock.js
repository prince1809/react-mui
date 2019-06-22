import { spy } from 'sinon';

class ConsoleErrorMock {
  consoleErrorContainer;

  spy = () => {
    this.consoleErrorContainer = console.error;
    console.error = spy();
  };

  reset = () => {
    console.error = this.consoleErrorContainer;
    delete this.consoleErrorContainer;
  };

  callCount = () => {
    if (this.consoleErrorContainer) {
      return console.error.callCount;
    }

    throw new Error('Requested call count before spy() was called');
  }
}