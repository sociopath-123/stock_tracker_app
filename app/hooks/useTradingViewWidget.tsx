'use client';
import  {useEffect, useRef} from 'react';

const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {
   const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(
        () => {
            if(!containerRef.current) return; // if ref is not attached yet
            if(containerRef.current.dataset.loaded) return;  // when component is remounted, it should not load the script again
            // which means it is already loaded(the widget is already there)

            containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`
                // what does this script do? it loads the tradingview widget
            // Deep explanation is that .innerHTML is a property of an HTML element that allows you to get or set the HTML content inside that element as a string.


            const script = document.createElement("script");
            script.src = scriptUrl;
            script.async = true;
            script.innerHTML = JSON.stringify(config);


            containerRef.current.appendChild(script);
            containerRef.current.dataset.loaded = 'true';
            return () => {
                if(containerRef.current) {
                    containerRef.current.innerHTML = '';
                    delete containerRef.current.dataset.loaded;
                }
            }

        },
        [scriptUrl, config, height]
    );


    return containerRef;
}
export default useTradingViewWidget
