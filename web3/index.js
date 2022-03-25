async function login_In_button(){
    await ethereum.request({ method: 'eth_requestAccounts' });
    window.location.reload();
}

let whiteList;

async function setCollent(){
    coinbase = await web3.eth.getCoinbase();

    //coinbase = account[0];

    let ETHbalance = await web3.eth.getBalance(coinbase);
    ETHbalance = web3.utils.fromWei(ETHbalance, 'ether');

    let add = coinbase.substring(0,12)

    let network = await web3.eth.net.getNetworkType();

    if(network != 'rinkeby'){
        console.log("please change to main net");

        alert("請切換至 rinkeby 測試網");
    }


    console.log(add);
    $("#tes").text(add);

    $("#Addr").text(add);


    whiteList = await OGSAN.methods.WhiteLists(coinbase).call();


    if(whiteList != true){

    }else{
        $("#whits").append(`<button style="font-size: 20px;">白名單用戶</button>`);
    }

}



const OGSAN_Contract= "0x1ed9C88fD0d7a45FB24Ed53CF8913efb106cD318";

const OGSAN = new web3.eth.Contract(OGSAB_ABI,OGSAN_Contract);







setCollent();

async function mintNFT(){


    if(whiteList != true){
        await OGSAN.methods.mint().send({from:coinbase,value:web3.utils.toWei('0.28','ether')});
    }else{
        await OGSAN.methods.mint().send({from:coinbase,value:web3.utils.toWei('0.26','ether')});
    }
}
