function(e, t, i) {
    var n = i(116);
    t.loginScreenKPI = function(e) {
        n.log("HUD.Click_on_button", {
            interface_id: "LoginScreen",
            button_id: e,
            clic_parameter_key: "language",
            clic_parameter_value: window.Config.language,
            clic_type: "Simple_court"
        })
    }
}
