import React from 'react'
import Middle from '@/calculator/middle'

export default function Calculator() {
    return (
        <>
            <div
                id="header"
                className="flex justify-between text-white h-14 bg-blue-900 font-extrabold text-3xl"
            >
                <p className="mt-2 ml-2 hover:cursor-pointer">CALCULATOR</p>
                <div className="flex gap-2">
                    <svg
                        className="mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        height="40px"
                        viewBox="0 -960 960 960"
                        width="40px"
                        fill="#FFFFFF"
                    >
                        <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
                    </svg>
                    <p className="mt-2 mr-2 hover:cursor-pointer">메뉴</p>
                </div>
            </div>
            <div className="mt-5 flex-col ml-3">
                <p>단위 환산 *속도*</p>
                <br />
                <p className="text-3xl font-extrabold">속도 단위 환산</p>
                <br />
                <p>
                    * 이 계산기는 미터법, 영미, 기타 속도 단위를 환산해 줍니다.
                </p>
            </div>
            <Middle />
        </>
    )
}
