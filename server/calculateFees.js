const calculateFees = (currentClass, currentSession, currentFees) => {

    if (
      isNaN(currentClass) || isNaN(currentSession) || isNaN(currentFees) ||
      currentClass < 1 || currentClass > 12 || 
      currentSession < 2023 || currentSession > 2025
    ) {
      console.log('Invalid input values');
      return null; 
    }
  
    let baseFees = currentFees; 
  
    switch (currentClass) {
      case 1:
        baseFees += 100; 
        break;
      case 2:
        baseFees += 150; 
      case 3:
        baseFees += 200; 
        break;
      case 4:
        baseFees += 250; 
        break;
      case 5:
        baseFees += 300; 
        break;
      case 6:
        baseFees += 350; 
        break;
      case 7:
        baseFees += 400; 
        break;
      case 8:
        baseFees += 500; 
        break;
      case 9:
        baseFees += 600; 
        break;
      case 10:
        baseFees += 700; 
        break;
      case 11:
        baseFees += 800; 
        break;
      case 12:
        baseFees += 900; 
        break;
      default:
        console.log('Not a valid class');
        break;
    }
  
    switch (currentSession) {
      case 2023:
        baseFees += 100; 
        break;
      case 2024:
        baseFees += 200; 
        break;
      case 2025:
        baseFees += 300; 
        break;
      default:
        console.log('Not a valid session');
        break;
    }
  
    return baseFees;
  };

  module.exports = calculateFees;