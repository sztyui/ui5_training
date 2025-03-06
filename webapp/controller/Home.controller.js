sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("demo.controller.Home", {
        onInit() {
        },
        onPress: () => {
            MessageToast.show("Nyomd a lóba... 🐴");
        }
    });
});