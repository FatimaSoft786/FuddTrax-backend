const model = require("../model/Menu");

const AddMenu = async(req,res)=>{
    try {
            let check = await model.findOne({day_name: req.body.day_name});
            check = await model.create({
                week: req.body.week,
                day_name: req.body.day_name,
                price: req.body.price,
                menu_1: req.body.menu1,
                menu_2: req.body.menu2,
                menu_3: req.body.menu3,
                menu_4: req.body.menu4,
                extra: req.body.extra,
                soda: req.body.soda,
                served: req.body.served                
            });
            res.status(200).json({error: false, data: check});
    } catch (error) {
        res.status(500).json({error: true, data: error.message});
    }
};

const FetchMenu = async(req,res)=>{
    try {
        console.log(req.body);
            let menu = await model.find({week: req.body.week});
            console.log(menu);
            res.status(200).json({error: false, data: menu}) 
    } catch (error) {
        res.status(500).json({error: true, data: error.message});
    }
};

const FetchMenuDetails = async(req,res)=>{
  try {
            let menu = await model.findOne({day_name: req.body.day_name});
            res.status(200).json({error: false, data: menu}) 
    } catch (error) {
        res.status(500).json({error: true, data: error.message});
    }
}


 const updateMenu = async (req, res) => {
    const { id } = req.params;
    try {
      const menu = await model.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({error: false, menu: menu});
    } catch (err) {
      res.status(400).json({error: true, menu: err.message});
    }
  };

  const deleteMenu = async (req, res) => {
    
    try {
    const menu = await model.findByIdAndDelete(req.body.id);
    res.status(200).json({error: false, menu: "Menu deleted"});
  } catch (err) {
    res.status(400).json({error: true, menu: err.message});
  }
};

module.exports = {
    AddMenu,
    FetchMenu,
    deleteMenu,
    updateMenu,
    FetchMenuDetails
}