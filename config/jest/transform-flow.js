/* eslint-disable flowtype/require-valid-file-annotation */
const flowRemoveTypes = require('flow-remove-types')

module.exports = {
  process(source) {
    return flowRemoveTypes(source).toString()
  },
}
