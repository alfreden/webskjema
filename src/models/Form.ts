export type Form = {
    registrationNumber: FormObject;
    bonus: FormObject;
    birthNumber: FormObject;
    name: FormObject;
    lastName: FormObject;
    email: FormObject;
}

export type FormObject = {
    value: string;
    valid: boolean;
    touched: boolean;
}

export const emptyForm = {
    registrationNumber: {value: '', valid: true, touched: false}, 
    bonus: {value: '', valid: true, touched: false}, 
    birthNumber: {value: '', valid: true, touched: false}, 
    name: {value: '', valid: true, touched: false}, 
    lastName: {value: '', valid: true, touched: false}, 
    email: {value: '', valid: true, touched: false}, 
}
