sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demo.controller.About", {
        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteAbout").attachPatternMatched(this.onRouteMatched, this);
        },
        onRouteMatched(oEvent) {
            const { id } = oEvent.getParameter("arguments");
            const oElem = this.getView().byId("parameterText");
            if(oElem){
                oElem.setText(id);
            }
        }
    });
});