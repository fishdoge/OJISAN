async function login_In_button(){
    await ethereum.request({ method: 'eth_requestAccounts' });
    window.location.reload();
}

async function setCollent(){
    let coinbase = await web3.eth.getCoinbase();

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

}


setCollent();
