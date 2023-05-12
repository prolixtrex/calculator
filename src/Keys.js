import React, { useEffect, useState } from 'react'

const Keys = ({ theme, setDisplay }) => {
    const [keyValues, setKeyValues] = useState([0])
    const [operand, setOperand] = useState([])
    const [prevOpp, setPrevOpp] = useState(null)
    const [output, setOutput] = useState(0)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)

    //display numbers as being entered when unless result(value1) is available
    useEffect(() => {
        if (output === 0) {
            setDisplay(value1)
        } else {
            setDisplay(output)
        }
    }, [setDisplay, value1, output])

    //use previous operand when performing continuous calculations
    useEffect(() => {
        setPrevOpp(
            operand.length < 2 ?
                operand[0] :
                operand[operand.length - 1]
        )
    }, [operand, prevOpp])

    const handleClick = (val) => {
        switch (val) {
            case "DEL":
                keyValues.join("") !== "0" && setKeyValues(keyValues.splice(0, (keyValues.length - 1)));
                break;

            case "RESET":
                setKeyValues([0]);
                setValue1(0)
                setDisplay(0)
                break;

            case "EQUAL":
                getEqual(operand)
                break;

            case "ADD":
                handleOperators("ADD");
                break;

            case "SUB":
                handleOperators("SUB");
                break;

            case "DIV":
                handleOperators("DIV");
                break;

            case "MUL":
                handleOperators("MUL");
                break;

            default:
                setOutput(0)
                if (keyValues)
                    setKeyValues([...keyValues, val])
                break;
        }
    }

    const handleOperators = (opp) => {
        setOperand([...operand, opp])
        setKeyValues([])
        compute(prevOpp);
    }

    const getEqual = (opp) => {
        switch (opp[opp.length - 1]) {
            case "ADD":
                setValue1(value1 + value2)
                setOutput(value1 + value2)
                setKeyValues([value1 + value2])
                setValue2(0)
                break;

            case "SUB":
                setValue1(value1 - value2)
                setOutput(value1 - value2)
                setKeyValues([value1 - value2])
                setValue2(0)
                break;
            case "DIV":
                value2 && setValue1(value1 / value2)
                value2 && setOutput(value1 / value2)
                setKeyValues([value1 / value2])
                setValue2(0)
                break;
            case "MUL":
                value2 && setOutput(value1 * value2)
                value2 && setValue1(value1 * value2)
                setKeyValues([value1 * value2])
                setValue2(0)
                break;

            default:

                break;
        }
        setOperand([])
    }

    const compute = (prevOpp) => {
        switch (prevOpp) {
            case "ADD":
                setValue1(value1 + value2)
                setValue2(0)
                setOutput(0)
                break;

            case "SUB":
                setValue1(value1 - value2);
                setValue2(0)
                setOutput(0)
                break;

            case "DIV":
                value2 && setValue1(value1 / value2);
                setValue2(0)
                setOutput(0)
                break;

            default:
                value2 && setValue1(value1 * value2);
                setValue2(0)
                setOutput(0)
                break;
        }
    }

    useEffect(() => {
        if (operand.length === 0) {
            setValue1(parseFloat(keyValues.join("")))
        } else {
            if (keyValues.length === 0) {
                setValue2(0)
            } else {
                setValue2(parseFloat(keyValues.join("")))
                setDisplay(parseFloat(keyValues.join("")))
            }
        }
    }, [keyValues, operand, setDisplay])

    return (
        <section className="keys" style={theme.keypadTog}>
            <button className='key' style={theme.keys} onClick={() => handleClick(7)}>7</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(8)}>8</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(9)}>9</button>
            <button className='key' id='del' style={theme.delReset} onClick={() => handleClick("DEL")}>DEL</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(4)}>4</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(5)}>5</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(6)}>6</button>
            <button className='key' style={theme.keys} onClick={() => handleClick("ADD")}>+</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(1)}>1</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(2)}>2</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(3)}>3</button>
            <button className='key' style={theme.keys} onClick={() => handleClick("SUB")}>-</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(".")}>.</button>
            <button className='key' style={theme.keys} onClick={() => handleClick(0)}>0</button>
            <button className='key' style={theme.keys} onClick={() => handleClick("DIV")}>/</button>
            <button className='key' style={theme.keys} onClick={() => handleClick("MUL")}>x</button>
            <button className='key' id='reset' style={theme.delReset} onClick={() => handleClick("RESET")}>RESET</button>
            <button className='key' id='equal' style={theme.equal} onClick={() => handleClick("EQUAL")}>=</button>
        </section>
    )
}

export default Keys