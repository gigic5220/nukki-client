"use client";

import {ChangeEvent, useState} from "react";
import CommonButtonComponent from "@/app/_component/common/commonButtonComponent";
import CommonInputComponent from "@/app/_component/common/commonInputComponent";
import {usePostNukkiImageMutation} from "@/app/_queries/hooks/nukkiImage";
import {useAlertActions} from "@/app/_store/alert";
import Image from "next/image";
import {produce} from "immer";

type NukkiImageViewModel = {
    file: File;
    fileUrl: string;
    name: string;
    description: string;
    isPublic: boolean;
}

export default function NukkiImageAddPage() {
    const {openModal} = useAlertActions();

    const [nukkiImageViewModelList, setNukkiImageViewModelList] = useState<NukkiImageViewModel[]>([]);

    const [selectedNukkiImageViewModelIndex, setSelectedNukkiImageViewModelIndex] = useState<number | null>(null);

    const handleChangeNukkiImageViewModelName = (value: string) => {
        if (
            selectedNukkiImageViewModelIndex == null ||
            selectedNukkiImageViewModelIndex < 0 ||
            selectedNukkiImageViewModelIndex >= nukkiImageViewModelList.length
        ) return;

        setNukkiImageViewModelList( prev =>
            produce(
                prev,
                (draft: NukkiImageViewModel[]) => {
                    draft[selectedNukkiImageViewModelIndex].name = value;
                }
            )
        );
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const fileList = Array.from(event.target.files);

            const tempViewModelList: NukkiImageViewModel[] = fileList.map((file: File, index: number) => {

                const currentIndex = nukkiImageViewModelList.length + index;

                return {
                    file,
                    fileUrl: URL.createObjectURL(file),
                    name: `누끼 이미지 ${currentIndex + 1}`,
                    description: '',
                    isPublic: true,
                };
            });

            setNukkiImageViewModelList( prev =>
                produce(
                    prev,
                    (draft: NukkiImageViewModel[]) => {
                        draft.push(...tempViewModelList);
                    }
                )
            );
        }
    };

    const postNukkiImageMutation = usePostNukkiImageMutation({
        onSuccessAction: () => {
            openModal({
                type: 'alert',
                titleContent: '확인',
                bodyContent: '누끼 이미지가 추가 되었어요'
            });
        }
    });

    const handleClickSubmitButton = async () => {
        if (!nukkiImageViewModelList.length) {
            alert("추가한 누끼가 없어요!");
            return;
        }

        const formData = new FormData();

        nukkiImageViewModelList.forEach((nukkiImageViewModel: NukkiImageViewModel) => {
            formData.append("file", nukkiImageViewModel.file);
        })

        const nukkiImageInfoList = nukkiImageViewModelList.map((nukkiImageViewModel: NukkiImageViewModel) => {
            return {
                name: nukkiImageViewModel.name,
                description: nukkiImageViewModel.description,
                isPublic: nukkiImageViewModel.isPublic
            }
        });

        formData.append("nukkiImageInfoListJsonDto", JSON.stringify(nukkiImageInfoList));

        postNukkiImageMutation.mutate(formData);
    };



    return (
        <div className="grid grid-rows-[1fr_50px] p-[24px] h-full">
            <div
                className={'grid grid-rows-[1fr_100px] gap-10'}
            >
                <div
                    className={'grid grid-rows-[1fr_50px] gap-4'}
                >
                    <div
                        className={`flex justify-center items-start border-2 border-secondary-nukki h-full rounded-lg cursor-pointer relative p-2`}
                    >
                        {
                            nukkiImageViewModelList.length ? (
                                    <div
                                        className={'grid grid-cols-3 w-full'}
                                    >
                                        {
                                            nukkiImageViewModelList.map((nukkiImageViewModel: NukkiImageViewModel, index) => {
                                                return (
                                                    <div
                                                        key={`${nukkiImageViewModel.file.name}-${nukkiImageViewModel.file.lastModified}`}
                                                        className={`flex justify-center items-center border-2 ${selectedNukkiImageViewModelIndex === index ? 'border-primary-green' : 'border-primary-white'} w-full h-[150px] rounded-lg cursor-pointer p-2`}
                                                    >
                                                        <div
                                                            className={'w-full h-full relative'}
                                                            onClick={() => setSelectedNukkiImageViewModelIndex(index)}
                                                        >
                                                            <Image
                                                                src={nukkiImageViewModel.fileUrl}
                                                                alt={'nukki_image_file'}
                                                                fill
                                                                style={{
                                                                    objectFit: 'contain'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                ) :
                                <label
                                    htmlFor={`input_file`}
                                    className={`flex items-center justify-center w-full h-full`}
                                >
                                    <p
                                        className={'text-primary-nukki text-[24px]'}
                                    >
                                        + 이미지 추가하기
                                    </p>
                                </label>
                        }
                    </div>
                    <label
                        htmlFor={`input_file`}
                        className={`flex items-center justify-center w-full h-[50px] border-2 border-secondary-nukki rounded-full cursor-pointer relative p-2`}
                    >
                        <p
                            className={'text-primary-nukki text-[24px]'}
                        >
                            + 이미지 추가하기
                        </p>
                    </label>
                </div>
                {
                    selectedNukkiImageViewModelIndex != null &&
                    <div
                        className={'flex flex-col mb-10'}
                    >
                        <CommonInputComponent
                            value={nukkiImageViewModelList[selectedNukkiImageViewModelIndex]?.name || ''}
                            onChange={handleChangeNukkiImageViewModelName}
                            placeholder={'누끼 이름을 입력해 주세요'}
                        />
                    </div>
                }
            </div>
            <CommonButtonComponent
                textContent={'누끼 추가하기'}
                onClick={handleClickSubmitButton}
                disabled={nukkiImageViewModelList.length === 0}
            />
            <input
                id={`input_file`}
                multiple
                type="file"
                accept="image/*"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleFileChange(event)}
                hidden
            />
        </div>
    );
}