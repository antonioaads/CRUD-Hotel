const Utils = {
  isNil: value => value === null || value === undefined,

  objToArr: obj => Object.keys(obj).map(k => obj[k]),

  cleanNils: obj => {
    const clean = {}
    for (const key in obj) {
      if (!Utils.isNil(obj[key])) clean[key] = obj[key]
    }
    return clean
  }
}

module.exports = Utils
