const kata = (input) => {
    
    let sum = 0;    
    let temp = "0";
    let error_text = [];
    let error_value = "none";

    for (var index = 0; index <= input.length; index++) {

        var element = input.charAt(index);
        if (element == "-") {
            error_value = "next";
        }
        if (parseInt(element).toString() != "NaN"){
            temp += element;
            
        } else{
            let current_value = parseInt(temp);
            if (error_value == "next") {
                error_value = "current";
            } else if (error_value == "current") {
                error_text.push("-" + current_value);
                error_value = "none";
            }
            else if(current_value <= 1000)
                sum += current_value;
            temp = "0";
        }
    }
    if (error_text != "")
        throw new Error("negatives not allowed "+ error_text);
    return sum;
}


module.exports = kata;