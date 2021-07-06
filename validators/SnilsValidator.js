import ncformCommon from '@ncform/ncform-common';

class SnilsValidator extends ncformCommon.ValidationRule {
    constructor(props) {
        super(props);
        this.name = "snils";
        this.defaultErrMsg = "Неправильно указан снилс"
    }

    validateLogic(gps) {
        gps = String(gps).replace(/[^0-9]+/g, '').replace("-", "");
        if( gps.length == 11 ) {
          var checksum = 0;
          for( var i = 0; i < 9; i++ ) {
            checksum += parseInt(gps.charAt(i)) * (9 - i);
          }
          if( checksum > 101 ) {
            checksum = checksum % 101;
          }
          if( checksum == 100 || checksum == 101 ) {
            checksum = 0;
          }
          return checksum == parseInt(gps.substr(9));
        }
        return false;
    }

}

export default SnilsValidator;