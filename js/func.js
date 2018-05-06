// ##########DEBUGGING FUNCTIONS#############

// used in debugging with chrome development tools. 
function CheckData() {
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
}
// Export data in debugging tools section
function ExportData() {
	var ReportData = localStorage.getItem("ReportData");
	document.getElementById("ExportData").value = ReportData;
}
// Import data in debugging tools section
function ImportData() {
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	localStorage.setItem("ReportDataBackup", JSON.stringify(ReportData));
	ReportData = document.getElementById("ImportData").value;
	localStorage.setItem("ReportData", ReportData);
	document.getElementById("ImportData").value = "";
	SetAttr(false);
	DefineOptions();
	ClearWorkCache();
	DefineClients();
}
// revert to backed up data in debugging tools section
function RevertData() {

	if("ReportDataBackup" in localStorage) {
		var ReportDataBackup = JSON.parse(localStorage.getItem("ReportDataBackup"));
		localStorage.setItem("ReportData", JSON.stringify(ReportDataBackup));
		localStorage.removeItem("ReportDataBackup");
		SetAttr(false);
		DefineOptions();
		ClearWorkCache();
		DefineClients();
	} else {
		alert("No Data Backedup Data");
		return false;
	}
}

// ##########NONE CATAGORIZED FUNCTIONS############# DONE WORKING

//Sets all Event listeners 
function SetEventListeners() {

	// ##### TOGGLE ME #####

	document.getElementById("inputSEOData").addEventListener("click", function() {
		ToggleMe(document.getElementById("inputSEOData").id);
	}, false);

	document.getElementById("inputAdWordsData").addEventListener("click", function() {
		ToggleMe(document.getElementById("inputAdWordsData").id);
	}, false);

	document.getElementById("inputBlogData").addEventListener("click", function() {
		ToggleMe(document.getElementById("inputBlogData").id);
	}, false);
	document.getElementById("workPerformed").addEventListener("click", function() {
		ToggleMe(document.getElementById("workPerformed").id);
	}, false);
	document.getElementById("setWorkOptions").addEventListener("click", function() {
		ToggleMe(document.getElementById("setWorkOptions").id);
	}, false);
	document.getElementById("setPerformanceOptions").addEventListener("click", function() {
		ToggleMe(document.getElementById("setPerformanceOptions").id);
	}, false);
	document.getElementById("setPPCOptions").addEventListener("click", function() {
		ToggleMe(document.getElementById("setPPCOptions").id);
	}, false);
	document.getElementById("setServiceOptions").addEventListener("click", function() {
		ToggleMe(document.getElementById("setServiceOptions").id);
	}, false);
	document.getElementById("help").addEventListener("click", function() {
		ToggleMe(document.getElementById("help").id);
	}, false);


	// ##### UPDATE WORK NOTES #####

	// Set Event Listeners for set Options section : Passing parameter of Element -> On Change
	document.getElementById("SchemaNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("SchemaNotes"));
	}, false);

	document.getElementById("DentistSchemaNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("DentistSchemaNotes"));
	}, false);

	document.getElementById("ReviewsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("ReviewsNotes"));
	}, false);

	document.getElementById("AggrReviewSchemaNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("AggrReviewSchemaNotes"));
	}, false);

	document.getElementById("YelpNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("YelpNotes"));
	}, false);

	document.getElementById("RichCardsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("RichCardsNotes"));
	}, false);

	document.getElementById("InternalLinkingNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("InternalLinkingNotes"));
	}, false);

	document.getElementById("301RedirectsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("301RedirectsNotes"));
	}, false);

	document.getElementById("BrokenLinksNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("BrokenLinksNotes"));
	}, false);

	document.getElementById("KeywordPhrasesNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("KeywordPhrasesNotes"));
	}, false);

	document.getElementById("KeywordDensityNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("KeywordDensityNotes"));
	}, false);

	document.getElementById("CompetitiveAnalysisNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("CompetitiveAnalysisNotes"));
	}, false);

	document.getElementById("CompetitiveSEOKeyphrasesNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("CompetitiveSEOKeyphrasesNotes"));
	}, false);

	document.getElementById("BlogsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("BlogsNotes"));
	}, false);

	document.getElementById("ContentNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("ContentNotes"));
	}, false);

	document.getElementById("FreshContentNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("FreshContentNotes"));
	}, false);

	document.getElementById("CononicalNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("CononicalNotes"));
	}, false);

	document.getElementById("IndexingNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("IndexingNotes"));
	}, false);

	document.getElementById("AltTextNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("AltTextNotes"));
	}, false);

	document.getElementById("TitleTagsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("TitleTagsNotes"));
	}, false);

	document.getElementById("MetaDescriptionNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("MetaDescriptionNotes"));
	}, false);

	document.getElementById("MetaKeywordsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("MetaKeywordsNotes"));
	}, false);

	document.getElementById("HTagsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("HTagsNotes"));
	}, false);

	document.getElementById("BingNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("BingNotes"));
	}, false);

	document.getElementById("GMBNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("GMBNotes"));
	}, false);

	document.getElementById("DataAggregatorsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("DataAggregatorsNotes"));
	}, false);

	document.getElementById("GMBAppointmentURLNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("GMBAppointmentURLNotes"));
	}, false);

	document.getElementById("GMBServicesURLNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("GMBServicesURLNotes"));
	}, false);

	document.getElementById("GMBPostsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("GMBPostsNotes"));
	}, false);

	document.getElementById("VideoSEONotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("VideoSEONotes"));
	}, false);

	document.getElementById("RobotstxtNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("RobotstxtNotes"));
	}, false);

	document.getElementById("SitemapNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("SitemapNotes"));
	}, false);

	document.getElementById("PageLoadingTimeNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("PageLoadingTimeNotes"));
	}, false);

	document.getElementById("PhoneTrackingNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("PhoneTrackingNotes"));
	}, false);

	document.getElementById("WordPressUpdateNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("WordPressUpdateNotes"));
	}, false);

	document.getElementById("UpdatedPluginsNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("UpdatedPluginsNotes"));
	}, false);

	document.getElementById("WorkAdditionalNotes").addEventListener("change", function() {
		UpdateStoredData(document.getElementById("WorkAdditionalNotes"));
	}, false);


	// ##### UPDATE PERFOMANCE NOTES #####

	document.getElementById("GoogleAlgorithmChangeNotes").addEventListener("change", function() {
		UpdateStoredPerformanceData(document.getElementById("GoogleAlgorithmChangeNotes"));
	}, false);

	document.getElementById("TrendsNotes").addEventListener("change", function() {
		UpdateStoredPerformanceData(document.getElementById("TrendsNotes"));
	}, false);

	document.getElementById("PerformanceAdditionalNotes").addEventListener("change", function() {
		UpdateStoredPerformanceData(document.getElementById("PerformanceAdditionalNotes"));
	}, false);

	// ##### UPDATE PPC NOTES #####

	document.getElementById("PPCNotes").addEventListener("change", function() {
		UpdateStoredPPCData(document.getElementById("PPCNotes"));
	}, false);

	// ##### UPDATE SERVICES AND OTHER NOTES #####

	document.getElementById("OnlineAppointmentsNotes").addEventListener("change", function() {
		UpdateStoredServiceData(document.getElementById("OnlineAppointmentsNotes"));
	}, false);

	document.getElementById("ORGNotes").addEventListener("change", function() {
		UpdateStoredServiceData(document.getElementById("ORGNotes"));
	}, false);

	document.getElementById("HealthgradesNotes").addEventListener("change", function() {
		UpdateStoredServiceData(document.getElementById("HealthgradesNotes"));
	}, false);

	document.getElementById("ServicesNotes").addEventListener("change", function() {
		UpdateStoredServiceData(document.getElementById("ServicesNotes"));
	}, false);

	document.getElementById("PhotoRequestNotes").addEventListener("change", function() {
		UpdateStoredOtherData(document.getElementById("PhotoRequestNotes"));
	}, false);

	document.getElementById("CommentsNotes").addEventListener("change", function() {
		UpdateStoredOtherData(document.getElementById("CommentsNotes"));
	}, false);

	document.getElementById("ContactNotes").addEventListener("change", function() {
		UpdateStoredOtherData(document.getElementById("ContactNotes"));
	}, false);

	// ##### DEBUGGING #####
	document.getElementById("CheckDataBtn").addEventListener("click", CheckData);
	document.getElementById("ExportDataBtn").addEventListener("click", ExportData);
	document.getElementById("ImportDataBtn").addEventListener("click", ImportData);
	document.getElementById("RevertDataBtn").addEventListener("click", RevertData);

	// ##### NO PASSED PARAMETERS

	document.getElementById("processData").addEventListener("click", ProcessData);
	document.getElementById("clearDataCache").addEventListener("click", ClearDataCache);
	document.getElementById("clients").addEventListener("change", UpdateSelectedIndex);
	document.getElementById("prevClient").addEventListener("click", PrevClient);
	document.getElementById("nextClient").addEventListener("click", NextClient);
	document.getElementById("clearWorkCache").addEventListener("click", ClearWorkCache);
	document.getElementById("clearCheckedOptionalCache").addEventListener("click", ClearCheckedOptionsCache);
	document.getElementById("clearAllOptionalCache").addEventListener("click", ClearAllOptionsCache);
	document.getElementById("load").addEventListener("click", LoadClient);
	document.getElementById("workPerformedField").addEventListener("click", NewTask);
	document.getElementById("clearPerformanceNotes").addEventListener("click", ClearPerformanceNotes);
	document.getElementById("clearPPCNotes").addEventListener("click", ClearPPCNotes);
	document.getElementById("clearServiceOtherNotes").addEventListener("click", ClearServiceOtherNotes);
}

// Check if saved Report Data in localStorage
function CreationOfArray() {

	// If NOT ReportData in localStorage -> Create empty Array of Objects and save it to localStorage
	if(!("ReportData" in localStorage)) {
		var ReportData = [
			{
				"ClientsData" : [],
				"SEOObj" : [],
				"AdWordsObj" : [],
				"BlogObj" : [],
				"WorkObj" : [],
				"WorkMessageObj" : [
					{
						"SchemaNotes" : "",
						"DentistSchemaNotes" : "",
						"ReviewsNotes" : "",
						"AggrReviewSchemaNotes" : "",
						"YelpNotes" : "",
						"RichCardsNotes" : "",
						"InternalLinkingNotes" : "",
						"301RedirectsNotes" : "",
						"BrokenLinksNotes" : "",
						"KeywordPhrasesNotes" : "",
						"KeywordDensityNotes" : "",
						"CompetitiveAnalysisNotes" : "",
						"CompetitiveSEOKeyphrasesNotes" : "",
						"BlogsNotes" : "",
						"ContentNotes" : "",
						"FreshContentNotes" : "",
						"CononicalNotes" : "",
						"IndexingNotes" : "",
						"AltTextNotes" : "",
						"TitleTagsNotes" : "",
						"MetaDescriptionNotes" : "",
						"MetaKeywordsNotes" : "",
						"HTagsNotes" : "",
						"BingNotes" : "",
						"GMBNotes" : "",
						"DataAggregatorsNotes" : "",
						"DirectoryCompletionNotes" : "",
						"DuplicateListingNotes" : "",
						"GMBAppointmentURLNotes" : "",
						"GMBServicesURLNotes" : "",
						"GMBPostsNotes" : "",
						"VideoSEONotes" : "",
						"RobotstxtNotes" : "",
						"SitemapNotes" : "",
						"PageLoadingTimeNotes" : "",
						"PhoneTrackingNotes" : "",
						"WordPressUpdateNotes" : "",
						"UpdatedPluginsNotes" : "",
						"WorkAdditionalNotes" : ""
					}
				],
				"PerformanceMessageObj" : [
					{
						"GoogleAlgorithmChangeNotes" : "",
						"TrendsNotes" : "",
						"PerformanceAdditionalNotes" : ""
					}
				],
				"PPCMessageObj" : [
					{
						"PPCNotes" : ""
					}
				],
				"ServicesMessageObj" : [
					{
						"OnlineAppointmentsNotes" : "",
						"ORGNotes" : "",
						"HealthgradesNotes" : "",
						"ServicesNotes" : ""
					}
				],
				"OtherMessageObj" : [
					{
						"PhotoRequestNotes" : "",
						"CommentsNotes" : "",
						"ContactNotes" : ""
					}
				],
				"OtherObj" : [ 
					{
						"Level" : new Number(),
						"TaskIndex" : new Number(),
						"SelectedIndex" : new Number()
					}
				]
			}
		];

		localStorage.setItem("ReportData", JSON.stringify(ReportData));
	 }
}

// Toggles prev, next and run report buttons from being usable.
function SetAttr(bol) {

	// Creating Variables of Buttons 
	var prevBtn = document.getElementById("prevClient");
	var nextBtn = document.getElementById("nextClient");
	var runBtn = document.getElementById("load");

	// If passed bol is false Disable Buttons 
	if (bol === false) {
		prevBtn.disabled = true;
		nextBtn.disabled = true;
		runBtn.disabled = true;
	// If passed bol is true Enable Buttons
	} else if (bol === true) {
		prevBtn.disabled = false;
		nextBtn.disabled = false;
		runBtn.disabled = false;
	}
}

// used to toggle help, options and work performed sections on page. Called from clicking on Work Performed, Set Options and ? Buttons.
function ToggleMe(id) {

	if(id == "workPerformed") {
		var element = document.getElementById("work");
	} else if (id == "setWorkOptions") {
		var element = document.getElementById("workOptions");
	} else if (id == "setPerformanceOptions") {
		var element = document.getElementById("performanceOptions");
	} else if (id == "setPPCOptions") {
		var element = document.getElementById("ppcOptions");
	} else if (id == "setServiceOptions") {
		var element = document.getElementById("serviceOptions");
	} else if (id == "help") {
		var element = document.getElementById("debug");
	} else if (id == "inputSEOData") {
		var element = document.getElementById("inputSEO");
	} else if (id == "inputAdWordsData") {
		var element = document.getElementById("inputAdWords");
	} else if (id == "inputBlogData") {
		var element = document.getElementById("inputBlog");
	}

	if (element.style.display == null || element.style.display == "initial") {
		element.style.display = "none";
	} else {
		element.style.display = "initial";
	}
}

// ##########USER INPUT DATA PROCESSING FUNCTIONS -> FLOW ############# DONE WORKING

// Processes any Input Data -> CleanUserData -> CreateClients
function ProcessData() {

	// Create and Assign Data Variables
	var userSEOData = document.getElementById("userSEOData").value;
	var userAdWordsData = document.getElementById("userAdWordsData").value;
	var userBlogData = document.getElementById("userBlogData").value;

	var SEOData = [];
	var AdWordsData = [];
	var BlogData = [];


	// Check to make sure there is Data to process
	if(userSEOData != null && userSEOData != "" || userAdWordsData != null && userAdWordsData != "" || userBlogData != null && userBlogData != "") {

		//Check to see if SEO data needs to be processed
		if (userSEOData != null && userSEOData != "") {
			try {
				SEOData = CleanUserData(userSEOData, "seo");
			} catch(err) {
				alert(err);
				return false;
			}
		}

		// Check to see if PPC data needs to be processed
		if (userAdWordsData != null && userAdWordsData != "") {
			try {
				AdWordsData = CleanUserData(userAdWordsData, "adwords");
			} catch(err) {
				alert(err);
				return false;
			}
		}

		// Check to see if Blog data needs to be processed
		if (userBlogData != null && userBlogData != "") {
			try {
				BlogData = CleanUserData(userBlogData, "blog");
			} catch(err) {
				alert(err);
				return false;
			}
		}

		CreateClients(SEOData, AdWordsData, BlogData);

	} else {
		alert("No Data to Process. Please Input Data into Input Field.");
		return false;
	}
}

