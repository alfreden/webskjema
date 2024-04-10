import { ChangeEvent, useEffect, useState } from 'react'
import './textinput.css'

interface TextInputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    value: string
    name: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    charLength?: number
    helptext?: string
    placeholder ?: string
    error?: string
    valid?: boolean,
    disabled?: boolean,
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({  
    type,
    label,
    value,
    name,
    onChange,
    charLength,
    helptext,
    placeholder = '',
    error = '',
    valid = true,
    disabled,
    onBlur,
}: TextInputProps): JSX.Element => {
    const [showHelpText, setShowHelptext] = useState(false)

    return (
        <div className="inputWrapper">
            <label htmlFor={label}>{label}</label>
            <div className={!valid ? 'inputBox error-outline' : 'inputBox'}>
                <input
                    type={type}
                    id={label}
                    value={value}
                    name={name}
                    maxLength={charLength}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    onBlur={onBlur}
                />
                {helptext && 
                    <button className="helpTextButton" onClick={() => setShowHelptext(!showHelpText)}>{'\u2193'}</button>
                }
            </div>
        {valid &&
            <span className={showHelpText ? 'helpText' : 'spanText'}>
                {helptext}
            </span>
        }
        {!valid &&
            <span className="error">
                {error ? error : `Input field can't be empty`}
            </span>
        }
        </div>
    )
}

export default TextInput;