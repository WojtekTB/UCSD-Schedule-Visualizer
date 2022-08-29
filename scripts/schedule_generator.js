class ScheduleGenerator {
    constructor() {
        this.currentTerm = null;
        this.courseSearches = new Map();
    }

    // each obj in class list is {department: String, courseNumber: String}
    async generateScheduleFor(classList){
        // make sure that all the course searches are already in the map
        for(let i = 0; i < classList.length; i++){
            if(this.courseSearches.has(classList[i].department + classList[i].courseNumber)){
                // if already have this class searched
                continue;
            }
            let courseSearch = await this.getClassSectionsJSON(classList[i].department, classList[i].courseNumber);
            this.courseSearches.set(classList[i].department + classList[i].courseNumber, courseSearch);
        }
        for(let i = 0; i < classList.length; i++){
            console.log(this.courseSearches.get(classList[i].department + classList[i].courseNumber));
        }
        
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
    // ex: departmentCode: "CSE", courseNumber: "15L" for CSE 15L class
    async getClassSectionsJSON(departmentCode, courseNumber) { 
        return await fetch('https://act.ucsd.edu/webreg2/svc/wradapter/secure/search-by-all?' + new URLSearchParams({
            subjcode: '',
            crsecode: `${departmentCode}: ${courseNumber}`,
            department: departmentCode,
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
}


