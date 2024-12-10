function processText() {
    const inputText = document.getElementById("inputText").value;
    const checkPassword = document.getElementById("checkPassword").checked;
    const checkUsername = document.getElementById("checkUsername").checked;
    const formatOption = document.getElementById("formatOption").value;
    let feedback = "";
    let formattedText = inputText;
  
    // Validation Checks
    if (checkPassword) {
      let hasUpper = false;
      let hasLower = false;
      let hasNumber = false;
      let hasSpecial = false;
  
      for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charAt(i);
        if (char >= "A" && char <= "Z") hasUpper = true;
        else if (char >= "a" && char <= "z") hasLower = true;
        else if (char >= "0" && char <= "9") hasNumber = true;
        else hasSpecial = true;
      }
  
      if (inputText.length >= 8 && hasUpper && hasLower && hasNumber && hasSpecial) {
        feedback += "Password is strong.\n";
      } else {
        feedback += "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.\n";
      }
    }
  
    if (checkUsername) {
      let isValidUsername = true;
      for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charAt(i);
        if (!(char >= "A" && char <= "Z") && !(char >= "a" && char <= "z") && !(char >= "0" && char <= "9")) {
          isValidUsername = false;
          break;
        }
      }
  
      if (isValidUsername && inputText.length <= 15) {
        feedback += "Username is valid.\n";
      } else {
        feedback += "Username can only contain alphanumeric characters and should be 15 characters or less.\n";
      }
    }
  
    // Formatting Options
    switch (formatOption) {
      case "uppercase":
        formattedText = formattedText.toUpperCase();
        break;
      case "lowercase":
        formattedText = formattedText.toLowerCase();
        break;
      case "trim":
        formattedText = formattedText.trim();
        break;
      case "removeSpecial":
        let cleanedText = "";
        for (let i = 0; i < formattedText.length; i++) {
          const char = formattedText.charAt(i);
          if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || (char >= "0" && char <= "9") || char === " ") {
            cleanedText += char;
          }
        }
        formattedText = cleanedText;
        break;
      case "capitalizeEachWord":
        formattedText = formattedText
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ");
        break;
      case "sentenceCase":
        formattedText = formattedText.charAt(0).toUpperCase() + formattedText.slice(1).toLowerCase();
        break;
      case "snakeCase":
        formattedText = formattedText
          .toLowerCase()
          .split(" ")
          .join("_");
        break;
      case "kebabCase":
        formattedText = formattedText
          .toLowerCase()
          .split(" ")
          .join("-");
        break;
      case "removeDigits":
        let textWithoutDigits = "";
        for (let i = 0; i < formattedText.length; i++) {
          const char = formattedText.charAt(i);
          if (!(char >= "0" && char <= "9")) {
            textWithoutDigits += char;
          }
        }
        formattedText = textWithoutDigits;
        break;
      case "removeAllWhitespace":
        formattedText = formattedText.split(" ").join("");
        break;
      case "reverseText":
        let reversedText = "";
        for (let i = formattedText.length - 1; i >= 0; i--) {
          reversedText += formattedText.charAt(i);
        }
        formattedText = reversedText;
        break;
      default:
        break;
    }
  
    document.getElementById("feedback").innerText = feedback;
    document.getElementById("result").innerText = `Formatted Text: ${formattedText}`;
  }
  