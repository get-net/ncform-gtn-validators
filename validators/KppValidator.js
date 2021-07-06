import ncformCommon from '@ncform/ncform-common';

class KppValidator extends ncformCommon.ValidationRule {
    constructor(props) {
        super(props);
        this.name = "kpp";
        this.defaultErrMsg = "Не правильно указан кпп"
    }

    validateLogic(kpp) {
        const regExp = /^\d{9}$/
        return regExp.test(kpp)
    }

}

export default KppValidator;