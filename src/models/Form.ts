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