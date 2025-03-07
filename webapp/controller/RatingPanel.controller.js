sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("demo.controller.RatingPanel", {
        onInit() {
        },
        showRating() {
            const oBundle = this.getView().byId("RI_L").getValue();
            MessageToast.show(oBundle);
        }
    });
});