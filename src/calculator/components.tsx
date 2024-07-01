import React from 'react'
import { useAtom } from 'jotai'
// useAtom : 상태 값과 업데이트 함수 모두 필요할 때.
// useStateAtom : 업데이트 함수만 필요할 때.
// 상태 값 정의는 atom() 사용
import { speedAtom } from './speed'
import { numberAtom } from './number'

const roundNumber = (x: number, y: number) => Number(x.toFixed(y))

export function ConvertFromMPS() {
    const [speed] = useAtom(speedAtom)
    const [number] = useAtom(numberAtom)

    const mps = roundNumber(speed, number)
    const kmh = roundNumber(speed * 3.6, number)
    const mph = roundNumber(speed * 2.23694, number)
    const fps = roundNumber(speed * 3.28084, number)
    const kt = roundNumber(speed * 1.94384, number)

    return (
        <div>
            <p>미터 매 초: {mps} m/s</p>
            <p>킬로미터 매 시간: {kmh} km/h</p>
            <p>시간당 마일: {mph} mph</p>
            <p>초당 피트: {fps} ft/s</p>
            <p>노트: {kt} kt</p>
        </div>
    )
}

export function ConvertFromKMH() {
    const [speed] = useAtom(speedAtom)
    const [number] = useAtom(numberAtom)

    const kmh = roundNumber(speed, number)
    const mps = roundNumber(speed / 3.6, number)
    const mph = roundNumber(speed / 1.60934, number)
    const fps = roundNumber(speed * 0.911344, number)
    const kt = roundNumber(speed / 1.852, number)

    return (
        <div>
            <p>킬로미터 매 시간: {kmh} km/h</p>
            <p>미터 매 초: {mps} m/s</p>
            <p>시간당 마일: {mph} mph</p>
            <p>초당 피트: {fps} ft/s</p>
            <p>노트: {kt} kt</p>
        </div>
    )
}

export function ConvertFromMPH() {
    const [speed] = useAtom(speedAtom)
    const [number] = useAtom(numberAtom)

    const mps = roundNumber(speed / 2.23694, number)
    const kmh = roundNumber(speed * 1.60934, number)
    const mph = roundNumber(speed, number)
    const fps = roundNumber(speed * 1.46667, number)
    const kt = roundNumber(speed / 1.15078, number)

    return (
        <div>
            <p>시간당 마일: {mph} mph</p>
            <p>미터 매 초: {mps} m/s</p>
            <p>킬로미터 매 시간: {kmh} km/h</p>
            <p>초당 피트: {fps} ft/s</p>
            <p>노트: {kt} kt</p>
        </div>
    )
}

export function ConvertFromFPS() {
    const [speed] = useAtom(speedAtom)
    const [number] = useAtom(numberAtom)

    const mps = roundNumber(speed / 3.28084, number)
    const kmh = roundNumber(speed * 1.09728, number)
    const mph = roundNumber(speed / 1.46667, number)
    const kt = roundNumber(speed / 1.68781, number)
    const fps = roundNumber(speed, number)

    return (
        <div>
            <p>초당 피트: {fps} ft/s</p>
            <p>미터 매 초: {mps} m/s</p>
            <p>킬로미터 매 시간: {kmh} km/h</p>
            <p>시간당 마일: {mph} mph</p>
            <p>노트: {kt} kt</p>
        </div>
    )
}

export function ConvertFromKT() {
    const [speed] = useAtom(speedAtom)
    const [number] = useAtom(numberAtom)

    const mps = roundNumber(speed / 1.94384, number)
    const kmh = roundNumber(speed * 1.852, number)
    const mph = roundNumber(speed * 1.15078, number)
    const fps = roundNumber(speed * 1.68781, number)
    const kt = roundNumber(speed, number)

    return (
        <div>
            <p>노트: {kt} kt</p>
            <p>미터 매 초: {mps} m/s</p>
            <p>킬로미터 매 시간: {kmh} km/h</p>
            <p>시간당 마일: {mph} mph</p>
            <p>초당 피트: {fps} ft/s</p>
        </div>
    )
}
