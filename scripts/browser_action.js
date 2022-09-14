const linksToReplace = ["styles/timetablejs.css", "styles/demo.css", "timetable.min.js"];

const   injectionElementStart = "<!-- INJECTION ELEMENT START -->", 
        injectionElementEnd = "<!-- INJECTION ELEMENT END -->";

const   scriptTagStart = '<script id="evalThisScript">',
        scriptTagEnd = '</script>';

const daysOfWeekCodes = ['M', 'Tu', 'W', 'Th', 'F'];

const mapURLStarter = "https://www.google.com/maps/dir/";
const buildingToMapCode = {
    "TBA":  "",
    "EBU3B": "Computer+Science+and+Engineering+Building",
    "TM102":	"102+Marshall+College",
    "APM":	"Applied+Physics+and+Mathematics+Building",
    "CT":	"Catalyst+Building",
    "CENTR":	"Center+Hall",
    "CSB":	"Cognitive+Science+Building",
    "CICC":	"Copley+International+Conference+Center",
    "GH":	"Galbraith+Hall",
    "HSS":	"Humanities+and+Social+Sciences+Building",
    "LEDDN":	"Humanities+and+Social+Sciences+Building",
    "MANDE":	"Mandeville+Auditorium",
    "MCGIL":	"McGill+Hall",
    "MOS":	"UCSD+Craft+Center",
    "PCYNH":	"Pepper+Canyon+Hall,+La+Jolla,+CA+92093",
    "PETER":	"UCSD+Peterson+Hall",
    "PRICE":	"Price+Center+at+UCSD",
    "RWAC":	"North+Torrey+Pines+Living+%26+Learning+Neighborhood",
    "RBC":	"Robinson+Auditorium",
    "SEQUO":	"Sequoyah+Hall",
    "SSB":	"Social+Sciences+Building",
    "SOLIS":	"Faustina+Solis+Lecture+Hall",
    "GA":	"The+Jeannie",
    "WLH":	"Warren+Lecture+Hall,+San+Diego,+CA",
    "YORK":	"York+Hall,+San+Diego,+CA+92161",
    "CPMC":	"Conrad+Prebys+Music+Center",
    "CTL":	"Catalyst+Building,+San+Diego,+CA+92037",
    "DIB":	"Design+%26+Innovation+Building"
}

