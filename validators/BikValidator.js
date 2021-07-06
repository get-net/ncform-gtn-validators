import ncformCommon from '@ncform/ncform-common';

class BikValidator extends ncformCommon.ValidationRule {
    constructor(props) {
        super(props);
        this.name = "bik";
        this.defaultErrMsg = "Не правильно указан БИК"
    }

    validateLogic(bik) {
        bik = String(bik)
        const regExp = /^\d{9}$/
        if (!regExp.test(bik)) {
            return false;
        }
        let thirdPart = bik.slice(-3);
        if (+thirdPart === 0 || +thirdPart === 1 || +thirdPart === 2) { // спец. значения
            return true;
        }
        return +thirdPart >= 50 && +thirdPart < 1000;
    }

}

export default BikValidator;