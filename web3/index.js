async function login_In_button(){
    await ethereum.request({ method: 'eth_requestAccounts' });
    window.location.reload();
}

async function setCollent(){
    let account = await ethereum.request({ method: 'eth_requestAccounts' });
   
    coinbase = account[0];
   
    let ETHbalance = await web3.eth.getBalance(coinbase);
    ETHbalance = web3.utils.fromWei(ETHbalance, 'ether');

    let add = coinbase.substring(0,12)
    add = add +"....";

    console.log(add);
    $("#tes").text(add);

    $("#Addr").text(coinbase);
    
}


setCollent();
