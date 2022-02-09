export const urlValidationOptional = /^((https?:\/\/)((www\.)?)([a-zA-Z0-9-.]+)\.((com)|(in)|(co.[a-zA-z]{2})|([a-zA-Z]{1,10}))\/([a-zA-Z0-9\?.%=#+&_\/-]+)|)$/
export const urlValidationRequired = /^(https?:\/\/)((www\.)?)([a-zA-Z0-9-.]+)\.((com)|(in)|(co.[a-zA-z]{2})|([a-zA-Z]{1,10}))\/([a-zA-Z0-9\?.%=#+&_\/-]+)$/
export const nameValidationOptional = /^(([a-zA-z][a-zA-Z0-9.+ _-]+)|)$/
export const nameValidationRequired = /^[a-zA-z][a-zA-Z0-9.+ _-]+$/
export const nextTestUri = /^(https?:\/\/)([0-9.]+)\/([a-zA-z0-9.#]+)/
export const durationValidation = /^\d{1,4}$/
export const numberValidationRequired = /^([1-9][0-9]?|1[0-7][0-9]|180)$/
export const numberValidaitonOptional = /^(([1-9][0-9]?|1[0-7][0-9]|180)|)$/