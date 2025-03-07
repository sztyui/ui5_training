sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "sap/m/Dialog",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Button",
    "sap/m/library"
], (Controller, MessageToast, Dialog, List, StandardListItem, Button, mobileLibrary) => {
    "use strict";

    var ButtonType = mobileLibrary.ButtonType;

    return Controller.extend("demo.controller.MyPanel", {
        onInit() {
        },
        onPress() {
            const oBundle = this.getView().getModel('i18n').getResourceBundle();
            const sInput = this.getView().byId("nameInput").getValue();
            const sText = oBundle.getText("popUpMessage", [sInput]);

            MessageToast.show(sText);
        },
        openDialog() {
                if (!this.oDefaultDialog) {
                    this.oDefaultDialog = new Dialog({
                        title: "Available Products",
                        content: new List({
                            items: {
                                path: "/ProductCollection",
                                template: new StandardListItem({
                                    title: "{Name}",
                                    counter: "{Quantity}"
                                })
                            }
                        }),
                        beginButton: new Button({
                            type: ButtonType.Emphasized,
                            text: "OK",
                            press: function () {
                                this.oDefaultDialog.close();
                            }.bind(this)
                        }),
                        endButton: new Button({
                            text: "Close",
                            press: function () {
                                this.oDefaultDialog.close();
                            }.bind(this)
                        })
                    });
    
                    // to get access to the controller's model
                    this.getView().addDependent(this.oDefaultDialog);
                }
    
                this.oDefaultDialog.open();
        },
        async openDialog2() {
            if(!this.dialog) {
                this.dialog = await this.loadFragment({
                    name: "demo.view.MyDialog"
                });
            }
            this.dialog.open();
        },
        closeDialog() {
            if(this.dialog) {
                this.dialog.close();
            }
        },
        goToAboutPage() {
            const router = this.getOwnerComponent().getRouter().navTo("RouteAbout");
        }
    });
});