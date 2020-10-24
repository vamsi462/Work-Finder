"use strict"

//get unique error filed name 

const uniqueMessage = error => {
    let output;
    try {
        let fieldName = error.message.substring(
            error.message.lastIndexOf(".$") + 2,
            error.message.lastIndexOf("_1")
        );
        output =
            fieldName.charAt(0).toUpperCase() +
            fieldName.slice(1) + " already exists "
    } catch (ex) {
        output = "Unique field is already exists"
    }

    return output;
}


//eroror message fromt the error object
exports.errorHandler = error => {
    let message = "";
    if (error.code) {
        switch (error.code) {
            case 11000:
            case 11001:
                message = uniqueMessage(error);
                break;
            default:
                message = "something went wrong"
        }
    } else {
        for (let errorName in error.errors) {
            if (error.errors[errorName].message)
                message = error = error.errors[errorName].message;

        }
    }
    return message;
}