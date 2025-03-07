sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demo.controller.RatingPanel", {
        formatAmountState(amount){
            if(amount>2000) return "Error";
            if(amount<1500) return "Success";
            return "Information"; 
        }
    });
});