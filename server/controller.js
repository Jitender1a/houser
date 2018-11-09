module.exports={
    read:(req,res)=>{
        let dbInstance=req.app.get('db');
        dbInstance.get_houses().then(response=>{
            res.status(200).send(response)
        }).catch (err=>{
            console.log('it broke',err)
            res.status(500).send(err)
        });
    },    
    
    create:(req,res)=>{
        let dbInstance=req.app.get('db');
        const {name, address, city, state, zip, img, mortgage,rent}=req.body;

        dbInstance.add_houses([name, address, city, state, zip, img, mortgage,rent]).then(response=>{
            res.status(200).send(response)
        }).catch(err=>{
            res.status(500).send(err)
        });
    },

    delete:(req,res,next)=>{
        let dbInstance=req.app.get('db')
        let {id}=req.params
        dbInstance.delete_houses({id}).then (response=>{
            res.status(200).send(response)
        })
    }

}