class UCSDScheduleVisualizer{
    constructor(){
        // this is what defines the class that temporarily shows up when you hover
        this.hoveredTimeSlotDisplays = []; // holds objects that represent time slots that get displayed when you hover over a class
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
            // this.getScheduleMapLinkForDay("M");
        });
    }

    getScheduleMapLinkForDay(dayCode){
        // TODO not efficient to redo this every time, make this get cached
        // TODO better to actually reuse the code made for the actual schedule scan but too lazy to figure out how to generisize, maybe later
        let currentClasses = this.getCurrentScheduleMapFromPage(document);

        let dayToLocationsMap = new Map();

        // itterate through each class and map (day) -> (list of class locations)
        let classItterator = currentClasses.keys();
        let classKey = classItterator.next().value;
        let classObj = currentClasses.get(classKey);
        while(classObj != undefined){
            // split to list of days
            console.log(classObj);
            console.log(classObj.days)
            let allDaysWithLocations = Object.keys(classObj.days);
            
            for(let i = 0; i < allDaysWithLocations.length; i++){
                let timeAndBuilding = classObj.days[allDaysWithLocations[i]];

                // go through every time the class has something going on
                let individualDays = this.textToDays(allDaysWithLocations[i]);
                for(let j = 0; j < individualDays.length; j++){
                    if(!dayToLocationsMap.has(individualDays[j])){
                        dayToLocationsMap.set(individualDays[j], []);
                    }
                    
                    // add to list for that day
                    dayToLocationsMap.get(individualDays[j]).push(timeAndBuilding);
                }
            }
            
            classKey = classItterator.next().value;
            classObj = currentClasses.get(classKey);
        }

        // got all days sorted out with the events of the day
        console.log(dayToLocationsMap);
        
        if(!dayToLocationsMap.has(dayCode)){
            alert("No events that day!");
            return;
        }

        let eventsThatDay = dayToLocationsMap.get(dayCode);

        eventsThatDay.sort((a, b) => {
            const aDates = this.textToDates(a.time);
            const bDates = this.textToDates(b.time);
            if (aDates.start < bDates.start) {
              return -1;
            }
            if (aDates.start > bDates.start) {
              return 1;
            }
            return 0;
          });

        console.log(eventsThatDay);

        //build the map link
        let mapLink = mapURLStarter;
        let knownLocations = Object.keys(buildingToMapCode);
        for(let i = 0; i < eventsThatDay.length; i++){
            if(knownLocations.includes(eventsThatDay[i].building)){
                mapLink += buildingToMapCode[eventsThatDay[i].building] + "+SAN+DIEGO/";
            }
            else{
                mapLink += eventsThatDay[i].building + "+SAN+DIEGO/";
            }
        }
        console.log(mapLink);
        window.open(mapLink, "_blank");
    }

    createNewTimeSlotDisplay(){
        // add an event to be displayed
        document.body.timetable.addEvent("Time Slot", daysOfWeekCodes[0],
        new Date(2015,7,17,23,58),
        new Date(2015,7,17,23,59), 
        {class: "unusedClass"} // make it hidden by default
        );
        let timeSlotObj = document.body.timetable.events[document.body.timetable.events.length - 1];
        // add that event obj and add it to the 
        this.hoveredTimeSlotDisplays.push(timeSlotObj);
        return timeSlotObj;
    }

    getUnusedTimeSlotDisplay(){
        for(let i = 0; i < this.hoveredTimeSlotDisplays.length; i++){
            if(this.hoveredTimeSlotDisplays[i].options.class === "unusedClass"){
                return this.hoveredTimeSlotDisplays[i];
            }
        }
        return this.createNewTimeSlotDisplay();
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


        document.getElementById("M").addEventListener("click", (e)=>{
            document.body.visualizer.getScheduleMapLinkForDay("M");
        });
        document.getElementById("Tu").addEventListener("click", (e)=>{
            document.body.visualizer.getScheduleMapLinkForDay("Tu");
        });
        document.getElementById("W").addEventListener("click", (e)=>{
            document.body.visualizer.getScheduleMapLinkForDay("W");
        });
        document.getElementById("Th").addEventListener("click", (e)=>{
            document.body.visualizer.getScheduleMapLinkForDay("Th");
        });
        document.getElementById("F").addEventListener("click", (e)=>{
            document.body.visualizer.getScheduleMapLinkForDay("F");
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
                dataRow.addEventListener("mouseleave", (event)=>document.body.visualizer.whenEndHoverOverRow(event), false);
            }
        }
    }

    hideAllTimeSlotDisplays(){
        for (let i = 0; i < this.hoveredTimeSlotDisplays.length; i++) {
            this.hoveredTimeSlotDisplays[i].options.class = "unusedClass";
        }
    }

    whenEndHoverOverRow(event){
        this.hideAllTimeSlotDisplays();
        this.renderTable();
    }

    whenHoverOverRow(event){
        // find all rows that relate to the hovered class
        const hoveredRow = event.target;
        // look for id cell in the hovered row
        const hoveredRowSectionNumberCell = hoveredRow.querySelector('[aria-describedby="search-div-b-table_SECTION_NUMBER"]');

        if(!hoveredRowSectionNumberCell){
            // can't parse row
            return;
        }

        const rowSectionNumber = hoveredRowSectionNumberCell.innerText;
        const rowId = parseInt(hoveredRow.id);
        
        // look for all the rows with such id in the table
        let allClassTableRows = [hoveredRow];
        const table = hoveredRow.parentElement;
        // look for related rows below
        let lookUpId = rowId + 1;
        let lookUpRow = table.querySelector(`[id="${lookUpId}"]`);
        while (lookUpRow) {
            const lookUpRowSectionNumberCell = lookUpRow.querySelector('[aria-describedby="search-div-b-table_SECTION_NUMBER"]');
            if(!lookUpRowSectionNumberCell){
                // does not have section number cell
                break;
            }
            if(lookUpRowSectionNumberCell.innerText == rowSectionNumber){
                // has the same id, thus add it to the row
                allClassTableRows.push(lookUpRow);
            }
            else{
                break;
            }

            // increment to next row
            lookUpId++;
            lookUpRow = table.querySelector(`[id="${lookUpId}"]`);
        }
        // look for related rows below
        lookUpId = rowId - 1
        lookUpRow = table.querySelector(`[id="${lookUpId}"]`);
        while (lookUpRow) {
            const lookUpRowSectionNumberCell = lookUpRow.querySelector('[aria-describedby="search-div-b-table_SECTION_NUMBER"]');
            if(!lookUpRowSectionNumberCell){
                // does not have section number cell
                break;
            }
            if(lookUpRowSectionNumberCell.innerText == rowSectionNumber){
                // has the same id, thus add it to the row
                allClassTableRows.push(lookUpRow);
            }
            else{
                break;
            }

            // increment to next row
            lookUpId--;
            lookUpRow = table.querySelector(`[id="${lookUpId}"]`);
        }
        
        // reset event times to be off screen
        this.hideAllTimeSlotDisplays();

        // console.log(allClassTableRows);
        for (let i = 0; i < allClassTableRows.length; i++) {
            const row = allClassTableRows[i];
            const dayCell = row.querySelector('[aria-describedby="search-div-b-table_DAY_CODE"]');
            const timeCell = row.querySelector('[aria-describedby="search-div-b-table_coltime"]');
            const dayTime = timeCell.innerText;
            
            // convert new dates
            let dates = this.textToDates(dayTime);
            let timeStartHour = dates.start.getHours(), timeStartMin = dates.start.getMinutes();
            let timeEndHour = dates.end.getHours(), timeEndMin = dates.end.getMinutes();

            
            const days = this.textToDays(dayCell.innerText);
            for (let j = 0; j < days.length; j++) {
                let dayCode = days[j];

                let freeTimeSlotDisplay = this.getUnusedTimeSlotDisplay();
                
                //set day
                freeTimeSlotDisplay.location = dayCode;

                //set hours
                freeTimeSlotDisplay.startDate.setHours(timeStartHour, timeStartMin);
                freeTimeSlotDisplay.endDate.setHours(timeEndHour, timeEndMin);
                //check if this overlaps with any of current classes
                let overlaps = false;
                if(this.currentSchedulePayloadsMap.has(dayCode)){
                    let eventsThatDay = this.currentSchedulePayloadsMap.get(dayCode);
                    for (let j = 0; j < eventsThatDay.length; j++) {
                        const event = eventsThatDay[j];
                        const a_start = freeTimeSlotDisplay.startDate, a_end = freeTimeSlotDisplay.endDate
                        const b_start = event.dateStart, b_end = event.dateEnd;
                        if(a_start >= b_start && a_start <= b_end || b_start >= a_start && b_start <= a_end){
                            overlaps = true;
                            break;
                        }
                    }
                }
                // console.log(overlaps);
                freeTimeSlotDisplay.options.class = overlaps? "hoveredClassOverlap": "hoveredClass";
            }
        }

        this.renderTable();
    }

    updateCurrentSchedule(){
        // clear time table
        document.body.timetable.events = [];
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
                const dayTime = classInfo.days[daysKeys[i]].time;
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

    getCurrentScheduleMapFromPage(){
        let listOfScheduleRows = document.getElementById("list-id-table").children[0].children;
    
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
            // if we are already tracking some class but now found row that is not "Final Exam" or "Midterm"
            else if(currentKey !== null && rowTitle){
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
            // classInfoObj.building = rowBuilding;
            classInfoObj.room = rowRoom;
            classInfoObj.status = rowStatus;
            classInfoObj.action = rowAction;
    
            // handle times and days separately
    
            if(classInfoObj.days === undefined){
                classInfoObj.days = {};
            }
            classInfoObj.days[rowDays] = {time: rowTime, building: rowBuilding};
        }
        return classInfo;
    }
}


document.body.visualizer = new UCSDScheduleVisualizer();