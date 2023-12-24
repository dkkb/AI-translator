import browser from 'webextension-polyfill'

browser.contextMenus?.create(
    {
        id: 'open-translator',
        type: 'normal',
        title: 'OpenAI Translator',
        contexts: ['page', 'selection'],
    },
    () => {
        console.log(browser.runtime.lastError)
    }
)

browser.contextMenus?.onClicked.addListener(async function (info) {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true})
    tab.id &&
    browser.tabs.sendMessage(tab.id, {
        type: 'open-translator',
        info,
    })
})
