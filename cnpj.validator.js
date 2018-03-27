import CnpjValidate from './cnpj'
const validator = {
  getMessage (field, args) { // will be added to default English messages.
    return 'Invalid CNPJ'
  },
  validate (value, args) {
    return CnpjValidate(value)
  }
}
export default validator
