const linksToReplace = ["styles/timetablejs.css", "styles/demo.css", "timetable.min.js"];

const   injectionElementStart = "<!-- INJECTION ELEMENT START -->", 
        injectionElementEnd = "<!-- INJECTION ELEMENT END -->";

const   scriptTagStart = '<script id="evalThisScript">',
        scriptTagEnd = '</script>';

async function injectTableHTML(){
    // load table html file
    const url = chrome.runtime.getURL('table.html');
    
    let tableFullHTMLFile = await fetch(url);
    let tableHTMLText = await tableFullHTMLFile.text();
    // get text between injectionElementStart and injectionElementEnd
    tableHTMLText = tableHTMLText.substring(tableHTMLText.indexOf(injectionElementStart), tableHTMLText.indexOf(injectionElementEnd));
    // adding element to html
    document.body.innerHTML += tableHTMLText;

    // TODO find better way to go about this
    // force execute script tag
    forceExecuteScriptTags(tableHTMLText);
}
function forceExecuteScriptTags(tableHTMLText){
    let startScriptTagIndex = tableHTMLText.indexOf(scriptTagStart) + scriptTagStart.length;
    let endScriptTagIndex = startScriptTagIndex + tableHTMLText.substring(startScriptTagIndex).indexOf(scriptTagEnd)
    let scriptTagContent = tableHTMLText.substring(
        startScriptTagIndex, endScriptTagIndex
    );
    console.log(scriptTagContent);
    eval(scriptTagContent);
}

injectTableHTML();