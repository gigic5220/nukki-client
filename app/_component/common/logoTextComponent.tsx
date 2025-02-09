"use client";

import {CommonCssProps} from "@/app/_type/common";
import {fontSizeProperty} from "@/app/_constants/constants";

export default function LogoTextComponent({fontSize}: CommonCssProps) {

    return <p
        className={`font-bold ${fontSizeProperty[fontSize ?? 32]} text-primary-nukki`}
    >
        NUKKI
    </p>
}