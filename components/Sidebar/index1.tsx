'use client'
import React, { useEffect } from 'react'
import { ResizablePanel } from '@/components/ui/resizable'
import { useState, useRef } from 'react'
export default function index() {
    const panelRef = useRef<HTMLDivElement>(null);
    const [isSideBarOpen, setisSideBarOpen] = useState(true);
    const [panelSize, setPanelSize] = useState(20);
    const toggleSidebar = () => {
        setisSideBarOpen(!isSideBarOpen)
    }
    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width } = entry.contentRect;
                console.log(width)
                if (width < 7) {
                    setisSideBarOpen(false)
                }
                setPanelSize(width);

            }
        });

        if (panelRef.current) {
            resizeObserver.observe(panelRef.current);
        }

        return () => {
            if (panelRef.current) {
                resizeObserver.unobserve(panelRef.current);
            }
        };
    },);
    if (!isSideBarOpen)
        return (
            <>
                <ResizablePanel defaultSize={5} >
                    <div ref={panelRef} className="flex h-full items-center justify-center p-6" onClick={toggleSidebar}>
                        Sidebar
                    </div>
                </ResizablePanel>
            </>
        )

    else {
        return (
            <ResizablePanel defaultSize={10} className='min-w-4' style={{ minWidth: "20px" }}>
                <div ref={panelRef} className="flex h-full items-center min-w-5 justify-center p-6">
                    <button onClick={toggleSidebar}>Close</button>
                    <br />
                    <br />
                    Sidebar
                </div>
            </ResizablePanel>
        );
    }

}
