const linksToReplace = ["styles/timetablejs.css", "styles/demo.css", "timetable.min.js"];

const   injectionElementStart = "<!-- INJECTION ELEMENT START -->", 
        injectionElementEnd = "<!-- INJECTION ELEMENT END -->";

const   scriptTagStart = '<script id="evalThisScript">',
        scriptTagEnd = '</script>';

const daysOfWeekCodes = ['M', 'Tu', 'W', 'Th', 'F'];

class UCSDScheduleVisualizer{
    constructor(){
        // this is what defines the class that temporarily shows up when you hover
        this.tempClass = new Map();
        this.currentSchedulePayloads = [];
        this.injectTableHTML(document)
        .then(()=>{
            // create table
            this.createTable(7, 23);
            // sub all clicks to add new events so that we never miss them
            setInterval(this.addHoverEventToNewClassRows, 500);
            // update schedule
            this.updateCurrentSchedule();
            // render with just current schedule
            this.renderTable([]);
            // console.log(document.body.timetable.events);
        });
    }

    addHoverEventToNewClassRows(){
        let searchDataRows = document.getElementsByClassName("wr-search-group-data-row");
        for (let i = 0; i < searchDataRows.length; i++) {
            const dataRow = searchDataRows[i];
            if(!dataRow.gotEventAttatched){
                dataRow.gotEventAttatched = true;
                dataRow.addEventListener("mouseenter", (event)=>document.body.visualizer.whenHoverOverRow(event), false);
            }
        }
    }

    whenHoverOverRow(event){
        const row = event.target;
        // console.log(event);
        const dayCell = row.querySelector('[aria-describedby="search-div-b-table_DAY_CODE"]');
        const days = dayCell.innerHTML.split("");
        const timeCell = row.querySelector('[aria-describedby="search-div-b-table_coltime"]');
        const dayTime = timeCell.innerHTML;
        // console.log(dayCell.innerHTML + " -> " + timeCell.innerHTML);
        // console.log(this.tempClass);
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
        for (let i = 0; i < daysOfWeekCodes.length; i++) {
            const dayCode = daysOfWeekCodes[i];
            this.tempClass.get(dayCode).startDate.setHours(23, 58);
            this.tempClass.get(dayCode).endDate.setHours(23, 59);
        }
        for (let j = 0; j < days.length; j++) {
            let dayCode = days[j];
            if(!daysOfWeekCodes.includes(dayCode)){
                dayCode += days[j + 1];
                j++;
            }
            this.tempClass.get(dayCode).startDate.setHours(timeStartHour, timeStartMin);
            this.tempClass.get(dayCode).endDate.setHours(timeEndHour, timeEndMin);
        }

        this.renderTable();
    }

    updateCurrentSchedule(){
        // clear time table
        // document.body.timetable.events = [];
        this.currentSchedulePayloads = [];
        this.pullCurrentSchedulePayloads();
        for(let i = 0; i < this.currentSchedulePayloads.length; i++){
            let eventInfo = this.currentSchedulePayloads[i];
            document.body.timetable.addEvent(
                eventInfo.subject, eventInfo.day, 
                eventInfo.dateStart, eventInfo.dateEnd
                );
        }
    }

    renderTable(payloadsToDraw){
        // first add the current schedule payloads
        
        // now render payloads passed in

        document.body.renderer = new Timetable.Renderer(document.body.timetable);
        document.body.renderer.draw('.timetable');
    }

    createTable(start, end){
        document.body.timetable = new Timetable();
        document.body.timetable.setScope(start,end);
        document.body.timetable.addLocations(daysOfWeekCodes);
        this.addTempClass();
    }

    addTempClass(){
        let addEventForDay = (day, scope)=>{
            scope.body.timetable.addEvent("Time Slot", day,
            new Date(2015,7,17,23,58),
            new Date(2015,7,17,23,59), 
            {class: "hoveredClass"}
            );
            this.tempClass.set(day, scope.body.timetable.events[scope.body.timetable.events.length-1])
        }
        for (let i = 0; i < daysOfWeekCodes.length; i++) {
            const dayCode = daysOfWeekCodes[i];
            addEventForDay(dayCode, document);
        }
    }

    pullCurrentSchedulePayloads(){
        console.log("pulling current schedule..");
        let currentClasses = this.getCurrentScheduleMapFromPage(document);
        console.log(currentClasses);
        
        let keyItterator = currentClasses.keys();
        let value = keyItterator.next().value;
        while(value != undefined){
            let classInfo = currentClasses.get(value);
            let daysKeys = Object.keys(classInfo.days);
            for (let i = 0; i < daysKeys.length; i++) {
                const dayTime = classInfo.days[daysKeys[i]];
                const dayKey = daysKeys[i];
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
                    // console.log(dayCode + " - " + timeStartHour);
                    this.currentSchedulePayloads.push({
                        subject: value, 
                        day: dayCode, 
                        dateStart: new Date(2015,7,17,timeStartHour,timeStartMin), 
                        dateEnd: new Date(2015,7,17,timeEndHour, timeEndMin)
                    });
                }
    
            }
            
            value = keyItterator.next().value;
        }
    }

    async injectTableHTML(scope){
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

    forceExecuteScriptTags(tableHTMLText){
        let startScriptTagIndex = tableHTMLText.indexOf(scriptTagStart) + scriptTagStart.length;
        let endScriptTagIndex = startScriptTagIndex + tableHTMLText.substring(startScriptTagIndex).indexOf(scriptTagEnd)
        let scriptTagContent = tableHTMLText.substring(
            startScriptTagIndex, endScriptTagIndex
        );
        console.log(scriptTagContent);
        eval(scriptTagContent);
    }
    
    getCurrentScheduleMapFromPage(scope){
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
}


document.body.visualizer = new UCSDScheduleVisualizer();