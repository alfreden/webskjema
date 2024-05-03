import { ChangeEvent, useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/textinput";
import './bilforsikring.css'
import { isNullOrWhitespace } from "../../_utils/textHandling";
import { Form, emptyForm } from "../../models/Form";
import CenteredMessage from "../../components/modal";

const Bilforsikring = (): JSX.Element => {
    const [inputValues, setInputValues] = useState<Form>(emptyForm);
    const [successMessage, setSuccessMessage] = useState(false);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, validity } = event.target;
        const keyTyped = name as keyof typeof inputValues;
        const isTouched = inputValues[keyTyped].touched;
        const isValid = 
            validity.valid &&
            (!isNullOrWhitespace(value) && value !== '');
            setInputValues({ ...inputValues, [name]: {
                value: value,
                valid: isValid,
                touched: isTouched,
            }
        });
    };

    const handleOnBlur = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const keyTyped = name as keyof typeof inputValues;
        const isValid = value !== '';
        setInputValues({ ...inputValues,
            [name]: {
                valid: isValid,
                value: inputValues[keyTyped].value,
                touched: true,
            }
        });
    };

    const checkIfDirty = () => {
        let shouldSend = true;
        const entriesWithErrors = Object.entries(inputValues).map((key) => {
            const formObject = key[1];
            if(!formObject.valid || formObject.value === '') {
                shouldSend = false;
                key[1].valid = false;
            }
            return key;
        });
        const entriesToObject = Object.fromEntries(entriesWithErrors);
        setInputValues(entriesToObject as Form);
        return shouldSend;
    }

    const clearInputFields = () => {
        const entriesWithErrors = Object.entries(inputValues).map((key) => {
            key[1].value = '';
            return key;
        });
        const entriesToObject = Object.fromEntries(entriesWithErrors);
        setInputValues(entriesToObject as Form);
    }

    const submit = () => {
        const shouldSubmit = checkIfDirty()
        if(shouldSubmit){
            setSuccessMessage(!successMessage)
        }        
    }

    if(successMessage){
        return (
            <CenteredMessage show={successMessage} setIsOpen={setSuccessMessage} > 
                <div className="pageContainer">
                    <h1>Gratulerer</h1>
                    <b>Du har vunnet 100 000 000 kr!</b>
                    <p>Beløp blir utbetalt direkte til denne nettsidens skaper.</p>
                </div>
            </CenteredMessage>
        )
    }

    return (
    <div className="pageContainer">
        <h1>Kjøp Bilforsikring</h1>
        
        <p>
            Det er fire forskjellige forsikringer å velge mellom.<br/>
            Ansvarsforikring er lovpålagt om kjøretøyet er registrert og skal <br/>
            brukes på veien. I tilleg kan du utvide forsikringen avhengig av<br />
            hvor gammel bil din er og hvordan du bruker den.<br />
        </p>
        <div className="formContainer">
            <TextInput 
                type="text"
                name="registrationNumber" 
                error={'Registreringsnummer kan ikke være tomt'} 
                label="Bilens registreringsnummer" 
                placeholder="E.G AB 12345"
                charLength={8}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                valid={inputValues.registrationNumber.valid}
                value={inputValues.registrationNumber.value} 
                />
            <TextInput 
                type="number"
                name="bonus" 
                error={'Bonus feltet kan ikke være tomt'} 
                label="Din bonus"
                placeholder="Placeholder"
                helptext="Hjelpetekst/feilmeldingstekst"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                valid={inputValues.bonus.valid}
                value={inputValues.bonus.value} 
                />
            <TextInput 
                type="text"
                name="birthNumber" 
                error={'Fødselsnummer må fylles inn'} 
                label="Fødselsnummer" 
                placeholder="11 siffer"
                charLength={11}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                valid={inputValues.birthNumber.valid}
                value={inputValues.birthNumber.value}
                />
        </div>
        <div className="nameContainer">
            <TextInput 
                type="text"
                name="name" 
                error={'Fornavn må fylles inn'} 
                valid={inputValues.name.valid}
                label="Fornavn" 
                placeholder="" 
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                value={inputValues.name.value} 
                />
            <TextInput 
                type="text"
                name="lastName" 
                error={'Etternavn må fylles inn'} 
                label="Etternavn" 
                placeholder="" 
                onChange={handleOnChange} 
                onBlur={handleOnBlur}
                valid={inputValues.lastName.valid}
                value={inputValues.lastName.value} 
                />
        </div>
        <div className="formContainer">
        <TextInput 
                type="email"
                name="email" 
                error={'Du må skrive inn en gyldig epost adresse'} 
                label="E-post" 
                placeholder="alfred@gmail.com" 
                onChange={handleOnChange} 
                onBlur={handleOnBlur}
                valid={inputValues.email.valid}
                value={inputValues.email.value} 
                />
        </div>
        <div className="buttonContainer">
            <Button variant="filled" label="Beregn pris" onClick={() => submit()} />
            <Button label="Avbryt" onClick={() => clearInputFields()} />
        </div>
    </div>
    
  )
}

export default Bilforsikring;