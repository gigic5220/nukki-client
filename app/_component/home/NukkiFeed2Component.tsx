"use client";

import Image from "next/image";
import {IoIosHeart} from "react-icons/io";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {HiViewGrid} from "react-icons/hi";

const NukkiFeed2Component = () => {


    return <div
        className={'grid grid-cols-2 w-full justify-center items-center h-[250px] gap-2'}
    >
        <TestItemComponent/>
        <TestItemComponent/>
    </div>
}
export default NukkiFeed2Component;

const TestItemComponent = () => {

    const testImageList = [
        '/test_image1.png',
        '/test_image2.png',
        '/test_image3.png',
        '/test_image4.png',
        '/test_image5.png',
    ]

    return <div
        className={'flex flex-col w-full h-[100%] rounded-lg border-primary-gray border-[1px] p-2'}
    >
        <div
            className={'flex items-center space-x-2 justify-between'}
        >
            <div
                className={'flex items-center justify-center gap-2'}
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
        </div>
        <div
            className={'w-full h-[100%]'}
        >
            <Swiper
                slidesPerView={1}
            >
                {
                    testImageList.map((slide) => (
                        <SwiperSlide key={slide}>
                            <div
                                className={'w-full h-[150px] relative'}
                            >
                                <Image
                                    src={slide}
                                    alt={slide}
                                    fill
                                    style={{
                                        objectFit: 'contain'
                                    }}
                                    loading={'eager'}
                                />
                                <div
                                    className={'absolute bottom-2 right-2'}
                                >
                                    {/*<IoIosHeartEmpty
                                            size={30}
                                        />*/}
                                    <IoIosHeart
                                        size={30}
                                        color={'red'}
                                    />
                                </div>
                                <div
                                    className={'absolute top-1 right-1'}
                                >
                                    <p
                                        className={'text-primary-gray text-[12px]'}
                                    >
                                        1 / 10
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div
            className={'flex items-center justify-end'}
        >
            <div
                className={'border-[0.5px] border-primary-black rounded-full p-[4px] bg-primary-black'}
            >
                <HiViewGrid
                    size={20}
                    color={'white'}
                />
            </div>
        </div>
    </div>
}