// Process to Clean User Data -> Get Header -> DataArray -> StoreMonthData : Return(MonthData) -> ProcessData
function CleanUserData(userData, type) {

	var userData = userData;
	var type = type;

	// Replace n/a with 0 for SEO and AdWords Data
	if(type != "blog") {
		// Replace "n/a" with 0
		userData = userData.replace(/(n\/a)/g, "0");

		// removes "h1"
		userData = userData.replace(/\$/gi, "");

		// removes "h1"
		userData = userData.replace(/\s%/gi, "");

	} else if(type == "blog") {

		// removes "["
		userData = userData.replace(/\[/g, "");

		// removes "]"
		userData = userData.replace(/\]/g, "");

		// removes "h1"
		userData = userData.replace(/h1:/gi, "");

	}

	// Replace any line breaks with tabs
	userData = userData.replace(/\n/g, "\t")

	// Empty new Array
	var myArr = [];

	// Data Empty Array
	var myData = [];

	// split data into Array by tabs
	myArr = userData.split(/\t/g);

	// Moving all Fields that contain data into a new array - This is an issue from some Array Items containing a space. 
	for(var i = 0; i < myArr.length; i++) {

		// Checking if array item is valid and has data or not
		if(myArr[i] !== "" && myArr[i] !== " " && myArr[i] !== null && myArr[i] !== undefined) {

			// Pushing data into new array.
			myData.push(myArr[i]);
		}
	}

	// Checking to see if the user copied the headers
	if(myData[0] == "Client ID" || myData[0] == "ID") {

		// Create empty header array
		var BadHeader = [];

		// Get header len based on type of data processing.
		if(type == "seo") {
			// seo data contains 22 headers
			var typeHeader = 22
		} else if(type == "adwords") {
			// adwords data contains 24 headers
			var typeHeader = 24
		} else if (type == "blog") {
			// blog data contains 5 headers
			var typeHeader = 5
		}

		// Splice out headers into a Bad header array - Basically removing them.
		BadHeader = myData.splice(0, typeHeader);
	}

	// get header
	var myHeader = GetHeader(type)

	// get monthData array of objects from myHeader and my Data
	var monthData = DataArray(myHeader, myData, type);

	// storeMonthData call to store data in cache and clear input field.
	StoreMonthData(type, monthData);

	// return the monthSEOData to previous finction
	return(monthData);
}

// Process to create Header for correct Data Type : Return(myHeader) -> CleanUserData DONE WORKING
function GetHeader(type) {

	var type = type;

	if(type == "seo") {
		// Create Header Array
		var myHeader = [
			"Client ID",
			"Client Name",
			"Total Cur",
			"Total Pre",
			"Unique Cur",
			"Unique Pre",
			"Org Cur",
			"Org Pre",
			"Dir Cur",
			"Dir Pre",
			"Paid Cur",
			"Paid Prev",
			"Google Cur",
			"Google Pre",
			"Soc Cur",
			"Soc Pre",
			"Ref Cur",
			"Ref Pre",
			"Call Cur",
			"Call Pre",
			"Org Landing Pages Cur",
			"Org Landing Pages Pre"
		];
	} else if(type == "adwords") {
		var myHeader = [
			"Client ID",
			"Client Name",
			"Conv Cur",
			"Conv Pre",
			"Conv Change",
			"Clicks Cur",
			"Clicks Pre",
			"Clicks Change",
			"Impr Cur",
			"Impr Pre",
			"Impr Change",
			"Budget",
			"Cost Cur",
			"Cost Pre",
			"Cost Change",
			"Phone Cur",
			"Phone Pre",
			"Phone Change",
			"CTR Cur",
			"CTR Pre",
			"CTR Change",
			"CPC Cur",
			"CPC Pre",
			"CPC Change"
		];
	} else if (type == "blog") {
		var myHeader = [
			"Client ID",
			"Client Name",
			"Status",
			"Post Date",
			"Blog Title"
		];
	}

	return(myHeader);
}

// Process to turn Header Data, and Body Data into Data Array of Data Objects : Return(monthData) -> CleanUserData
function DataArray(myHeader, myData, type) {

	// Create Array to store Object of all Month SEO Data
	var monthData = [];

	// loop to create object for each client
	for(var i = 0; i < myData.length;) {
	
		// create empty object to store client data
		var obj = {};

		// loop for each header 
		for(var j = 0; j < myHeader.length; j++) {

		// create object with the Data for each client that matches with the header
		obj[myHeader[j]] = myData[i];

		// Increase the i by 1 for the top loop
		i++;
		}

		// push the object into the monthSEOData array.
		monthData.push(obj);
	}

	return(monthData)
}

// Process to Store Data in ReportsData in localStorage
function StoreMonthData(type, monthData) {

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	// set variables for local storage use
	if(type == "seo") {
		// Var for seo
		var typeStorage = "SEOObj";
		var userType = "userSEOData";
	} else if(type == "adwords") {
		// Var for adwords
		var typeStorage = "AdWordsObj";
		var userType = "userAdWordsData";
	} else if (type == "blog") {
		// Var for blog
		var typeStorage = "BlogObj";
		var userType = "userBlogData";
	}

	// Convert monthData into json string and set it in cache
	for(client in monthData) {
		ReportData[0][typeStorage].push(monthData[client]);
	}
	
	localStorage.setItem("ReportData", JSON.stringify(ReportData));

	// clear data in the user input box
	document.getElementById(userType).value = "";

	// Call click of the inputData button to toggle or hide the entry box
	if (document.getElementById("inputSEO").style.display != "none") {
		document.getElementById("inputSEO").style.display = "none"
	}
	if (document.getElementById("inputAdWords").style.display != "none") {
		document.getElementById("inputAdWords").style.display = "none"
	}
	if (document.getElementById("inputBlog").style.display != "none") {
		document.getElementById("inputBlog").style.display = "none"
	}
}

// Process Data to Create Clients -> MergeArrays -> PopulateClients
function CreateClients(seoData, adwordsData, blogData) {

	var seoData = seoData;
	var adwordsData = adwordsData;
	var blogData = blogData;



	// Merge the Arrays of Clients by Client ID
	allData = MergeArrays("Client ID", [seoData, adwordsData, blogData])

	// Add Data into ClientsData
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	ReportData[0]["ClientsData"] = allData;
	localStorage.setItem("ReportData", JSON.stringify(ReportData));

	// Populate Clients
	PopulateClients();
}

// Merge all 3 Arrays by Client ID into one Array : Return(allData)
function MergeArrays(key, dataArrays) {

	var key = key;
	var dataArrays = dataArrays;

	// First merge the arrays into an object
	// indexed by the specified key

	// empty object to hold clients
	var mergedData = {};

	// for each array in the arrays of data arrays
	dataArrays.forEach(function(array) {	 

		// for each client in the array
		array.forEach(function(client) {

			// set client i.e id = client["Client ID"]
			var id = client[key];

			// set target to be the mergedData by client Client ID as key -> target = mergedData[client["Client ID"][value]]
			var target = mergedData[id];

			// if (target == )
			// if target doesn't exist, we create a empty target object
			if(! target) {

				// I am not sure what is here. use to be if( ! target ) target = merged[id] = {}; one liner...
				// target = mergedData[client["Client ID"][value] = {} empty object 
				target = mergedData[id] = {};
			}
			
			// counter for blogs and to make sure no duplicate blog title header in final client object.
			var blogCount = 1;

			// for property name in client
			for(var name in client) {

			// if client has property(proprty name)
				if(client.hasOwnProperty(name)) {

					// if name is Blog Title 
					if(name == "Blog Title") {

						// if target doesn't already have a blog title(number)
						if (! target["Blog Title" + blogCount]) {
							// add blog title(number) to the target object
							target[name + blogCount] = client[name];
						// else target has a blog title(number) already.
						} else {
							// increase blog counter by 1
							blogCount++;
							// add incremental blog title(number)
							target[name + blogCount] = client[name];
						}

					// else property is not Blog Title
					} else {
						// set the target[property name] to the client[property name]
						target[name] = client[name];
					}
				}
			}
		});
	});

	// Now convert the merged object back to an array
	var allData = [];
	for(var id in mergedData) {
		if(mergedData.hasOwnProperty(id)) {
			allData.push(mergedData[id]);
		}
	}
	return(allData);
}



// ##########DEFINE FUNCTIONS########## DONE WORKING

