import React from 'react'
import { useAtom } from 'jotai'
import { speedAtom } from './speed'
import { numberAtom } from './number'
import { useState } from 'react'
import {
    ConvertFromFPS,
    ConvertFromKMH,
    ConvertFromKT,
    ConvertFromMPH,
    ConvertFromMPS,
} from './components'

export default function Middle() {
    const [speed, setSpeed] = useAtom(speedAtom)
    const [number, setNumber] = useAtom(numberAtom)
    const [unit, setUnit] = useState('m/s')

    const clearInputs = () => {
        setSpeed(0)
        setNumber(0)
    }

    return (
        <div className="mt-5 flex-col ml-3 ">
            <p className="text-3xl font-extrabold">계산기</p>
            <br />
            <p className="text-3xl font-semibold">
                속도를 입력하고 단위를 선택하십시오.
            </p>
            <br />
            <input
                type="number"
                style={{
                    width: '256px',
                    height: '42px',
                    border: '2px solid black',
                    borderRadius: '4px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                }}
                value={speed}
                onChange={(e) => {
                    const value = parseFloat(e.target.value)
                    setSpeed(value)
                }}
            />
            <br />
            <br />
            <select
                style={{
                    width: '256px',
                    height: '42px',
                    border: '2px solid black',
                    borderRadius: '4px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                }}
                value={unit}
                onChange={(e) => {
                    setUnit(e.target.value)
                }}
            >
                <option value="km/h">km/h</option>
                <option value="m/s">m/s</option>
                <option value="mph">mph</option>
                <option value="kt">kt</option>
                <option value="fps">fps</option>
            </select>
            <br />
            <br />
            <br />
            <div>
                소수점
                <input
                    type="number"
                    style={{
                        width: '102px',
                        height: '42px',
                        border: '2px solid black',
                        borderRadius: '4px',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        marginLeft: '10px',
                        marginRight: '10px',
                    }}
                    value={number}
                    onChange={(e) => {
                        const value = parseInt(e.target.value)
                        setNumber(value)
                    }}
                />
                자리로 반올림
            </div>
            <br />
            <br />
            <div className="flex-row">
                <button
                    style={{
                        width: '62px',
                        height: '32px',
                        border: '2px solid black',
                        borderRadius: '4px',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        marginRight: '50px',
                        backgroundColor: 'gray',
                    }}
                >
                    계산
                </button>
                <button
                    style={{
                        width: '62px',
                        height: '32px',
                        border: '2px solid black',
                        borderRadius: '4px',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        marginLeft: '50px',
                        backgroundColor: 'gray',
                    }}
                    onClick={clearInputs}
                >
                    삭제
                </button>
            </div>
            <br />
            <br />
            {
                <div>
                    {unit == 'm/s' && <ConvertFromMPS />}
                    {unit == 'km/h' && <ConvertFromKMH />}
                    {unit == 'mph' && <ConvertFromMPH />}
                    {unit == 'fps' && <ConvertFromFPS />}
                    {unit == 'kt' && <ConvertFromKT />}
                </div>
            }
        </div>
    )
}
