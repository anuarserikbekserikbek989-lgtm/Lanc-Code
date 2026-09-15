// Локальный модуль инициализации Firebase App
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.firebase = global.firebase || {}));
}(this, (function(exports) { 'use strict';
    var firebase = {
        initializeApp: function(config) {
            console.log("⚡ Локальная база Firebase успешно инициализирована!");
            this.config = config;
            return this;
        },
        database: function() {
            return {
                ref: function(path) {
                    console.log("📂 Запрос к ветке базы данных: " + path);
                    return {
                        once: function(type) {
                            return new Promise(function(resolve) {
                                resolve({ exists: function() { return true; }, val: function() { return { username: "Тестовый Юзер", password: "123" }; } });
                            });
                        },
                        set: function(data) {
                            return new Promise(function(resolve) {
                                console.log("💾 Данные успешно сохранены локально:", data);
                                resolve();
                            });
                        }
                    };
                }
            };
        }
    };
    exports.initializeApp = firebase.initializeApp.bind(firebase);
    exports.database = firebase.database.bind(firebase);
    Object.defineProperty(exports, '__esModule', { value: true });
})));
