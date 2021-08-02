const saveToStorage = function (value) {
  window.localStorage.setItem("the-key", value);
};

const deleteFromStorage = function (value) {
  window.localStorage.removeItem("the-key", value);
}

const fakeLocalStorage = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

export { saveToStorage, deleteFromStorage, fakeLocalStorage };
