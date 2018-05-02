 export function appendAttributeBonus (value) {
    let newValue = '';
    switch (value) {
      case '1':
        newValue = `${value} (-5)`
        break;
      case '2':
      case '3':
        newValue = `${value} (-4)`
        break;
      case '4':
      case '5':
        newValue = `${value} (-3)`
        break;
      case '6':
      case '7':
        newValue = `${value} (-2)`
        break;
      case '8':
      case '9':
        newValue = `${value} (-1)`
        break;
      case '10':
      case '11':
        newValue = `${value} (0)`
        break;
      case '12':
      case '13':
        newValue = `${value} (+1)`
        break;
      case '14':
      case '15':
        newValue = `${value} (+2)`
        break;
      case '16':
      case '17':
        newValue = `${value} (+3)`
        break;
      case '18':
      case '19':
        newValue = `${value} (+4)`
        break;
      case '20':
      case '21':
        newValue = `${value} (+5)`
        break;
      case '22':
      case '23':
        newValue = `${value} (+6)`
        break;
      case '24':
      case '25':
        newValue = `${value} (+7)`
        break;
      case '26':
      case '27':
        newValue = `${value} (+8)`
        break;
      case '28':
      case '29':
        newValue = `${value} (+9)`
        break;
      case '30':
        newValue = `${value} (+10)`
        break;
      default:
        newValue = value;
    }
    return newValue;
  }