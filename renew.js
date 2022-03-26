var fs = require('fs');
const { finished } = require('stream');



for(var a=1;a<=200;a++){

    var fileName = String(a);

    var names = `OGSAN #${a}`;
    var description = 'The OGSAN Club member';
    var image = 'https://gateway.pinata.cloud/ipfs/Qmf2CyNxjGZCJZ8K6a4FF9V5Z2D2TyxgqGSLfNBHHnTujh';


    var Attributes = [
        {
            trait_type:"Level",
            value:1
        }
    ];


    var obj = {
        name:names,
        description:description,
        image:image
    };





    fs.writeFile('./metadata/'+fileName,  JSON.stringify(obj), function (err) {
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });

    //console.log(JSON.stringify(obj));

}
