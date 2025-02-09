"use client";

import {IoIosHeartEmpty, IoIosMore} from "react-icons/io";
import Image from "next/image";

const NukkiFeedComponent = () => {
    return <div
        className={'grid grid-rows-[40px_1fr_100px] items-center justify-center h-[400px] w-screen mb-4'}
    >
        <div
            className={'grid grid-cols-[1fr_50px] h-[40px] w-screen border-primary-black py-1 px-4 border-b-[1px]'}
        >
            <div
                className={'flex items-center space-x-2'}
            >
                <div
                    className={'w-[25px] h-[25px] rounded-full bg-primary-nukki'}
                >

                </div>
                <p
                    className={'text-[12px]'}
                >
                    test_user
                </p>
            </div>
            <div
                className={'flex items-center justify-end'}
            >
                <IoIosMore
                    size={24}
                />
            </div>
        </div>
        <div
            className={'w-screen h-full relative border-b-[1px] border-primary-black'}
        >
            <Image
                src={'/test_image1.jpg'}
                alt={'test_image1'}
                fill
                style={{
                    objectFit: 'contain'
                }}
                loading={'eager'}
            />
        </div>
        <div
            className={'flex flex-col h-[100px] py-2 px-4 space-y-2'}
        >
            <IoIosHeartEmpty
                size={20}
            />
            <div>
                <p
                    className={'text-[12px]'}
                >
                    test test test<br/>
                    test test test test test test test test test...
                </p>
            </div>
            <div>
                <p
                    className={'text-[10px] text-gray-500'}
                >
                    2025.01.01
                </p>
            </div>
        </div>
    </div>
}
export default NukkiFeedComponent;