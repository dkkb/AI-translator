import {commonManifest} from "./manifest.common";

export const firefoxManifest = () => {
    return {
        ...commonManifest,
        browser_specific_settings: {
            gecko: {
                id: 'openaitranslator@gmail.com',
            },
        },
        background: {
            scripts: ['src/background/index.ts'],
        }
    }
}
