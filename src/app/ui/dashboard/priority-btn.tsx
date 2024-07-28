'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

interface PriorityBtnProps {
    currentPriority: number;
    setPriority: (newPriority: number) => void;
    titleInputRef: React.RefObject<HTMLInputElement>;
}

const PriorityBtn: React.FC<PriorityBtnProps> = ({ currentPriority, setPriority, titleInputRef }) => {

    // toggle the priority tooltip
    const [showPriorityTooltip, setShowPriorityTooltip] = useState(false);
    const togglePriorityTooltip = (e: React.FormEvent) => {
        e.preventDefault();
        setShowPriorityTooltip((prevState) => !prevState);
    };

    // handle priority selection
    const [selectedPriority, setSelectedPriority] = useState<string>('P4');
    const handlePrioritySelection = (priority: string) => {
        setSelectedPriority(priority);
        switch (priority) {
            case 'P1':
                setPriority(1);
                break;
            case 'P2':
                setPriority(2);
                break;
            case 'P3':
                setPriority(3);
                break;
            case 'P4':
                setPriority(4);
                break;
            default:
                setPriority(4);
                break;
        }
        setShowPriorityTooltip(false);
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }
    };


    // to close the tooltip when clicked outside
    const priorityTooltipRef = useRef<HTMLDivElement>(null);



    // to close the tooltip when clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                priorityTooltipRef.current &&
                !priorityTooltipRef.current.contains(event.target as Node)
            ) {
                setShowPriorityTooltip(false);
            }
        };

        if (showPriorityTooltip) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPriorityTooltip]);

    return (
        <div className="mx-1 items-start z-auto">
            <button
                className="flex justify-evenly items-center w-20 h-6 bg-[#1e1e1e] hover:bg-[#262626] py-1 rounded-md border-2 border-gray-700 text-gray-400 text-sm"
                onClick={togglePriorityTooltip}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); // Prevent opening tooltip on Enter
                    }
                }}
            >
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path fill="currentColor" fillRule="evenodd" d="M2 3a.5.5 0 0 1 .276-.447C3.025 2.179 4.096 2 5.5 2c.901 0 1.485.135 2.658.526C9.235 2.885 9.735 3 10.5 3c1.263 0 2.192-.155 2.776-.447A.5.5 0 0 1 14 3v6.5a.5.5 0 0 1-.276.447c-.749.375-1.82.553-3.224.553-.901 0-1.485-.135-2.658-.526C6.765 9.615 6.265 9.5 5.5 9.5c-1.08 0-1.915.113-2.5.329V13.5a.5.5 0 0 1-1 0V3Zm1 5.779v-5.45C3.585 3.113 4.42 3 5.5 3c.765 0 1.265.115 2.342.474C9.015 3.865 9.599 4 10.5 4c1.002 0 1.834-.09 2.5-.279v5.45c-.585.216-1.42.329-2.5.329-.765 0-1.265-.115-2.342-.474C6.985 8.635 6.401 8.5 5.5 8.5c-1.001 0-1.834.09-2.5.279Z" clipRule="evenodd"></path>
                </svg> */}
                {currentPriority !== 4 ? `P${currentPriority}` : 'Priority'}
            </button>
            {/* Tooltip code here if needed */}
            {showPriorityTooltip && (
                <div
                    ref={priorityTooltipRef}
                    className="absolute bg-[#262626] text-white py-2 px-0 rounded-md mt-2 w-32">
                    <div
                        className={`px-4 cursor-pointer hover:bg-[#363636] ${selectedPriority === 'P1' ? 'text-gray-400' : ''
                            }`}
                        onClick={() => handlePrioritySelection('P1')}
                    >
                        P1
                    </div>
                    <div
                        className={`px-4 cursor-pointer hover:bg-[#363636] ${selectedPriority === 'P2' ? 'text-gray-400' : ''
                            }`}
                        onClick={() => handlePrioritySelection('P2')}
                    >
                        P2
                    </div>
                    <div
                        className={`px-4 cursor-pointer hover:bg-[#363636] ${selectedPriority === 'P3' ? 'text-gray-400' : ''
                            }`}
                        onClick={() => handlePrioritySelection('P3')}
                    >
                        P3
                    </div>
                    <div
                        className={`px-4 cursor-pointer hover:bg-[#363636] ${selectedPriority === 'P4' ? 'text-gray-400' : ''
                            }`}
                        onClick={() => handlePrioritySelection('P4')}
                    >
                        P4
                    </div>
                </div>
            )}
        </div>
    );
};

export default PriorityBtn;
