sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter",
    "sap/ui/model/json/JSONModel"
], (Controller, FilterOperator, Filter, JSONModel) => {
    "use strict";

    return Controller.extend("demo.controller.RatingPanel", {
        onInit() {
            this.getView().setModel(new JSONModel({}), "newInvoice");
        },
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
        },
        createInvoice() {
            const newInvoice = this.getView().getModel("newInvoice").getProperty("/");
            const tableModel = this.getView().getModel("invoices");
            const invoices = tableModel.getProperty("/Invoices");
            let invoice = {
                "ID": Math.max(...invoices.map(o => o.ID)) + 1,
                "SupplierName": newInvoice.SupplierName,
                "Amount": newInvoice.Amount,
                "Currency": newInvoice.Currency,
                "Date": newInvoice.Date,
            };
            invoices.push(invoice);
            tableModel.setProperty("/Invoices", invoices);
            this.getView().setModel(new JSONModel({}), "newInvoice");
        }
    });
});