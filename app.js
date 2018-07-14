//declare variables
var codes = document.querySelectorAll(".square h1")
var desc = document.querySelectorAll(".square p")
var squares = document.querySelectorAll(".square")
var playButton = document.querySelector("button")
var header = document.querySelector("h3")
var counterMessage = document.querySelector(".counterMessage")
var counterDisplay = document.querySelector(".counterDisplay")
var note = document.querySelector("h4")
var input = document.querySelector("input")
var currentSquare = document.querySelector(".currentSquare")
var currentSquareCode = document.querySelector(".currentSquare h1")
var currentSquareDesc = document.querySelector(".currentSquare p")
var message = document.querySelector(".message")
var counter = 0
var activeGame = false



//data for blocks
const legos = [
	{code: "Cp", name: "Client Portal", background: "blue"}, {code: "Tp", name: "Trade Processing", background: "green"}, {code: "Pv", name: "Portfolio Views", background: "blue"},
	{code: "Ta", name: "Transactions & Analyses", background: "blue"}, {code: "Pm", name: "Performance Measurement", background: "gray"}, {code: "Crp", name: "Custom Return Periods", background: "gray"},
	{code: "Po", name: "Provisional Orders", background: "green"}, {code: "Tf", name: "Trade Filling", background: "green"}, {code: "Te", name: "Trade Execution", background: "green"},
	{code: "Sbr", name: "Settlement book of Record", background: "green"}, {code: "Dv", name: "Document Vault", background: "blue"}, {code: "Wh", name: "Wealth History", background: "blue"},
	{code: "Co", name: "Contribution", background: "gray"}, {code: "At", name: "Attribution", background: "gray"}, {code: "Cr", name: "Custody Recordkeeping", background: "green"},
	{code: "Si", name: "Support Infrastructure", background: "green"}, {code: "Ibr", name: "Investment Book of Record", background: "green"}, {code: "Tl", name: "Tax Lot Management", background: "green"},
	{code: "Bsc", name: "Behavorial Science", background: "blue"}, {code: "Do", name: "Digital Onboarding", background: "blue"}, {code: "Ao", name: "Automated Account Opening", background: "blue"},
	{code: "Icr", name: "Integrated CRM", background: "blue"}, {code: "Mv", name: "Multiple Views", background: "orange"}, {code: "Udm", name: "Unified Data Model", background: "orange"},
	{code: "Tm", name: "Time Machine", background: "orange"}, {code: "Ts", name: "Time Series", background: "orange"}, {code: "Dv", name: "Data Views", background: "orange"},
	{code: "Af", name: "Advanced Filters", background: "orange"}, {code: "Aq", name: "Advanced Queries", background: "orange"}, {code: "Pt", name: "Pivot Tables", background: "orange"},
	{code: "Bm", name: "Brinson Methodology", background: "gray"}, {code: "Ca", name: "Composite Analysis", background: "gray"}, {code: "Tcb", name: "Tree Composite Builder", background: "gray"},
	{code: "Tr", name: "Trade Restrictions", background: "green"}, {code: "Abr", name: "Account Book of Record", background: "green"}, {code: "Pfa", name: "Private Fund Accounting", background: "green"},
	{code: "Pi", name: "Pipes (Open CRM)", background: "blue"}, {code: "Lg", name: "Lead Generation", background: "blue"}, {code: "Ap", name: "Advisor Portal", background: "blue"},
	{code: "Am", name: "Account Management", background: "blue"}, {code: "Bc", name: "Become User", background: "blue"}, {code: "Dt", name: "Drill Through", background: "orange"},
	{code: "Da", name: "Data Integration", background: "orange"}, {code: "Loa", name: "Electronic LOA Workflows", background: "orange"}, {code: "Aa", name: "Account Aggregation", background: "orange"},
	{code: "Pat", name: "Private Asset Tracking", background: "orange"}, {code: "Dc", name: "Direct-to-Custodian", background: "orange"}, {code: "Cm", name: "Content Management", background: "orange"},
	{code: "Arv", name: "Aggregated Risk Views", background: "gray"}, {code: "Pc", name: "Performance Calculations", background: "gray"}, {code: "Cb", name: "Custom Benchmarks", background: "gray"},
	{code: "Ta", name: "Trust Accounting", background: "green"}, {code: "Igl", name: "Integrated General Ledger", background: "green"}, {code: "Rc", name: "Reconciliation", background: "green"},
	{code: "Ua", name: "User Assist", background: "blue"}, {code: "Mm", name: "Model Management", background: "blue"}, {code: "Rm", name: "Rebalance Management", background: "blue"},
	{code: "Da", name: "Drift Analysis", background: "blue"}, {code: "Rb", name: "Report Bundler", background: "blue"}, {code: "Da", name: "Digital Advice", background: "blue"},
	{code: "Ur", name: "Usage Reporting", background: "orange"}, {code: "Pwp", name: "Programs Writing Programs", background: "orange"}, {code: "Pl", name: "InvestCloud PLACE", background: "orange"},
	{code: "Sb", name: "InvestCloud Sandbox", background: "orange"}, {code: "De", name: "Data Extracts", background: "orange"}, {code: "Es", name: "Extract Scheduler", background: "orange"},
	{code: "Rm", name: "Risk Management", background: "gray"}, {code: "Fc", name: "Factor-based Calculations", background: "gray"}, {code: "Rb", name: "Risk Budgeting", background: "gray"},
	{code: "St", name: "Stress Testing", background: "gray"}, {code: "P", name: "Payments", background: "green"}, {code: "Sw", name: "SWIFT", background: "green"},
	{code: "Rp", name: "Risk Profile Management", background: "blue"}, {code: "De", name: "Digitial Engagement", background: "blue"}, {code: "Sc", name: "Secure Chat", background: "blue"},
	{code: "Na", name: "Notifications & Alerts", background: "blue"}, {code: "Cc", name: "Curated Content", background: "blue"}, {code: "Pn", name: "Portfolio News", background: "blue"},
	{code: "Mo", name: "Mobility", background: "blue"}, {code: "Pm", name: "Portfolio Management", background: "orange"}, {code: "PR", name: "Portfolio Remodeling", background: "orange"},
	{code: "Bi", name: "Billing", background: "orange"}, {code: "Rb", name: "Rebalancing", background: "orange"}, {code: "Cf", name: "Client Fees", background: "orange"},
	{code: "Gc", name: "Gips Compliance", background: "gray"}, {code: "Cc", name: "Configurable Character", background: "gray"}, {code: "Fi", name: "Forumula Inspector", background: "gray"}, 
	{code: "Clt", name: "Calculation Look-Through", background: "gray"}, {code: "Ach", name: "Automatic Clearing House", background: "green"}, {code: "Af", name: "Account Funding", background: "green"}, 
	{code: "Des", name: "Design", background: "white"}, {code: "Dw", name: "Digital Warehouse", background: "white"}, {code: "Sc", name: "Security Certificate", background: "white"}, 
	{code: "V", name: "Verisign", background: "white"}, {code: "Vev", name: "Verisign Ev", background: "white"}, {code: "Vt", name: "Virtual Token", background: "white"},
	{code: "Co", name: "Carry Over Security Cert.", background: "white"}, {code: "SDK", name: "SDK API Sandbox", background: "white"}, {code: "Cdr", name: "Custom DR", background: "white"},
	{code: "Dc", name: "Data Center", background: "white"}, {code: "Ds", name: "Data Storage", background: "white"}, {code: "Dos", name: "Document Storage", background: "white"}

]



