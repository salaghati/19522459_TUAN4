import {useState} from 'react'
import './App.css'
import FormExample0 from './FormExample0.jsx'
import FormExamplel from './FormExamplel'
import ShowData from './ShowData'

const onSubmit = (v) =>
    alert ('Submit value : '  + JSON .stringify(v , null, 2))

export default function Ex16 () {
    const [formFields , setFormFields] = useState({}) 
    const [errors, setErrors ] = useState({})
    const [valid , setValid ] = useState()
    const [firstForm, setFirstForm ] = useState(true)

return (
<div className="App">
    <nav>
        <select
            onChange={(evt) =>
                setFirstForm (evt.target .value === 'first ')
            }
        >
            <option value="first">Single field</option>
            <option value="second">Multiple fields</option>
        </select>
    </nav>
    <main>
        {firstForm ? (
            <FormExample0 
                onChange={(ff, v, e) => {
                setFormFields(ff)
                setValid (v) 
                setErrors(e)
            }}
            onSubmit={onSubmit}
            initialValue={{
                filed1: 'Some stuff',
            }}
            />
        ) : (
            <FormExamplel
                    onChange={(ff, v, e) => {
                    setFormFields(ff)
                    setValid (v) 
                    setErrors(e)
                }}
                onSubmit={onSubmit}
                initialValue={{
                    filed1: '1 Main Street',
                }}
            />
        )}

        <ShowData
            formFields={formFields}
            errors={errors}
            valid={valid}
        />
    </main>
</div>
)
}