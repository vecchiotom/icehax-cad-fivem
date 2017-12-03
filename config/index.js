const config = {}

config.MongoStore = {
  secret: "yoursecret",
  url: "mongodb://icehax:tommaso.celano01@ds159344.mlab.com:59344/flecad"
}
config.text = {
	sheriff: "here goes the name of your sheriff department",
	pd: "here goes the name of your police department",
	ems: "here goes the name of your FIRE RESCUE department",
	highway: "here goes the name of your highway patrol department",
	sheriffbackground: "here goes a URL TO THE BACKGROUND IMAGE of your sheriff department",
	pdbackground: "here goes a URL TO THE BACKGROUND IMAGE of your police department",
	emsbackground: "here goes a URL TO THE BACKGROUND IMAGE of your fire rescue department",
	highwaybackground: "here goes a URL TO THE BACKGROUND IMAGE of your highway patrol department",
	mainbackgroundone: "http://cdn.escapistmagazine.com/media/global/images/library/deriv/632/632377.jpg",
	mainbackgroundtwo: "http://www.mytrickrc.com/wp-content/uploads/2013/11/Mustang_L34_dark.jpg",
	mainbackgroundthree: "https://img.gta5-mods.com/q75/images/mastercom-b-siren/02f0b4-AFPGetty-167087672.jpg",
	maintextone: "Text to be displayed on the first image of the slideshow on the home page",
	maintexttwo: "Text to be displayed on the second image of the slideshow on the home page",
	maintextthree: "Text to be displayed on the third image of the slideshow on the home page",
	sherifflogo: "URL to sheriff logo",
	pdlogo: "URL to police dept. logo",
	emslogo: "URL to fire rescue logo",
	highwaylogo: "URL to highway patrol logo"


}

config.admin = {
	username: "admin username",
	password: "admin password"
}

module.exports = config
