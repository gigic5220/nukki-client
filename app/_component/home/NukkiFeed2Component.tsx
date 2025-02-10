"use client";

import Image from "next/image";

const NukkiFeed2Component = () => {

    const testImageList = [
        '/test_image1.png',
        '/test_image2.png',
        '/test_image3.png',
        '/test_image4.png',
        '/test_image5.png',
    ]

    return <div
        className={'grid grid-cols-2 w-full justify-center items-center h-[250px] gap-2'}
    >
        <div
            className={'relative w-full h-[100%] rounded-lg border-primary-black border-[1px]'}
        >
            <Image
                src={'/test_image1.png'}
                alt={'test1'}
                fill
                style={{
                    objectFit: 'contain'
                }}
                loading={'eager'}
            />
        </div>
        <div
            className={'relative w-full h-[100%] rounded-lg border-primary-black border-[1px]'}
        >
            <Image
                src={'/test_image2.png'}
                alt={'test2'}
                fill
                style={{
                    objectFit: 'contain'
                }}
                loading={'eager'}
            />
        </div>
    </div>
}
export default NukkiFeed2Component;