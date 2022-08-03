const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const MerchantQc = require('../model/merchant_model');

//add User start
exports.add_user = (req, res) => {
    let { merchant_qc,email_id,fullname,mobile,mid_alias,password,country,address,state,city,zip,business,website,bank_name,account_no,swift } = req.body;
    // let reqparameters = ["merchant_qc","email_id","fullname","mobile","mid_alias","password","country","address","state","city","zip","business","website","bank_name","account_no","swift"];
    if(merchant_qc == ''){
        merchant_qc = 0
    }
    req.body.p_in_encrypt = password
    if (Object.keys(req.body).length === 0) {
        return res.status(200).send({
             message: 'merchant information is required',
             status: false
         })
     }
     
     if(email_id == ''){
        return res.status(200).send({
            message: 'email is required',
            status: false
        })
    }
    if(fullname == ''){
        return res.status(200).send({
            message: 'name is required',
            status: false
        })
    }
    if(mobile == ''){
        return res.status(200).send({
            message: 'mobile is required',
            status: false
        })
    }
    if(password == ''){
        return res.status(200).send({
            message: 'password is required',
            status: false
        })
    }
    if(merchant_qc == 0){
        if(mid_alias == '' || country == '' || address == '' || state == '' || city == '' || zip == '' || business == ''  || website == '' || bank_name == '' || account_no == '' || swift == ''){
            return res.status(200).send({
                message: 'Please Fill Required Field',
                status: false
            })
        }
    }

    MerchantQc.find({email_id:email_id})
    .exec()
        .then(duplicate=>{
            console.log(duplicate)
            if(duplicate.length){
                return res.status(200).json({
                    message: `email is already exist`,
                    status: false
                })
            }else{
                const create = new MerchantQc({...req.body});
                create
                    .save()
                    .then(results => {
                        console.log(results);
                        if (results) {
                            res.setHeader('Content-Type', 'application/json');
                           return res.status(200).send({
                                data: results,
                                message: 'insert successfully',
                                insertId: create._id,
                                status: true,
                            })
                        }
                    })
                    .catch(error => {
                        res.setHeader('Content-Type', 'application/json');
                        return res.status(500).send({
                            message: error,
                            status: false
                        })
                    })
            }
            
        })
        .catch(error => {
            console.log('erroro massage')
            res.setHeader('Content-Type', 'application/json');
            
            res.status(500).json({
                message: error,
                status: false
            })
            return res.end()
        })
    
};
//add User end