// defines optional message text. Reads from local storage if exists, otherwise set default. 
function DefineOptions() {


	// get ReportData from localStorage Parsed into a JSON
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));


	//If MessageObj is NOT undefined && SchemaNotes is in WorkMessageObj
	if(ReportData[0]["WorkMessageObj"][0]["SchemaNotes"] != "") {
		// Set Input Field Value to What was stored in localStorage
		document.getElementById("SchemaNotes").value = ReportData[0]["WorkMessageObj"][0]["SchemaNotes"];
	// Else Create Default and Add it into the WorkMessageObj
	} else {
		ReportData[0]["WorkMessageObj"][0]["SchemaNotes"] = "Schema is simply a markup that helps major search engines become smarter by feeding them data in a structured manner instead of giving them all the data in one big chunk and leaving it to define each portion on its own.";
		// Set Input Field Value to default Message set in ReportData one line up.
		document.getElementById("SchemaNotes").value = ReportData[0]["WorkMessageObj"][0]["SchemaNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["DentistSchemaNotes"] != "") {
		document.getElementById("DentistSchemaNotes").value = ReportData[0]["WorkMessageObj"][0]["DentistSchemaNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["DentistSchemaNotes"] = "Using local business (dentist) schema is a structured way of telling search engines who you are, what you do, and where you do it. To put it simply, it’s like handing Google a business card with your standard information listed front and center.";
		document.getElementById("DentistSchemaNotes").value = ReportData[0]["WorkMessageObj"][0]["DentistSchemaNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["ReviewsNotes"] != "") {
		document.getElementById("ReviewsNotes").value = ReportData[0]["WorkMessageObj"][0]["ReviewsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["ReviewsNotes"] = "In a nutshell, reviews are important because they provide “social proof.” People need reassurance and confirmation that their actions are the right ones. For local searches, if you see a business with an average score of 4.6 from 465 reviews, then it looks like a safe choice. Bottom line, they are used a lot and are relied upon by many web users.";
		document.getElementById("ReviewsNotes").value = ReportData[0]["WorkMessageObj"][0]["ReviewsNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["AggrReviewSchemaNotes"] != "") {
		document.getElementById("AggrReviewSchemaNotes").value = ReportData[0]["WorkMessageObj"][0]["AggrReviewSchemaNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["AggrReviewSchemaNotes"] = "So – reviews are a good thing. Reviews that Google can recognize as reviews and ratings are even better! By marking up ratings and reviews on your website – you’re ensuring that Google understands that the content is a review and how many stars that review received. Schema markup not only can define the text of a review – but it defines the number you’re ranked out of 5 stars.";
		document.getElementById("AggrReviewSchemaNotes").value = ReportData[0]["WorkMessageObj"][0]["AggrReviewSchemaNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["YelpNotes"] != "") {
		document.getElementById("YelpNotes").value = ReportData[0]["WorkMessageObj"][0]["YelpNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["YelpNotes"] = "From an SEO perspective, Google now takes into account a business’ presence on Yelp, such as the number of reviews it has and how positive they are. Ensuring that your listing on Yelp is up to date and has relevant data will make it easier for customers to leave positive reviews.";
		document.getElementById("YelpNotes").value = ReportData[0]["WorkMessageObj"][0]["YelpNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["RichCardsNotes"] != "") {
		document.getElementById("RichCardsNotes").value = ReportData[0]["WorkMessageObj"][0]["RichCardsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["RichCardsNotes"] = "Rich cards present users with a horizontally-scrolling carousel of large images and other markup from one or more sites at the top of search results pages. They are a new search result format similar to Rich Snippets. They provide a more engaging and visually appealing format of displaying information on search engine results.";
		document.getElementById("RichCardsNotes").value = ReportData[0]["WorkMessageObj"][0]["RichCardsNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["InternalLinkingNotes"] != "") {
		document.getElementById("InternalLinkingNotes").value = ReportData[0]["WorkMessageObj"][0]["InternalLinkingNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["InternalLinkingNotes"] = "Internal linking helps lay the foundation of our SEO efforts. It allows us to indicate to search engines which pages of content are the highest priority, as well as which pages are thematically related to one another. These signals are incredibly helpful to search engines in ascribing value and meaning to your pages. If we don't take the time to manage these signals appropriately via strategic internal linking, your website would be at the mercy of the search engines judgment call.";
		document.getElementById("InternalLinkingNotes").value = ReportData[0]["WorkMessageObj"][0]["InternalLinkingNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["301RedirectsNotes"] != "") {
		document.getElementById("301RedirectsNotes").value = ReportData[0]["WorkMessageObj"][0]["301RedirectsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["301RedirectsNotes"] = "Google will occasionally find a 404 error whenever a person clicks on a link from another website that used to go to a webpage that now no longer exists. When this happens it’s important to submit a 301 redirect so that when someone clicks on that link again it will direct them to the proper new page ensuring a positive user experience while simultaneously retaining the SEO benefits from having a web page link to your website.";
		document.getElementById("301RedirectsNotes").value = ReportData[0]["WorkMessageObj"][0]["301RedirectsNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["BrokenLinksNotes"] != "") {
		document.getElementById("BrokenLinksNotes").value = ReportData[0]["WorkMessageObj"][0]["BrokenLinksNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["BrokenLinksNotes"] = "Broken links make for a bad user experience. A bad user experience means your website is downgraded by both your human visitors and the search engines who are attempting to mimic your human visitors.";
		document.getElementById("BrokenLinksNotes").value = ReportData[0]["WorkMessageObj"][0]["BrokenLinksNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["KeywordPhrasesNotes"] != "") {
		document.getElementById("KeywordPhrasesNotes").value = ReportData[0]["WorkMessageObj"][0]["KeywordPhrasesNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["KeywordPhrasesNotes"] = "Keyword phrases in your web content make it possible for people to find your site via search engines. A well optimized website “speaks the same language” as its potential visitor base with keywords for SEO that help connect searchers to your site.";
		document.getElementById("KeywordPhrasesNotes").value = ReportData[0]["WorkMessageObj"][0]["KeywordPhrasesNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["KeywordDensityNotes"] != "") {
		document.getElementById("KeywordDensityNotes").value = ReportData[0]["WorkMessageObj"][0]["KeywordDensityNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["KeywordDensityNotes"] = "In the earlier days of SEO people used to stuff web pages with keywords to the point where it would be considered “spammy” to help a webpage rank highly. Now, “keyword stuffing” is frowned upon but that doesn’t mean that the use of keywords within the body of a web page is irrelevant. By implementing location specific keyphrases intelligently we can ensure that when Google indexes your website it understands exactly where you are, what you are talking about, and who your target audience is.";
		document.getElementById("KeywordDensityNotes").value = ReportData[0]["WorkMessageObj"][0]["KeywordDensityNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["CompetitiveAnalysisNotes"] != "") {
		document.getElementById("CompetitiveAnalysisNotes").value = ReportData[0]["WorkMessageObj"][0]["CompetitiveAnalysisNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["CompetitiveAnalysisNotes"] = "Conducting a competitive analysis allows us to determine how to best focus our efforts going forward to make your website more competitive. This process works by allowing us to compare your website against all others on the front page of Google for specific searches within certain parameters such as domain authority, number of pages, blog and video presence, Moz ranking, and more. ";
		document.getElementById("CompetitiveAnalysisNotes").value = ReportData[0]["WorkMessageObj"][0]["CompetitiveAnalysisNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["CompetitiveSEOKeyphrasesNotes"] != "") {
		document.getElementById("CompetitiveSEOKeyphrasesNotes").value = ReportData[0]["WorkMessageObj"][0]["CompetitiveSEOKeyphrasesNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["CompetitiveSEOKeyphrasesNotes"] = "When we establish the competitive search phrase for a specific page that keyphrase goes out like a shotgun blast throughout the webpages HTML code. We make sure that there is no doubt what that page is about and target only that phrase after we’ve vetted it through Google trends and refined it by location. As each page ranks better for a specific phrase the whole ranking of the website climbs in ranking as well allowing your website to rank better for more generalized terms such as “dentist” or “dental implants.”";
		document.getElementById("CompetitiveSEOKeyphrasesNotes").value = ReportData[0]["WorkMessageObj"][0]["CompetitiveSEOKeyphrasesNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["BlogsNotes"] != "") {
		document.getElementById("BlogsNotes").value = ReportData[0]["WorkMessageObj"][0]["BlogsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["BlogsNotes"] = "By blogging, you build relationships with your readers, position yourself as an expert in the field, and most importantly, provide new content for Google to index.";
		document.getElementById("BlogsNotes").value = ReportData[0]["WorkMessageObj"][0]["BlogsNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["ContentNotes"] != "") {
		document.getElementById("ContentNotes").value = ReportData[0]["WorkMessageObj"][0]["ContentNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["ContentNotes"] = "Content, is ultimately what every user is searching for - in some form or another. If you have more quality content than your competitors for a given keyword or phrase Google would then prefer to direct traffic to you in order to give the user, the best results and experience possible.";
		document.getElementById("ContentNotes").value = ReportData[0]["WorkMessageObj"][0]["ContentNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["FreshContentNotes"] != "") {
		document.getElementById("FreshContentNotes").value = ReportData[0]["WorkMessageObj"][0]["FreshContentNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["FreshContentNotes"] = "A static website without updates of any kind may be viewed by search engines as a “dead” entity – with no life and nothing new to offer. If you update your site often with high quality content, search engines will love you for it. It’s also an opportunity for us to embed more keywords since we have more content, the fresh content increases your authority potential, and it also just keeps your audience informed and updated.";
		document.getElementById("FreshContentNotes").value = ReportData[0]["WorkMessageObj"][0]["FreshContentNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["CononicalNotes"] != "") {
		document.getElementById("CononicalNotes").value = ReportData[0]["WorkMessageObj"][0]["CononicalNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["CononicalNotes"] = "I made sure your canonical tag was correctly marked up. Canonicalization can fix problems which stem from multiple uses for a single piece of writing–a paragraph or, more often, an entire page of content–that appears in multiple locations on one website or on multiple websites. For search engines the canonical tag declares which version of this content should they show to searchers. SEOs refer to this issue as duplicate content. To provide the best user experience, search engines will rarely show multiple, duplicate pieces of content and thus, are forced to choose which version is most likely to be the original (or best), thus the canonical tag makes sure that the search engines know where the original content came from.";
		document.getElementById("CononicalNotes").value = ReportData[0]["WorkMessageObj"][0]["CononicalNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["IndexingNotes"] != "") {
		document.getElementById("IndexingNotes").value = ReportData[0]["WorkMessageObj"][0]["IndexingNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["IndexingNotes"] = "An index is another name for the database used by a search engine. Indexes contain the information on all the websites that Google (or any other search engine) was able to find. If a website is not in a search engine’s index, users will not be able to find it.";
		document.getElementById("IndexingNotes").value = ReportData[0]["WorkMessageObj"][0]["IndexingNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["AltTextNotes"] != "") {
		document.getElementById("AltTextNotes").value = ReportData[0]["WorkMessageObj"][0]["AltTextNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["AltTextNotes"] = "The purpose of alt attributes is to provide a description of the contents of an image file (particularly for visitors who can't see the image in their browsers). In addition to ensuring the content in your images is communicated whether the image shows or not, effectively using alt text can also be a great way to improve your site's placement in search engine rankings because it allows the images themselves to be ranked in image search results.";
		document.getElementById("AltTextNotes").value = ReportData[0]["WorkMessageObj"][0]["AltTextNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["TitleTagsNotes"] != "") {
		document.getElementById("TitleTagsNotes").value = ReportData[0]["WorkMessageObj"][0]["TitleTagsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["TitleTagsNotes"] = "Title tags are part of the meta tags that appear at the top of your HTML inside the head area. Think of them as the title of the chapter of a book. It tells people and search engines what your page is about. They are also part of what makes people decide whether or not to visit your site when it shows up in the search results.";
		document.getElementById("TitleTagsNotes").value = ReportData[0]["WorkMessageObj"][0]["TitleTagsNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["MetaDescriptionNotes"] != "") {
		document.getElementById("MetaDescriptionNotes").value = ReportData[0]["WorkMessageObj"][0]["MetaDescriptionNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["MetaDescriptionNotes"] = "Meta Description Tags, while not important to search engine rankings, are extremely important in gaining user click-through from SERPs. These short paragraphs are a webmaster's opportunity to display content to searchers and let them know if the given page contains the information they're looking for.";
		document.getElementById("MetaDescriptionNotes").value = ReportData[0]["WorkMessageObj"][0]["MetaDescriptionNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["MetaKeywordsNotes"] != "") {
		document.getElementById("MetaKeywordsNotes").value = ReportData[0]["WorkMessageObj"][0]["MetaKeywordsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["MetaKeywordsNotes"] = "Meta tags are snippets of text that describe a page's content; they don't appear on the page itself, but only in the page’s code. They're basically little content descriptors that help tell search engines what a web page is all about.";
		document.getElementById("MetaKeywordsNotes").value = ReportData[0]["WorkMessageObj"][0]["MetaKeywordsNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["HTagsNotes"] != "") {
		document.getElementById("HTagsNotes").value = ReportData[0]["WorkMessageObj"][0]["HTagsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["HTagsNotes"] = "Short for heading tags, H tags are used to represent different sections of web page content. The proper use of H tags can impact the relevancy, keyword consistency, as well as the overall user-experience by giving a clear idea of what the page is about. Search engines give high importance to user-experience, meaning the presence of these tags becomes an important component of SEO.";
		document.getElementById("HTagsNotes").value = ReportData[0]["WorkMessageObj"][0]["HTagsNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["BingNotes"] != "") {
		document.getElementById("BingNotes").value = ReportData[0]["WorkMessageObj"][0]["BingNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["BingNotes"] = "Google often dominates the SEO conversation with most businesses optimizing solely for the reigning champ of search engines, but to have a solid SEO strategy you need to take Bing into account as well. Since so many websites focus on optimizing only for Google, you can help put yourself ahead of your competition by positioning your business in front of the 30% of searchers using Bing and Yahoo. That’s a lot of eyes, and a lot of potential customers that your competitors may be ignoring.";
		document.getElementById("BingNotes").value = ReportData[0]["WorkMessageObj"][0]["BingNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["GMBNotes"] != "") {
		document.getElementById("GMBNotes").value = ReportData[0]["WorkMessageObj"][0]["GMBNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["GMBNotes"] = "It should go without saying that a company’s Google My Business page signals (ie. any Google property’s signals) have a significant impact on its organic — and more specifically, local pack — results.";
		document.getElementById("GMBNotes").value = ReportData[0]["WorkMessageObj"][0]["GMBNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["DataAggregatorsNotes"] != "") {
		document.getElementById("DataAggregatorsNotes").value = ReportData[0]["WorkMessageObj"][0]["DataAggregatorsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["DataAggregatorsNotes"] = "There are four main aggregators of location data that send information to U.S. local search engines: Infogroup, Localeze, Acxiom, Factual and Foursquare. When someone searches online for a local business, search engines (as well as some mobile apps) rely on the location data from these sources. If the data is incorrect or inconsistent between all of these data sources, your listing might not show up in search results.";
		document.getElementById("DataAggregatorsNotes").value = ReportData[0]["WorkMessageObj"][0]["DataAggregatorsNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["DirectoryCompletionNotes"] != "") {
		document.getElementById("DirectoryCompletionNotes").value = ReportData[0]["WorkMessageObj"][0]["DirectoryCompletionNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["DirectoryCompletionNotes"] = "Ensuring that your business listings are complete across all directory websites is important to SEO. By doing so you are giving reason for that directory to rank you higher within their own platform which in turn results in a stronger indicator to search engines that your business should be listed higher as well.";
		document.getElementById("DirectoryCompletionNotes").value = ReportData[0]["WorkMessageObj"][0]["DirectoryCompletionNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["DuplicateListingNotes"] != "") {
		document.getElementById("DuplicateListingNotes").value = ReportData[0]["WorkMessageObj"][0]["DuplicateListingNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["DuplicateListingNotes"] = "Duplicate listings pose several problems.<ol><li>You never know which of your listings will outrank the others.</li><li>Your review equity may be split up between the different listings.</li><li>Major search engines (like Google) will not know which listing to trust.</li><li>Because of the way that data is fed from one local business index to another on the internet, even just one duplicate listing with bad or outdated data can be replicated across multiple platforms.</li></ol>";
		document.getElementById("DuplicateListingNotes").value = ReportData[0]["WorkMessageObj"][0]["DuplicateListingNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["GMBAppointmentURLNotes"] != "") {
		document.getElementById("GMBAppointmentURLNotes").value = ReportData[0]["WorkMessageObj"][0]["GMBAppointmentURLNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["GMBAppointmentURLNotes"] = "Adding appointment URLs to your Google Business profile allows users to go directly to your secured appointment request page after finding your Google profile card in SERPs.";
		document.getElementById("GMBAppointmentURLNotes").value = ReportData[0]["WorkMessageObj"][0]["GMBAppointmentURLNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["GMBServicesURLNotes"] != "") {
		document.getElementById("GMBServicesURLNotes").value = ReportData[0]["WorkMessageObj"][0]["GMBServicesURLNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["GMBServicesURLNotes"] = "Adding a products and services URL to your Google Business profile allows users to go directly to your services page after finding your Google profile card in SERPs.";
		document.getElementById("GMBServicesURLNotes").value = ReportData[0]["WorkMessageObj"][0]["GMBServicesURLNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["GMBPostsNotes"] != "") {
		document.getElementById("GMBPostsNotes").value = ReportData[0]["WorkMessageObj"][0]["GMBPostsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["GMBPostsNotes"] = "Adding posts regularly to your Google Business page gives us many options. It allows us to share daily specials or current promotion that encourage new and existing patients to take advantage of any offers you may have, showcase services, and give them a one-click path to schedule an appointment or learn more which will likely drive additional traffic to your site.";
		document.getElementById("GMBPostsNotes").value = ReportData[0]["WorkMessageObj"][0]["GMBPostsNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["VideoSEONotes"] != "") {
		document.getElementById("VideoSEONotes").value = ReportData[0]["WorkMessageObj"][0]["VideoSEONotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["VideoSEONotes"] = "Ever since Google integrated video into its universal search offering in 2007, websites featuring video have gained a significant SEO advantage. Search engines find and index the video within the site’s context improving your overall website and video search ranking as it relates to your business’ keywords, while also allowing search results to be presented with matching videos, making them more appealing, resulting in an increase in search-based traffic.";
		document.getElementById("VideoSEONotes").value = ReportData[0]["WorkMessageObj"][0]["VideoSEONotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["RobotstxtNotes"] != "") {
		document.getElementById("RobotstxtNotes").value = ReportData[0]["WorkMessageObj"][0]["RobotstxtNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["RobotstxtNotes"] = "Robots.txt is a text file webmasters create to instruct web robots (typically search engine robots) how to crawl pages on their website.";
		document.getElementById("RobotstxtNotes").value = ReportData[0]["WorkMessageObj"][0]["RobotstxtNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["SitemapNotes"] != "") {
		document.getElementById("SitemapNotes").value = ReportData[0]["WorkMessageObj"][0]["SitemapNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["SitemapNotes"] = "As the name implies, a sitemap is a literal map of the website, that is, on one page you would show the structure of the site, the sections in it, the links between those, etc. Sitemaps make navigating the website easier, and when you have an updated sitemap for your website it is good not only for yourself but for search engines as well. Website crawlers used by search engines depend on these sitemaps to point them in the direction of the correct website that a user is searching for.";
		document.getElementById("SitemapNotes").value = ReportData[0]["WorkMessageObj"][0]["SitemapNotes"];
	}

	if(ReportData[0]["WorkMessageObj"][0]["PageLoadingTimeNotes"] != "") {
		document.getElementById("PageLoadingTimeNotes").value = ReportData[0]["WorkMessageObj"][0]["PageLoadingTimeNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["PageLoadingTimeNotes"] = "Google is increasingly acting upon what is intuitively obvious: A poor performing website results in a poor user experience, and sites with poor user experiences deserve less promotion in search results. Optimizing your website for faster page load times is a no brainer when it comes to SEO and every effort should be made to meet or exceed the internet average of 5 seconds for page load times.";
		document.getElementById("PageLoadingTimeNotes").value = ReportData[0]["WorkMessageObj"][0]["PageLoadingTimeNotes"];
	}


	if(ReportData[0]["WorkMessageObj"][0]["PhoneTrackingNotes"] != "") {
		document.getElementById("PhoneTrackingNotes").value = ReportData[0]["WorkMessageObj"][0]["PhoneTrackingNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["PhoneTrackingNotes"] = "Without phone call tracking data, we would be unaware of a majority of the conversions being driven by the website, and we’d be blind to which traffic sources/mediums contributed most effectively to phone leads.";
		document.getElementById("PhoneTrackingNotes").value = ReportData[0]["WorkMessageObj"][0]["PhoneTrackingNotes"];
	}


	if(ReportData[0]["WorkMessageObj"][0]["WordPressUpdateNotes"] != "") {
		document.getElementById("WordPressUpdateNotes").value = ReportData[0]["WorkMessageObj"][0]["WordPressUpdateNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["WordPressUpdateNotes"] = "Backing up the site was the most time consuming but also the most crucial thing we needed to do for your site. WordPress sites are notorious for being targeted by hackers more often than other platforms. Because of this they are constantly releasing patches and updates. By backing up everything we ensured that if an update of the platform or the plugins doesn’t go according to plan or a patch breaks the site or a portion of it, we have an earlier version to restore. I will continuously backup the site every time there is a platform update. This will ensure that your site remains protected from attack but also tells Google that the site is well cared for and that the secure information of its users will remain protected.";
		document.getElementById("WordPressUpdateNotes").value = ReportData[0]["WorkMessageObj"][0]["WordPressUpdateNotes"];
	}


	if(ReportData[0]["WorkMessageObj"][0]["UpdatedPluginsNotes"] != "") {
		document.getElementById("UpdatedPluginsNotes").value = ReportData[0]["WorkMessageObj"][0]["UpdatedPluginsNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["UpdatedPluginsNotes"] = "Updating your plugins consistently is one of the most important things you can do for your website. WordPress sites are constantly under attack from hackers and one of the most popular means for them to take control of your site is by exploiting flaws within the plugins. Keeping them up to date protects your site from attackers and sends the signal to Google and other search engines that your site is being maintained and protected which inspires confidence for search engines to direct traffic to your site.";
		document.getElementById("UpdatedPluginsNotes").value = ReportData[0]["WorkMessageObj"][0]["UpdatedPluginsNotes"];
	}


	if(ReportData[0]["WorkMessageObj"][0]["WorkAdditionalNotes"] != "") {
		document.getElementById("WorkAdditionalNotes").value = ReportData[0]["WorkMessageObj"][0]["WorkAdditionalNotes"];
	} else {
		ReportData[0]["WorkMessageObj"][0]["WorkAdditionalNotes"] = "";
		document.getElementById("WorkAdditionalNotes").value = ReportData[0]["WorkMessageObj"][0]["WorkAdditionalNotes"];
	}

	if(ReportData[0]["PerformanceMessageObj"][0]["GoogleAlgorithmChangeNotes"] != "") {
		document.getElementById("GoogleAlgorithmChangeNotes").value = ReportData[0]["PerformanceMessageObj"][0]["GoogleAlgorithmChangeNotes"];
	} else {
		ReportData[0]["PerformanceMessageObj"][0]["GoogleAlgorithmChangeNotes"] = "";
		document.getElementById("GoogleAlgorithmChangeNotes").value = ReportData[0]["PerformanceMessageObj"][0]["GoogleAlgorithmChangeNotes"];
	}

	if(ReportData[0]["PerformanceMessageObj"][0]["TrendsNotes"] != "") {
		document.getElementById("TrendsNotes").value = ReportData[0]["PerformanceMessageObj"][0]["TrendsNotes"];
	} else {
		ReportData[0]["PerformanceMessageObj"][0]["TrendsNotes"] = "";
		document.getElementById("TrendsNotes").value = ReportData[0]["PerformanceMessageObj"][0]["TrendsNotes"];
	}

	if(ReportData[0]["PerformanceMessageObj"][0]["PerformanceAdditionalNotes"] != "") {
		document.getElementById("PerformanceAdditionalNotes").value = ReportData[0]["PerformanceMessageObj"][0]["PerformanceAdditionalNotes"];
	} else {
		ReportData[0]["PerformanceMessageObj"][0]["PerformanceAdditionalNotes"] = "";
		document.getElementById("PerformanceAdditionalNotes").value = ReportData[0]["PerformanceMessageObj"][0]["PerformanceAdditionalNotes"];
	}

	if(ReportData[0]["PPCMessageObj"][0]["PPCNotes"] != "") {
		document.getElementById("PPCNotes").value = ReportData[0]["PPCMessageObj"][0]["PPCNotes"];
	} else {
		ReportData[0]["PPCMessageObj"][0]["PPCNotes"] = "";
		document.getElementById("PPCNotes").value = ReportData[0]["PPCMessageObj"][0]["PPCNotes"];
	}

	if(ReportData[0]["ServicesMessageObj"][0]["OnlineAppointmentsNotes"] != "") {
		document.getElementById("OnlineAppointmentsNotes").value = ReportData[0]["ServicesMessageObj"][0]["OnlineAppointmentsNotes"];
	} else {
		ReportData[0]["ServicesMessageObj"][0]["OnlineAppointmentsNotes"] = 'We have a new service that integrates with your website allowing site visitors to schedule appointments quickly and easily. The software is designed to accommodate your current patient management software. Our research has shown that clients that incorporate this software typically see an increase in patient conversion rates. To setup a free demonstration, please contact us';
		document.getElementById("OnlineAppointmentsNotes").value = ReportData[0]["ServicesMessageObj"][0]["OnlineAppointmentsNotes"];
	}

	if(ReportData[0]["ServicesMessageObj"][0]["ORGNotes"] != "") {
		document.getElementById("ORGNotes").value = ReportData[0]["ServicesMessageObj"][0]["ORGNotes"];
	} else {
		ReportData[0]["ServicesMessageObj"][0]["ORGNotes"] = 'You currently have [] Google reviews. Your competition averages [] Google reviews. To stay competitive in [], I would highly recommend implementing a review generation strategy for your practice. WEO has recently introduced an Online Review Generation service to help our clients increase reviews on Google, Yelp, and Facebook. To setup a free demo of the service, please contact us';
		document.getElementById("ORGNotes").value = ReportData[0]["ServicesMessageObj"][0]["ORGNotes"];
	}

	if(ReportData[0]["ServicesMessageObj"][0]["HealthgradesNotes"] != "") {
		document.getElementById("HealthgradesNotes").value = ReportData[0]["ServicesMessageObj"][0]["HealthgradesNotes"];
	} else {
		ReportData[0]["ServicesMessageObj"][0]["HealthgradesNotes"] = "As more patients shift to voicing their opinions online, medical practices are faced with claiming, updating, monitoring, and responding to feedback across more sites than most people would care to count. As these sites continue to gain traffic, they show up more and more often on the front page of search results. That means that these sites are becoming more and more important to helping you attract and retain more patients. Research shows that 44% of patients are looking online to research their doctors, and 1 in 5 are using ratings sites like Healthgrades.";
		document.getElementById("HealthgradesNotes").value = ReportData[0]["ServicesMessageObj"][0]["HealthgradesNotes"];
	}

	if(ReportData[0]["ServicesMessageObj"][0]["ServicesNotes"] != "") {
		document.getElementById("ServicesNotes").value = ReportData[0]["ServicesMessageObj"][0]["ServicesNotes"];
	} else {
		ReportData[0]["ServicesMessageObj"][0]["ServicesNotes"] = 'WEO is continuing to grow and add more services for its clients. While SEO is always good for your website, there are other services (some you already have) that we offer to improve your new patient flow:<ul><li><b>Google Adwords</b> - Pay Per Click (PPC) is a great way to expand your online reach with ADs in Google Search.</li><li><b>Online Review Generation</b> - Reviews definitely affect how you rank on Google as well as how people see you online. Clients who actively use this service can see 10-20 new reviews every month.</li><li><b>Blogs</b> - Part of our Level 2 SEO, they allow us to add content to your site. You can never have enough content.</li><li><b>Content Generation</b> - Speaking of never enough content, our Level 3 SEO includes extra budget just for content generation.</li><li><b>Premium Healthgrades</b> - We are a Healtgrades partner and can offer premium Healthgrades listings.</li><li><b>Social Media</b> - We can manage your social media profiles with stock posts about dentistry.</li><li><b>Bing PPC</b> - Have a large budget for Pay Per Click? We can move some of it to Bing which has comparable success per dollar to Google.</li><li><b>Video Services</b> - We have on-staff videographers that can bring your pretty faces to your potential patients. Google loves multimedia.</li><li><b>Photo Services</b> - Speaking of multimedia, you can never have enough original imagery on your site. Have one of our photographers capture your photogenic selves.</li></ul>To learn more about any of the above services please contact.';
		document.getElementById("ServicesNotes").value = ReportData[0]["ServicesMessageObj"][0]["ServicesNotes"];
	}

	if(ReportData[0]["OtherMessageObj"][0]["PhotoRequestNotes"] != "") {
		document.getElementById("PhotoRequestNotes").value = ReportData[0]["OtherMessageObj"][0]["PhotoRequestNotes"];
	} else {
		ReportData[0]["OtherMessageObj"][0]["PhotoRequestNotes"] = "We could use more photos (At least 3) of each of the following:<ol><li>Interior photos - Office tour, decor elements, lobby, etc.</li><li>Exterior photos - view from the street, signage, landscaping, etc.</li><li>Photos at work - staff at desk, dentist/staff talking with a patient, behind the scenes, goofy staff photos, equipment, etc.</li><li>Additional photos - equipment, brands, community outreach events, patient photos, anything else that doesn't fit in the above categories.</li></ol>In an ideal world, these photos would be taken with a high-quality camera by a professional photographer. However, these photos don’t need to be perfect, photos from a camera phone can look very nice if they are framed well and have decent lighting. It’s better to have something now than to wait to have a professional photo shoot.";
		document.getElementById("PhotoRequestNotes").value = ReportData[0]["OtherMessageObj"][0]["PhotoRequestNotes"];
	}

	if(ReportData[0]["OtherMessageObj"][0]["CommentsNotes"] != "") {
		document.getElementById("CommentsNotes").value = ReportData[0]["OtherMessageObj"][0]["CommentsNotes"];
	} else {
		ReportData[0]["OtherMessageObj"][0]["CommentsNotes"] = "";
		document.getElementById("CommentsNotes").value = ReportData[0]["OtherMessageObj"][0]["CommentsNotes"];
	}

	if(ReportData[0]["OtherMessageObj"][0]["ContactNotes"] != "") {
		document.getElementById("ContactNotes").value = ReportData[0]["OtherMessageObj"][0]["ContactNotes"];
	} else {
		ReportData[0]["OtherMessageObj"][0]["ContactNotes"] = "";
		document.getElementById("ContactNotes").value = ReportData[0]["OtherMessageObj"][0]["ContactNotes"];
	}

	localStorage.setItem("ReportData", JSON.stringify(ReportData));
}

// defines optional work messages. reads from local storage if exists, otherwise set to "". 
function DefineContent() {

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	// checks to see if taskIndex is in localStorage. && ReportData[0]["OtherObj"][0]["TaskIndex"] == ReportData[0]["WorkObj"].length
	if(ReportData[0]["OtherObj"][0]["TaskIndex"] > 0 && ReportData[0]["WorkObj"].length > 0) {


		//for each taskIndex 
		for(var i = 0; i < ReportData[0]["OtherObj"][0]["TaskIndex"]; i++) {

			// for each object in the array
			for (task in ReportData[0]["WorkObj"]) {

				// Create a task Index
				var a = "storedContent";
				var b = i + 1;
				var tempName = a.concat(b);

				//if task name == temp task name created by taskIndex
				if(ReportData[0]["WorkObj"][task]["TaskName"] == tempName) {

					// create a new task and pass in the index number and the curLevel of that object.
					AddTask(i, ReportData[0]["WorkObj"][task]["Level"]);
				}
			}
		}

	// else taskIndex and WokrObj not in ReportData
	} else {
		// initializes the first task if its a first time user and taskIndex does not exist in localStorage.
		AddTask(0, 0);
	}	
}

//  DONE WORKING
function DefineIndex() {

	var myNode = document.getElementById("clients");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}

	var o = document.createElement("option");
	o.value = "";
	o.disabled = true;
	o.selected = true;
	o.innerHTML = "Select Client by ID:";
	myNode.appendChild(o);
	SetAttr(false);
}

//
function DefineClients() {

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	
	if(ReportData[0]["ClientsData"].length > 0) {
		// Populate Clients
		PopulateClients();
	}
}


// ##########ADD AND REMOVE TASK FUNCTIONS############# DONE WORKING

function NewTask() {

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	AddTask(ReportData[0]["OtherObj"][0]["TaskIndex"], ReportData[0]["OtherObj"][0]["Level"])
}

function AddTask(taskIndex, level) {

	taskIndex++;
	var row = document.createElement("div");
	row.setAttribute("class", "row ptop");
	row.setAttribute("id", "storedContentRow" + taskIndex);
	var col = document.createElement("div");
	col.setAttribute("class", "col");
	col.setAttribute("id", "storedContentCol" + taskIndex);
	var input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("class", "form-control pull-right");
	input.setAttribute("id", "storedContent" + taskIndex);
	input.style.width = "100%";
	input.placeholder = "Something you did for this month";
	input.setAttribute("onChange", "UpdateStoredWorkData(this);");
	document.getElementById("workRow").before(row);
	document.getElementById("storedContentRow" + taskIndex).appendChild(col);
	document.getElementById("storedContentCol" + taskIndex).appendChild(input);
	

	if(taskIndex > 1) {

		// create div for + - btn and set id
		var col2 = document.createElement("div");
		col2.setAttribute("id", "storedContentInputCol" + taskIndex);
		col2.setAttribute("class", "col-3");
		// create and set attributes for + btn
		var up = document.createElement("input");
		up.setAttribute("type", "button");
		up.setAttribute("class", "btn btn-primary");
		up.setAttribute("name", "workPerformedFieldUp" + taskIndex);
		up.setAttribute("id", "workPerformedFieldUp" + taskIndex);
		up.setAttribute("value", "+");
		up.setAttribute("onClick", "UpdateStoredWorkLevel(storedContent" + taskIndex + ", -1, false);");
		// create and set attributes for + btn
		var down = document.createElement("input");
		down.setAttribute("type", "button");
		down.setAttribute("class", "btn btn-primary");
		down.setAttribute("name", "workPerformedFieldDown" + taskIndex);
		down.setAttribute("id", "workPerformedFieldDown" + taskIndex);
		down.setAttribute("value", "-");
		down.setAttribute("onClick", "UpdateStoredWorkLevel(storedContent" + taskIndex + ", 1, false);");
		var del = document.createElement("input");
		del.setAttribute("type", "button");
		del.setAttribute("class", "btn btn-danger");
		del.setAttribute("name", "workPerformedFieldDel" + taskIndex);
		del.setAttribute("id", "workPerformedFieldDel" + taskIndex);
		del.setAttribute("value", "del");
		del.setAttribute("onClick", "DeleteTask(storedContentRow" + taskIndex + ", " + taskIndex + ");");
		document.getElementById("storedContentRow" + taskIndex).appendChild(col2);
		document.getElementById("storedContentInputCol" + taskIndex).appendChild(up);
		document.getElementById("storedContentInputCol" + taskIndex).appendChild(down);
		document.getElementById("storedContentInputCol" + taskIndex).appendChild(del);

		// if level is 0 - base level. We want to disable the up Btn 
		if(level <= 0) {
			var upBtn = document.getElementById("workPerformedFieldUp" + taskIndex);
			upBtn.disabled = true;
		} else if(level >= 5) {
			var downBtn = document.getElementById("workPerformedFieldDown" + taskIndex);
			downBtn.disabled = true;
		}
	}

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	// create taskName with the current taskIndex
	var taskName = "storedContent";
	taskName = taskName.concat(taskIndex);

	// check if we have stored workdata in local storage
	if(ReportData[0]["WorkObj"].length > 0) {

		var exist = false;

		for(task in ReportData[0]["WorkObj"]) {
			if (ReportData[0]["WorkObj"][task]["TaskName"] == taskName) {
				exist = true;
			}
		}
		
		if (exist == true) {

			for(task in ReportData[0]["WorkObj"]) {

				//if task name is same as current creation
				if (ReportData[0]["WorkObj"][task]["TaskName"] == taskName) {

					// set input value to what is in localStorage
					input.value = ReportData[0]["WorkObj"][task]["Body"];

					// set Level for Input
					for(var i = 0; i < ReportData[0]["WorkObj"][task]["Level"]; i++) {
						UpdateStoredWorkLevel(input, 1, true)
					}

				}

			}

		} else if (exist == false) {

			// create workTask object and assign values.
			var workTask = {
				"TaskName": taskName,
				"TaskCount": taskIndex,
				"Level": level,
				"Body": document.getElementById(taskName).value,
			};

			// push workTask into WorkObj
			ReportData[0]["WorkObj"].push(workTask);

			// set Trackers for Level and TaskIndex

			// set Level for Input
			for(var i = 0; i < level; i++) {
				UpdateStoredWorkLevel(input, 1, true)
			}
			ReportData[0]["OtherObj"][0]["Level"] = level;
			ReportData[0]["OtherObj"][0]["TaskIndex"] = taskIndex;

		}

	// else nothing in storate
	} else {



		// create workTask object and assign values.
		var workTask = {
			"TaskName": taskName,
			"TaskCount": taskIndex,
			"Level": level,
			"Body": document.getElementById(taskName).value,
		};

		// push workTask into WorkObj
		ReportData[0]["WorkObj"].push(workTask);

		// set Trackers for Level and TaskIndex

		ReportData[0]["OtherObj"][0]["Level"] = level;
		ReportData[0]["OtherObj"][0]["TaskIndex"] = taskIndex;
		
	}

	localStorage.setItem("ReportData", JSON.stringify(ReportData));
}

function DeleteTask(obj, taskIndex) {

	var delTask = "storedContent" + taskIndex;
	var id = obj.id;
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));


	// REMOVE OBJECT TASK FROM WORKOBJ
	for(var i = 0; i < ReportData[0]["WorkObj"].length; i++) {
		if(ReportData[0]["WorkObj"][i]["TaskName"] == delTask) {

			// REMOVE THE HTML ELEMENT 
			var myNode = document.getElementById(id);
			myNode.parentNode.removeChild(myNode);

			// REORDER TASK AFTER TASK TO BE REMOVED
			for(var j = i + 1; j < ReportData[0]["WorkObj"].length; j++) {

				var nextElement = j + 1

				// SET TASK NAME BACK ONE AND SET TASKINDEX BACK ONE
				ReportData[0]["WorkObj"][j]["TaskName"] = "storedContent".concat(j);
				ReportData[0]["WorkObj"][j]["TaskCount"] = j;

				// CHANGE HTML ELEMENTS ID BACK ONE

				var row = document.getElementById("storedContentRow" + nextElement);
				var col = document.getElementById("storedContentCol" + nextElement);
				var input = document.getElementById("storedContent" + nextElement);
				var col2 = document.getElementById("storedContentInputCol" + nextElement);
				var up = document.getElementById("workPerformedFieldUp" + nextElement);
				var down = document.getElementById("workPerformedFieldDown" + nextElement);
				var del = document.getElementById("workPerformedFieldDel" + nextElement);

				row.setAttribute("id", "storedContentRow" + j);
				row.setAttribute("name", "storedContentRow" + j);
				col.setAttribute("id", "storedContentCol" + j);
				col.setAttribute("name", "storedContentCol" + j);
				input.setAttribute("id", "storedContent" + j);
				input.setAttribute("name", "storedContent" + j);
				input.setAttribute("onChange", "UpdateStoredWorkData(this);");
				col2.setAttribute("id", "storedContentInputCol" + j);
				col2.setAttribute("name", "storedContentInputCol" + j);
				up.setAttribute("id", "workPerformedFieldUp" + j);
				up.setAttribute("name", "workPerformedFieldUp" + j);
				up.setAttribute("onClick", "UpdateStoredWorkLevel(storedContent" + j + ", -1, false);");
				down.setAttribute("id", "workPerformedFieldDown" + j);
				down.setAttribute("name", "workPerformedFieldDown" + j);
				down.setAttribute("onClick", "UpdateStoredWorkLevel(storedContent" + j + ", 1, false);");
				del.setAttribute("id", "workPerformedFieldDel" + j);
				del.setAttribute("name", "workPerformedFieldDel" + j);
				del.setAttribute("onClick", "DeleteTask(storedContentRow" + j + ", " + j + ");");

			}
			ReportData[0]["WorkObj"].splice(i, 1);

			// ALL CHANGABLE ELEMENTS REMOVED - RESET LEVEL
			if(i == ReportData[0]["WorkObj"].length && i == 1) {
				ReportData[0]["OtherObj"][0]["Level"] = 0;
			}
			// ALL CHANGABLE ELEMENTS REMOVED - RESET LEVEL
			if(i == ReportData[0]["WorkObj"].length) {
				ReportData[0]["OtherObj"][0]["Level"] = ReportData[0]["WorkObj"][i - 1]["Level"];
			}
			ReportData[0]["OtherObj"][0]["TaskIndex"] = ReportData[0]["OtherObj"][0]["TaskIndex"] - 1;
		}
	}

	localStorage.setItem("ReportData", JSON.stringify(ReportData));
}


// ######### UPDATE STORED DATA FUNCTIONS ############# DONE WORKING

// updates options and work performed on change. Called from textArea and text input onchange event.
function UpdateStoredData(obj) {

	var id = obj.id;
	var value = obj.value;
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	ReportData[0]["WorkMessageObj"][0][id] = value;
	localStorage.setItem("ReportData", JSON.stringify(ReportData));
}

// updates options and work performed on change. Called from textArea and text input onchange event.
function UpdateStoredWorkData(obj) {

	var id = obj.id;
	var value = obj.value;

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	for(task in ReportData[0]["WorkObj"]) {
		if(ReportData[0]["WorkObj"][task]["TaskName"] == id) {
			ReportData[0]["WorkObj"][task]["Body"] = value;
		}
	}

	localStorage.setItem("ReportData", JSON.stringify(ReportData));
}

// 
function UpdateStoredWorkLevel(obj, offset, bol) {

	if(bol == true) {

		//if offset is == 1
		if(offset == 1) {
			// get width of obj
			var width = obj.style.width;
			//strip % in width
			width.replace(/\s%/gi, "");
			// parse width as int
			width = parseInt(width);
			// subtract 10 of width
			var newWidth = width - 10;
			// turn new width back into string
			newWidth = newWidth.toString();
			// add the % back to the new width
			newWidth = newWidth.concat("%");
			// set obj width to newWidth
			obj.style.width = newWidth;
		}
		
	} else if (bol == false) {

		// get id of object passed
		var id = obj.id;

		// get work from localStorage
		var ReportData = JSON.parse(localStorage.getItem("ReportData"));

		// for each obj as client in work array as tempArr
		for(task in ReportData[0]["WorkObj"]) {
			//if clint taskName equals the current obj id being passed
			if(ReportData[0]["WorkObj"][task]["TaskName"] == id) {
				// set the new level for the client level based on offset
				ReportData[0]["WorkObj"][task]["Level"] = ReportData[0]["WorkObj"][task]["Level"] + offset;

				if(ReportData[0]["WorkObj"][task]["TaskCount"] == ReportData[0]["WorkObj"].length) {
					ReportData[0]["OtherObj"][0]["Level"] = ReportData[0]["WorkObj"][task]["Level"];
				}

				//if offset is == 1
				if(offset == 1) {
					// get width of obj
					var width = obj.style.width;
					//strip % in width
					width.replace(/\s%/gi, "");
					// parse width as int
					width = parseInt(width);
					// subtract 10 of width
					var newWidth = width - 10;
					// turn new width back into string
					newWidth = newWidth.toString();
					// add the % back to the new width
					newWidth = newWidth.concat("%");
					// set obj width to newWidth
					obj.style.width = newWidth;
				} else if (offset == -1) {
					// get width of obj
					var width = obj.style.width;
					//strip % in width
					width.replace(/\s%/gi, "");
					// parse width as int
					width = parseInt(width);
					// Add 10 of width
					var newWidth = width + 10;
					// turn new width back into string
					newWidth = newWidth.toString();
					// add the % back to the new width
					newWidth = newWidth.concat("%");
					// set obj width to newWidth
					obj.style.width = newWidth;
				}
				
				// get up and down btn for current work field
				upBtn = document.getElementById("workPerformedFieldUp" + ReportData[0]["WorkObj"][task]["TaskCount"]);
				downBtn = document.getElementById("workPerformedFieldDown" + ReportData[0]["WorkObj"][task]["TaskCount"]);

				// if level is 0 then we want to disable the upBtn
				if(ReportData[0]["WorkObj"][task]["Level"] <= 0) {
					if(upBtn.disabled == false) {
						upBtn.disabled = true;
					}
				// if level is above 0 we want to enable the upBtn
				} else if(ReportData[0]["WorkObj"][task]["Level"] > 0) {
					if(upBtn.disabled == true) {
						upBtn.disabled = false;
					}
				
				}
				// if level is 5 then we want to disable downBtn
				if(ReportData[0]["WorkObj"][task]["Level"] >= 5) {
					if(downBtn.disabled == false) {
						downBtn.disabled = true;
					}
				// if level is below 5 we want to enable downBtn
				} else if(ReportData[0]["WorkObj"][task]["Level"] < 5) {
					if(downBtn.disabled == true) {
						downBtn.disabled = false;
					}
				}
			}
		}

		// add work back to localStorage
		localStorage.setItem("ReportData", JSON.stringify(ReportData));
	}
}

function UpdateStoredPerformanceData(obj) {
	
	var id = obj.id;
	var value = obj.value;

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	for(item in ReportData[0]["PerformanceMessageObj"][0]) {
		if(item == id) {
			ReportData[0]["PerformanceMessageObj"][0][item] = value;
			break;
		}
	}

	localStorage.setItem("ReportData", JSON.stringify(ReportData));
}

function UpdateStoredPPCData(obj) {
	
	var id = obj.id;
	var value = obj.value;

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	for(item in ReportData[0]["PPCMessageObj"][0]) {
		if(item == id) {
			ReportData[0]["PPCMessageObj"][0][item] = value;
			break;
		}
	}

	localStorage.setItem("ReportData", JSON.stringify(ReportData));
}

function UpdateStoredServiceData(obj) {
	
	var id = obj.id;
	var value = obj.value;

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	for(item in ReportData[0]["ServicesMessageObj"][0]) {
		if(item == id) {
			ReportData[0]["ServicesMessageObj"][0][item] = value;
			break;
		}
	}

	localStorage.setItem("ReportData", JSON.stringify(ReportData));
}

function UpdateStoredOtherData(obj) {
	
	var id = obj.id;
	var value = obj.value;

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	for(item in ReportData[0]["OtherMessageObj"][0]) {
		if(item == id) {
			ReportData[0]["OtherMessageObj"][0][item] = value;
			break;
		}
	}

	localStorage.setItem("ReportData", JSON.stringify(ReportData));
}

function UpdateSelectedIndex() {

	var select = document.getElementById("clients");        
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	ReportData[0]["OtherObj"][0]["SelectedIndex"] = select.selectedIndex;
	localStorage.setItem("ReportData", JSON.stringify(ReportData));
	SetAttr(true);
}

// ##########CLEAR DATA FUNCTIONS#############  

// clears Optional Notes local storage cache. Called from clear optional cache button -> NEED TO REDO *************************************
function ClearAllOptionsCache(e) {

	// get ReportData from localStorage Parsed into a JSON
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	// clear option cache and run defineOptions to set them to default.
	var clearConfirm = confirm("Are you sure you want to clear all Optional Cache? This will Reset All Optional Data to default settings");
	if (clearConfirm == true) {
		ReportData[0]["WorkMessageObj"][0]["SchemaNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["DentistSchemaNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["ReviewsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["AggrReviewSchemaNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["YelpNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["RichCardsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["InternalLinkingNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["301RedirectsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["BrokenLinksNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["KeywordPhrasesNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["KeywordDensityNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["CompetitiveAnalysisNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["CompetitiveSEOKeyphrasesNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["BlogsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["ContentNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["FreshContentNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["CononicalNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["IndexingNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["AltTextNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["TitleTagsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["MetaDescriptionNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["MetaKeywordsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["HTagsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["BingNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["GMBNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["DataAggregatorsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["DirectoryCompletionNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["DuplicateListingNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["GMBAppointmentURLNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["GMBServicesURLNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["GMBPostsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["VideoSEONotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["RobotstxtNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["SitemapNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["PageLoadingTimeNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["PhoneTrackingNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["WordPressUpdateNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["UpdatedPluginsNotes"] = "";
		ReportData[0]["WorkMessageObj"][0]["WorkAdditionalNotes"] = "";
		localStorage.setItem("ReportData", JSON.stringify(ReportData));
		DefineOptions();
	}
	e.preventDefault();
}

// clears Optional Notes local storage cache. Called from clear optional cache button -> NEED TO REDO *************************************
function ClearCheckedOptionsCache(e) {

	// get ReportData from localStorage Parsed into a JSON
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	// clear option cache and run defineOptions to set them to default.
	var clearConfirm = confirm("Are you sure you want to clear all checked Optional Cache? This will Reset Checked Optional Data to default settings");
	if (clearConfirm == true) {
		if(document.getElementById("schema").checked) {
			ReportData[0]["WorkMessageObj"][0]["SchemaNotes"] = "";
		}
		if(document.getElementById("localbusinessschema").checked) {
			ReportData[0]["WorkMessageObj"][0]["DentistSchemaNotes"] = "";
		}
		if(document.getElementById("reviews").checked) {
			ReportData[0]["WorkMessageObj"][0]["ReviewsNotes"] = "";
		}
		if(document.getElementById("aggregatereviewschema").checked) {
			ReportData[0]["WorkMessageObj"][0]["AggrReviewSchemaNotes"] = "";
		}
		if(document.getElementById("yelp").checked) {
			ReportData[0]["WorkMessageObj"][0]["YelpNotes"] = "";
		}
		if(document.getElementById("richcard").checked) {
			ReportData[0]["WorkMessageObj"][0]["RichCardsNotes"] = "";
		}
		if(document.getElementById("internallinking").checked) {
			ReportData[0]["WorkMessageObj"][0]["InternalLinkingNotes"] = "";
		}
		if(document.getElementById("redirects").checked) {
			ReportData[0]["WorkMessageObj"][0]["301RedirectsNotes"] = "";
		}
		if(document.getElementById("brokenlinks").checked) {
			ReportData[0]["WorkMessageObj"][0]["BrokenLinksNotes"] = "";
		}
		if(document.getElementById("keywordphrases").checked) {
			ReportData[0]["WorkMessageObj"][0]["KeywordPhrasesNotes"] = "";
		}
		if(document.getElementById("keyworddensity").checked) {
			ReportData[0]["WorkMessageObj"][0]["KeywordDensityNotes"] = "";
		}
		if(document.getElementById("competitiveanalysis").checked) {
			ReportData[0]["WorkMessageObj"][0]["CompetitiveAnalysisNotes"] = "";
		}
		if(document.getElementById("competitiveseokeyphrases").checked) {
			ReportData[0]["WorkMessageObj"][0]["CompetitiveSEOKeyphrasesNotes"] = "";
		}
		if(document.getElementById("blogs").checked) {
			ReportData[0]["WorkMessageObj"][0]["BlogsNotes"] = "";
		}
		if(document.getElementById("content").checked) {
			ReportData[0]["WorkMessageObj"][0]["ContentNotes"] = "";
		}
		if(document.getElementById("freshcontent").checked) {
			ReportData[0]["WorkMessageObj"][0]["FreshContentNotes"] = "";
		}
		if(document.getElementById("cononical").checked) {
			ReportData[0]["WorkMessageObj"][0]["CononicalNotes"] = "";
		}
		if(document.getElementById("indexing").checked) {
			ReportData[0]["WorkMessageObj"][0]["IndexingNotes"] = "";
		}
		if(document.getElementById("alttext").checked) {
			ReportData[0]["WorkMessageObj"][0]["AltTextNotes"] = "";
		}
		if(document.getElementById("titletags").checked) {
			ReportData[0]["WorkMessageObj"][0]["TitleTagsNotes"] = "";
		}
		if(document.getElementById("metadescription").checked) {
			ReportData[0]["WorkMessageObj"][0]["MetaDescriptionNotes"] = "";
		}
		if(document.getElementById("metakeywords").checked) {
			ReportData[0]["WorkMessageObj"][0]["MetaKeywordsNotes"] = "";
		}
		if(document.getElementById("htags").checked) {
			ReportData[0]["WorkMessageObj"][0]["HTagsNotes"] = "";
		}
		if(document.getElementById("bing").checked) {
			ReportData[0]["WorkMessageObj"][0]["BingNotes"] = "";
		}
		if(document.getElementById("googlebusiness").checked) {
			ReportData[0]["WorkMessageObj"][0]["GMBNotes"] = "";
		}
		if(document.getElementById("dataaggregators").checked) {
			ReportData[0]["WorkMessageObj"][0]["DataAggregatorsNotes"] = "";
		}
		if(document.getElementById("directorycompletion").checked) {
			ReportData[0]["WorkMessageObj"][0]["DirectoryCompletionNotes"] = "";
		}
		if(document.getElementById("duplicatelisting").checked) {
			ReportData[0]["WorkMessageObj"][0]["DuplicateListingNotes"] = "";
		}
		if(document.getElementById("gmbappointmenturl").checked) {
			ReportData[0]["WorkMessageObj"][0]["GMBAppointmentURLNotes"] = "";
		}
		if(document.getElementById("gmbservicesurl").checked) {
			ReportData[0]["WorkMessageObj"][0]["GMBServicesURLNotes"] = "";
		}
		if(document.getElementById("gmbpost").checked) {
			ReportData[0]["WorkMessageObj"][0]["GMBPostsNotes"] = "";
		}
		if(document.getElementById("videoseo").checked) {
			ReportData[0]["WorkMessageObj"][0]["VideoSEONotes"] = "";
		}
		if(document.getElementById("robotstxt").checked) {
			ReportData[0]["WorkMessageObj"][0]["RobotstxtNotes"] = "";
		}
		if(document.getElementById("sitemap").checked) {
			ReportData[0]["WorkMessageObj"][0]["SitemapNotes"] = "";
		}
		if(document.getElementById("pageloadingtime").checked) {
			ReportData[0]["WorkMessageObj"][0]["PageLoadingTimeNotes"] = "";
		}
		if(document.getElementById("phonetracking").checked) {
			ReportData[0]["WorkMessageObj"][0]["PhoneTrackingNotes"] = "";
		}
		if(document.getElementById("wordpressupdate").checked) {
			ReportData[0]["WorkMessageObj"][0]["WordPressUpdateNotes"] = "";
		}
		if(document.getElementById("updateplugins").checked) {
			ReportData[0]["WorkMessageObj"][0]["UpdatedPluginsNotes"] = "";
		}
		if(document.getElementById("workadditionalnotes").checked) {
			ReportData[0]["WorkMessageObj"][0]["WorkAdditionalNotes"] = "";
		}
		localStorage.setItem("ReportData", JSON.stringify(ReportData));
		DefineOptions();
	}
	e.preventDefault();
}

// clears work performed local storage cache. Called from clear Work Performed cache button
function ClearWorkCache() {

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));


	// get taskIndex and turn it into an int for the loops.
	ReportData[0]["WorkObj"] = [];
	ReportData[0]["OtherObj"][0]["TaskIndex"] = 0;
	ReportData[0]["OtherObj"][0]["Level"] = 0;

	var myNode = document.getElementById("workFields");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}

	var h3 = document.createElement("h3");
	h3.setAttribute("class", "center");
	h3.setAttribute("id", "workH3");
	var row = document.createElement("div");
	row.setAttribute("class", "row text-right ptop");
	row.setAttribute("id", "workRow");
	var col = document.createElement("div");
	col.setAttribute("class", "col");
	col.setAttribute("id", "workCol");
	var clear = document.createElement("input");
	clear.setAttribute("type", "submit");
	clear.setAttribute("class", "btn btn-danger pull-left nomar");
	clear.setAttribute("name", "clearWorkCache");
	clear.setAttribute("id", "clearWorkCache");
	clear.setAttribute("value", "Clear All Performed Work Cache");
	
	var input = document.createElement("input");
	input.setAttribute("type", "button");
	input.setAttribute("class", "btn btn-primary");
	input.setAttribute("name", "workPerformedField");
	input.setAttribute("id", "workPerformedField");
	input.setAttribute("value", "Add New Work Performed Field");

	document.getElementById("workFields").appendChild(h3);
	document.getElementById("workH3").innerHTML = "Performed Work";
	document.getElementById("workFields").appendChild(row);
	document.getElementById("workRow").appendChild(col);
	document.getElementById("workCol").appendChild(clear);
	document.getElementById("workCol").appendChild(input);
	document.getElementById("workPerformedField").addEventListener("click", NewTask);
	document.getElementById("clearWorkCache").addEventListener("click", ClearWorkCache);

	localStorage.setItem("ReportData", JSON.stringify(ReportData));

	DefineContent();
}

// clears Optional Notes local storage cache. Called from clear optional cache button
function ClearDataCache() {

	// clear option cache and run defineOptions to set them to default.
	var clearConfirm = confirm("Are you sure you want to clear all Cache? This will Clear any Cache Client Data");
	if (clearConfirm == true) {

		var ReportData = JSON.parse(localStorage.getItem("ReportData"));

		ReportData[0]["SEOObj"] = [];
		ReportData[0]["AdWordsObj"] = [];
		ReportData[0]["BlogObj"] = [];
		ReportData[0]["ClientsData"] = [];
		ReportData[0]["OtherObj"][0]["SelectedIndex"] = new Number();
		localStorage.setItem("ReportData", JSON.stringify(ReportData));
		DefineIndex();
		return false;
	} 
}

function ClearPerformanceNotes() {

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	ReportData[0]["PerformanceMessageObj"][0]["GoogleAlgorithmChangeNotes"] = "";
	ReportData[0]["PerformanceMessageObj"][0]["TrendsNotes"] = "";
	ReportData[0]["PerformanceMessageObj"][0]["PerformanceAdditionalNotes"] = "";
	localStorage.setItem("ReportData", JSON.stringify(ReportData));
	DefineOptions();
}

function ClearPPCNotes() {

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	ReportData[0]["PPCMessageObj"][0]["PPCNotes"] = "";
	localStorage.setItem("ReportData", JSON.stringify(ReportData));
	DefineOptions();
}

function ClearServiceOtherNotes() {

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	ReportData[0]["OtherMessageObj"][0]["OnlineAppointmentsNotes"] = "";
	ReportData[0]["OtherMessageObj"][0]["ORGNotes"] = "";
	ReportData[0]["OtherMessageObj"][0]["HealthgradesNotes"] = "";
	ReportData[0]["OtherMessageObj"][0]["ServicesNotes"] = "";
	ReportData[0]["OtherMessageObj"][0]["PhotoRequestNotes"] = "";
	ReportData[0]["OtherMessageObj"][0]["CommentsNotes"] = "";

	localStorage.setItem("ReportData", JSON.stringify(ReportData));
	DefineOptions();
}


// populates selection box with clients from json data. Called from loadFile
function PopulateClients() {

	DefineIndex();

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	var select = document.getElementById("clients");
	var option = "";
	
	for (client in ReportData[0]["ClientsData"]) {
		select.options[select.options.length] = new Option(ReportData[0]["ClientsData"][client]["Client ID"] + " " + ReportData[0]["ClientsData"][client]["Client Name"]);
	}

	if (ReportData[0]["OtherObj"][0]["SelectedIndex"] > 0) {
		var selectedIndex = parseInt(ReportData[0]["OtherObj"][0]["SelectedIndex"]);
		document.getElementById("clients").options.selectedIndex = selectedIndex;
		SetAttr(true);
	}
}

// ##########REPORT OUTPUT GENERATION PROCESSING FUNCTIONS#############

// loads client data. taskHTML = CheckTasks -> seoHTML = GetClientSEOData -> adwordsHTML = GetClientAdWordsData -> 
function LoadData(ClientID) {

	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	//loop through file and create new client with constructor
	for (clients in ReportData[0]["ClientsData"]) {
		var client = ReportData[0]["ClientsData"][clients]
		var ID = ReportData[0]["ClientsData"][clients]["Client ID"];
		var Name = ReportData[0]["ClientsData"][clients]["Client Name"];
		var IDName = ID + " " + Name;
		if (ID + " " + Name == ClientID) {

			var taskHTML = CheckTasks(client);

			var workMessagesHTML = CheckWorkOptions();

			if(client.hasOwnProperty("Total Cur")) {
				var seoHTML = GetClientSEOData(client);
			} else {
				var seoHTML = [];
			}

			var performaceMessagesHTML = CheckPerformanceOptions();

			if(client.hasOwnProperty("Cost Cur")) {
				var adwordsHTML = GetClientAdWordsData(client);
			} else {
				var adwordsHTML = [];
			}

			var ppcMessagesHTML = CheckPPCOptions();

			var serviceMessagesHTML = CheckServiceOptions();

			var otherMessagesHTML = CheckOtherOptions();

			var contactMessagesHTML = CheckContactOptions();

			var outputHTML = BuildHTML(taskHTML, workMessagesHTML, seoHTML, performaceMessagesHTML, adwordsHTML, ppcMessagesHTML, serviceMessagesHTML, otherMessagesHTML, contactMessagesHTML);

			outputHTML = outputHTML.join("");

			//Preview

			preview = '<h1 style="text-align:center;">';
			preview = preview.concat(IDName);
			preview = preview.concat("</h1><hr />");
			preview = preview.concat(outputHTML);
			document.getElementById("preview").innerHTML = preview;


			// Final Output
			document.getElementById("code").innerHTML = "";
			var code = document.createTextNode(outputHTML);
			document.getElementById("code").appendChild(code);
		}
	}
}

// Function for getting taskHTML. GetReportMonth -> GetClientBlogData ->
function CheckTasks(client) {
	
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));

	var taskHTML = [
		"<br><strong><u>SEO Work Performed</u></strong><br>",
		"<ul><li>"
	];

	taskHTML = GetClientBlogData(client, taskHTML);

	// 
	if(ReportData[0]["OtherObj"] != undefined && ReportData[0]["WorkObj"] != undefined) {

		// temp task Array
		var taskArr = [];
		// for each task in task list -> Creates array with tasks that have something in it to process.
		for(task in ReportData[0]["WorkObj"]) {
			// if the task has a body
			if(ReportData[0]["WorkObj"][task]["Body"] !== null && ReportData[0]["WorkObj"][task]["Body"] !== undefined) {
				// if the body has something in it to process
				var temp = ReportData[0]["WorkObj"][task]["Body"].replace(" ", "");
				if(temp !== "") {
					// push task with body and has something to process into new temp task Array
					taskArr.push(ReportData[0]["WorkObj"][task]);
				}
			}
		}

		// if not tasks in list add closer to taskHTML.
		if(taskArr.length == 0) {
			taskHTML.push("</ul>");
		}

		// for each task in task list
		for(task in taskArr) {
			task = parseInt(task);
			//if we are on the first task
			if(task == 0) {

				var curLevel = taskArr[task]["Level"];

				// if taskHTML has something in it (BLOGS) Open Item
				if(taskHTML.length > 3) {
					taskHTML.push("<li>");
				}

				//ADD body to ITEM
				taskHTML.push(taskArr[task]["Body"]);

				if(taskArr.length > 1) {
					var nextLevel = taskArr[task + 1]["Level"]

					//if curLevel SAME AS nextLevel Close Item
					if(curLevel == nextLevel) {
						taskHTML.push("</li>");
					} 
				} else {
					taskHTML.push("</li></ul>");
				}

				

			// else if we are on the last task
			} else {
				var curLevel = taskArr[task]["Level"];
				var preLevel = taskArr[task - 1]["Level"];
				var header = "";
				var body = taskArr[task]["Body"];

				// if levels match on both sides YEY!
				if(preLevel == curLevel) {
					taskHTML.push("<li>");
					taskHTML.push(taskArr[task]["Body"]);
				} else {

					// header
					if(preLevel < curLevel) {
						while(preLevel < curLevel) {
						// header 0 IS Less then 3
							header = header.concat("<ul><li>");
							preLevel++;
						} 
					// else 3 IS SAME AS 3
					} else if(preLevel > curLevel) {
						while(preLevel > curLevel) {
							header = header.concat("</li></ul>");
							curLevel++;
						}
						header = header.concat("</li><li>");
					}

					taskHTML.push(header);
					taskHTML.push(taskArr[task]["Body"]);
				}

				// if NOT on last Task - Check to see if curLevel SAME AS nextLevel -> Add Closing to Current Item
				if(task != taskArr.length - 1) {
					var nextLevel = taskArr[task + 1]["Level"];
					var curLevel = taskArr[task]["Level"];
					if(curLevel == nextLevel) {
						taskHTML.push("</li>");
					}
				// else ON last Task - Close Footer 
				} else {
					var curLevel = taskArr[task]["Level"];
					var footer = "";
					var exit = "</li></ul>";

					// WHILE curLevel is GREATER THEN 0
					while(curLevel > 0) {
						// ADD ANOTHER CLOSING FOOTER
						footer = footer.concat("</li></ul>");
						curLevel--;
					}

					//Close List Item
					taskHTML.push(footer);

					//Close List Item
					taskHTML.push(exit);
				}
			}
		}

		if(taskHTML.length > 3) {
			//return final taskHTML
			return (taskHTML);
		} else {
		 	taskHTML = [];
		 return(taskHTML);
		}
	}
}

// ##########GET REPORT MONTH FUNCTIONS############# DONE WORKING
function GetReportMonth() {

		// gets current date
		var d = new Date();
		// gets last month based on current date (Note the skewed array of preMonth to achieve this.)
		var preMonth = new Array();
			preMonth[11] = "November";
			preMonth[0] = "December";
			preMonth[1] = "January";
			preMonth[2] = "February";
			preMonth[3] = "March";
			preMonth[4] = "April";
			preMonth[5] = "May";
			preMonth[6] = "June";
			preMonth[7] = "July";
			preMonth[8] = "August";
			preMonth[9] = "September";
			preMonth[10] = "October";
		var reportMonth = preMonth[d.getMonth()];

		return(reportMonth);
}

// ##########BLOGGING DATA PROCESSING FUNCTIONS############# DONE WORKING

function GetClientBlogData(client, taskHTML) {

	var blogCount = 0;
	var plural = "";
	var titles = [];

	// starting at 1 instead of 0 for blog count. - ONLY CHECKING FOR UP TO 10 BLOGS, DUE TO NOT BEING ABLE TO FIGURE OUT DUPLICATE OBJECT PROPERTY BLOG TITLE ISSUE. WORK AROUND IS LABEL EACH BLOG TITLE WITH A INCREMENTAL NUMBER AT THE END STARTING WITH 1.
	for(var x = 1; x < 11; x++) {

		var blog = "Blog Title" + x;
		if(client[blog]) {
			if(client[blog] != "NO BLOG FOR THIS MONTH") {
				titles[x] = client[blog];
				blogCount++;
			}
		}
	}

	if(blogCount > 0 ) {
		if(blogCount > 1) {
			plural = "s";
		}

		var intro = "Added " + blogCount +" new blog" + plural + " to site:<ul>";
		taskHTML.push(intro);

		for(title in titles) {
			taskHTML.push("<li>" + titles[title] + "</li>");
		}

		var exit = "</ul></li>"
		taskHTML.push(exit);
	}

	return(taskHTML);
}

// ##########SEO DATA PROCESSING FUNCTIONS############# DONE WORKING

function GetClientSEOData(client) {


	var seoHTML = [
		"<br><strong><u>Website Performance</u></strong><br><ul>",
		"</ul>"
	];

	//Total Site Visitors
	seoHTML = ClientSEOData("Total Site Visitors", client["Total Cur"], client["Total Pre"], seoHTML);
	//Unique
	seoHTML = ClientSEOData("Unique", client["Unique Cur"], client["Unique Pre"], seoHTML);
	//Organic
	seoHTML = ClientSEOData("Organic", client["Org Cur"], client["Org Pre"], seoHTML);
	//Direct
	seoHTML = ClientSEOData("Direct", client["Dir Cur"], client["Dir Pre"], seoHTML);
	//Paid
	seoHTML = ClientSEOData("Paid", client["Paid Cur"], client["Paid Prev"], seoHTML);
	//Google
	seoHTML = ClientSEOData("Google", client["Google Cur"], client["Google Pre"], seoHTML);
	//Social
	seoHTML = ClientSEOData("Social", client["Soc Cur"], client["Soc Pre"], seoHTML);
	//Referalls
	seoHTML = ClientSEOData("Referalls", client["Ref Cur"], client["Ref Pre"], seoHTML);
	//Phone Calls
	seoHTML = ClientSEOData("Phone Calls", client["Call Cur"], client["Call Pre"], seoHTML);
	//Organic Landing Pages
	seoHTML = ClientSEOData("Organic Landing Pages", client["Org Landing Pages Cur"], client["Org Landing Pages Pre"], seoHTML);


	if(seoHTML.length > 2) {
		//return final taskHTML
		return (seoHTML);
	} else {
	 	seoHTML = [];
	 return(seoHTML);
	}
}

// calculates percentage change of last month data to current month data. Called from loadClient function
function ClientSEOData(title, cur, pre, seoHTML) {

	if (cur != 0 || pre != 0) {
		if (pre == 0) {

			if (cur > 0) {
				var difference = "increase";
			} else {
				var difference = "decrease";
			}

			var data = "<b>" + title + "</b>: There was a " +
				difference +
				" between this month (" +
				cur +
				") and last month (" + pre + ").";

		} else {
			//calculate percent difference between cur and pre
			var difference = parseInt(cur) - parseInt(pre);
			var differenceDivided = parseInt(difference) / parseInt(pre);
			var percentChange = (differenceDivided * 100).toFixed(1);

			var data = "<b>" + title + "</b>: There was a " +
				percentChange +
				"% change between this month (" +
				cur +
				") and last month (" + pre + ").";			
		}
		//add the client data to the workHTML array
		seoHTML.splice(-1, 0, "<li>" + data + "</li>");
	}
	return(seoHTML);
}


// ##########ADWORDS DATA PROCESSING FUNCTIONS############# DONE WORKING
function GetClientAdWordsData(client) {

	var adwordsHTML = [
		"<br><strong><u>PPC Performance</u></strong><br><ul>",
		"</ul>"
	];

	// Impressions
	adwordsHTML = ClientAdWordsData("Impressions", client["Impr Cur"], client["Impr Pre"], adwordsHTML);
	// Clicks
	adwordsHTML = ClientAdWordsData("Clicks", client["Clicks Cur"], client["Clicks Pre"], adwordsHTML);
	// CTR
	adwordsHTML = ClientAdWordsData("Click-Through-Rate", client["CTR Cur"], client["CTR Pre"], adwordsHTML);
	// CPC
	adwordsHTML = ClientAdWordsData("Cost-Per-Click", client["CPC Cur"], client["CPC Pre"], adwordsHTML);
	// Phone Calls
	adwordsHTML = ClientAdWordsData("Phone Calls", client["Phone Cur"], client["Phone Pre"], adwordsHTML);
	// Conversions
	adwordsHTML = ClientAdWordsData("Conversions", client["Conv Cur"], client["Conv Pre"], adwordsHTML);

	if(adwordsHTML.length > 2) {
		//return final taskHTML
		return (adwordsHTML);
	} else {
	 	adwordsHTML = [];
	 return(adwordsHTML);
	}
}

function ClientAdWordsData(title, cur, pre, adwordsHTML) {

	var prefix = "";
	var suffix = "";
	var cur = Number(cur);
	var pre = Number(pre);
	var modifierSuffix = "change";

	// One has a value in it to process
	if (cur > 0 || pre > 0) {

	// Pre is 0 (first Month)
		if (pre == 0) {

			var data = "<b>" + title + "</b>: There was an increase" +
				" between this month (" + prefix + cur + suffix + ")" +
				" and last month (" + prefix + pre + suffix + ").";

			//add the client data to the workHTML array
		 adwordsHTML.splice(-1, 0, "<li>" + data + "</li>");

		// cur has something in it and pre has something in it to process
		} else if (cur > 0) {

			if (cur > pre) {
				switch(title) {
					case "Conversions":
						modifierSuffix = "increase";
						break;
					case "Click-Through-Rate":
						modifierSuffix = "increase";
						suffix = "%";
						break;
					case "Cost":
						modifierSuffix = "increase";
						prefix = "$";
						break;
					case "Cost-Per-Click":
						modifierSuffix = "increase";
						prefix = "$";
						break;
					case "Impressions":
						modifierSuffix = "increase";
						break;
					case "Clicks":
						modifierSuffix = "increase";
						break;
				}

				var difference = Number(cur).toFixed(3) - Number(pre).toFixed(3);
				var differenceDivided = Number(difference).toFixed(3) / Number(pre).toFixed(3);
				var percentChange = (differenceDivided * 100).toFixed(1);
			} else if (pre > cur) { 
				switch(title) {
					case "Conversions":
						modifierSuffix = "decrease";
						break;
					case "Click-Through-Rate":
						modifierSuffix = "decrease";
						suffix = "%";
						break;
					case "Cost":
						modifierSuffix = "decrease";
						prefix = "$";
						break;
					case "Cost-Per-Click":
						modifierSuffix = "decrease";
						prefix = "$";
						break;
					case "Impressions":
						modifierSuffix = "decrease";
						break;
					case "Clicks":
						modifierSuffix = "decrease";
						break;
				}

				//calculate percent difference between cur and pre
				var difference = Number(pre).toFixed(3) - Number(cur).toFixed(3);
				var differenceDivided =Number(difference).toFixed(3) / Number(pre).toFixed(3);
				var percentChange = (differenceDivided * 100).toFixed(1);
			}
			 
			var data = "<b>" + title + "</b>: There was a " + percentChange + "% " + modifierSuffix +
				" between this month (" + prefix + cur + suffix + ")" + 
				" and last month (" + prefix + pre + suffix + ").";

			//add the client data to the workHTML array
			adwordsHTML.splice(-1, 0, "<li>" + data + "</li>");
		}
		// regardless if there is anything in pre and nothing in cur we do not want to show it on the report. As that means pre was the last month and no data for cur to show.
	}
	return(adwordsHTML);
}

// Process to get Optional Message Content -> GetTypeOptions : Return(TypeMessagesHTML)
function CheckWorkOptions() {

	//define messagesHTML
	var workMessagesHTML = [
	];
	var msg = "";

	//build the special messages variables
	msg = GetWorkOptions("schema");
	var schema = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("localbusinessschema");
	var localbusinessschema = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("reviews");
	var reviews = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("aggregatereviewschema");
	var aggregatereviewschema = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("yelp");
	var yelp = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("richcard");
	var richcard = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("internallinking");
	var internallinking = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("redirects");
	var redirects = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("brokenlinks");
	var brokenlinks = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("keywordphrases");
	var keywordphrases = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("keyworddensity");
	var keyworddensity = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("competitiveanalysis");
	var competitiveanalysis = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("competitiveseokeyphrases");
	var competitiveseokeyphrases = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("blogs");
	var blogs = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("content");
	var content = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("freshcontent");
	var freshcontent = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("cononical");
	var cononical = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("indexing");
	var indexing = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("alttext");
	var alttext = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("titletags");
	var titletags = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("metadescription");
	var metadescription = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("metakeywords");
	var metakeywords = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("htags");
	var htags = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("bing");
	var bing = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("googlebusiness");
	var googlebusiness = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("dataaggregators");
	var dataaggregators = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("directorycompletion");
	var directorycompletion = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("duplicatelisting");
	var duplicatelisting = "<em>* " + msg + "</em><br>";

	msg = GetWorkOptions("gmbappointmenturl");
	var gmbappointmenturl = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("gmbservicesurl");
	var gmbservicesurl = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("gmbpost");
	var gmbpost = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("videoseo");
	var videoseo = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("robotstxt");
	var robotstxt = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("sitemap");
	var sitemap = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("pageloadingtime");
	var pageloadingtime = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("phonetracking");
	var phonetracking = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("wordpressupdate");
	var wordpressupdate = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("updateplugins");
	var updateplugins = "<em>* " + msg + "</em><br><br>";

	msg = GetWorkOptions("workadditionalnotes");
	var workadditionalnotes = msg + "<br>";

	//put the special messages in an array
	var messages = {};

	messages["schema"] = schema;
	messages["localbusinessschema"] = localbusinessschema;
	messages["reviews"] = reviews;
	messages["aggregatereviewschema"] = aggregatereviewschema;
	messages["yelp"] = yelp;
	messages["richcard"] = richcard;
	messages["internallinking"] = internallinking;
	messages["redirects"] = redirects;
	messages["brokenlinks"] = brokenlinks;
	messages["keywordphrases"] = keywordphrases;
	messages["keyworddensity"] = keyworddensity;
	messages["competitiveanalysis"] = competitiveanalysis;
	messages["competitiveseokeyphrases"] = competitiveseokeyphrases;
	messages["blogs"] = blogs;
	messages["content"] = content;
	messages["freshcontent"] = freshcontent;
	messages["content"] = content;
	messages["cononical"] = cononical;
	messages["indexing"] = indexing;
	messages["alttext"] = alttext;
	messages["titletags"] = titletags;
	messages["metadescription"] = metadescription;
	messages["metakeywords"] = metakeywords;
	messages["htags"] = htags;
	messages["bing"] = bing;
	messages["googlebusiness"] = googlebusiness;
	messages["dataaggregators"] = dataaggregators;
	messages["directorycompletion"] = directorycompletion;
	messages["duplicatelisting"] = duplicatelisting;
	messages["gmbappointmenturl"] = gmbappointmenturl;
	messages["gmbservicesurl"] = gmbservicesurl;
	messages["gmbpost"] = gmbpost;
	messages["videoseo"] = videoseo;
	messages["robotstxt"] = robotstxt;
	messages["sitemap"] = sitemap;
	messages["pageloadingtime"] = pageloadingtime;
	messages["phonetracking"] = phonetracking;
	messages["wordpressupdate"] = wordpressupdate;
	messages["updateplugins"] = updateplugins;
	messages["workadditionalnotes"] = workadditionalnotes;

	//find out which messages boxes were checked and add to html array
	var mname = "";
	var value = "";

	for (mname in messages) {
		value = messages[mname];
		if (document.getElementById(mname).checked) {
			workMessagesHTML.push(value);
		}
	}
	//return final messagesHTML
	return (workMessagesHTML);
}

// Process to get Optional Messages : Return(msg)
function GetWorkOptions(option) {

	var option = option;
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	var msg = "";

	if(ReportData[0]["WorkMessageObj"][0] != undefined) {
		// If Current Object is MessageObj
		switch (option) {
			case "schema":
				if(ReportData[0]["WorkMessageObj"][0]["SchemaNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["SchemaNotes"];
				} else {
					msg = "";
				}
				break;
			case "localbusinessschema":
				if(ReportData[0]["WorkMessageObj"][0]["DentistSchemaNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["DentistSchemaNotes"];
				} else {
					msg = "";
				}
				break;
			case "reviews":
				if(ReportData[0]["WorkMessageObj"][0]["ReviewsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["ReviewsNotes"];
				} else {
					msg = "";
				}
				break;
			case "aggregatereviewschema":
				if(ReportData[0]["WorkMessageObj"][0]["AggrReviewSchemaNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["AggrReviewSchemaNotes"];
				} else {
					msg = "";
				}
				break;
			case "yelp":
				if(ReportData[0]["WorkMessageObj"][0]["YelpNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["YelpNotes"];
				} else {
					msg = "";
				}
				break;
			case "richcard":
				if(ReportData[0]["WorkMessageObj"][0]["RichCardsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["RichCardsNotes"];
				} else {
					msg = "";
				}
				break;
			case "internallinking":
				if(ReportData[0]["WorkMessageObj"][0]["InternalLinkingNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["InternalLinkingNotes"];
				} else {
					msg = "";
				}
				break;
			case "redirects":
				if(ReportData[0]["WorkMessageObj"][0]["301RedirectsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["301RedirectsNotes"];
				} else {
					msg = "";
				}
				break;
			case "brokenlinks":
				if(ReportData[0]["WorkMessageObj"][0]["BrokenLinksNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["BrokenLinksNotes"];
				} else {
					msg = "";
				}
				break;
			case "keywordphrases":
				if(ReportData[0]["WorkMessageObj"][0]["KeywordPhrasesNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["KeywordPhrasesNotes"];
				} else {
					msg = "";
				}
				break;
			case "keyworddensity":
				if(ReportData[0]["WorkMessageObj"][0]["KeywordDensityNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["KeywordDensityNotes"];
				} else {
					msg = "";
				}
				break;
			case "competitiveanalysis":
				if(ReportData[0]["WorkMessageObj"][0]["CompetitiveAnalysisNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["CompetitiveAnalysisNotes"];
				} else {
					msg = "";
				}
				break;
			case "competitiveseokeyphrases":
				if(ReportData[0]["WorkMessageObj"][0]["CompetitiveSEOKeyphrasesNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["CompetitiveSEOKeyphrasesNotes"];
				} else {
					msg = "";
				}
				break;
			case "blogs":
				if(ReportData[0]["WorkMessageObj"][0]["BlogsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["BlogsNotes"];
				} else {
					msg = "";
				}
				break;
			case "content":
				if(ReportData[0]["WorkMessageObj"][0]["ContentNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["ContentNotes"];
				} else {
					msg = "";
				}
				break;
			case "freshcontent":
				if(ReportData[0]["WorkMessageObj"][0]["FreshContentNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["FreshContentNotes"];
				} else {
					msg = "";
				}
				break;
			case "cononical":
				if(ReportData[0]["WorkMessageObj"][0]["CononicalNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["CononicalNotes"];
				} else {
					msg = "";
				}
				break;
			case "indexing":
				if(ReportData[0]["WorkMessageObj"][0]["IndexingNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["IndexingNotes"];
				} else {
					msg = "";
				}
				break;
			case "alttext":
				if(ReportData[0]["WorkMessageObj"][0]["AltTextNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["AltTextNotes"];
				} else {
					msg = "";
				}
				break;
			case "titletags":
				if(ReportData[0]["WorkMessageObj"][0]["TitleTagsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["TitleTagsNotes"];
				} else {
					msg = "";
				}
				break;
			case "metadescription":
				if(ReportData[0]["WorkMessageObj"][0]["MetaDescriptionNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["MetaDescriptionNotes"];
				} else {
					msg = "";
				}
				break;
			case "metakeywords":
				if(ReportData[0]["WorkMessageObj"][0]["MetaKeywordsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["MetaKeywordsNotes"];
				} else {
					msg = "";
				}
				break;
			case "htags":
				if(ReportData[0]["WorkMessageObj"][0]["HTagsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["HTagsNotes"];
				} else {
					msg = "";
				}
				break;
			case "bing":
				if(ReportData[0]["WorkMessageObj"][0]["BingNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["BingNotes"];
				} else {
					msg = "";
				}
				break;
			case "googlebusiness":
				if(ReportData[0]["WorkMessageObj"][0]["GMBNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["GMBNotes"];
				} else {
					msg = "";
				}
				break;
			case "dataaggregators":
				if(ReportData[0]["WorkMessageObj"][0]["DataAggregatorsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["DataAggregatorsNotes"];
				} else {
					msg = "";
				}
				break;
			case "directorycompletion":
				if(ReportData[0]["WorkMessageObj"][0]["DirectoryCompletionNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["DirectoryCompletionNotes"];
				} else {
					msg = "";
				}
				break;
			case "duplicatelisting":
				if(ReportData[0]["WorkMessageObj"][0]["DuplicateListingNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["DuplicateListingNotes"];
				} else {
					msg = "";
				}
				break;
			case "gmbappointmenturl":
				if(ReportData[0]["WorkMessageObj"][0]["GMBAppointmentURLNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["GMBAppointmentURLNotes"];
				} else {
					msg = "";
				}
				break;
			case "gmbservicesurl":
				if(ReportData[0]["WorkMessageObj"][0]["GMBServicesURLNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["GMBServicesURLNotes"];
				} else {
					msg = "";
				}
				break;
			case "gmbpost":
				if(ReportData[0]["WorkMessageObj"][0]["GMBPostsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["GMBPostsNotes"];
				} else {
					msg = "";
				}
				break;
			case "videoseo":
				if(ReportData[0]["WorkMessageObj"][0]["VideoSEONotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["VideoSEONotes"];
				} else {
					msg = "";
				}
				break;
			case "robotstxt":
				if(ReportData[0]["WorkMessageObj"][0]["RobotstxtNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["RobotstxtNotes"];
				} else {
					msg = "";
				}
				break;
			case "sitemap":
				if(ReportData[0]["WorkMessageObj"][0]["SitemapNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["SitemapNotes"];
				} else {
					msg = "";
				}
				break;
			case "pageloadingtime":
				if(ReportData[0]["WorkMessageObj"][0]["PageLoadingTimeNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["PageLoadingTimeNotes"];
				} else {
					msg = "";
				}
				break;
			case "phonetracking":
				if(ReportData[0]["WorkMessageObj"][0]["PhoneTrackingNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["PhoneTrackingNotes"];
				} else {
					msg = "";
				}
				break;
			case "wordpressupdate":
				if(ReportData[0]["WorkMessageObj"][0]["WordPressUpdateNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["WordPressUpdateNotes"];
				} else {
					msg = "";
				}
				break;
			case "updateplugins":
				if(ReportData[0]["WorkMessageObj"][0]["UpdatedPluginsNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["UpdatedPluginsNotes"];
				} else {
					msg = "";
				}
				break;
			case "workadditionalnotes":
				if(ReportData[0]["WorkMessageObj"][0]["WorkAdditionalNotes"] != undefined) {
					msg = ReportData[0]["WorkMessageObj"][0]["WorkAdditionalNotes"];
				} else {
					msg = "";
				}
				break;
			default:
			 	msg = "";
			 	break;
		}
		return (msg);
	}
}

function CheckPerformanceOptions() {

	//define performaceMessagesHTML
	var performaceMessagesHTML = [
	];
	var msg = "";

	//build the special messages variables
	msg = GetPerformanceOptions("googlealgorithmchange");
	var googlealgorithmchange = "Google Algorithm Update:<ul><li>" + msg + "</li></ul>";

	msg = GetPerformanceOptions("trends");
	var trends = msg + "<br><br>";

	msg = GetPerformanceOptions("performanceadditionalnotes");
	var performanceadditionalnotes = msg + "<br><br>";


	//put the special messages in an array
	var messages = {};

	messages["googlealgorithmchange"] = googlealgorithmchange;
	messages["trends"] = trends;
	messages["performanceadditionalnotes"] = performanceadditionalnotes;



	//find out which messages boxes were checked and add to html array
	var mname = "";
	var value = "";

	for (mname in messages) {
		value = messages[mname];
		if (document.getElementById(mname).checked) {
			performaceMessagesHTML.push(value);
		}
	}

	//return final performaceMessagesHTML

	return(performaceMessagesHTML);
}

function GetPerformanceOptions(option) {

	var option = option;
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	var msg = "";

	if(ReportData[0]["PerformanceMessageObj"][0] != undefined) {
		// If Current Object is MessageObj
		switch (option) {
			case "googlealgorithmchange":
				if(ReportData[0]["PerformanceMessageObj"][0]["GoogleAlgorithmChangeNotes"] != undefined) {
					msg = ReportData[0]["PerformanceMessageObj"][0]["GoogleAlgorithmChangeNotes"];
				} else {
					msg = "";
				}
				break;
			case "trends":
				if(ReportData[0]["PerformanceMessageObj"][0]["TrendsNotes"] != undefined) {
					msg = ReportData[0]["PerformanceMessageObj"][0]["TrendsNotes"];
				} else {
					msg = "";
				}
				break;
			case "performanceadditionalnotes":
				if(ReportData[0]["PerformanceMessageObj"][0]["PerformanceAdditionalNotes"] != undefined) {
					msg = ReportData[0]["PerformanceMessageObj"][0]["PerformanceAdditionalNotes"];
				} else {
					msg = "";
				}
				break;
			default:
			 	msg = "";
			 	break;
		}
		return (msg);
	}
}

function CheckPPCOptions() {

	//define ppcMessagesHTML
	var ppcMessagesHTML = [
	];
	var msg = "";

	//build the special messages variables
	msg = GetPPCOptions("ppc");
	var ppc = msg + "<br>";

	//put the special messages in an array
	var messages = {};

	messages["ppc"] = ppc;

	//find out which messages boxes were checked and add to html array
	var mname = "";
	var value = "";

	for (mname in messages) {
		value = messages[mname];
		if (document.getElementById(mname).checked) {
			ppcMessagesHTML.push(value);
		}
	}

	//return final ppcMessagesHTML

	return(ppcMessagesHTML);
}

function GetPPCOptions(option) {

	var option = option;
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	var msg = "";

	if(ReportData[0]["PPCMessageObj"][0] != undefined) {
		// If Current Object is MessageObj
		switch (option) {
			case "ppc":
				if(ReportData[0]["PPCMessageObj"][0]["PPCNotes"] != undefined) {
					msg = ReportData[0]["PPCMessageObj"][0]["PPCNotes"];
				} else {
					msg = "";
				}
				break;
			default:
			 	msg = "";
			 	break;
		}
		return (msg);
	}
}


function CheckServiceOptions() {

	//define serviceMessagesHTML
	var serviceMessagesHTML = [
		"<br><strong><u>Service Notes</u></strong><br>"
	];
	var msg = "";

	//build the special messages variables
	msg = GetServiceOtherOptions("onlineappointment");
	var onlineappointment = msg + "<br><br>";

	msg = GetServiceOtherOptions("org");
	var org = msg;

	msg = GetServiceOtherOptions("healthgrades");
	var healthgrades = msg + "<br><br>";

	msg = GetServiceOtherOptions("services");
	var services = msg + "<br><br>";

	//put the special messages in an array
	var messages = {};

	messages["onlineappointment"] = onlineappointment;
	messages["org"] = org;
	messages["healthgrades"] = healthgrades;
	messages["services"] = services;

	//find out which messages boxes were checked and add to html array
	var mname = "";
	var value = "";

	for (mname in messages) {
		value = messages[mname];
		if (document.getElementById(mname).checked) {
			serviceMessagesHTML.push(value);
		}
	}

	//return final serviceMessagesHTML

	if(serviceMessagesHTML.length > 1) {
		//return final serviceMessagesHTML
		return (serviceMessagesHTML);
	} else {
	 	serviceMessagesHTML = [];
	 	return(serviceMessagesHTML);
	}
}

function CheckOtherOptions() {

	//define otherMessagesHTML
	var otherMessagesHTML = [
		"<br><strong><u>Client Notes</u></strong><br>"
	];
	var msg = "";

	msg = GetServiceOtherOptions("photorequest");
	var photorequest = msg + "<br>";

	//put the special messages in an array
	var messages = {};
	messages["photorequest"] = photorequest;

	//find out which messages boxes were checked and add to html array
	var mname = "";
	var value = "";

	for (mname in messages) {
		value = messages[mname];
		if (document.getElementById(mname).checked) {
			otherMessagesHTML.push(value);
		}
	}

	//return final otherMessagesHTML
	if(otherMessagesHTML.length > 1) {
		//return final serviceMessagesHTML
		return (otherMessagesHTML);
	} else {
	 	otherMessagesHTML = [];
	 	return(otherMessagesHTML);
	}

	return(otherMessagesHTML);
}

function GetServiceOtherOptions(option) {

	var option = option;
	var ReportData = JSON.parse(localStorage.getItem("ReportData"));
	var msg = "";
	var contact = "";

	if(ReportData[0]["ServicesMessageObj"][0] != undefined && ReportData[0]["OtherMessageObj"][0] != undefined) {
		// If Current Object is MessageObj
		switch (option) {
			case "onlineappointment":
				if(ReportData[0]["ServicesMessageObj"][0]["OnlineAppointmentsNotes"] != undefined) {
					msg = ReportData[0]["ServicesMessageObj"][0]["OnlineAppointmentsNotes"];
				} else {
					msg = "";
				}
				break;
			case "org":
				if(ReportData[0]["ServicesMessageObj"][0]["ORGNotes"] != undefined) {
					msg = ReportData[0]["ServicesMessageObj"][0]["ORGNotes"];
					if(msg.indexOf("[]") != -1 && document.getElementById("org").checked) {
						alert("ORG Notes Contain Slugs. Please replace the '[]' slugs with appropriate wording. ORG Notes will not be used.");
						msg = "";
					} else {
						msg = msg.concat("<br><br>");						
					}
				} else {
					msg = "";
				}
				break;
			case "healthgrades":
				if(ReportData[0]["ServicesMessageObj"][0]["HealthgradesNotes"] != undefined) {
					msg = ReportData[0]["ServicesMessageObj"][0]["HealthgradesNotes"];
				} else {
					msg = "";
				}
				break;
			case "services":
				if(ReportData[0]["ServicesMessageObj"][0]["ServicesNotes"] != undefined) {
					msg = ReportData[0]["ServicesMessageObj"][0]["ServicesNotes"];
				} else {
					msg = "";
				}
				break;
			case "photorequest":
				if(ReportData[0]["OtherMessageObj"][0]["PhotoRequestNotes"] != undefined) {
					msg = ReportData[0]["OtherMessageObj"][0]["PhotoRequestNotes"];
				} else {
					msg = "";
				}
				break;
			case "comments":
				if(ReportData[0]["OtherMessageObj"][0]["CommentsNotes"] != undefined) {
					msg = ReportData[0]["OtherMessageObj"][0]["CommentsNotes"];
				} else {
					msg = "";
				}
				break;
			case "contact":
				if(ReportData[0]["OtherMessageObj"][0]["ContactNotes"] != undefined) {
					var contact = ReportData[0]["OtherMessageObj"][0]["ContactNotes"];
					if(contact.trim() != "") {
						msg = "<em><b>" + contact + "</b></em><br>";
					} else {
						msg = "";
					}
				} else {
					msg = "";
				}
				break;
			default:
			 	msg = "";
			 	break;
		}
		return(msg);
	}
}

function CheckContactOptions() {

	var contactMessagesHTML = [
	];

	msg = GetServiceOtherOptions("comments");
	var comments = "<br><strong><u>Comments</u></strong><br>" + msg + "<br>";

	var msg = GetServiceOtherOptions("contact");
	var contact	= '<br>If you have any questions feel free to contact me:<br>Thanks,<br>' + msg + 'SEO Manager';

	//put the special messages in an array
	var messages = {};
	messages["comments"] = comments;


	//find out which messages boxes were checked and add to html array
	var mname = "";
	var value = "";

	for (mname in messages) {
		value = messages[mname];
		if (document.getElementById(mname).checked) {
			contactMessagesHTML.push(value);
		}
	}

	contactMessagesHTML.push(contact);

	//return final contactMessagesHTML
	return(contactMessagesHTML);
}


function BuildHTML(taskHTML, workMessagesHTML, seoHTML, performaceMessagesHTML, adwordsHTML, ppcMessagesHTML, serviceMessagesHTML, otherMessagesHTML, contactMessagesHTML) {

	var outputHTML = [];

	var reportMonth = GetReportMonth(); 

	outputHTML.push("<h1>" + reportMonth + " Report</h1>")

	for(var i = 0; i < taskHTML.length; i++) {
		outputHTML.push(taskHTML[i]);
	}

	for(var i = 0; i < workMessagesHTML.length; i++) {
		outputHTML.push(workMessagesHTML[i]);
	}

	for(var i = 0; i < seoHTML.length; i++) {
		outputHTML.push(seoHTML[i]);
	}

	for(var i = 0; i < performaceMessagesHTML.length; i++) {
		outputHTML.push(performaceMessagesHTML[i]);
	}

	for(var i = 0; i < adwordsHTML.length; i++) {
		outputHTML.push(adwordsHTML[i]);
	}

	for(var i = 0; i < ppcMessagesHTML.length; i++) {
		outputHTML.push(ppcMessagesHTML[i]);
	}

	for(var i = 0; i < serviceMessagesHTML.length; i++) {
		outputHTML.push(serviceMessagesHTML[i]);
	}

	for(var i = 0; i < otherMessagesHTML.length; i++) {
		outputHTML.push(otherMessagesHTML[i]);
	}

	for(var i = 0; i < contactMessagesHTML.length; i++) {
		outputHTML.push(contactMessagesHTML[i]);
	}

	return(outputHTML);
}

// ##########PROCESS LOADCLIENT, PREVIOUS AND NEXT CLIENT DATA FUNCTIONS###########

// loads client div and calls the loadData function. Called from Run Report Button
function LoadClient() {

	var select = document.getElementById("clients");
	index = select.selectedIndex;	
	if(index == 0) {
		alert("Select Client by ID!");
		return false;
	} else {
		selectedID = select.options[index].text;
		LoadData(selectedID);
	}
}

//loads previous client data in client list if available. Called from Previous Client Button.
function PrevClient() {    

	var select = document.getElementById("clients");
	var index = select.selectedIndex;
	index = index - 1;
	if(index >= 1) {
		select.options.selectedIndex = index;
		var selectedID = select.options[index].text;
		var ReportData = JSON.parse(localStorage.getItem("ReportData"));
		ReportData[0]["OtherObj"][0]["SelectedIndex"] = index;
		localStorage.setItem("ReportData", JSON.stringify(ReportData));
		LoadData(selectedID)
	}                   
}     

// loads next client in client list if available. Called from Next Client Button.
function NextClient() {  
	     
	var select = document.getElementById("clients");
	var index = select.selectedIndex;
	index = index + 1;
	if(index < select.length) {
		select.options.selectedIndex = index;
		var selectedID = select.options[index].text;
		var ReportData = JSON.parse(localStorage.getItem("ReportData"));
		ReportData[0]["OtherObj"][0]["SelectedIndex"] = index;
		localStorage.setItem("ReportData", JSON.stringify(ReportData));
		LoadData(selectedID)
	}                             
}

// ##########INTI FUNCTIONS#############

function init() {
	SetAttr(false);
	CreationOfArray();
	DefineOptions();
	DefineContent();
	DefineClients();
	SetEventListeners();
}
