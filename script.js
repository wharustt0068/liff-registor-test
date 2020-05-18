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
  let myObj = {
      "userId_line": "U1bc5e8b9661c28a9b92eccacc2f93817",
      "bank": "11223344",
      "total": "1000"     
      }

  console.log(profile.userId);
  if(profile.userId == myObj.userId_line){
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