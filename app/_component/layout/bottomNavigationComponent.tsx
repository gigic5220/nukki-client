"use client";

import {HiMagnifyingGlass} from "react-icons/hi2";
import {GoHome, GoPerson} from "react-icons/go";
import {IconType} from "react-icons";
import {PiPlusCircleBold} from "react-icons/pi";
import {useState} from "react";
type BottomNavigationItem = {
    key: string
    icon: IconType
}
const BOTTOM_NAVIGATION_ITEMS: BottomNavigationItem[] = [
    {
        key: 'home',
        icon: GoHome
    },
    {
        key: 'search',
        icon: HiMagnifyingGlass
    },
    {
        key: 'add',
        icon: PiPlusCircleBold
    },
    {
        key: 'my',
        icon: GoPerson
    }
]
const BottomNavigationComponent = () => {
    const [selectedBottomNavigationItem, setSelectedBottomNavigationItem] = useState<BottomNavigationItem>(BOTTOM_NAVIGATION_ITEMS[0]);
    const handleClickBottomNavigationItem = (index: number) => {
        setSelectedBottomNavigationItem(BOTTOM_NAVIGATION_ITEMS[index]);
    }
    return <div
        className={`grid grid-cols-4 w-full h-[60px] fixed bottom-0 items-center justify-center bg-primary-orange shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.1)]`}
    >
        {
            BOTTOM_NAVIGATION_ITEMS.map((bottomNavigationItem: BottomNavigationItem, index: number) => (
                <BottomNavigationItemComponent
                    key={index}
                    isSelected={bottomNavigationItem.key === selectedBottomNavigationItem.key}
                    icon={bottomNavigationItem.icon}
                    onClickBottomNavigationItem={() => handleClickBottomNavigationItem(index)}
                />
            ))
        }
    </div>
}
type BottomNavigationItemComponentProps = {
    isSelected: boolean
    icon: IconType
    onClickBottomNavigationItem: () => void
}
const BottomNavigationItemComponent = ({isSelected, icon: Icon, onClickBottomNavigationItem}: BottomNavigationItemComponentProps) => {
    return <div
        className={'flex items-center justify-center cursor-pointer'}
        onClick={onClickBottomNavigationItem}
    >
        <Icon
            className={isSelected ? 'stroke-[0.5px]' : ''}
            size={isSelected ? 35 : 30}
            color={isSelected ? '#FFFFFF' : '#ffaa89'}
        />
    </div>
}
export default BottomNavigationComponent;