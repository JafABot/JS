var checkNameGender = function (yourName,gender) {
//All the code below was used in exercise 1.6
  
    if (gender.length > 0 && yourName.length > 0) {
      if (gender === 'male' || gender === 'female') {
            return true;
      } else {
            return false;
      }
    } else {
      return false;
    }
};


checkNameGender("Scott", "male");