

function monadic_viz() {

	var total_nodes = []; //all the nodes
	var outer_circles = [];
	var outer_x = [];
	var outer_y = [];
	var inner_circles = [];
	var cur_inner_circles = [];

	var companies= ["Scanadu", "LIFX", "Misfit", "Formlabs", "PonoMusic", "OcculusRift", "Tile", "MinistrySupply", "Ouya", "Kano", "Adapteva", "SmartThings"]; //change this obviously
	//kickstarter, twitter, crunchbase, reddit, hacker news, product hunt, tech crunch
	var num_properties = [4, 2, 1, 1, 2, 2, 2];
	var total_properties = 14;
	var Companies = [];
	var buttons = document.getElementsByTagName('button');
	var hover_text;

	this.load = function() {

		var svg_canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg_canvas.setAttribute("height","100%");
		svg_canvas.setAttribute("width","100%");
		svg_canvas.setAttribute("id", "svg_canvas");
		$('#canvas').append(svg_canvas);
		/*Initialize Data Structures*/
		this.initdata(svg_canvas);
		display(svg_canvas);
		hovering();
		$(window).on('resize', function(){
			display(svg_canvas);
		});

		  $("button").click(function() {
		  	document.getElementById("company").innerHTML = "";
		  	if (window.getComputedStyle(document.getElementById(this.id), null).getPropertyValue("opacity") == 0.5) {				
		  		for (var o = 0; o < buttons.length; o++) {
		  			buttons[o].style.opacity = 0.5;
		  		}
		  		this.style.opacity = 1;
		  	} else {
		  		for (var o = 0; o < buttons.length; o++) {
		  			buttons[o].style.opacity = 0.5;
		  		}
		  	}
		  	display(svg_canvas);
		  	animate_instructions();
		  	hovering();
		  });
		}


	function hovering () {
		var children = document.getElementById("svg_canvas").childNodes;
		var sel_button;
		for (var v = 0; v <= buttons.length - 1; v++) {
			if (window.getComputedStyle(buttons[v], null).getPropertyValue("opacity") == 1) {
				sel_button = buttons[v];
			}
		}
		for(var i = 0; i < children.length; i++){
			if (children[i].id.substring(children[i].id.length - 4) == "text"){
				curtext = document.getElementById(children[i].id);
				(function (curtext) {
					$(curtext).hover(
						function () {
							var cur_children = document.getElementById("svg_canvas").childNodes;
							for(var j = 0; j < children.length; j++){
								if (cur_children[j].id.substring(0, cur_children[j].id.indexOf("_")) == curtext.id.substring(0, curtext.id.indexOf("_"))){
									cur_children[j].style.textDecoration = "underline !important";
									cur_children[j].style.fontSize = "22px";
								}
							}
							while (document.getElementById("company").firstChild) {
								document.getElementById("company").removeChild(document.getElementById("company").firstChild);
							}
							var a = document.createElement('a');
							var cur_company = curtext.id.substring(0, curtext.id.indexOf("_"))
							var cur_property = curtext.id.substring(curtext.id.indexOf("_") + 1, curtext.length);
							cur_property = cur_property.substring(0, cur_property.indexOf("_"));
							console.log(cur_property);
							if (companies.indexOf(sel_button.id) != -1) {
								switch (cur_company) {
									case "Scanadu":
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "https://www.scanadu.com/";
									break;

									case "LIFX":
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "http://lifx.co/";
									break;

									case "Misfit":
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "http://misfit.com/";
									break;

									case "Formlabs":
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "http://formlabs.com/en/";
									break;

									case "PonoMusic":
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "https://ponomusic.force.com/";
									break;

									case "OcculusRift":
									cur_company = "Occulus Rift";								
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "https://www.oculus.com/";
									break;

									case "Tile":
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "https://www.thetileapp.com/";
									break;

									case "MinistrySupply":
									cur_company = "Ministry of Supply";
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "http://ministryofsupply.com/";
									break;

									case "Ouya":
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "https://www.ouya.tv/";
									break;

									case "Kano":
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "http://www.kano.me/";
									break;

									case "Adapteva":
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "http://www.adapteva.com/";
									break;

									case "SmartThings":
									cur_company = "Smart Things";
									el = document.createTextNode(cur_property);
									a.appendChild(el);
									a.href = "http://www.smartthings.com/";
									break;
								}
								document.getElementById("company").appendChild(a);
								document.getElementById("company").style.opacity = "0.9";
								a.style.textDecoration = "none";
								a.style.color =  "white"
							} else {
								var btn;
								switch (cur_property) {

									case "kickstarter":
									el = document.createTextNode(cur_company);
									btn = document.createElement("Button");
									btn.appendChild(el);

									break;

									case "twitter":
									el = document.createTextNode(cur_company);
									btn = document.createElement("Button");
									btn.appendChild(el);

									break;

									case "crunchbase":
									el = document.createTextNode(cur_company);
									btn = document.createElement("Button");
									btn.appendChild(el);

									break;

									case "reddit":
									el = document.createTextNode(cur_company);
									btn = document.createElement("Button");
									btn.appendChild(el);

									break;

									case "hacknews":
									el = document.createTextNode(cur_property);
									btn = document.createElement("Button");
									btn.appendChild(el);

									break;

									case "producthunt":
									el = document.createTextNode(cur_company);
									btn = document.createElement("Button");
									btn.appendChild(el);

									break;

									case "techcrunch":
									el = document.createTextNode(cur_company);
									btn = document.createElement("Button");
									btn.appendChild(el);

									break;
								}
								document.getElementById("company").appendChild(btn);
								document.getElementById("company").style.opacity = "1";
								el.style.opacity =  "1"
								el.style.color =  "white"
							}


						}, 
						function () {

							var cur_children = document.getElementById("svg_canvas").childNodes;
							for(var j = 0; j < children.length; j++){
								if (cur_children[j].id.substring(0, cur_children[j].id.indexOf("_")) == curtext.id.substring(0, curtext.id.indexOf("_"))){
									cur_children[j].style.textDecoration = "none";
									cur_children[j].style.fontSize = "16px";
								}
							}
						});
				})(curtext);
			}
		}
	}

	function animate_instructions() {

		$("#company").velocity({opacity: 0}, {duration: 1000}, {queue:false});

		if (jQuery.isEmptyObject(cur_inner_circles)){
			$("#inst_title").velocity({opacity: 0.9}, {duration: 1800}, {queue:false});
			$("#instructions").velocity({opacity: 0.9}, {duration: 1800}, {queue:false});
		} else {
			$("#inst_title").velocity({opacity: 0}, {duration: 300}, {queue:false});
			$("#instructions").velocity({opacity: 0}, {duration: 300}, {queue:false});
		}
		
	}

	function animate_circle (circle_id, end_x, end_y, start_x, start_y, property_display, in_out) {

		var circle_id;
		this.circle_id = circle_id;
		if (in_out == 0) {
			$("#" + circle_id).velocity({ translateX: [end_x, start_x], translateY: [end_y, start_y], opacity: 0.3, r:[3, 5] }, {duration: 1000});
			$(property_display).velocity({opacity: 0}, {duration: 1200}, {queue:false});
		} else {
			$("#" + circle_id).velocity({ translateX: [end_x, start_x], translateY: [end_y, start_y], opacity: [1, 0.3], r:[5, 3] }, {duration: 1000});
			$(property_display).velocity("fadeIn", {duration: 1200});

		}
	}

	function initsvg(circle_id, svg_canvas) {
		var circles = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		circles.setAttribute("id", circle_id);
		circles.setAttribute("cx",0);
		circles.setAttribute("cy",0);
		circles.setAttribute("r",5);
		circles.setAttribute("visibility", "hidden");
		circles.setAttribute("stroke-opacity", 0);
		svg_canvas.appendChild(circles);
	}

	/*Generic Company Structure*/
	function company(name, svg_canvas) {
		/*Name of Company*/
		var name;
		this.name = name;
		/*Kickstarter*/
		var goal;
		var total_pledged;
		var total_backers;
		var start_end;
		this.kickstarter = function(goal, total_pledged, total_backers, start_end) {
			this.goal = goal;
			total_nodes.push(goal);
			this.total_pledged = total_pledged;
			total_nodes.push(total_pledged);
			this.total_backers = total_backers;
			total_nodes.push(total_backers);
			this.start_end = start_end;
			total_nodes.push(start_end);
		}

		/*Kickstarter Circles*/
		initsvg(name + "_kickstarter_goal", svg_canvas);
		outer_circles.push(name + "_kickstarter_goal");

		initsvg(name + "_kickstarter_total_pledged", svg_canvas);
		outer_circles.push(name + "_kickstarter_total_pledged");

		initsvg(name + "_kickstarter_total_backers", svg_canvas);
		outer_circles.push(name + "_kickstarter_total_backers");

		initsvg(name + "_kickstarter_start_end", svg_canvas);
		outer_circles.push(name + "_kickstarter_start_end");

		/*Twitter*/
		var tweets_year;
		var total_tweets;
		this.twitter = function (tweets_year, total_tweets) {
			this.tweets_year = tweets_year;
			total_nodes.push(tweets_year);
			this.total_tweets = total_tweets;
			total_nodes.push(total_tweets);
		}

		/*Twitter Circles*/
		initsvg(name + "_twitter_tweets_year", svg_canvas);
		outer_circles.push(name + "_twitter_tweets_year");
		initsvg(name + "_twitter_total_tweets", svg_canvas);
		outer_circles.push(name + "_twitter_total_tweets");

		/*CrunchBase/Angel List*/
		var funding;
		this.crunchbase = function(funding, fund_size, investors) {
			this.funding = funding;
			total_nodes.push(funding);
		}

		/*CrunchBase/Angel List Circles*/
		initsvg(name + "_crunchbase_funding", svg_canvas);
		outer_circles.push(name + "_crunchbase_funding");

		/*Reddit*/
		var r_mention;
		this.reddit = function(r_mention) {
			this.r_mention = r_mention;
			total_nodes.push(r_mention);
		}

		/*Reddit Circles*/
		initsvg(name + "_reddit_r_mention", svg_canvas);
		outer_circles.push(name + "_reddit_r_mention");

		/*Hacker News*/
		var h_mention;
		var h_upticks;
		this.hacknews = function(h_mention, h_upticks) {
			this.h_mention = h_mention;
			total_nodes.push(h_mention);
			this.h_upticks = h_upticks;
			total_nodes.push(h_upticks);
		}

		/*Hacker News Circles*/
		initsvg(name + "_hacknews_r_mention", svg_canvas);
		outer_circles.push(name + "_hacknews_r_mention")
		initsvg(name + "_hacknews_r_upticks", svg_canvas);
		outer_circles.push(name + "_hacknews_r_upticks")

		/*Product Hunt*/
		var p_mention;
		var p_upticks;
		this.producthunt = function(p_mention, p_upticks) {
			this.p_mention = p_mention;
			total_nodes.push(p_mention);
			this.p_upticks = p_upticks;
			total_nodes.push(p_upticks);
		}

		/*Product Hunt Circles*/
		initsvg(name + "_producthunt_p_mention", svg_canvas);
		outer_circles.push(name + "_producthunt_p_mention")
		initsvg(name + "_producthunt_p_upticks", svg_canvas);
		outer_circles.push(name + "_producthunt_p_upticks")

		/*Tech Crunch*/
		var num_shares;
		var agg_articles;
		this.techcrunch = function(num_shares, agg_articles) {
			this.num_shares = num_shares;
			total_nodes.push(num_shares);
			this.agg_articles = agg_articles;
			total_nodes.push(agg_articles);
		}

		/*TechCrunch Circles*/
		initsvg(name + "_techcrunch_num_shares", svg_canvas);
		outer_circles.push(name + "_techcrunch_num_shares");
		initsvg(name + "_techcrunch_agg_articles", svg_canvas);
		outer_circles.push(name + "_techcrunch_agg_articles");
	}

	/*Initializes Data Structures with Start up Information*/
	this.initdata = function(svg_canvas){

		for (var i = 0; i <= companies.length - 1; i++) {
			var com = new company(companies[i], svg_canvas);
			switch(com.name) {

				/*Scanadu*/
				case companies[0]:
				com.kickstarter("Goal: $100,000", "Pledged: $1,661,988", "Backers: 8509", "Dates: 5/22/13-7/20/13");
				com.twitter("Tweets By Year: 40('11), 251('12), 1411('13)", "Total Tweets: 2463");
				com.crunchbase("Funding by Date: $2M(11/8/13), $1.6M(6/9/13), $10.5M(11/12/13)");
				com.reddit("Mentions: 39");
				com.hacknews("Mentions: 13", "Upticks: 48");
				com.producthunt("Mentions: 0", "Upticks: 0");
				com.techcrunch("Number of Shares: 70", "Aggregate of articles with mentions: 7");
				break;

				/*LIFX*/
				case companies[1]:
				com.kickstarter("Goal: $100,000", "Pledged: $1,314,542", "Backers: 9236", "Dates: 9/15/14-11/14/14");
				com.twitter("Tweets By Year: 77('12), 580('13), 2221('14)", "Total Tweets: 2874");
				com.crunchbase("Funding by Date: $20K(9/1/12), $1.3M(12/12/13), $12M(6/23/14)");
				com.reddit("Mentions: 124");
				com.hacknews("Mentions: 24", "Upticks: 487");
				com.producthunt("Mentions: 1", "Upticks: 6");
				com.techcrunch("Number of Shares: 2", "Aggregate of articles with mentions: 5");
				break;

				/*Misfit*/
				case companies[2]:
				com.kickstarter("Goal: $100,000", "Pledged: $846,675", "Backers: 7957", "Dates: 11/12/12-1/16/13");
				com.twitter("Tweets By Year: 1('11), 346('12), 973('13), 1108('14)", "Total Tweets: 2338");
				com.crunchbase("Funding by Date: $200K(11/23/11), $7.6M(4/25/12), $847K(1/16/13), $15.2M(12/4/13), $40M(12/2/14)");
				com.reddit("Mentions: 74");
				com.hacknews("Mentions: 78", "Upticks: 421");
				com.producthunt("Mentions: 1", "Upticks: 17");
				com.techcrunch("Number of Shares: 1982", "Aggregate of articles with mentions: 63");
				break;

				/*Formlabs*/
				case companies[3]:
				com.kickstarter("Goal: $100,000", "Pledged: $2,945,885", "Backers: 2608", "Dates: 9/26/12-10/26/12");
				com.twitter("Tweets By Year: 52('12), 409('13), 623('14)", "Total Tweets: 1047");
				com.crunchbase("Funding by Date: $500K(11/23/11), $2.8M(10/15/12), $19M(10/24/13)");
				com.reddit("Mentions: 102");
				com.hacknews("Mentions: 38", "Upticks: 366");
				com.producthunt("Mentions: 0", "Upticks: 0");
				com.techcrunch("Number of Shares: 4935", "Aggregate of articles with mentions: 40");
				break;

				/*PonoMusic*/
				case companies[4]:
				com.kickstarter("Goal: $800,000", "Pledged: $6,225,354", "Backers: 18220", "Dates: 3/11/14-4/15/14");
				com.twitter("Tweets By Year: 7('12), 20('13), 293('14)", "Total Tweets: 320");
				com.crunchbase("Funding by Date: $6.2M(4/15/14), $6M(8/20/14)");
				com.reddit("Mentions: 70");
				com.hacknews("Mentions: 9", "Upticks: 25");
				com.producthunt("Mentions: 1", "Upticks: 13");
				com.techcrunch("Number of Shares: 1545", "Aggregate of articles with mentions: 17");
				break;

				/*Occulus Rift*/
				case companies[5]:
				com.kickstarter("Goal: $250,000", "Pledged: $2,437,429", "Backers: 9522", "Dates: 8/1/12-9/1/13");
				com.twitter("Tweets By Year: 234('12), 1200('13), 476('14)", "Total Tweets: 1910");
				com.crunchbase("Funding by Date: $2.4M(8/1/12), $16M(6/17/13), $75M(12/12/13)");
				com.reddit("Mentions: 398");
				com.hacknews("Mentions: 730", "Upticks: 12872");
				com.producthunt("Mentions: 9", "Upticks: 267");
				com.techcrunch("Number of Shares: 42221", "Aggregate of articles with mentions: 213");
				break;

				/*Tile*/
				case companies[6]:
				com.kickstarter("Goal: $20,000", "Pledged: $2,600,000", "Backers: 49586", "Dates: 6/4/13-7/7/13");
				com.twitter("Tweets By Year: 3200+('14)", "Total Tweets: 4358");
				com.crunchbase("Funding by Date: $200K(2/20/13), $2.6M(7/24/13), $3.5M(10/1/14), $9.5M(10/1/14)");
				com.reddit("Mentions: 20");
				com.hacknews("Mentions: 14", "Upticks: 62");
				com.producthunt("Mentions: 1", "Upticks: 27");
				com.techcrunch("Number of Shares: 4657", "Aggregate of articles with mentions: 8");
				break;

				/*Ministry of Supply*/
				case companies[7]:
				com.kickstarter("Goal: $30,000", "Pledged: $429,276", "Backers: 2798", "Dates: 6/8/12-7/11/12");
				com.twitter("Tweets By Year: 628('12), 1209('13). 949('14)", "Total Tweets: 2750");
				com.crunchbase("Funding by Date: $50K(10/23/12), $350K(3/11/13), $1.1M(9/23/13), $3.8M(1/28/14)");
				com.reddit("Mentions: 13");
				com.hacknews("Mentions: 5", "Upticks: 20");
				com.producthunt("Mentions: 1", "Upticks: 138");
				com.techcrunch("Number of Shares: 2", "Aggregate of articles with mentions: 2");
				break;

				/*Ouya*/
				case companies[8]:
				com.kickstarter("Goal: $950,000", "Pledged: $8,587,035", "Backers: 63331", "Dates: 7/10/12-8/9/12");
				com.twitter("Tweets By Year: 1518('13), 1735('14)", "Total Tweets: 5510");
				com.crunchbase("Funding by Date: $8.6M(9/9/12), $15M(5/10/13)");
				com.reddit("Mentions: 8223");
				com.hacknews("Mentions: 213", "Upticks: 1814");
				com.producthunt("Mentions: 0", "Upticks: 0");
				com.techcrunch("Number of Shares: 6228", "Aggregate of articles with mentions: 122");
				break;

				/*Kano*/
				case companies[9]:
				com.kickstarter("Goal: $100,000", "Pledged: $1,522,160", "Backers: 13387", "Dates: 11/19/13-12/19/13");
				com.twitter("Tweets By Year: 3200+('14)", "Total Tweets: 7587");
				com.crunchbase("Funding by Date: $1.5M(12/19/13)");
				com.reddit("Mentions: 41");
				com.hacknews("Mentions: 18", "Upticks: 144");
				com.producthunt("Mentions: 1", "Upticks: 117");
				com.techcrunch("Number of Shares: 4211", "Aggregate of articles with mentions: 11");
				break;

				/*Adapteva*/
				case companies[10]:
				com.kickstarter("Goal: $750,000", "Pledged: $898,921", "Backers: 4965", "Dates: 9/27/12-10/27/12");
				com.twitter("Tweets By Year: 205('11), 702('12), 799('13), 1280('14)", "Total Tweets: 2930");
				com.crunchbase("Funding by Date: $1.5M(10/27/09), $854K(6/7/12), $3.6M(1/16/14)");
				com.reddit("Mentions: 45");
				com.hacknews("Mentions: 31", "Upticks: 842");
				com.producthunt("Mentions: 0", "Upticks: 0");
				com.techcrunch("Number of Shares: 0", "Aggregate of articles with mentions: 1");
				break;

				/*Smart Things*/
				case companies[11]:
				com.kickstarter("Goal: $250,000", "Pledged: $1,209,423", "Backers: 5694", "Dates: 8/23/12-9/22/12");
				com.twitter("Tweets By Year: 231('12), 532('13), 1312('14)", "Total Tweets: 2020");
				com.crunchbase("Funding by Date: $3M(12/4/12), $12.5M(11/12/13)");
				com.reddit("Mentions: 200");
				com.hacknews("Mentions: 28", "Upticks: 163");
				com.producthunt("Mentions: 0", "Upticks: 0");
				com.techcrunch("Number of Shares: 1734", "Aggregate of articles with mentions: 58");
				break;
			}
			Companies.push(com);
		};
	}

	/*Displays properties*/
	function display(svg_canvas) {
		var rect = document.getElementById('center').getBoundingClientRect();

		/*clear canvas*/
		while (svg_canvas.firstChild) {
			svg_canvas.removeChild(svg_canvas.firstChild);
		}
		while(outer_x.length > 0) {
			outer_x.pop();
		}
		while(outer_y.length > 0) {
			outer_y.pop();
		}
		/*Create circles*/
		for(var g = 0; g <= outer_circles.length - 1; g++) {
			initsvg(outer_circles[g], svg_canvas)
		}
		var angle_mult = 0;
		var angle_index = 1;
		for(var a = 0; a <= num_properties.length - 1; a++) {
			for (var b = 0; b <= num_properties[a] - 1; b++) {
				for (var c = 0; c <= outer_circles.length/total_properties - 1; c++) {
					var cur_attribute = document.getElementById(outer_circles[angle_mult + (c*total_properties)]).id;
					var cur_company = cur_attribute.substring(0, cur_attribute.indexOf("_"));
					var property_id = cur_attribute.substring(1+cur_attribute.indexOf("_"))
					var cur_property = property_id.substring(0, property_id.indexOf("_"));
					property_id = total_nodes[angle_mult + (c*total_properties)]; //This is the property to be displayed
					var angle = 360/outer_circles.length

					var property_display = document.createElementNS("http://www.w3.org/2000/svg", "text");
					var text_nodes = document.createTextNode(property_id);

					property_display.appendChild(text_nodes);
					property_display.setAttribute("id", cur_attribute + "_text")

					/*Color*/
					switch (cur_property) {
						case "kickstarter":
						document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("style", "fill: #0a9abf");
						property_display.setAttribute('style', "fill: #0a9abf");
						break;
						case "twitter":
						document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("style", "fill: #0abf5b");
						property_display.setAttribute('style', "fill: #0abf5b");
						break;
						case "crunchbase":
						document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("style", "fill: #41bf0a");
						property_display.setAttribute('style', "fill: #41bf0a");
						break;
						case "reddit":
						document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("style", "fill: #bfb60a");
						property_display.setAttribute('style', "fill: #bfb60a");
						break;
						case "hacknews":
						document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("style", "fill: #bf2e0a");
						property_display.setAttribute('style', "fill: #bf2e0a");
						break;
						case "producthunt":
						document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("style", "fill: #bf0a6e");
						property_display.setAttribute('style', "fill: #bf0a6e");
						break;
						case "techcrunch":
						document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("style", "fill: #880abf");
						property_display.setAttribute('style', "fill: #880abf");
						break;
					}

					var index = cur_inner_circles.indexOf(cur_attribute);

					/*inner circle coordinates*/
					var in_x = rect.right + ($(window).height()*0.12)*Math.cos(((2*Math.PI)/outer_circles.length)*(angle_mult+angle_index));
					var in_y = rect.top + ($(window).height()*0.12)*Math.sin(((2*Math.PI)/outer_circles.length)*(angle_mult+angle_index));
					/*outer circle coordinates*/
					var out_x = rect.right + ($(window).height()*0.4)*Math.cos(((2*Math.PI)/outer_circles.length)*(angle_mult+angle_index));
					var out_y = rect.top + ($(window).height()*0.4)*Math.sin(((2*Math.PI)/outer_circles.length)*(angle_mult+angle_index));
					outer_x.push(out_x);
					outer_y.push(out_y);

					//The nodes are in the outer circle
					if( window.getComputedStyle(document.getElementById(cur_company), null).getPropertyValue("opacity") == "0.5" && window.getComputedStyle(document.getElementById(cur_property), null).getPropertyValue("opacity") == "0.5") {
						if( index == -1) { //not in the inner circle

							property_display.setAttribute("visibility", "hidden");
							document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("r", 3);
							document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("fill-opacity", "0.3");
							document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("stroke-opacity", "0.3");

							document.getElementById(cur_attribute).setAttribute("cx", out_x);
							document.getElementById(cur_attribute).setAttribute("cy", out_y);

						} else { //in inner circles
							animate_circle(cur_attribute, out_x, out_y, in_x, in_y, property_display, 0);
						}
						/*The nodes are in the inner circle*/
					} else {
							inner_circles.push(cur_attribute);
					}

					document.getElementById(outer_circles[angle_mult + (c*total_properties)]).setAttribute("visibility", "visible");

					svg_canvas.appendChild(property_display);

					angle_index++;
				}
				angle_index--;
				angle_mult++;
			}
		}

		/*inner circle display*/
		while(cur_inner_circles.length > 0) {
			cur_inner_circles.pop();
		}
		angle = 360/inner_circles.length;
					
		for (var u = 0; u <= inner_circles.length - 1; u++) {
			cur_inner_circles[u] = inner_circles[u];
		}
		while(inner_circles.length > 0) {
			inner_circles.pop();
		}


		for (var i = 0 ; i <= cur_inner_circles.length - 1; i++) {
			var in_x = rect.right + ($(window).height()*0.12)*Math.cos(((2*Math.PI)/cur_inner_circles.length)*i);
			var in_y = rect.top + ($(window).height()*0.12)*Math.sin(((2*Math.PI)/cur_inner_circles.length)*i);

			property_display = document.getElementById(cur_inner_circles[i] + "_text")
			property_display.setAttribute("x",  in_x);
			property_display.setAttribute("y",  in_y);
			rotation = angle*i;
			if (rotation < 250 && rotation > 90) {
				property_display.setAttribute('text-anchor', "end");
				property_display.setAttribute('transform', 'rotate(' + (rotation-180) + ',' + in_x + ',' + in_y + ')' + 'translate(-15, 5)');
			} else {
				property_display.setAttribute('transform', 'rotate(' + rotation + ',' + in_x + ',' + in_y + ')' + 'translate(15, 5)');
			}
			var out_x;
			var out_y;

			out_x = outer_x[outer_circles.indexOf(cur_inner_circles[i])];
			out_y = outer_y[outer_circles.indexOf(cur_inner_circles[i])];
			animate_circle(cur_inner_circles[i], in_x, in_y, out_x, out_y, property_display, 1);
		};
	}
}



