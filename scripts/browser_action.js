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
        this.currentSchedulePayloadsMap = new Map();
        this.injectTableHTML(document)
        .then(()=>{
            // create table
            this.createTable(7, 23);
            // set up button events
            this.setUpButtonEvents();
            // sub all clicks to add new events so that we never miss them
            setInterval(this.addHoverEventToNewClassRows, 500);
            // update schedule
            this.updateCurrentSchedule();
            // render with just current schedule
            this.renderTable();
            // console.log(document.body.timetable.events);
        });
    }

    setUpButtonEvents(){
        document.getElementById("UPDATE_SCHEDULE").addEventListener("click", (e)=>{
            document.body.visualizer.updateCurrentSchedule();
            document.body.visualizer.renderTable();
        });
        document.getElementById("HIDE_SCHEDULE").addEventListener("click", (e)=>{
            document.body.visualizer.hideTable();
        });
        document.getElementById("SHOW_SCHEDULE").addEventListener("click", (e)=>{
            document.body.visualizer.showTable();
        });
    }

    hideTable(){
        let table = document.body.timeTableWrapper.children[0].children[0];
        table.style.visibility = "hidden";
        table.style.height = "0";
        table.style.zIndex = "-100";
    }
    showTable(){
        this.renderTable();
        let table = document.body.timeTableWrapper.children[0].children[0];
        table.style.visibility = "";
        table.style.height = "";
        table.style.zIndex = "100";
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
        console.log(document.body.timetable.events);
        const row = event.target;

        const dayCell = row.querySelector('[aria-describedby="search-div-b-table_DAY_CODE"]');
        const timeCell = row.querySelector('[aria-describedby="search-div-b-table_coltime"]');
        const dayTime = timeCell.innerText;
        
        // convert new dates
        let dates = this.textToDates(dayTime);
        let timeStartHour = dates.start.getHours(), timeStartMin = dates.start.getMinutes();
        let timeEndHour = dates.end.getHours(), timeEndMin = dates.end.getMinutes();

        // reset event times to be off screen
        for (let i = 0; i < daysOfWeekCodes.length; i++) {
            const dayCode = daysOfWeekCodes[i];
            this.tempClass.get(dayCode).startDate.setHours(23, 58);
            this.tempClass.get(dayCode).endDate.setHours(23, 59);
        }
        const days = this.textToDays(dayCell.innerText);
        for (let j = 0; j < days.length; j++) {
            let dayCode = days[j];
            // console.log(this.tempClass.get(dayCode));
            this.tempClass.get(dayCode).startDate.setHours(timeStartHour, timeStartMin);
            this.tempClass.get(dayCode).endDate.setHours(timeEndHour, timeEndMin);
            //check if this overlaps with any of current classes
            let overlaps = false;
            if(this.currentSchedulePayloadsMap.has(dayCode)){
                let eventsThatDay = this.currentSchedulePayloadsMap.get(dayCode);
                for (let j = 0; j < eventsThatDay.length; j++) {
                    const event = eventsThatDay[j];
                    const a_start = this.tempClass.get(dayCode).startDate, a_end = this.tempClass.get(dayCode).endDate
                    const b_start = event.dateStart, b_end = event.dateEnd;
                    if(a_start >= b_start && a_start <= b_end || b_start >= a_start && b_start <= a_end){
                        overlaps = true;
                        break;
                    }
                }
            }
            // console.log(overlaps);
            this.tempClass.get(dayCode).options.class = overlaps? "hoveredClassOverlap": "hoveredClass";
        }

        this.renderTable();
    }

    updateCurrentSchedule(){
        // clear time table
        document.body.timetable.events = [];
        document.body.visualizer.addTempClass();
        this.currentSchedulePayloads = [];
        this.currentSchedulePayloadsMap = new Map();
        this.pullCurrentSchedulePayloads();
        for(let i = 0; i < this.currentSchedulePayloads.length; i++){
            let eventInfo = this.currentSchedulePayloads[i];
            document.body.timetable.addEvent(
                eventInfo.subject, eventInfo.day, 
                eventInfo.dateStart, eventInfo.dateEnd
                );
        }
        // check if there are any personal events (non classes)
        let eventsListDiv = document.getElementById("list-id-event");
        if(eventsListDiv === null){
            return;
        }
        if(eventsListDiv.children === null || eventsListDiv.children.length <= 0){
            return;
        }
        for (let i = 0; i < eventsListDiv.children[0].children.length; i++) {
            const eventRow = eventsListDiv.children[0].children[i];
            if(!eventRow.cells[0].innerText){
                // ignore rows where first cell is empty, prob a template that is not actually used
                continue;
            }
            const name = eventRow.cells[0].innerText;
            const dates = this.textToDates(eventRow.cells[2].innerText + "-" + eventRow.cells[3].innerText);
            
            // figure out what days this happens by looking at check boxes
            let days = [];
            const checkboxes = eventRow.cells[4].children[0].children[0].children[1].children;
            for(let i = 0; i < daysOfWeekCodes.length; i++){
                if(checkboxes[i].children[0].checked){
                    days.push(daysOfWeekCodes[i]);
                }
            }

            for(let i = 0; i < days.length; i++){
                // TODO prob should move this to where the initial event obj get populated
                let eventObj = {
                    subject: name, 
                    day: days[i], 
                    dateStart: dates.start, 
                    dateEnd: dates.end
                };
                this.currentSchedulePayloads.push(eventObj);
                if(!this.currentSchedulePayloadsMap.has(days[i])){
                    this.currentSchedulePayloadsMap.set(days[i], []);
                }
                this.currentSchedulePayloadsMap.get(days[i]).push(eventObj);

                document.body.timetable.addEvent(
                    name, days[i], 
                    dates.start, dates.end
                    );
            }
        }
    }

    renderTable(){
        document.body.renderer = new Timetable.Renderer(document.body.timetable);
        document.body.renderer.draw('.timetable');
    }

    createTable(start, end){
        document.body.timetable = new Timetable();
        document.body.timetable.setScope(start,end);
        document.body.timetable.addLocations(daysOfWeekCodes);
    }

    addTempClass(){
        this.tempClass
        let addEventForDay = (day, scope)=>{
            scope.body.timetable.addEvent("Time Slot", day,
            new Date(2015,7,17,23,58),
            new Date(2015,7,17,23,59), 
            {class: "hoveredClass"}
            );
        }
        for (let i = 0; i < daysOfWeekCodes.length; i++) {
            const dayCode = daysOfWeekCodes[i];
            addEventForDay(dayCode, document);
            this.tempClass.set(dayCode, document.body.timetable.events[document.body.timetable.events.length-1]);
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
                let dates = this.textToDates(dayTime);

                for (let j = 0; j < days.length; j++) {
                    let dayCode = days[j];
                    // console.log(dayCode);
                    if(!daysOfWeekCodes.includes(dayCode)){
                        dayCode += days[j + 1];
                        j++;
                    }
                    // console.log(dayCode + " - " + timeStartHour);
                    let eventObj = {
                        subject: value, 
                        day: dayCode, 
                        dateStart: dates.start, 
                        dateEnd: dates.end
                    };
                    this.currentSchedulePayloads.push(eventObj);
                    if(!this.currentSchedulePayloadsMap.has(dayCode)){
                        this.currentSchedulePayloadsMap.set(dayCode, []);
                    }
                    this.currentSchedulePayloadsMap.get(dayCode).push(eventObj);

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
        document.body.timeTableWrapper = wrapper;
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
    
    textToDays(daysText){
        let o = [];
        let days = daysText.split("");
        for (let i = 0; i < days.length; i++) {
            let dayCode = days[i];
            if(!daysOfWeekCodes.includes(dayCode)){
                dayCode += days[i + 1];
                i++;
            }
            o.push(dayCode);
        }
        
        return o;
    }

    textToDates(dateText){
        let timeStart = dateText.substring(0, dateText.indexOf("-"));
        let timeStartHour = parseInt(timeStart.substring(0, timeStart.indexOf(":")));
        if(timeStart.substring(timeStart.length - 1)==="p" && timeStartHour != 12){
            timeStartHour+=12;
        }
        let timeStartMin = parseInt(timeStart.substring(timeStart.indexOf(":")+1, timeStart.length - 1));

        let timeEnd = dateText.substring(dateText.indexOf("-")+1);
        let timeEndHour = parseInt(timeEnd.substring(0, timeEnd.indexOf(":")));
        if(timeEnd.substring(timeEnd.length - 1)==="p" && timeEndHour != 12){
            timeEndHour+=12;
        }
        let timeEndMin = parseInt(timeEnd.substring(timeEnd.indexOf(":")+1, timeEnd.length - 1));
        return {start: new Date(2015,7,17,timeStartHour,timeStartMin), end: new Date(2015,7,17,timeEndHour,timeEndMin)};
    }

    getCurrentScheduleMapFromPage(scope){
        let listOfScheduleRows = scope.getElementById("list-id-table").children[0].children;
    
        // I assume that the list can only ever 
        let classInfo = new Map();
        let currentKey = null;
        for (let i = 0; i < listOfScheduleRows.length; i++) {
            const row = listOfScheduleRows[i];
            const rowCells = row.children;
    
            const rowSubject = rowCells[0].innerText;
            const rowTitle = rowCells[1].innerText;
            const rowSectionCode = rowCells[2].innerText;
            const rowType = rowCells[3].innerText;
            const rowInstructor = rowCells[4].innerText;
            const rowGradeOption = rowCells[5].innerText;
            const rowUnits = rowCells[6].innerText;
            const rowDays = rowCells[7].innerText;
            const rowTime = rowCells[8].innerText;
            const rowBuilding = rowCells[9].innerText;
            const rowRoom = rowCells[10].innerText;
            const rowStatus = rowCells[11].innerText;
            const rowAction = rowCells[12].innerText;
            
            if(rowTitle === "Final Exam" || rowTitle === "Midterm"){
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
        }
        return classInfo;
    }
}


document.body.visualizer = new UCSDScheduleVisualizer();