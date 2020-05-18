function logOut() {
  liff.logout()
  window.location.reload()
}

async function getFriendship() {
  const friend = await liff.getFriendship()
  if(!friend.friendFlag){
    if(confirm("คุณยังไม่ได้เพิ่ม Message API รบกวนเพิ่ม Message API")){
      window.location = "https://line.me/R/ti/p/@754yztxz"
    }
  }
}

async function getUserProfile() {
  const profile = await liff.getProfile()
  $.getJSON('https://db-tester-waawwaw.000webhostapp.com/', function(data) {
});
  console.log(data.status)
  console.log(profile.userId);
  if(data.status == "member"){
      window.location = "https://liff.line.me/1654201326-VyywNaoe"
  }
  else{
      window.location = "https://liff.line.me/1654201326-jJvpYEX2"
  }
}


async function main() {
  await liff.init({ liffId: "1654201326-312kXbD4" })
 // document.getElementById("isLoggedIn").append(liff.isLoggedIn())
  if (liff.isLoggedIn()){
    getUserProfile()
    getFriendship()
  } else{
    liff.login()
 }
  // createUniversalLink()
}
main()