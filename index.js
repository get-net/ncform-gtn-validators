import innValidator from "./validators/InnValidator"
import snilsValidator from "./validators/SnilsValidator"
import BikValidator from "./validators/BikValidator";
import KppValidator from "./validators/KppValidator";
import KsValidator from "./validators/KsValidator";
import OgrnValidator from "./validators/OgrnValidator"
import OgrnipValidator from "./validators/OgrnipValidator";
const extRules = [
    {inn: innValidator},
    {snils: snilsValidator},
    {bik: BikValidator},
    {kpp: KppValidator},
    {ks: KsValidator},
    {ogrn: OgrnValidator},
    {ogrnip: OgrnipValidator}
]

export default extRules;