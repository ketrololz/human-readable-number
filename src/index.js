module.exports = function toReadable(number) {

  function nums(a, b, c) {
    const str = String(a)
    switch (str.slice(b, c).trimEnd()) {
      case '0':
        return 'zero'
      case '1':
        return 'one'
      case '2':
        return 'two'
      case '3':
        return 'three'
      case '4':
        return 'four'
      case '5':
        return 'five'
      case '6':
        return 'six'
      case '7':
        return 'seven'
      case '8':
        return 'eight'
      case '9':
        return 'nine'
      case '10':
        return 'ten'
      case '11':
        return 'eleven'
      case '12':
        return 'twelve'
      case '13':
        return 'thirteen'
      case '14':
        return 'fourteen'
      case '15':
        return 'fifteen'
      case '16':
        return 'sixteen'
      case '17':
        return 'seventeen'
      case '18':
        return 'eighteen'
      case '19':
        return 'nineteen'
      default:
        return ''
    }
  }

  function digit(a, b) {
    const str = String(a)
    switch (str[b]) {
      case '1':
        return 'one'
      case '2':
        return 'two'
      case '3':
        return 'three'
      case '4':
        return 'four'
      case '5':
        return 'five'
      case '6':
        return 'six'
      case '7':
        return 'seven'
      case '8':
        return 'eight'
      case '9':
        return 'nine'
      default:
        return ''
    }
  }

  function decades(a, b) {
    const str = String(a)
    switch (str[b]) {
      case '1':
        return ''
      case '2':
        return 'twenty '
      case '3':
        return 'thirty '
      case '4':
        return 'forty '
      case '5':
        return 'fifty '
      case '6':
        return 'sixty '
      case '7':
        return 'seventy '
      case '8':
        return 'eighty '
      case '9':
        return 'ninety '
      default:
        return ''
    }
  }

  function hundreds(a, b) {
    const str = String(a)
    switch (str[b]) {
      case '1':
        return 'one hundred '
      case '2':
        return 'two hundred '
      case '3':
        return 'three hundred '
      case '4':
        return 'four hundred '
      case '5':
        return 'five hundred '
      case '6':
        return 'six hundred '
      case '7':
        return 'seven hundred '
      case '8':
        return 'eight hundred '
      case '9':
        return 'nine hundred '
    }
  }

  if (number === 0) {
    return 'zero'
  } else if (number < 20) {
    return nums(number)
  } else if (number > 19 && number < 100) {
    return `${decades(number, 0)}${digit(number, 1)}`.trimEnd()
  } else if (number > 99 && number < 1000 && String(number)[1] !== '1') {
    return `${hundreds(number, 0)}${decades(number, 1)}${digit(number, 2)}`.trimEnd()
  } else {
    return `${hundreds(number, 0)}${nums(number, 1, 3)}`.trimEnd()
  }
}