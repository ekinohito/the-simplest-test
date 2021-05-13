import React, {useContext} from 'react'
import {PowerContext, ValuesContext} from "./MultiStep";
import {Button, Card, Radio, RadioGroup} from "@material-ui/core";


export default function QuestionChoice({title, question, children, onInput, error}) {
    const power = useContext(PowerContext) || false
    const [allSelected, setAllSelected] = useContext(ValuesContext)
    const selected = allSelected[title]
    const setSelected = (value) => setAllSelected({...allSelected, [title]: value})
    return <Card style={{padding: "20px"}}>
        <h2>{title}</h2>
        <p>{question}</p>
        <RadioGroup aria-label="gender" name="gender1">
            {
                children.map((value, index) => <div key={index}>
                    <Radio value={value} checked={index === selected} disabled={power} onClick={() => {
                        setSelected(index)
                    }}/> {value}
                </div>)
            }
        </RadioGroup>
        <Button disabled={power || selected === undefined} onClick={onInput}>Ввести</Button>
        <p>{error}</p>
    </Card>
}