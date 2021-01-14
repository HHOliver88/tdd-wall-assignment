const Controller        = require('./controller');

class WallController extends Controller {

    constructor(req, res) {
        super(req, res);
    }
    
    index() {
		this.page_params.PAGE.title = "The Wall";
        this.page_params.PAGE.view = "index";

        this.res.render("layouts/wall.layout.ejs", this.page_params);
    }
}
module.exports = WallController;