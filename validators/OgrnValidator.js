import ncformCommon from '@ncform/ncform-common';

class OgrnValidator extends ncformCommon.ValidationRule {
    constructor(props) {
        super(props);
        this.name = "ogrn";
        this.defaultErrMsg = "Не правильно указан ОГРН"
    }

    validateLogic(ogrn) {
        ogrn = String(ogrn)
        if(ogrn.length == 13 && (ogrn.slice(12,13) == ((ogrn.slice(0,-1))%11 + '').slice(-1))) {
            return true;
        }

        return false
    }

}

export default OgrnValidator;