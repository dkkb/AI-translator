export function commonManifest(): chrome.runtime.Manifest {
    return {
        manifest_version: 3,
        name: 'AI Translator',
        description: `AI-Translator is a browser extension that uses LLM AI.`,
        version: '0.1.0',
        icons: {
            '16': 'icon.png',
            '32': 'icon.png',
            '48': 'icon.png',
            '128': 'icon.png',
        },
        options_ui: {
            page: 'src/options.html',
            open_in_tab: true,
        },
        action: {
            default_icon: 'icon.png',
            default_popup: 'src/popup.html',
        },
        content_scripts: [
            {
                matches: ['<all_urls>'],
                all_frames: true,
                match_about_blank: true,
                js: ['src/content_script.tsx'],
            },
        ],
        background: {
            service_worker: 'src/background.ts',
        },
        permissions: ['storage', 'contextMenus'],
        commands: {
            'open-popup': {
                suggested_key: {
                    default: 'Ctrl+Shift+Y',
                    mac: 'Command+Shift+Y',
                },
                description: 'Open the popup',
            },
        },
        host_permissions: [
            'https://*.openai.com/',
            'https://*.openai.azure.com/',
            'https://*.ingest.sentry.io/',
            '*://speech.platform.bing.com/',
            'https://*.googletagmanager.com/',
            'https://*.google-analytics.com/',
            'https://*.minimax.chat/',
            'https://*.githubusercontent.com/',
            'https://*.baidu.com/',
            'https://api-edge.cognitive.microsofttranslator.com/',
            'https://*.microsoft.com/',
            'https://*.google.com/',
            'https://*.googleapis.com/',
        ],
    };
}
