This library provides additional validation rules for ncform

## Installation

```
npm i ncform-gtn-validators
```

## Usage 

To add this library to ncform just register rules

```

import rules from 'ncform-gtn-validators'
Vue.use(vueNcform, { extRules: rules });

```

Describe validation options in rule section of property

```
    rules: {
        snils: {
            value: true,
            errMsg: "validation error"
        }
    }

```

## Features

At this momments library provides only snils and inn validators, but you are free to add some more

## Contribution

1. Copy this repositorty
2. Create new branch
3. Extend ValidationRule class
```
# myCustomRule.js

import ncformCommon from '@ncform/ncform-common';

class MyCustomRule extends ncformCommon.ValidationRule {

  constructor(props) {
    super(props);
    this.name = 'myCustom'; // your rule name
    this.defaultErrMsg = 'yeah, show my custom rule message'; // you rule default error message tips
  }

  validateLogic(val, ruleVal) {
    // val: the input value for validating
    // ruleVal: rule's value. example: {maxLength: {value: 1}}, the ruleVal's value here is 1  
    // You can change the error message programmatically by setting this.errMsg. (e.g. this.errMsg = 'There are some errors')
    // You can use this.$http to make some http request (this.$http is the same as axios)
    return true;
    // or return new Promise(resolve => resolve(true))
  }

}

export default MyCustomRule;
```
4. Add new class to rules array in index.js
```
    const extRules = [
        {inn: innValidator},
        {snils: snilsValidator},
        {custom: MyCustomRule} // like that
    ]
```

5. Create pull request