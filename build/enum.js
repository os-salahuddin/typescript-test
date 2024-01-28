"use strict";
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["NotFound"] = 404] = "NotFound";
    statusCodes[statusCodes["Success"] = 200] = "Success";
    statusCodes[statusCodes["Accepted"] = 202] = "Accepted";
    statusCodes[statusCodes["BadRequest"] = 400] = "BadRequest";
})(statusCodes || (statusCodes = {}));
console.info(statusCodes);
console.info(statusCodes.BadRequest);
