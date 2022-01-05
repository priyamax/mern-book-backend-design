const book = require('../mongoosemodel/bookmodel');


exports.get = async (req,res,next) => {
    try{
        var response = await book.find();
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.add = async (req,res,next) => {
    
    const product = new book({
        bookname : req.body.bookname,
        authorname : req.body.authorname,
        published : req.body.published,
        link : req.body.link
        })
        try{
            var response = await product.save();
            res.send(response);
        } catch (err) {
            res.status(500).send(err)
        }
    }
    exports.delete = async (req,res,next) => {

        try{
            const b = req.body.bookname;
            var response = await book.findOneAndDelete({ bookname:b});
            res.send(response)
        } catch(err) {
            res.status(500).send(err)
        }
    }
