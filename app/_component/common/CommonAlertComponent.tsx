"use client";

import {useAlertStore} from "@/app/_store/alert";
import CommonButtonComponent from "@/app/_component/common/commonButtonComponent";

export default function CommonAlertComponent() {

    const {
        isOpen,
        type,
        titleContent,
        bodyContent,
        onClickConfirmButton,
        onClickCancelButton,
        actions
    } = useAlertStore();

    const handleClickConfirmButton = () => {
        if (!!onClickConfirmButton) {
            onClickConfirmButton();
        }
        actions.resetState();
    }

    const handleClickCancelButton = () => {
        if (!!onClickCancelButton) {
            onClickCancelButton();
        }
        actions.resetState();
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold">
                    {titleContent}
                </h2>
                <p className="mt-2">
                    {bodyContent}
                </p>
                <div
                    className="flex items-center justify-center gap-4"
                >
                    {
                        type === 'confirm' &&
                            <CommonButtonComponent
                                textContent={"취소"}
                                onClick={handleClickCancelButton}
                                className="px-4 py-2 bg-red-500 text-white rounded"
                            />
                    }
                    <CommonButtonComponent
                        textContent={"확인"}
                        onClick={handleClickConfirmButton}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    />
                </div>
            </div>
        </div>
    );
}