//preloaded layout
window.addEventListener("load", function(){
	for(var i = 0; i < codes.length; i++){
		codes[i].textContent = legos[i].code
		desc[i].textContent = legos[i].name
		squares[i].classList.remove("hideColor")
		squares[i].classList.add(legos[i].background)
	}
})



//start Game
playButton.addEventListener("click", function(){
	startGame()
})



//set game status
function startGame(){
	//activeGame starts out as false
	if(!activeGame){
		for(var i = 0; i < squares.length; i++){
			//restart the game
			activeGame = true
			squares[i].classList.add("hideColor")
			squares[i].classList.remove("unclickable")
			desc[i].style.display = "none"
			playButton.textContent = "Reset"
			header.textContent = "Click any block and enter its definition."
			counterMessage.style.display = "block"
			counterDisplay.textContent = counter
			note.style.display = "inherit"
			input.style.display = "block"
			//user must select a block before they can prove an input
			input.disabled = true
			message.classList.remove("correct")
			//remove any active squares		
			removeActive()
			currentSquare.classList.add("hideColor")
		}	

	} else{
		for(var i = 0; i < squares.length; i++){
			//show the initial layout
			activeGame = false
			squares[i].classList.remove("hideColor")
			squares[i].classList.remove("unclickable")
			squares[i].classList.remove("full-opacity")
			desc[i].style.display = "inherit"
			playButton.textContent = "Find Out"
			header.textContent = "How well do you know our Apps?"
			counterMessage.style.display = "none"
			note.style.display = "none"
			input.style.display = "none"
			counter = 0;
			//remove any active squares
			removeActive()
			//the current Square should be empty if the game is not live	
			currentSquare.removeAttribute("class")
			currentSquare.classList.add("currentSquare")
			currentSquareCode.textContent = ""
			currentSquareDesc.textContent = ""
			message.classList.remove("correct")
			message.textContent = ""
			input.value = ""
		}
	}
}



//select block to answer
for(var i = 0; i < squares.length; i++){
	(function(i){
		squares[i].addEventListener("click", function(){
			input.value = ""
			message.textContent = ""
			removeActive()
			this.classList.add("selectedSquare")
			//only want the currentSquare to be displayed when the game is active
			if(activeGame){
				currentSquare.removeAttribute("class")
				currentSquare.classList.add("currentSquare", this.classList[1], this.classList[2], "full-opacity")
				currentSquareCode.textContent = codes[i].textContent
				currentSquareDesc.textContent = ""
				message.classList.remove("correct")
				input.disabled = false
				checkAnswer(i)
			}
		})
	})(i)
}



//remove active square
function removeActive(){
	for(var i = 0; i < squares.length; i++){
		squares[i].classList.remove("selectedSquare")
	}
}



//Check answer
function checkAnswer(i){
	input.addEventListener("keypress", function(event){
		//13 is the value for enter
		if(event.which === 13){
			var entry = event.target.value
			//user entry matches the block's text
			if(entry == desc[i].textContent){
				currentSquareDesc.textContent = entry
				squares[i].classList.remove("hideColor")
				squares[i].classList.add("full-opacity")
				squares[i].classList.add("unclickable")
				currentSquare.classList.remove("hideColor")
				currentSquare.classList.add("full-opacity")
				desc[i].style.display = "initial"
				message.textContent = "That's right. Nice job!"
				message.classList.add("correct")
				//increase score when they get a answer right
				counter++
				counterDisplay.textContent = counter
				//disable input to prevent user from reentering already used answer. prevents double-scoring.
				input.value = ""
				input.disabled = true

			} else if(entry != desc[i].textContent){
				message.textContent = "Well, that's not right. Try Again."
			}
		}
	})
}
