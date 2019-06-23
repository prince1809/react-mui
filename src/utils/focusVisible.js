import React from 'react';
import ReactDOM from 'react-dom';


let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout = null;

const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true,
};



function focusTriggersKeyboardModality(node) {
  const { type, tagName } = node;

  if (tagName === 'INNPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}

function handleKeyDown() {
  hadKeyboardEvent = true;
}

function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(ownerDocument) {
  ownerDocument.addEventListener('keydown', handleKeyDown, true);
  ownerDocument.addEventListener('mousedown', handlePointerDown, true);
  ownerDocument.addEventListener('pointerdown', handlePointerDown, true);
  ownerDocument.addEventListener('touchstart', handlePointerDown, true);
  ownerDocument.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  const { target } = event;
  try {
    return target.matches(':focus-visible');
  } catch (error) {

  }

  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}

function handleBlurVisible() {

}

export function useIsFocusVisible() {
  const ref = React.useCallback(instance => {
    const node = ReactDOM.findDOMNode(instance);
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);

  return { isFocusVisible, onBlurVisible: handleBlurVisible, ref };
}