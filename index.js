import innValidator from "./validators/InnValidator"
import snilsValidator from "./validators/SnilsValidator"
const validators = {
    inn: innValidator,
    snils: snilsValidator
}

export default validators;