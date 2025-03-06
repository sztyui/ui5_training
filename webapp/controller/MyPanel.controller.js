sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("demo.controller.MyPanel", {
        onInit() {
        },
        onPress() {
            this.oBundle = this.getView().getModel('i18n').getResourceBundle();
            const sText = this.oBundle.getText("popUpMessage");

            MessageToast.show(sText);
        }
    });
});