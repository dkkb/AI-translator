import browser from 'webextension-polyfill'

browser.contextMenus?.create(
    {
        id: 'ai-translator',
        type: 'normal',
        title: 'AI Translator',
        contexts: ['page', 'selection'],
    },
    () => {
        console.log(browser.runtime.lastError)
    }
)

browser.contextMenus?.onClicked.addListener(async function (info) {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true})
    // if the tab.id not null and proceeds to send a message to the content script associated with the tab.
    tab.id && await browser.tabs.sendMessage(tab.id, {
        type: 'open-translator',
        info,
    })
})
