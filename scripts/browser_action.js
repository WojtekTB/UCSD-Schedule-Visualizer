const linksToReplace = ["styles/timetablejs.css", "styles/demo.css", "timetable.min.js"];

const   injectionElementStart = "<!-- INJECTION ELEMENT START -->", 
        injectionElementEnd = "<!-- INJECTION ELEMENT END -->";

const   scriptTagStart = '<script id="evalThisScript">',
        scriptTagEnd = '</script>';

async function injectTableHTML(scope){
    // load table html file
    const url = chrome.runtime.getURL('table.html');
    
    let tableFullHTMLFile = await fetch(url);
    let tableHTMLText = await tableFullHTMLFile.text();
    // get text between injectionElementStart and injectionElementEnd
    tableHTMLText = tableHTMLText.substring(tableHTMLText.indexOf(injectionElementStart), tableHTMLText.indexOf(injectionElementEnd));
    // adding element to html
    let wrapper = document.createElement("div");
    wrapper.innerHTML = tableHTMLText;
    scope.body.appendChild(wrapper);
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

function getScheduleFromPage(scope){
    let listOfScheduleRows = scope.getElementById("list-id-table").children[0].children;

    // I assume that the list can only ever 
    let classInfo = new Map();
    let currentKey = null;
    for (let i = 0; i < listOfScheduleRows.length; i++) {
        const row = listOfScheduleRows[i];
        const rowCells = row.children;

        const rowSubject = rowCells[0].innerHTML;
        const rowTitle = rowCells[1].innerHTML;
        const rowSectionCode = rowCells[2].innerHTML;
        const rowType = rowCells[3].innerHTML;
        const rowInstructor = rowCells[4].innerHTML;
        const rowGradeOption = rowCells[5].innerHTML;
        const rowUnits = rowCells[6].innerHTML;
        const rowDays = rowCells[7].innerHTML;
        const rowTime = rowCells[8].innerHTML;
        const rowBuilding = rowCells[9].innerHTML;
        const rowRoom = rowCells[10].innerHTML;
        const rowStatus = rowCells[11].innerHTML;
        const rowAction = rowCells[12].innerHTML;
        
        if(rowTitle === "Final Exam"){
            // if final exam row, means this is the end of this subject
            currentKey = null;
            continue;
        }
        // if there is a row title that is not "Final Exam" set it as currentKey
        else if(currentKey === null && rowTitle){
            currentKey = rowSubject;
            classInfo.set(currentKey, {title: rowTitle});
        }

        // if not tracking any subject, just continue
        if(currentKey === null){
            continue;
        }
        
        // process this row
        let classInfoObj = classInfo.get(currentKey);
        classInfoObj.subject = rowSubject;
        classInfoObj.sectionCode = rowSectionCode;
        classInfoObj.type = rowType;
        classInfoObj.instructor = rowInstructor;
        classInfoObj.gradeOption = rowGradeOption;
        classInfoObj.units = rowUnits;
        classInfoObj.building = rowBuilding;
        classInfoObj.room = rowRoom;
        classInfoObj.status = rowStatus;
        classInfoObj.action = rowAction;

        // handle times and days separately

        if(classInfoObj.days === undefined){
            classInfoObj.days = {};
        }
        classInfoObj.days[rowDays] = rowTime;
        // let days = rowDays.split();
        // let timeStart = rowTime.substring(0, rowTime.indexOf("-"));
        // let timeStartHour = parseInt(timeStart.substring(0, timeStart.indexOf(":"))) + (timeStart.substring(timeStart.length - 1)==="a"?0:12)
        // let timeStartMin = parseInt(timeStart.substring(timeStart.indexOf(":")+1, timeStart.length - 1));

        // let timeEnd = rowTime.substring(rowTime.indexOf("-")+1);
        // let timeEndHour = parseInt(timeEnd.substring(0, timeEnd.indexOf(":"))) + (timeEnd.substring(timeStart.length - 1)==="a"?0:12)
        // let timeEndMin = parseInt(timeEnd.substring(timeEnd.indexOf(":")+1, timeEnd.length - 1));
        
        // for (let j = 0; j < days.length; j++) {
        //     const dayCode = days[j];
        //     classInfoObj.days[dayCode] = {
        //         startHour: timeStartHour,
        //         startMin: timeStartMin,
        //         endHour: timeEndHour,
        //         endMin: timeEndMin
        //     }
        // }
    }
    return classInfo;
}

var daysOfWeekCodes = ['M', 'Tu', 'W', 'Th', 'F'];
injectTableHTML(document)
.then(()=>{
    console.log("pulling current schedule..");

    let currentClasses = getScheduleFromPage(document);
    console.log(currentClasses);
    document.body.timetable = new Timetable();
    document.body.timetable.setScope(7,20);
    document.body.timetable.addLocations(daysOfWeekCodes);
    
    
    let keyItterator = currentClasses.keys();
    let value = keyItterator.next().value;
    while(value != undefined){
        let classInfo = currentClasses.get(value);
        let daysKeys = Object.keys(classInfo.days);
        for (let i = 0; i < daysKeys.length; i++) {
            const dayTime = classInfo.days[daysKeys[i]];
            const dayKey = daysKeys[i];
            // console.log(dayKey);

            // split day keys
            let days = dayKey.split("");


            let timeStart = dayTime.substring(0, dayTime.indexOf("-"));
            let timeStartHour = parseInt(timeStart.substring(0, timeStart.indexOf(":")));
            if(timeStart.substring(timeStart.length - 1)==="p" && timeStartHour != 12){
                timeStartHour+=12;
            }
            let timeStartMin = parseInt(timeStart.substring(timeStart.indexOf(":")+1, timeStart.length - 1));

            let timeEnd = dayTime.substring(dayTime.indexOf("-")+1);
            let timeEndHour = parseInt(timeEnd.substring(0, timeEnd.indexOf(":")));
            if(timeEnd.substring(timeEnd.length - 1)==="p" && timeEndHour != 12){
                timeEndHour+=12;
            }
            let timeEndMin = parseInt(timeEnd.substring(timeEnd.indexOf(":")+1, timeEnd.length - 1));
            
            for (let j = 0; j < days.length; j++) {
                let dayCode = days[j];
                // console.log(dayCode);
                if(!daysOfWeekCodes.includes(dayCode)){
                    dayCode += days[j + 1];
                    j++;
                }
                console.log(dayCode + " - " + timeStartHour);
                document.body.timetable.addEvent(
                    value, dayCode, 
                    new Date(2015,7,17,timeStartHour,timeStartMin), 
                    new Date(2015,7,17,timeEndHour, timeEndMin)
                    );
            }

        }
        
        value = keyItterator.next().value;
    }
    
    document.body.renderer = new Timetable.Renderer(document.body.timetable);
    console.log(document.body.renderer);
    document.body.renderer.draw('.timetable');
});    

