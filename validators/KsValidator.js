import ncformCommon from '@ncform/ncform-common';

class KsValidator extends ncformCommon.ValidationRule {
    constructor(props) {
        super(props);
        this.name = "ks";
        this.defaultErrMsg = "Не правильно указан Корр. счет"
    }

    validateLogic(ks, ruleVal) {
        let bik = String(ruleVal.bik)
        ks = String(ks)
        const regExp = /^\d{20}$/
        if (!regExp.test(ks)) {
            return false;
        } else {
            let bikKs = '0' + bik.slice(4, 6) + ks;
            let checksum = 0;
            const coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
            for (let i in coefficients) {
                checksum += coefficients[i] * (bikKs[i] % 10);
            }
            if (checksum % 10 === 0) {
                return true;
            }
        }
        return false;
    }

}

export default KsValidator;