import ncformCommon from '@ncform/ncform-common';

class OgrnipValidator extends ncformCommon.ValidationRule {
    constructor(props) {
        super(props);
        this.name = "ogrnip";
        this.defaultErrMsg = "Не правильно указан ОГРНИП"
    }

    validateLogic(ogrn) {
        ogrn = String(ogrn)
        if(ogrn.length == 15 && (ogrn.slice(14,15) == ((ogrn.slice(0,-1))%13 + '').slice(-1))){
            return true;
        }

        return false
    }

}

export default OgrnipValidator;