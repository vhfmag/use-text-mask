import * as React from 'react';
import { vanillaTextMask } from 'vanilla-text-mask';

export function useTextMask(input, options) {
    React.useEffect(function () {
        const handler = input && vanillaTextMask(Object.assign({}, { inputElement: input }, options));

        return function() {
            if (handler) {
                handler.destroy();
            }
        };
    }, [input]);
}