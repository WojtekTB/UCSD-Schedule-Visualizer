class ScheduleGenerator {
    constructor() {
        this.currentTerm = null;
        this.courseSearches = new Map();
        this.courseInfoJson = null;
        this.generateScheduleFor([{SUBJ_CODE:"CSE", CRSE_CODE:"15L"}, {SUBJ_CODE:"CSE", CRSE_CODE:"101"}]);
    }

    // each obj in class list is {department: String, courseNumber: String}
    async generateScheduleFor(classList){
        // make sure that all the course searches are already in the map
        let courses = await this.getAllClassSectionsJSON();
        console.log(courses);
        for(let i = 0; i < classList.length; i++){
            let classId = classList[i].SUBJ_CODE + classList[i].CRSE_CODE;
            if(!this.courseSearches.has(classId)){
                this.courseSearches.set(classId, []);
            }

            //TODO turn this to binary search since courses are alphabetically sorted
            for(let j = 0; j < courses.length; j++){
                if(courses[j]["SUBJ_CODE"].trim() !== classList[i].SUBJ_CODE){
                    continue;
                }
                if(courses[j]["CRSE_CODE"].trim() !== classList[i].CRSE_CODE){
                    continue;
                }
                this.courseSearches.get(classId).push(courses[j]);
            }
        }

        // sorted courses we wanted to the map
        console.log(this.courseSearches);
        
        // create every possible class combo
    }

    // taken from webreg-main-min.js?v=19 in webreg page
    getCurrentTerm() { 
        // cache currentTerm first time and reuse if needed
        if (this.currentTerm === null) { 
            let locationSubString = window.location.search.substring(1);
            let splitLocation = locationSubString.split("&");
            for (let i = 0; i < splitLocation.length; i++) {
                let locationSection = splitLocation[i].split("=");
                if (locationSection[0] == "p1") {
                    this.currentTerm = locationSection[1];
                    break;
                }
            }
        }
        return this.currentTerm;
    }

    // modified example from https://github.com/SheepTester/hello-world/blob/master/test/ucsd-brute-force-schedules.js
    async getAllClassSectionsJSON() { 
        if(this.courseInfoJson === null){
            this.courseInfoJson = await fetch('https://act.ucsd.edu/webreg2/svc/wradapter/secure/search-by-all?' + new URLSearchParams({
                subjcode: '',
                crsecode: '',
                department: '',
                professor: '',
                title: '',
                levels: '',
                days: '',
                timestr: '',
                opensection: false,
                isbasic: true,
                basicsearchvalue: '',
                termcode: this.getCurrentTerm()
            })).then(r => r.json());
        }
        return this.courseInfoJson;
    }
}

new ScheduleGenerator();
