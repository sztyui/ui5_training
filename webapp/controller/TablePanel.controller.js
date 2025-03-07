sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter"
], (Controller, FilterOperator, Filter) => {
    "use strict";

    return Controller.extend("demo.controller.RatingPanel", {
        formatAmountState(amount){
            if(amount>2000) return "Error";
            if(amount<1500) return "Success";
            return "Information"; 
        },
        onSearch(event){
            const value = event.getParameter("newValue");
            const filters = [];
            if(value) {
                filters.push(new Filter("ID", FilterOperator.EQ, value));
                filters.push(new Filter("SupplierName", FilterOperator.Contains, value.toString()));
            }
            const table = this.getView().byId('invoicesTable');
            const binding = table.getBinding("items");
            if(filters.length > 0){
                binding.filter(new Filter({
                    filters: filters,
                    and: false
                }));
            } else {
                binding.filter([]);
            }
        }
    });
});