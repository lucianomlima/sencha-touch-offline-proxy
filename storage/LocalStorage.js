/**
 * A class that gives access into LocalStorage
 */
Ext.define('storage.LocalStorage', {

    singleton: true,

    config:{
        /**
         * The database capacity in bytes (can't be changed after construction). 5MB by default.
         */
        capacity:50 * 1024
    },

    connected: false,

    constructor: function (config) {
        this.callParent(config);
        console.log('LocalStorage: Connected');
    },

    /**
     * Get an item from the store.
     * @param key The key to get.
     * @param callbacks object of success and failure callbacks
     */
    getItem:function (key, callbacks) {

        var data = window.localStorage.getItem(key);

        if (data === null) {
            console.log('LocalStorage: Error in getItem');
            callbacks.failure('No data found on key ' + key);
        } else {
            callbacks.success(data);
        }
    },

    /**
     * Set an item in the store.
     * @param key The key to set.
     * @param value The string to store.
     */
    setItem:function (key, value) {

        window.localStorage.removeItem(key);
        window.localStorage.setItem(key, value);
    }
});