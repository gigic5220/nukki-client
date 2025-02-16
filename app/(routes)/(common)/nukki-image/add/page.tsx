"use client";

import {useRef, useState} from "react";
import {PiPlusCircle} from "react-icons/pi";
import CommonButtonComponent from "@/app/_component/common/commonButtonComponent";
import CommonInputComponent from "@/app/_component/common/commonInputComponent";
import useInput from "@/app/_component/common/useInput";
import {usePostNukkiImageMutation} from "@/app/_queries/hooks/nukkiImage";
import {useAlertActions} from "@/app/_store/alert";

export default function NukkiImageAddPage() {
    const {openModal} = useAlertActions();

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedNukkiImageFile, setSelectedNukkiImageFile] = useState<File | null>(null);
    const [name, onChangeName] = useInput('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedNukkiImageFile(event.target.files[0]);
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
        if (!selectedNukkiImageFile) {
            alert("파일을 선택해주세요.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedNukkiImageFile);
        formData.append("dto", JSON.stringify({
            name: 'test',
            description: 'test',
            isPublic: true
        }));

        postNukkiImageMutation.mutate(formData);
    };

    const handleClickAddNukkiImageButton = () => {
        fileInputRef.current?.click();
    }

    return (
        <div className="flex flex-col p-[24px] gap-4">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                hidden
            />
            <div
                className={'flex items-center justify-center mb-10'}
            >
                <div
                    className={'flex justify-center items-center border-2 border-secondary-nukki w-[200px] h-[200px] rounded-lg cursor-pointer'}
                    onClick={handleClickAddNukkiImageButton}
                >
                    <PiPlusCircle
                        size={32}
                        color={'#ff9467'}
                    />
                </div>
            </div>
            <div
                className={'flex flex-col mb-10'}
            >
                <p>
                    누끼 이름을 입력해 주세요
                </p>
                <CommonInputComponent
                    value={name}
                    onChange={onChangeName}
                />
            </div>
            <CommonButtonComponent
                textContent={'추가하기'}
                onClick={handleClickSubmitButton}
            />
        </div>
    );
}